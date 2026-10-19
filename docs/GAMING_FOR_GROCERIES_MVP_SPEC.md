# Gaming for Groceries — Minimum Viable Pilot Specification

**Status:** Engineering specification / pilot prototype. Not a claim that a funded tournament or automatic anti-cheat system is live.

## The product in plain English
A player takes part in a game. GG LOOP records the event and result. A trustworthy source verifies that it happened. The player earns points once. If a sponsor has actually funded rewards, eligible points may later be redeemed under published rules.

**Loop:** Play → Record → Verify → Award points → Fund rewards → Redeem → Repeat.

Points are not cash, SNAP benefits, or a promise of a grocery card.

## First user and first activity
- **First operator:** A tournament organizer running a small local event.
- **First player:** A competitor using a chosen gamertag.
- **First activity:** A match at a physical venue where an organizer can witness the result.
- **First game:** Pick one title only after a venue confirms it can host the event. The existing prototype lists fighting-game titles, but no venue date or partnership is verified here.
- **First verification method:** An authorized organizer confirms the result. That is simpler and more honest than claiming the current Rust process tool proves every player is not cheating.

## What the existing code does—and does not do
The public tournament repository contains a Next.js application, registration pages, a bracket view, SQLite storage, and a Stripe webhook route.

1. The current bracket page includes hardcoded sample names and scores. These are not evidence of a live tournament or real competitors.
2. Prize values and sponsor claims were displayed without current proof of committed funding or confirmed attendance.
3. The hosted app configures SQLite under /tmp/data in production. That storage can disappear or differ between serverless instances, so it is not reliable registration storage.
4. The organizer page previously allowed access when the organizer password was not configured. The pilot branch closes that path.
5. The webhook previously accepted unsigned JSON when a signature/secret was absent. The pilot branch fails closed instead.
6. The Rust repository mainly matches process names and provides file-hash/policy prototypes. A process name or file hash alone does not prove a player played legitimately or that a match was cheat-free.
7. There is no demonstrated integrated live-game API adapter, durable points ledger, funded reward ledger, or verified redemption workflow yet.

## First technical slice created in this branch
src/lib/participation-ledger.mjs contains deterministic points rules for organizer-confirmed results. Tests check:
- Participation points and a small verified-win bonus.
- No points for an unverified result.
- Rejection of unsupported verification methods.
- Duplicate-result prevention for one event, match, and player.
- Separate player records for the same match.
- Input validation.

Run with: npm run test:trust-ledger

The provisional rules are 10 points for verified participation and a 5-point win bonus. Points have no cash value and are not redeemable. The module remains a domain-rule prototype until wired into a secured server-side workflow and durable storage.

## System design
### 1. Identity
Use an internal player ID and chosen gamertag. Collect only what check-in and the chosen contact method require. Do not require a legal name or phone number by default.

### 2. Activity record
Each result should record event ID, match ID, player ID, game/title, outcome, evidence reference, submitter, verification status, verifier, and timestamps. A future adapter may use an official game API only where that specific game supports it and access is authorized.

### 3. Verification
- **Pilot 0:** Authorized organizer confirms an observed result.
- **Later:** Add official game data or signed result evidence for specific supported titles.
- **Not claimed:** Universal anti-cheat, proof that no cheat software exists, or automatic interpretation of arbitrary gameplay telemetry.

A future verifier must reject missing, stale, duplicated, or inconsistent evidence. Disputes should be held for review, not auto-rewarded.

### 4. Points ledger
Store append-only entries with a unique key for (event_id, match_id, player_id, award_type). A repeated submission must return the existing entry or a duplicate result—not award points again. Organizer authorization must be established by the server; it must never be trusted from a browser-supplied boolean.

### 5. Reward funding and redemption
Keep points separate from money. Track sponsor commitments and actual receipt of funds or goods separately. Do not advertise a reward until funding and fulfillment rules are confirmed. Do not accept prize contributions or paid entry fees until payment, refund, event cancellation, tax, and fulfillment handling are designed and tested.

## Required before a public pilot
- Configure durable database storage and test it across cold starts and multiple server instances.
- Apply database constraints for duplicate-result prevention.
- Secure organizer login and keep an audit log.
- Publish event terms, points rules, privacy notice, dispute rules, and cancellation/refund rules as appropriate.
- Confirm venue, date, game, capacity, and operator.
- Confirm reward funding before promising a payout.
- Add integration tests for replayed submissions and database failures.
- Verify that the deployed application, not just local code, preserves records.

Until durable storage and event details are in place, public registration remains paused in this branch.

## Measures of success
Test whether players sign up, participate, submit verifiable results, return, and value the system enough to repeat. Also establish that every advertised reward is funded. Do not report users, partners, events, payouts, or revenue without evidence.