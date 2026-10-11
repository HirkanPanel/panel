import type { ClientLinkOptions, Profile, SubscriptionOptions, SubscriptionResult, WireGuardConfigOptions } from "../core/types.js";
export { generateUriFromXrayJson, generateUriFromXrayOutbound, generateXrayConfigFromUri, generateXrayOutboundFromUri, uriToXrayConfig, uriToXrayOutbound, xrayJsonToUri, xrayOutboundToUri } from "./uris.js";
export type { ClientUriProtocol, UriToXrayJsonOptions, XrayJsonToUriOptions } from "./uris.js";
export declare function generateClientLink(profile: Profile, options: ClientLinkOptions): string;
export declare function generateVmessLink(profile: Profile, options: ClientLinkOptions): string;
export declare function generateVlessLink(profile: Profile, options: ClientLinkOptions): string;
export declare function generateTrojanLink(profile: Profile, options: ClientLinkOptions): string;
export declare function generateShadowsocksLink(profile: Profile, options: ClientLinkOptions): string;
export declare function generateWireGuardConfig(profile: Profile, options: WireGuardConfigOptions): string;
export declare function generateSubscription(profile: Profile, options: SubscriptionOptions): SubscriptionResult;
//# sourceMappingURL=index.d.ts.map