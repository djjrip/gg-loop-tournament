# Gaming for Groceries — Pilot Acceptance Tests

These are the minimum pass conditions before a first event can accept real players.

| Area | Pass condition | Current state |
|---|---|---|
| Event status | Public page distinguishes a proposed pilot from a confirmed event | PASS in branch; deployed state pending |
| Venue | Written confirmation, date, title/game, capacity, and contact | Not verified |
| Reward funding | Documented sponsor commitment and available funds or goods | Not verified; no prize pool promised |
| Registration persistence | Records survive cold starts and separate instances | FAIL in current architecture; public registration is paused until durable storage is implemented |
| Data minimization | No unnecessary legal-name or phone collection | PASS in branch: registration page collects nothing while closed |
| Organizer access | Portal inaccessible without configured organizer password | Fail-closed behavior added; session token no longer stores raw password; CI pending |
| Match evidence | Result has event, match, player, source, verifier, and timestamp | Domain-rule prototype added; application integration pending |
| Duplicate protection | Replaying a result never awards points twice | Unit-tested prototype; database constraint/integration pending |
| Disputes | Disputed result is held without payout | Not implemented |
| Redemption | Rewards available only from funded inventory/budget | Not implemented; no reward promise |
| Payment webhook | Missing/invalid signatures rejected; storage errors produce retryable failure | Unsigned requests rejected; hosted payment recording returns 503 until durable storage exists; integration test pending |
| Public claims | No fake attendance, fake bracket, unsupported anti-cheat, or unfunded prizes | Homepage and bracket rewritten; sponsor checkout removed; deployed check pending |
| Deployment | CI build passes and live routes match the tested commit | Pending pull request CI and post-merge live verification |

A green unit-test result for the points function does not mean the full platform is ready for a live tournament.

## Required branch tests

- `npm run test:trust-ledger`: unit tests for organizer verification rules and duplicate-result handling.
- `npm run build`: production build.
- Manual review: homepage, registration status, bracket status, sponsor page, organizer portal without a password, and unsigned payment webhook behavior.
- Deployment must remain unclaimed until the merged commit is checked on the live host.
