/**
 * Gaming for Groceries — first-pilot points rules.
 *
 * This is a deterministic domain-rule prototype, not a game-integrity detector,
 * persistent database, identity system, or reward redemption service.
 * The verifier context MUST be created by trusted server-side authentication,
 * never copied from a browser request body.
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
 * Award points only when a trusted server-side context confirms organizer review.
 * Duplicate (eventId, matchId, playerId) entries are rejected idempotently.
 * Points have no cash value and are not redeemable without a separate funded-reward workflow.
 */
export function evaluateVerifiedMatchResult(input, existingLedger = [], verifierContext = {}) {
  if (!input || typeof input !== "object") throw new TypeError("input is required");
  const eventId = requireId(input.eventId, "eventId");
  const matchId = requireId(input.matchId, "matchId");
  const playerId = requireId(input.playerId, "playerId");
  const outcome = input.outcome;
  if (!ALLOWED_OUTCOMES.has(outcome)) throw new TypeError("outcome must be win, loss, or draw");
  if (!Array.isArray(existingLedger)) throw new TypeError("existingLedger must be an array");

  // Authority is deliberately passed separately from the player-submitted result.
  if (verifierContext.authenticated !== true || verifierContext.role !== "organizer") {
    return { awarded: false, reason: "organizer_authorization_required" };
  }
  if (verifierContext.method !== "organizer_witness") {
    return { awarded: false, reason: "unsupported_verification_method" };
  }
  const verifierId = requireId(verifierContext.verifierId, "verifierId");
  if (verifierId === playerId) {
    return { awarded: false, reason: "self_approval_not_allowed" };
  }

  const duplicate = existingLedger.some((entry) =>
    entry && entry.eventId === eventId && entry.matchId === matchId && entry.playerId === playerId
  );
  if (duplicate) return { awarded: false, reason: "duplicate_result" };

  const points = POINT_RULES.matchParticipation + (outcome === "win" ? POINT_RULES.verifiedWinBonus : 0);
  return {
    awarded: true,
    reason: "verified_result",
    entry: {
      entryId: `${eventId}:${matchId}:${playerId}`,
      eventId, matchId, playerId, outcome, points,
      verificationMethod: "organizer_witness",
      verifiedBy: verifierId,
      status: "verified",
    },
  };
}
