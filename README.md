# GG Loop Tournament OS (`gg-loop-tournament`)

**Production Competitive Gaming, B2B Studio Telemetry Ingest, & Cryptographic Payout Settlement Engine**

* **Live Production Platform:** [https://gg-loop-tournament.vercel.app](https://gg-loop-tournament.vercel.app)
* **Companion Rust Telemetry SDK:** [`djjrip/anti-cheat-sdk`](https://github.com/djjrip/anti-cheat-sdk)
* **Architect:** [Jayson Quindao](https://djjrip.github.io) ([1-Page Resume PDF](https://djjrip.github.io/resume.pdf))

---

## ⚡ Architecture Overview

GG Loop Tournament OS is a full-stack competitive esports and B2B anti-cheat telemetry platform built with **Next.js (App Router), TypeScript, PostgreSQL (Neon Serverless), Drizzle ORM, and Stripe Connect**.

```mermaid
flowchart LR
    subgraph ClientEdge["Game Client / Desktop Edge"]
        SDK["Rust anti-cheat-sdk\n(Win32 K32GetModuleFileNameExW + SHA-256)"]
    end
    subgraph IngestAPI["Next.js Edge & API Layer"]
        ING["POST /api/v1/ingest\n(B2B Studio Telemetry Batch API)"]
        FLG["GET /api/v1/flags\n(Anomaly & Macro Triage Feed)"]
        WHK["POST /api/webhooks/stripe\n(Idempotent HMAC Ledger Guard)"]
    end
    subgraph Storage["PostgreSQL (Neon Serverless)"]
        UNN["Single-Roundtrip unnest()\nBulk Telemetry Insert"]
        LDG["ACID Double-Entry\nEscrow & Payout Ledger"]
    end
    SDK -->|HMAC-SHA256 Signed Batch| ING
    ING -->|O(1) Roundtrip| UNN
    ING -->|CPS > 25 or Variance < 2ms| FLG
    WHK --> LDG
```

### Key Production Subsystems

1. **High-Throughput B2B Studio Telemetry Ingest (`app/api/v1/ingest/route.ts`):**
   * Accepts cryptographically signed telemetry batches from desktop game clients running [`anti-cheat-sdk`](https://github.com/djjrip/anti-cheat-sdk).
   * Executes single-roundtrip PostgreSQL `unnest()` bulk array inserts to eliminate N+1 query overhead during high-frequency match ticks.
   * Performs inline deterministic behavioral anomaly evaluation (flagging impossible click/input frequencies `>25 CPS`, robotic macro timing variance `<2.0ms`, and unauthorized ring-3 memory handles).

2. **Real-Time Incident & Flag Triage API (`app/api/v1/flags/route.ts`):**
   * Exposes studio-scoped security flags (`CRITICAL`, `HIGH`, `MEDIUM`) with SHA-256 process hashes, player session metadata, and automated tournament bracket hold triggers.

3. **Idempotent Financial Settlement & Escrow Ledger:**
   * Enforces strict Stripe webhook signature verification (`stripe-signature`), replay-attack suppression, and double-entry ACID ledger accounting for automated tournament prize distribution.

---

## 🛠️ Tech Stack

* **Runtime & Framework:** TypeScript, Next.js 14+ (App Router), Node.js
* **Database & ORM:** PostgreSQL, Drizzle ORM, Raw parameterized `unnest()` batch SQL
* **Desktop & Anti-Cheat Edge:** Rust (`anti-cheat-sdk`), Win32 Process Enumeration API, SHA-256 / HMAC-SHA256
* **Payments & Settlement:** Stripe Checkout, Stripe Webhooks, Double-Entry Ledger

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to inspect the tournament console or query `/api/v1/ingest` and `/api/v1/flags`.