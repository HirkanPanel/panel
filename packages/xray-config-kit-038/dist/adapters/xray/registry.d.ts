import type { XrayAdapter, XrayCapabilities } from "./types.js";
import { type CapabilitySummary } from "./capabilities.js";
export declare function getXrayAdapter(version?: string): XrayAdapter;
export declare function getCapabilities(options?: {
    readonly xrayVersion?: string;
}): XrayCapabilities;
export declare function getCapabilitySummary(options?: {
    readonly xrayVersion?: string;
}): CapabilitySummary;
export declare const compatibilityMatrix: import("./types.js").CompatibilityMatrix;
export declare const registeredXrayAdapters: readonly XrayAdapter[];
//# sourceMappingURL=registry.d.ts.map