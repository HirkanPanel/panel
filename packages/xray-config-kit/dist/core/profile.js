import { applyPresets } from "../presets/index.js";
function asPortMapStrings(value) {
    const out = {};
    for (const [key, entry] of Object.entries(value)) {
        out[key] = typeof entry === "string" ? entry : entry === null || entry === undefined ? "" : String(entry);
    }
    return out;
}
/**
 * `portMap` is only part of the strict profile schema for `tunnel` / `dokodemo-door`.
 * Draft merges or hand-edited profiles can leak it onto other inbound kinds and block
 * `validateProfile` (empty strict compile).
 */
function stripPortMapFromNonTunnelDokodemoInbounds(inbound) {
    if (inbound.protocol === "tunnel" || inbound.protocol === "dokodemo-door")
        return inbound;
    if (!("portMap" in inbound))
        return inbound;
    const { portMap: _removed, ...rest } = inbound;
    return rest;
}
/**
 * Canonical tunnel/dokodemo shape keeps `portMap` on the inbound (validated by `.strict()`).
 * `raw` `/settings/portMap` patches are redundant once compiled; lifting them survives API round‑trips
 * and avoids losing mappings when drafts only carried `raw`.
 */
export function normalizeDokodemoTunnelInboundPortMap(inbound) {
    if (inbound.protocol !== "tunnel" && inbound.protocol !== "dokodemo-door")
        return inbound;
    const raw = inbound.raw;
    let portMap = inbound.portMap !== undefined && Object.keys(inbound.portMap).length > 0 ? { ...inbound.portMap } : undefined;
    const patches = Array.isArray(raw)
        ? raw.filter((entry) => typeof entry === "object" && entry !== null && !Array.isArray(entry) &&
            entry.path === "/settings/portMap")
        : [];
    if (portMap === undefined && patches.length > 0) {
        const firstValue = patches[0]?.value;
        if (typeof firstValue === "object" &&
            firstValue !== null &&
            !Array.isArray(firstValue)) {
            portMap = asPortMapStrings(firstValue);
        }
        if (portMap !== undefined && Object.keys(portMap).length === 0)
            portMap = undefined;
    }
    const filteredRaw = Array.isArray(raw) && raw.length > 0
        ? raw.filter((entry) => !(typeof entry === "object" &&
            entry !== null &&
            !Array.isArray(entry) &&
            entry.path === "/settings/portMap"))
        : undefined;
    const nextRaw = filteredRaw !== undefined && filteredRaw.length > 0 ? filteredRaw : undefined;
    const base = { ...inbound, raw: nextRaw };
    if (portMap !== undefined && Object.keys(portMap).length > 0)
        base.portMap = portMap;
    else
        delete base.portMap;
    return base;
}
const defaultOutbounds = [
    { protocol: "freedom", tag: "direct", settings: { domainStrategy: "AsIs" } },
    { protocol: "blackhole", tag: "block", settings: { response: { type: "none" } } }
];
const defaultPolicy = {
    levels: {
        "0": {
            statsUserOnline: true
        }
    }
};
function applyDefaultPolicy(profile, includeDefaultPolicy) {
    if (!includeDefaultPolicy)
        return profile;
    return {
        ...profile,
        raw: {
            ...profile.raw,
            topLevel: {
                policy: defaultPolicy,
                ...profile.raw?.topLevel
            }
        }
    };
}
export function createProfile(input = {}) {
    const { presets, includeDefaultPolicy = true, ...profileInput } = input;
    const withPresets = applyDefaultPolicy(applyPresets(profileInput, presets), includeDefaultPolicy);
    return normalizeProfile({
        ...withPresets,
        schemaVersion: "xck.v1",
        inbounds: withPresets.inbounds ?? []
    });
}
export function profileSourceFingerprint(profile) {
    const raw = profile.raw
        ? {
            ...profile.raw,
            source: undefined,
            sourceProfileFingerprint: undefined
        }
        : undefined;
    const cleanedRaw = raw && Object.values(raw).some((value) => value !== undefined) ? raw : undefined;
    return JSON.stringify({
        ...profile,
        raw: cleanedRaw
    });
}
export function normalizeProfile(profile) {
    const outbounds = profile.outbounds && profile.outbounds.length > 0
        ? profile.outbounds
        : profile.raw?.source
            ? profile.outbounds
            : defaultOutbounds;
    const inbounds = profile.inbounds ?? [];
    return {
        ...profile,
        schemaVersion: "xck.v1",
        inbounds: inbounds.map((ib) => normalizeDokodemoTunnelInboundPortMap(stripPortMapFromNonTunnelDokodemoInbounds(ib))),
        outbounds
    };
}
//# sourceMappingURL=profile.js.map