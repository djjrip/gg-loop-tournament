# GG LOOP — Gaming for Groceries (Pilot Preview)

GG LOOP is developing a system that connects **verified gaming participation** with points and, only after funding is confirmed, real-world rewards such as grocery cards.

This repository is a working prototype—not a live, funded tournament platform. No venue agreement, event date, audience count, reward funding, or production anti-cheat capability is claimed here.

## Intended player loop
1. A player checks in with a chosen gamertag.
2. A match or activity is recorded.
3. An approved source verifies the result.
4. Points are awarded once for that result.
5. Any reward is offered only when a sponsor has committed the funds or goods.
6. The player redeems under published rules.

The first pilot is intentionally human-verified. Process names or file hashes do not prove that someone played fairly, and the current project does not detect cheats across arbitrary games.

## Current stack
- Next.js App Router and TypeScript for the web app.
- better-sqlite3 for local prototyping.
- Stripe SDK for signature-verified webhook parsing.
- A small JavaScript points-rule module and Node's built-in test runner.

Older planning text described PostgreSQL, Drizzle, Stripe Connect, a double-entry payout ledger, and a production anti-cheat system. Those capabilities are **not evidenced by the current source code** and should not be treated as implemented.

## Run locally
- npm install
- npm run dev
- npm run test:trust-ledger
- npm run build

The points-rule test is a unit test of business rules. It does not establish that the website has durable storage, secure organizer workflows, live game integrations, funded rewards, or production readiness.

## Current readiness limits
- The live bracket preview previously contained hardcoded example names and scores; these are demo fixtures, not real results. The pilot branch removes them.
- The production app currently stores SQLite data under /tmp/data. A serverless temporary filesystem is not reliable long-term participant storage. Public registration is therefore paused in the pilot branch until a durable database adapter is implemented and tested.
- The organizer portal must remain closed if ADMIN_PASSWORD is not configured.
- Stripe webhook requests must carry a valid Stripe signature. Missing signatures/secrets are rejected; storage errors must not be acknowledged as successfully recorded.
- No grocery reward is promised or redeemable today. Points have no cash value.
- Venue, event date, match rules, privacy notice, disputes, and reward funding need confirmation before opening a real event.

## Next technical milestone
Implement one complete testable loop: persistent registration → organizer-confirmed match result → duplicate-resistant points ledger → audit record. Keep rewards separate until the sponsor-funding and redemption path has been designed and tested.

See docs/GAMING_FOR_GROCERIES_MVP_SPEC.md and docs/PILOT_ACCEPTANCE_TESTS.md.