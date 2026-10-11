function toFlagMap(values) {
    return Object.fromEntries(values.map((value) => [value, true]));
}
export function buildCapabilitySummary(capabilities) {
    return {
        adapterId: capabilities.adapterId,
        xrayVersionRange: capabilities.xrayVersionRange,
        latestTestedVersion: capabilities.latestTestedVersion,
        protocols: toFlagMap(capabilities.protocols),
        transports: toFlagMap(capabilities.transports),
        security: toFlagMap(capabilities.securities),
        fingerprints: toFlagMap(capabilities.fingerprints),
        alpn: toFlagMap(capabilities.alpn)
    };
}
export function capabilitySummary(capabilities) {
    return buildCapabilitySummary(capabilities);
}
//# sourceMappingURL=capabilities.js.map