import { type XrayGeneratedFormField } from "../adapters/xray/form-metadata.js";
import type { Inbound, InboundPort, Issue, JsonObject, Outbound, Profile, RoutingBalancer, RoutingRule, Security, Transport, ValidateOptions, FreedomOutboundSettings, BlackholeOutboundSettings, DnsOutboundSettings, HttpOutboundSettings, SocksOutboundSettings, ShadowsocksOutboundSettings, VmessOutboundSettings, VlessOutboundSettings, TrojanOutboundSettings, WireGuardOutboundSettings, LoopbackOutboundSettings, StreamSettings, MuxSettings, ProxySettings } from "./types.js";
type CreateDefaultInboundBaseOptions<Protocol extends Exclude<Inbound["protocol"], "unmanaged">> = {
    readonly protocol: Protocol;
    readonly tag?: string;
    readonly listen?: string;
    readonly port?: InboundPort;
    readonly clientDefaults?: CreateDefaultInboundClientDefaults;
};
export type CreateDefaultInboundClientDefaults = "placeholder" | "empty";
export type CreateDefaultInboundOptions = (CreateDefaultInboundBaseOptions<"vmess"> & {
    readonly transport?: Transport["type"];
    readonly security?: "none" | "tls";
}) | (CreateDefaultInboundBaseOptions<"vless"> & {
    readonly transport?: Transport["type"];
    readonly security?: Security["type"];
}) | (CreateDefaultInboundBaseOptions<"trojan"> & {
    readonly transport?: Transport["type"];
    readonly security?: Security["type"];
}) | (CreateDefaultInboundBaseOptions<"shadowsocks"> & {
    readonly transport?: Transport["type"];
    readonly security?: "none" | "tls";
}) | (CreateDefaultInboundBaseOptions<"hysteria"> & {
    readonly security?: "none" | "tls";
}) | CreateDefaultInboundBaseOptions<"http"> | CreateDefaultInboundBaseOptions<"mixed"> | CreateDefaultInboundBaseOptions<"socks"> | CreateDefaultInboundBaseOptions<"dokodemo-door"> | CreateDefaultInboundBaseOptions<"tunnel"> | CreateDefaultInboundBaseOptions<"tun"> | CreateDefaultInboundBaseOptions<"wireguard">;
type CreateDefaultInboundOptionsFor<Protocol extends Exclude<Inbound["protocol"], "unmanaged">> = Extract<CreateDefaultInboundOptions, {
    readonly protocol: Protocol;
}>;
type ExactCreateDefaultInboundOptions<Options extends CreateDefaultInboundOptions> = Options & Record<Exclude<keyof Options, keyof CreateDefaultInboundOptionsFor<Options["protocol"]>>, never>;
type InboundForProtocol<Protocol extends Exclude<Inbound["protocol"], "unmanaged">> = Inbound extends infer Candidate ? Candidate extends {
    readonly protocol: infer CandidateProtocol;
} ? Protocol extends CandidateProtocol ? Candidate : never : never : never;
export type InboundFormCapabilities = {
    readonly protocols: Record<string, boolean>;
    readonly protocolConfigs: Record<string, string>;
    readonly protocolOrder: readonly string[];
    readonly transports: Record<string, boolean>;
    readonly securities: Record<string, boolean>;
    readonly securityFields: Record<string, Record<string, boolean>>;
    readonly securityFieldDefinitions: Record<string, Record<string, XrayGeneratedFormField>>;
    readonly securityFieldOrderByType: Readonly<Record<string, readonly string[]>>;
    readonly transportSettingsFields: Record<string, Record<string, boolean>>;
    readonly transportSettingsFieldDefinitions: Record<string, Record<string, XrayGeneratedFormField>>;
    readonly transportSettingsFieldOrderByType: Readonly<Record<string, readonly string[]>>;
    readonly settingsFields: Record<string, Record<string, boolean>>;
    readonly settingsFieldDefinitions: Record<string, Record<string, XrayGeneratedFormField>>;
    readonly settingsFieldOrderByProtocol: Readonly<Record<string, readonly string[]>>;
    readonly clientLinks: Record<string, boolean>;
};
export type InboundFieldVisibility = {
    readonly clients: boolean;
    readonly accounts: boolean;
    readonly wireguardPeers: boolean;
    readonly tun: boolean;
    readonly dokodemo: boolean;
    readonly stream: boolean;
    readonly tls: boolean;
    readonly reality: boolean;
    readonly shadowsocks: boolean;
    readonly sniffing: boolean;
    readonly advancedStream: boolean;
};
export type RoutingRuleFieldKey = string;
export type FormVersionOptions = {
    readonly xrayVersion?: string;
};
export type ProfileTagSource = Pick<Profile, "inbounds" | "outbounds" | "routing">;
export type RoutingRuleFormCapabilities = {
    readonly fields: Record<string, boolean>;
    readonly fieldDefinitions: Record<string, XrayGeneratedFormField>;
    /** Parity order for stable form layout (JSON keys). */
    readonly fieldOrder: readonly string[];
    readonly networks: Record<string, boolean>;
    readonly protocols: Record<string, boolean>;
    readonly inboundTags: string[];
    readonly outboundTags: string[];
    readonly balancerTags: string[];
};
export type RoutingRuleFormCapabilitiesOptions = FormVersionOptions & {
    readonly profile?: ProfileTagSource;
};
export type RoutingRuleFieldVisibility = Record<string, boolean>;
export type OutboundFormCapabilities = {
    readonly protocols: Record<string, boolean>;
    readonly protocolConfigs: Record<string, string>;
    readonly envelopeFields: Record<string, boolean>;
    readonly envelopeFieldDefinitions: Record<string, XrayGeneratedFormField>;
    /** JSON keys in parity order for envelope (e.g. sendThrough, streamSettings). */
    readonly envelopeFieldOrder: readonly string[];
    readonly settingsFields: Record<string, Record<string, boolean>>;
    readonly settingsFieldDefinitions: Record<string, Record<string, XrayGeneratedFormField>>;
    /** JSON keys per protocol in parity order for outbound `settings`. */
    readonly settingsFieldOrderByProtocol: Readonly<Record<string, readonly string[]>>;
    readonly streamFields: Record<string, boolean>;
    readonly streamFieldDefinitions: Record<string, XrayGeneratedFormField>;
    readonly streamFieldOrder: readonly string[];
    readonly muxFields: Record<string, boolean>;
    readonly muxFieldDefinitions: Record<string, XrayGeneratedFormField>;
    readonly proxySettingsFields: Record<string, boolean>;
    readonly proxySettingsFieldDefinitions: Record<string, XrayGeneratedFormField>;
};
export type OutboundFieldVisibility = {
    readonly settings: boolean;
    readonly streamSettings: boolean;
    readonly mux: boolean;
    readonly proxySettings: boolean;
    readonly raw: boolean;
};
export type CreateDefaultRoutingRuleOptions = Omit<RoutingRule, "type"> & {
    readonly type?: "field";
};
export type CreateDefaultRoutingBalancerOptions = Partial<RoutingBalancer>;
type OutboundSettingsForProtocol<P extends Exclude<Outbound["protocol"], "unmanaged"> | "direct" | "block"> = P extends "freedom" | "direct" ? FreedomOutboundSettings : P extends "blackhole" | "block" ? BlackholeOutboundSettings : P extends "dns" ? DnsOutboundSettings : P extends "http" ? HttpOutboundSettings : P extends "socks" ? SocksOutboundSettings : P extends "shadowsocks" ? ShadowsocksOutboundSettings : P extends "vmess" ? VmessOutboundSettings : P extends "vless" ? VlessOutboundSettings : P extends "trojan" ? TrojanOutboundSettings : P extends "wireguard" ? WireGuardOutboundSettings : P extends "loopback" ? LoopbackOutboundSettings : JsonObject;
export type CreateDefaultOutboundOptions<P extends Exclude<Outbound["protocol"], "unmanaged"> | "direct" | "block" = Exclude<Outbound["protocol"], "unmanaged"> | "direct" | "block"> = {
    readonly protocol: P;
    readonly tag?: string;
    readonly settings?: OutboundSettingsForProtocol<P>;
    readonly streamSettings?: StreamSettings;
    readonly mux?: MuxSettings;
    readonly proxySettings?: ProxySettings;
    readonly sendThrough?: string;
    readonly targetStrategy?: string;
};
export type CreateDefaultInboundForProtocolOptions = {
    readonly protocol: Exclude<Inbound["protocol"], "unmanaged">;
    readonly tag?: string;
    readonly listen?: string;
    readonly port?: InboundPort;
    readonly transport?: Transport["type"];
    readonly security?: Security["type"];
    readonly clientDefaults?: CreateDefaultInboundClientDefaults;
};
export declare function createDefaultInboundForProtocol(options: CreateDefaultInboundForProtocolOptions): Exclude<Inbound, {
    protocol: "unmanaged";
}>;
export declare function createDefaultInbound<const Options extends CreateDefaultInboundOptions>(options: ExactCreateDefaultInboundOptions<Options>): InboundForProtocol<Options["protocol"]>;
export declare function getInboundFormCapabilities(options?: {
    readonly xrayVersion?: string;
}): InboundFormCapabilities;
export declare function getInboundFieldVisibility(draft: Inbound, _capabilities?: InboundFormCapabilities): InboundFieldVisibility;
export declare function createDefaultRoutingRule(options?: CreateDefaultRoutingRuleOptions): RoutingRule;
export declare function createDefaultRoutingBalancer(options?: CreateDefaultRoutingBalancerOptions): RoutingBalancer;
export declare function getRoutingRuleFormCapabilities(input?: ProfileTagSource | RoutingRuleFormCapabilitiesOptions): RoutingRuleFormCapabilities;
export declare function getRoutingRuleFieldVisibility(_draft: RoutingRule, capabilities?: RoutingRuleFormCapabilities): RoutingRuleFieldVisibility;
export declare function createDefaultOutbound<P extends Exclude<Outbound["protocol"], "unmanaged"> | "direct" | "block">(options: CreateDefaultOutboundOptions<P>): Exclude<Outbound, {
    protocol: "unmanaged";
}>;
export declare function getOutboundFormCapabilities(options?: FormVersionOptions): OutboundFormCapabilities;
export declare function getOutboundFieldVisibility(draft: Outbound, capabilities?: OutboundFormCapabilities): OutboundFieldVisibility;
export declare function validateInboundDraft(draft: Inbound, options?: ValidateOptions): Issue[];
export declare function validateRoutingRuleDraft(draft: RoutingRule, options?: ValidateOptions): Issue[];
export declare function validateOutboundDraft(draft: Outbound, options?: ValidateOptions): Issue[];
export {};
//# sourceMappingURL=form.d.ts.map