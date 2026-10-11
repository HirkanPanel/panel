import { type XrayParityLoaderEntry, type XrayParityStructField } from "../../xray-json/parity.js";
export type XrayGeneratedFormField = XrayParityStructField;
export type XrayOutboundFormMetadata = {
    readonly protocols: readonly XrayParityLoaderEntry[];
    readonly envelopeFields: readonly XrayGeneratedFormField[];
    readonly streamFields: readonly XrayGeneratedFormField[];
    readonly muxFields: readonly XrayGeneratedFormField[];
    readonly proxySettingsFields: readonly XrayGeneratedFormField[];
    readonly settingsFieldsByProtocol: Readonly<Record<string, readonly XrayGeneratedFormField[]>>;
};
/** Inbound detour + per-protocol settings, derived from the same Xray parity structs as outbounds. */
export type XrayInboundFormMetadata = {
    readonly protocols: readonly XrayParityLoaderEntry[];
    readonly envelopeFields: readonly XrayGeneratedFormField[];
    readonly streamFields: readonly XrayGeneratedFormField[];
    readonly securityFieldsByType: Readonly<Record<string, readonly XrayGeneratedFormField[]>>;
    /** Per `Transport.type` — parity structs for `tcpSettings`, `grpcSettings`, etc. */
    readonly transportSettingsByType: Readonly<Record<string, readonly XrayGeneratedFormField[]>>;
    readonly settingsFieldsByProtocol: Readonly<Record<string, readonly XrayGeneratedFormField[]>>;
};
/** Kit `Transport.type` → Xray parity struct name in `release.structs` (stream network settings). */
export declare const TRANSPORT_TYPE_TO_PARITY_STRUCT: Readonly<Record<string, string>>;
type VersionOptions = {
    readonly xrayVersion?: string;
};
export declare function fieldFlags(fields: readonly XrayGeneratedFormField[]): Record<string, boolean>;
export declare function fieldDefinitions(fields: readonly XrayGeneratedFormField[]): Record<string, XrayGeneratedFormField>;
export declare function getGeneratedRoutingRuleFields(options?: VersionOptions): readonly XrayGeneratedFormField[];
export declare function getGeneratedOutboundFormMetadata(options?: VersionOptions): XrayOutboundFormMetadata;
export declare function getGeneratedInboundFormMetadata(options?: VersionOptions): XrayInboundFormMetadata;
export declare function getGeneratedRoutingBalancerFields(options?: VersionOptions): readonly XrayGeneratedFormField[];
export declare function getGeneratedBalancingStrategyFields(options?: VersionOptions): readonly XrayGeneratedFormField[];
export {};
//# sourceMappingURL=form-metadata.d.ts.map