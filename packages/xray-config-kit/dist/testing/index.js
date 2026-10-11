import { buildXrayConfig } from "../core/compiler.js";
import { stableStringify } from "../core/json.js";
export function buildGoldenConfig(profile, options = {}) {
    return stableStringify(buildXrayConfig(profile, { ...options, mode: options.mode ?? "permissive" }).config);
}
export function createFixtureProfile(profile) {
    return profile;
}
//# sourceMappingURL=index.js.map