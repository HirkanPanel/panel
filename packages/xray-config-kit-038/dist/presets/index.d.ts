import type { Profile } from "../core/types.js";
export type PresetName = "direct-block-outbounds" | "api-stats-routing" | "dns-simple" | "dns-doh" | "routing-private-direct" | "routing-ads-block" | "routing-bittorrent-block" | "regional-ir-direct" | "vless-reality-tcp" | "vless-reality-grpc" | "trojan-tls" | "shadowsocks-aead" | "shadowsocks-2022";
export type PresetDefinition = {
    readonly name: PresetName;
    readonly description: string;
    readonly profile: Partial<Profile>;
};
export declare const presetCatalog: Record<PresetName, PresetDefinition>;
export declare function applyPresets(profile: Partial<Profile>, names?: readonly string[]): Partial<Profile>;
//# sourceMappingURL=index.d.ts.map