import { wireGuardKit } from "./wireguard-kit.js";
import { xrayKit } from "./xray-kit.js";
export const supportedCoreKinds = ["xray", "wg"];
export const coreKits = {
    xray: xrayKit,
    wg: wireGuardKit
};
export function getCoreKit(kind) {
    const kit = coreKits[kind];
    if (!kit) {
        throw new Error(`Unsupported core kind: ${String(kind)}`);
    }
    return kit;
}
export function createCoreConfigTemplate(kind) {
    return getCoreKit(kind).createDefaultConfigJson();
}
export function validateCoreConfig(kind, input, options) {
    return getCoreKit(kind).validateConfig(input, options);
}
export * as xray from "@hirkan/xray-core-kit";
export * as wireguard from "@hirkan/wireguard-config-kit";
//# sourceMappingURL=index.js.map