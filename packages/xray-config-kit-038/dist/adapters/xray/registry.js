import { buildCapabilitySummary } from "./capabilities.js";
import { createXrayAdapter, getGeneratedXrayAdapters, latestCompatibilityMatrix } from "./dynamic.js";
export function getXrayAdapter(version) {
    return createXrayAdapter(version);
}
export function getCapabilities(options = {}) {
    const adapter = getXrayAdapter(options.xrayVersion);
    const error = adapter.issues?.find((item) => item.severity === "error");
    if (error)
        throw new RangeError(error.message);
    return adapter.capabilities;
}
export function getCapabilitySummary(options = {}) {
    return buildCapabilitySummary(getCapabilities(options));
}
export const compatibilityMatrix = latestCompatibilityMatrix;
export const registeredXrayAdapters = getGeneratedXrayAdapters();
//# sourceMappingURL=registry.js.map