import type { XrayCapabilities } from "./types.js";
export type CapabilityFlagMap = Readonly<Record<string, boolean>>;
export type CapabilitySummary = {
    readonly adapterId: string;
    readonly xrayVersionRange: string;
    readonly latestTestedVersion: string;
    readonly protocols: CapabilityFlagMap;
    readonly transports: CapabilityFlagMap;
    readonly security: CapabilityFlagMap;
    readonly fingerprints: CapabilityFlagMap;
    readonly alpn: CapabilityFlagMap;
};
export declare function buildCapabilitySummary(capabilities: XrayCapabilities): CapabilitySummary;
export declare function capabilitySummary(capabilities: XrayCapabilities): CapabilitySummary;
//# sourceMappingURL=capabilities.d.ts.map