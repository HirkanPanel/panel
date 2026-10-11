import type { JsonObject, XrayConfig } from "../core/types.js";
export type ClientUriProtocol = "vmess" | "vless" | "trojan" | "shadowsocks" | "hysteria" | "wireguard";
export type UriToXrayJsonOptions = {
    readonly tag?: string;
    readonly remarkAsTag?: boolean;
};
export type XrayJsonToUriOptions = {
    readonly remark?: string;
    readonly host?: string;
    readonly port?: number;
    readonly outboundIndex?: number;
    readonly userIndex?: number;
    readonly serverIndex?: number;
    readonly peerIndex?: number;
};
export declare function generateXrayOutboundFromUri(uri: string, options?: UriToXrayJsonOptions): JsonObject;
export declare function generateXrayConfigFromUri(uri: string, options?: UriToXrayJsonOptions): XrayConfig;
export declare function generateUriFromXrayOutbound(outbound: JsonObject, options?: XrayJsonToUriOptions): string;
export declare function generateUriFromXrayJson(input: JsonObject, options?: XrayJsonToUriOptions): string;
export declare const uriToXrayOutbound: typeof generateXrayOutboundFromUri;
export declare const uriToXrayConfig: typeof generateXrayConfigFromUri;
export declare const xrayOutboundToUri: typeof generateUriFromXrayOutbound;
export declare const xrayJsonToUri: typeof generateUriFromXrayJson;
//# sourceMappingURL=uris.d.ts.map