import { getXrayParityRelease } from "../../xray-json/parity.js";
/** Kit `Transport.type` → Xray parity struct name in `release.structs` (stream network settings). */
export const TRANSPORT_TYPE_TO_PARITY_STRUCT = {
    tcp: "TCPConfig",
    grpc: "GRPCConfig",
    xhttp: "SplitHTTPConfig",
    ws: "WebSocketConfig",
    httpupgrade: "HttpUpgradeConfig",
    kcp: "KCPConfig",
    hysteria: "HysteriaConfig"
};
function uniqueFields(fields) {
    const seen = new Set();
    const output = [];
    for (const field of fields) {
        if (seen.has(field.json))
            continue;
        seen.add(field.json);
        output.push(field);
    }
    return output;
}
function structFields(structs, name) {
    return structs[name] ?? [];
}
export function fieldFlags(fields) {
    return Object.fromEntries(fields.map((field) => [field.json, true]));
}
export function fieldDefinitions(fields) {
    return Object.fromEntries(fields.map((field) => [field.json, field]));
}
export function getGeneratedRoutingRuleFields(options = {}) {
    const release = getXrayParityRelease(options);
    return uniqueFields([
        ...structFields(release.structs, "RouterRule"),
        ...structFields(release.structs, "RawFieldRule"),
        { json: "type", go: "Type", type: "string" }
    ]);
}
export function getGeneratedOutboundFormMetadata(options = {}) {
    const release = getXrayParityRelease(options);
    const settingsFieldsByProtocol = Object.fromEntries(release.outboundProtocols.map((entry) => [
        entry.protocol,
        structFields(release.structs, entry.config)
    ]));
    return {
        protocols: release.outboundProtocols,
        envelopeFields: structFields(release.structs, "OutboundDetourConfig"),
        streamFields: release.streamFields,
        muxFields: structFields(release.structs, "MuxConfig"),
        proxySettingsFields: structFields(release.structs, "ProxyConfig"),
        settingsFieldsByProtocol
    };
}
export function getGeneratedInboundFormMetadata(options = {}) {
    const release = getXrayParityRelease(options);
    const settingsFieldsByProtocol = Object.fromEntries(release.inboundProtocols.map((entry) => [
        entry.protocol,
        structFields(release.structs, entry.config)
    ]));
    const transportSettingsByType = Object.fromEntries(Object.entries(TRANSPORT_TYPE_TO_PARITY_STRUCT).map(([transportType, structName]) => [
        transportType,
        structFields(release.structs, structName)
    ]));
    return {
        protocols: release.inboundProtocols,
        envelopeFields: structFields(release.structs, "InboundDetourConfig"),
        streamFields: release.streamFields,
        securityFieldsByType: {
            tls: structFields(release.structs, "TLSConfig"),
            reality: structFields(release.structs, "REALITYConfig")
        },
        transportSettingsByType,
        settingsFieldsByProtocol
    };
}
export function getGeneratedRoutingBalancerFields(options = {}) {
    const release = getXrayParityRelease(options);
    return uniqueFields(structFields(release.structs, "BalancingRule"));
}
export function getGeneratedBalancingStrategyFields(options = {}) {
    const release = getXrayParityRelease(options);
    return structFields(release.structs, "StrategyConfig");
}
//# sourceMappingURL=form-metadata.js.map