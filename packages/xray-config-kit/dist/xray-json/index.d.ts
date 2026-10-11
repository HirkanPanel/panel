import type { JsonObject, JsonValue, XrayConfig } from "../core/types.js";
export type { JsonObject, JsonValue, XrayConfig } from "../core/types.js";
export type XrayTopLevelKey = "log" | "dns" | "routing" | "inbounds" | "outbounds" | "policy" | "api" | "stats" | "metrics" | "fakeDns" | "observatory" | "burstObservatory" | "reverse" | "transport" | "geodata" | "version";
export declare const knownXrayTopLevelKeys: readonly XrayTopLevelKey[];
export declare function isXrayConfig(value: JsonValue): value is XrayConfig;
export declare function asXrayConfig(value: JsonObject): XrayConfig;
export { getXrayParityRelease, getXrayParityReleases, resolveXrayParityRelease, validateStrictXrayConfig, xrayParityManifest } from "./parity.js";
export type { StrictXrayValidationOptions, StrictXrayValidationResult, XrayParityFeatureNotice, XrayParityLoaderEntry, XrayParityRelease, XrayParityReleaseResolution, XrayParityStructField } from "./parity.js";
export type { XrayParityGeneratedManifest, XrayParityGeneratedRelease, XrayParityInboundProtocol, XrayParityOutboundProtocol, XrayParityReleaseByTag, XrayParityReleaseTag, XrayParitySecurityType, XrayParityStreamField, XrayParityTopLevelKey } from "./parity-types.js";
//# sourceMappingURL=index.d.ts.map