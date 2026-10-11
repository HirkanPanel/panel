import type { CoreConfigTemplateResult, CoreKind, CoreKit, CoreKitValidationOptions, CoreKitValidationResult } from "./types.js";
export type { CoreConfigTemplateResult, CoreKind, CoreKit, CoreKitCapabilities, CoreKitValidationIssue, CoreKitValidationOptions, CoreKitValidationResult } from "./types.js";
export declare const supportedCoreKinds: readonly ["xray", "wg"];
export declare const coreKits: {
    readonly xray: CoreKit<import("@hirkan/xray-core-kit").XrayConfig>;
    readonly wg: CoreKit<import("@hirkan/wireguard-config-kit").WireGuardCoreConfig>;
};
export declare function getCoreKit(kind: CoreKind): CoreKit;
export declare function createCoreConfigTemplate(kind: CoreKind): CoreConfigTemplateResult;
export declare function validateCoreConfig(kind: CoreKind, input: unknown, options?: CoreKitValidationOptions): CoreKitValidationResult;
export * as xray from "@hirkan/xray-core-kit";
export * as wireguard from "@hirkan/wireguard-config-kit";
//# sourceMappingURL=index.d.ts.map