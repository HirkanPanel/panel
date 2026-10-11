import type { CreateProfileInput, Inbound, Profile } from "./types.js";
/**
 * Canonical tunnel/dokodemo shape keeps `portMap` on the inbound (validated by `.strict()`).
 * `raw` `/settings/portMap` patches are redundant once compiled; lifting them survives API round‑trips
 * and avoids losing mappings when drafts only carried `raw`.
 */
export declare function normalizeDokodemoTunnelInboundPortMap(inbound: Inbound): Inbound;
export declare function createProfile(input?: CreateProfileInput): Profile;
export declare function profileSourceFingerprint(profile: Profile): string;
export declare function normalizeProfile(profile: Profile): Profile;
//# sourceMappingURL=profile.d.ts.map