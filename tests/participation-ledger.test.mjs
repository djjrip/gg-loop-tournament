import test from "node:test";
import assert from "node:assert/strict";
import { evaluateVerifiedMatchResult, POINT_RULES } from "../src/lib/participation-ledger.mjs";

const base = { eventId: "pilot-001", matchId: "match-007", playerId: "player-pseudo-123", outcome: "win" };
const authorizedOrganizer = { authenticated: true, role: "organizer", verifierId: "organizer-001", method: "organizer_witness" };

test("awards participation points and verified-win bonus", () => {
  const result = evaluateVerifiedMatchResult(base, [], authorizedOrganizer);
  assert.equal(result.awarded, true);
  assert.equal(result.entry.points, POINT_RULES.matchParticipation + POINT_RULES.verifiedWinBonus);
  assert.equal(result.entry.status, "verified");
  assert.equal(result.entry.verifiedBy, "organizer-001");
});
test("losses and draws get participation points only", () => {
  assert.equal(evaluateVerifiedMatchResult({ ...base, outcome: "loss" }, [], authorizedOrganizer).entry.points, 10);
  assert.equal(evaluateVerifiedMatchResult({ ...base, outcome: "draw" }, [], authorizedOrganizer).entry.points, 10);
});
test("refuses a result without trusted server-side organizer authorization", () => {
  assert.deepEqual(evaluateVerifiedMatchResult(base), { awarded: false, reason: "organizer_authorization_required" });
});
test("does not trust unsupported client or process-name evidence", () => {
  assert.deepEqual(evaluateVerifiedMatchResult(base, [], { ...authorizedOrganizer, method: "client_process_name" }), { awarded: false, reason: "unsupported_verification_method" });
});
test("prevents an organizer from approving their own player result", () => {
  assert.deepEqual(evaluateVerifiedMatchResult(base, [], { ...authorizedOrganizer, verifierId: base.playerId }), { awarded: false, reason: "self_approval_not_allowed" });
});
test("rejects a duplicate result for the same event, match, and player", () => {
  const first = evaluateVerifiedMatchResult(base, [], authorizedOrganizer);
  assert.deepEqual(evaluateVerifiedMatchResult(base, [first.entry], authorizedOrganizer), { awarded: false, reason: "duplicate_result" });
});
test("allows separate players to earn their own record for the same match", () => {
  const first = evaluateVerifiedMatchResult(base, [], authorizedOrganizer);
  const next = evaluateVerifiedMatchResult({ ...base, outcome: "loss", playerId: "player-pseudo-456" }, [first.entry], authorizedOrganizer);
  assert.equal(next.awarded, true);
});
test("rejects missing identifiers and invalid outcomes", () => {
  assert.throws(() => evaluateVerifiedMatchResult({ ...base, matchId: "" }, [], authorizedOrganizer), /matchId/);
  assert.throws(() => evaluateVerifiedMatchResult({ ...base, outcome: "maybe" }, [], authorizedOrganizer), /outcome/);
});
