# Gaming for Groceries — Pilot Acceptance Tests

These are the minimum pass conditions before a first event can accept real players.

| Area | Pass condition | Current state |
|---|---|---|
| Event status | Public page distinguishes a proposed pilot from a confirmed event | Being corrected in pilot branch |
| Venue | Written confirmation, date, title/game, capacity, and contact | Not verified |
| Reward funding | Documented sponsor commitment and available funds or goods | Not verified; no prize pool promised |
| Registration persistence | Records survive cold starts and separate instances | Failed by current /tmp SQLite design; durable database required |
| Data minimization | No unnecessary legal-name or phone collection | Register page changed in pilot branch to avoid collecting data while closed |
| Organizer access | Portal inaccessible without configured organizer password | Fix added in pilot branch |
| Match evidence | Result has event, match, player, source, verifier, and timestamp | Domain-rule prototype added; application integration pending |
| Duplicate protection | Replaying a result never awards points twice | Unit-tested prototype; database constraint/integration pending |
| Disputes | Disputed result is held without payout | Not implemented |
| Redemption | Rewards available only from funded inventory/budget | Not implemented; no reward promise |
| Payment webhook | Missing/invalid signatures rejected; storage errors produce retryable failure | Fix added in pilot branch; integration test pending |
| Public claims | No fake attendance, fake bracket, unsupported anti-cheat, or unfunded prizes | Being corrected in pilot branch |
| Deployment | CI build passes and live routes match the tested commit | Pending |

A green unit-test result for the points function does not mean the full platform is ready for a live tournament.