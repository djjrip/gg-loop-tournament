/**
 * Gaming for Groceries — first-pilot points rules.
 *
 * This is a deterministic domain-rule prototype, not a game-integrity detector,
 * persistent database, identity system, or reward redemption service.
 * The caller MUST establish organizer authorization server-side; do not accept
 * verifiedByOrganizer directly from an untrusted browser request.
 */
export const POINT_RULES = Object.freeze({ matchParticipation: 10, verifiedWinBonus: 5 });
const ALLOWED_OUTCOMES = new Set(["win", "loss", "draw"]);

function requireId(value, field) {
  if (typeof value !== "string" || value.trim().length === 0 || value.length > 160) {
    throw new TypeError(`${field} must be a non-empty string of at most 160 characters`);
  }
  return value.trim();
}

/**
 * Award points only for an organizer-confirmed match result.
 * Duplicate (eventId, matchId, playerId) entries are rejected idempotently.
 * Points have no cash value and are not redeemable without a separate funded-reward workflow.
 */
export function evaluateVerifiedMatchResult(input, existingLedger = []) {
  if (!input || typeof input !== "object") throw new TypeError("input is required");
  const eventId = requireId(input.eventId, "eventId");
  const matchId = requireId(input.matchId, "matchId");
  const playerId = requireId(input.playerId, "playerId");
  const outcome = input.outcome;
  if (!ALLOWED_OUTCOMES.has(outcome)) throw new TypeError("outcome must be win, loss, or draw");
  if (input.verificationMethod !== "organizer_witness") {
    return { awarded: false, reason: "unsupported_verification_method" };
  }
  if (input.verifiedByOrganizer !== true) {
    return { awarded: false, reason: "organizer_verification_required" };
  }
  if (!Array.isArray(existingLedger)) throw new TypeError("existingLedger must be an array");
  const duplicate = existingLedger.some((entry) => entry && entry.eventId === eventId && entry.matchId === matchId && entry.playerId === playerId);
  if (duplicate) return { awarded: false, reason: "duplicate_result" };
  const points = 10 + (outcome === "win" ? 5 : 0);
  return {
    awarded: true,
    reason: "verified_result",
    entry: {
      entryId: `${eventId}:${matchId}:${playerId}`, eventId, matchId, playerId, outcome, points,
      verificationMethod: "organizer_witness", status: "verified",
    },
  };
}