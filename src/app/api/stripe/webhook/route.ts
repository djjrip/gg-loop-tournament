import Stripe from "stripe";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export const runtime = "nodejs";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return new Stripe(key);
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    endpoint: "/api/stripe/webhook",
    service: "GG Loop Stripe Webhook Gateway",
    time: new Date().toISOString()
  });
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const rawBody = await req.text();

  // Fail closed: never accept unsigned JSON as a payment notification.
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook verification is not configured" },
      { status: 503 }
    );
  }
  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err: any) {
    console.error("[STRIPE_WEBHOOK_ERROR] Signature verification failed:", err.message);
    return NextResponse.json(
      { error: `Webhook error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    // Do not write a payment-success record into the hosted /tmp SQLite database.
    // Vercel serverless temporary storage is not durable across instances or restarts.
    // Keep this endpoint retryable until a durable database adapter is implemented.
    if (process.env.VERCEL === "1" || process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Payment recording is paused until durable storage is configured" },
        { status: 503 }
      );
    }

    console.info("[STRIPE_EVENT_VERIFIED]", event.id, session.id, session.amount_total);

    try {
      const stmt = db.prepare(`
        INSERT OR IGNORE INTO payments (stripe_session_id, customer_email, customer_name, amount_total, currency, status)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      stmt.run(
        session.id,
        session.customer_details?.email || session.customer_email || "unknown",
        session.customer_details?.name || "Customer",
        session.amount_total || 0,
        session.currency || "usd",
        session.payment_status || "paid"
      );
    } catch (dbErr: any) {
      console.error("[STRIPE_DB_ERROR]", dbErr.message);
      // Return a retryable failure instead of acknowledging a payment event
      // that was not durably recorded.
      return NextResponse.json(
        { error: "Payment event could not be recorded; retry required" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
