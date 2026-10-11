import type { Issue, ValidationMode, XrayConfig } from "../core/types.js";
import { xrayParityManifest } from "./parity-manifest.js";
export type XrayParityStructField = {
    readonly json: string;
    readonly go: string;
    readonly type: string;
};
export type XrayParityLoaderEntry = {
    readonly protocol: string;
    readonly config: string;
};
export type XrayParityFeatureNotice = {
    readonly feature: string;
    readonly replacement?: string;
    readonly source: string;
    readonly keys: readonly string[];
};
export type XrayParityRelease = {
    readonly tag: string;
    readonly version: string;
    readonly commit: string;
    readonly removedFeatures: readonly XrayParityFeatureNotice[];
    readonly deprecatedFeatures: readonly XrayParityFeatureNotice[];
    readonly topLevelKeys: readonly string[];
    readonly inboundProtocols: readonly XrayParityLoaderEntry[];
    readonly outboundProtocols: readonly XrayParityLoaderEntry[];
    readonly streamFields: readonly XrayParityStructField[];
    readonly transportAliases: Readonly<Record<string, string>>;
    readonly securityTypes: readonly string[];
    readonly fingerprints: readonly string[];
    readonly alpn: readonly string[];
    readonly jsonLoaders: Readonly<Record<string, readonly XrayParityLoaderEntry[]>>;
    readonly structs: Readonly<Record<string, readonly XrayParityStructField[]>>;
};
export type XrayParityReleaseResolution = {
    readonly ok: true;
    readonly release: XrayParityRelease;
    readonly issue?: Issue;
    readonly requestedVersion?: string;
    readonly latestGeneratedVersion: string;
} | {
    readonly ok: false;
    readonly release?: XrayParityRelease;
    readonly issue: Issue;
    readonly requestedVersion?: string;
    readonly latestGeneratedVersion: string;
};
export type StrictXrayValidationOptions = {
    readonly xrayVersion?: string;
    readonly releaseTag?: string;
    readonly mode?: ValidationMode;
};
export type StrictXrayValidationResult = {
    readonly ok: boolean;
    readonly config?: XrayConfig;
    readonly release: XrayParityRelease;
    readonly issues: Issue[];
};
export declare function getXrayParityReleases(): readonly XrayParityRelease[];
export declare function resolveXrayParityRelease(options?: {
    readonly xrayVersion?: string;
    readonly releaseTag?: string;
}): XrayParityReleaseResolution;
export declare function getXrayParityRelease(options?: {
    readonly xrayVersion?: string;
    readonly releaseTag?: string;
}): XrayParityRelease;
export declare function validateStrictXrayConfig(input: unknown, options?: StrictXrayValidationOptions): StrictXrayValidationResult;
export { xrayParityManifest };
//# sourceMappingURL=parity.d.ts.map