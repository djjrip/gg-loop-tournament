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

  let event: Stripe.Event;

  try {
    if (webhookSecret && sig) {
      const stripe = getStripe();
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } else {
      // In development or when payload is forwarded directly
      event = JSON.parse(rawBody) as Stripe.Event;
    }
  } catch (err: any) {
    console.error("[STRIPE_WEBHOOK_ERROR] Signature verification failed:", err.message);
    return NextResponse.json(
      { error: `Webhook error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log("[STRIPE_PAYMENT_SUCCESS]", session.id, session.amount_total, session.customer_details?.email);

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
    }
  }

  return NextResponse.json({ received: true });
}
