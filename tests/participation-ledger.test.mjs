import test from "node:test";
import assert from "node:assert/strict";
import { evaluateVerifiedMatchResult, POINT_RULES } from "../src/lib/participation-ledger.mjs";

const base = { eventId: "pilot-001", matchId: "match-007", playerId: "player-pseudo-123", outcome: "win", verificationMethod: "organizer_witness", verifiedByOrganizer: true };

test("awards participation points and verified-win bonus", () => {
  const result = evaluateVerifiedMatchResult(base);
  assert.equal(result.awarded, true);
  assert.equal(result.entry.points, POINT_RULES.matchParticipation + POINT_RULES.verifiedWinBonus);
  assert.equal(result.entry.status, "verified");
});
test("losses and draws get participation points only", () => {
  assert.equal(evaluateVerifiedMatchResult({ ...base, outcome: "loss" }).entry.points, 10);
  assert.equal(evaluateVerifiedMatchResult({ ...base, outcome: "draw" }).entry.points, 10);
});
test("refuses unverified results", () => {
  assert.deepEqual(evaluateVerifiedMatchResult({ ...base, verifiedByOrganizer: false }), { awarded: false, reason: "organizer_verification_required" });
});
test("does not trust unsupported client or process-name claims", () => {
  assert.deepEqual(evaluateVerifiedMatchResult({ ...base, verificationMethod: "client_process_name" }), { awarded: false, reason: "unsupported_verification_method" });
});
test("rejects a duplicate result for the same event, match, and player", () => {
  const first = evaluateVerifiedMatchResult(base);
  assert.deepEqual(evaluateVerifiedMatchResult(base, [first.entry]), { awarded: false, reason: "duplicate_result" });
});
test("allows each player a separate record for the same match", () => {
  const first = evaluateVerifiedMatchResult(base);
  const next = evaluateVerifiedMatchResult({ ...base, outcome: "loss", playerId: "player-pseudo-456" }, [first.entry]);
  assert.equal(next.awarded, true);
});
test("rejects missing identifiers and invalid outcomes", () => {
  assert.throws(() => evaluateVerifiedMatchResult({ ...base, matchId: "" }), /matchId/);
  assert.throws(() => evaluateVerifiedMatchResult({ ...base, outcome: "maybe" }), /outcome/);
});