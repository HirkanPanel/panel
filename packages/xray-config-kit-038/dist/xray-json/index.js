export const knownXrayTopLevelKeys = [
    "log",
    "dns",
    "routing",
    "inbounds",
    "outbounds",
    "policy",
    "api",
    "stats",
    "metrics",
    "fakeDns",
    "observatory",
    "burstObservatory",
    "reverse",
    "transport",
    "geodata",
    "version"
];
export function isXrayConfig(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function asXrayConfig(value) {
    return value;
}
export { getXrayParityRelease, getXrayParityReleases, resolveXrayParityRelease, validateStrictXrayConfig, xrayParityManifest } from "./parity.js";
//# sourceMappingURL=index.js.map