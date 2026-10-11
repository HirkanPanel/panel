export declare const SHADOWSOCKS_ENCRYPTION_METHODS: readonly [{
    readonly value: "chacha20-poly1305";
    readonly label: "chacha20-poly1305";
    readonly length: 16;
}, {
    readonly value: "chacha20-ietf-poly1305";
    readonly label: "chacha20-ietf-poly1305";
    readonly length: 16;
}, {
    readonly value: "xchacha20-poly1305";
    readonly label: "xchacha20-poly1305";
    readonly length: 16;
}, {
    readonly value: "xchacha20-ietf-poly1305";
    readonly label: "xchacha20-ietf-poly1305";
    readonly length: 16;
}, {
    readonly value: "2022-blake3-chacha20-poly1305";
    readonly label: "2022-blake3-chacha20-poly1305";
    readonly length: 32;
}, {
    readonly value: "2022-blake3-aes-128-gcm";
    readonly label: "2022-blake3-aes-128-gcm";
    readonly length: 16;
}, {
    readonly value: "2022-blake3-aes-256-gcm";
    readonly label: "2022-blake3-aes-256-gcm";
    readonly length: 32;
}, {
    readonly value: "aes-128-gcm";
    readonly label: "aes-128-gcm";
    readonly length: 16;
}, {
    readonly value: "aes-256-gcm";
    readonly label: "aes-256-gcm";
    readonly length: 16;
}, {
    readonly value: "none";
    readonly label: "none";
    readonly length: 16;
}, {
    readonly value: "plain";
    readonly label: "plain";
    readonly length: 16;
}];
export type ShadowsocksEncryptionMethod = (typeof SHADOWSOCKS_ENCRYPTION_METHODS)[number]["value"];
export type VlessVariant = "x25519" | "mlkem768";
export declare const DEFAULT_VLESS_HANDSHAKE = "mlkem768x25519plus";
export declare const DEFAULT_VLESS_ENCRYPTION = "native";
export declare const DEFAULT_VLESS_PADDING = "100-111-1111.75-0-111.50-0-3333";
export declare const DEFAULT_VLESS_SERVER_TICKET = "600s";
export declare const VLESS_HANDSHAKE_OPTIONS: readonly [{
    readonly value: "mlkem768x25519plus";
    readonly label: "mlkem768x25519plus";
    readonly translationKey: "coreConfigModal.vlessHandshakeOptionMlkem768x25519plus";
}];
export declare const VLESS_RESUME_OPTIONS: readonly [{
    readonly value: "0rtt";
    readonly label: "0rtt";
    readonly translationKey: "coreConfigModal.vlessResumeOption0rtt";
}, {
    readonly value: "1rtt";
    readonly label: "1rtt";
    readonly translationKey: "coreConfigModal.vlessResumeOption1rtt";
}];
export declare const DEFAULT_VLESS_RESUME: "0rtt";
export declare const VLESS_ENCRYPTION_METHODS: readonly [{
    readonly value: "native";
    readonly label: "native";
    readonly translationKey: "coreConfigModal.vlessEncryptionOptionNative";
}, {
    readonly value: "xorpub";
    readonly label: "xorpub";
    readonly translationKey: "coreConfigModal.vlessEncryptionOptionXorpub";
}, {
    readonly value: "random";
    readonly label: "random";
    readonly translationKey: "coreConfigModal.vlessEncryptionOptionRandom";
}];
export type VlessBuilderOptions = {
    readonly handshakeMethod: string;
    readonly encryptionMethod: string;
    readonly serverTicket: string;
    readonly clientTicket: string;
    readonly serverPadding: string;
    readonly clientPadding: string;
    readonly includeServerPadding: boolean;
    readonly includeClientPadding: boolean;
};
export type X25519KeyPair = {
    readonly privateKey: string;
    readonly publicKey: string;
};
export type ShadowsocksPasswordResult = {
    readonly password: string;
    readonly encryptionMethod: string;
};
export type Mldsa65KeyPair = {
    readonly seed: string;
    readonly verify: string;
};
export type VlessEncryptionResult = {
    readonly x25519: {
        readonly decryption: string;
        readonly encryption: string;
    };
    readonly mlkem768: {
        readonly decryption: string;
        readonly encryption: string;
    };
    readonly options: VlessBuilderOptions;
};
export type CoreBackendType = "xray" | "wg" | "mtproto" | "singbox";
export type CoreConfigTemplateResult = {
    readonly config: string;
    readonly wireGuardKeyPair?: X25519KeyPair;
};
export declare const createDefaultVlessOptions: () => VlessBuilderOptions;
export declare const defaultXrayConfig: string;
export declare function createWireGuardCoreConfigJson(keyPair: X25519KeyPair): string;
export declare function createDefaultXrayCoreConfigJson(): string;
export declare function generateRealityKeyPair(): X25519KeyPair;
export declare const generatePrivateAndPublicKey: typeof generateRealityKeyPair;
export declare function generateShortId(): string;
export declare function generateShadowsocksPassword(value: string): ShadowsocksPasswordResult | undefined;
export declare function generateMldsa65(seed?: string): Promise<Mldsa65KeyPair>;
export declare function generateVlessEncryption(vlessOptions?: VlessBuilderOptions): Promise<VlessEncryptionResult>;
export declare const generateVLESSEncryption: typeof generateVlessEncryption;
export declare function generateWireGuardKeyPair(): X25519KeyPair;
export declare function getWireGuardPublicKey(privateKey: string): string;
export declare function generateCoreConfigTemplate(nextBackendType: CoreBackendType): CoreConfigTemplateResult;
//# sourceMappingURL=core-config.d.ts.map