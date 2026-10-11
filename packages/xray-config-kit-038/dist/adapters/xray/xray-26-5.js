const adapterId = "xray@26.5";
export const xray265Capabilities = {
    adapterId,
    xrayVersionRange: ">=26.5.0 <27.0.0",
    latestTestedVersion: "26.5.3",
    protocols: ["vless", "trojan", "shadowsocks", "freedom", "blackhole", "dns"],
    transports: ["tcp", "grpc", "xhttp", "ws", "kcp"],
    securities: ["none", "tls", "reality"],
    fingerprints: [
        "chrome",
        "firefox",
        "safari",
        "ios",
        "android",
        "edge",
        "360",
        "qq",
        "random",
        "randomized",
        "randomizednoalpn",
        "unsafe"
    ],
    alpn: ["h3", "h2", "http/1.1"],
    removedFeatures: [
        { feature: "global transport", replacement: "per-inbound/outbound streamSettings" },
        { feature: "legacy XTLS", replacement: "xtls-rprx-vision with TLS or REALITY" },
        { feature: "http transport", replacement: "XHTTP stream-one H2/H3" },
        { feature: "quic transport", replacement: "XHTTP stream-one H3" },
        { feature: "mkcp header/seed", replacement: "finalmask UDP masks" },
        { feature: "trojan flow", replacement: "VLESS flow" },
        { feature: "verifyPeerCertInNames", replacement: "verifyPeerCertByName" }
    ],
    deprecatedFeatures: [
        { feature: "allowInsecure", replacement: "pinnedPeerCertSha256 and verifyPeerCertByName", removalDate: "2026-06-01" },
        { feature: "gRPC transport", replacement: "XHTTP stream-up H2" },
        { feature: "WebSocket transport", replacement: "XHTTP H2/H3" },
        { feature: "HTTPUpgrade transport", replacement: "XHTTP H2/H3" },
        { feature: "Trojan", replacement: "VLESS with flow and seed" },
        { feature: "Shadowsocks", replacement: "VLESS encryption" }
    ],
    compatibilityMatrix: {
        vless: { supported: true },
        trojan: { supported: true, deprecated: true, replacement: "VLESS with flow and seed" },
        shadowsocks: { supported: true, deprecated: true, replacement: "VLESS encryption" },
        reality: { supported: true },
        tls: { supported: true },
        tcp: { supported: true },
        grpc: { supported: true, deprecated: true, replacement: "XHTTP stream-up H2" },
        xhttp: { supported: true },
        websocket: { supported: true, deprecated: true, replacement: "XHTTP H2/H3" },
        mkcp: { supported: true },
        routing: { supported: true },
        dns: { supported: true },
        finalmask: { supported: true },
        metrics: { supported: true },
        api: { supported: true },
        stats: { supported: true }
    }
};
function issue(input) {
    return { ...input, adapterId };
}
function transportFeature(transport) {
    if (transport.type === "ws")
        return "websocket";
    if (transport.type === "kcp")
        return "mkcp";
    return transport.type;
}
function validateInbound(inbound, index) {
    if (inbound.protocol === "unmanaged")
        return [];
    const path = `/inbounds/${index}`;
    const issues = [];
    if (inbound.protocol === "shadowsocks") {
        issues.push(issue({
            code: "XCK_COMPAT_SHADOWSOCKS_DEPRECATED",
            severity: "warning",
            category: "compatibility",
            path,
            message: "Shadowsocks is supported but Xray-core warns that VLESS encryption is preferred."
        }));
        return issues;
    }
    const feature = transportFeature(inbound.transport);
    const support = xray265Capabilities.compatibilityMatrix[feature];
    if (!support?.supported) {
        issues.push(issue({
            code: "XCK_COMPAT_TRANSPORT_UNSUPPORTED",
            severity: "error",
            category: "compatibility",
            path: `${path}/transport/type`,
            message: `Transport "${inbound.transport.type}" is not supported by ${adapterId}.`
        }));
    }
    else if (support.deprecated) {
        issues.push(issue({
            code: "XCK_COMPAT_TRANSPORT_DEPRECATED",
            severity: "warning",
            category: "compatibility",
            path: `${path}/transport/type`,
            message: `Transport "${inbound.transport.type}" is deprecated or discouraged in ${adapterId}.`,
            suggestion: support.replacement
        }));
    }
    if ((inbound.protocol === "vless" || inbound.protocol === "trojan") && inbound.security.type === "reality") {
        if (!["tcp", "grpc", "xhttp"].includes(inbound.transport.type)) {
            issues.push(issue({
                code: "XCK_COMPAT_REALITY_TRANSPORT",
                severity: "error",
                category: "compatibility",
                path: `${path}/security`,
                message: "REALITY is only supported on RAW/TCP, XHTTP, and gRPC in this Xray adapter.",
                suggestion: "Use transport.type \"tcp\", \"xhttp\", or \"grpc\"."
            }));
        }
    }
    if (inbound.protocol === "trojan") {
        issues.push(issue({
            code: "XCK_COMPAT_TROJAN_DEPRECATED",
            severity: "warning",
            category: "compatibility",
            path,
            message: "Trojan is supported but Xray-core warns that VLESS with flow/seed is preferred."
        }));
    }
    if (inbound.security.type === "tls" && inbound.security.allowInsecure) {
        issues.push(issue({
            code: "XCK_COMPAT_ALLOW_INSECURE_DEPRECATED",
            severity: "warning",
            category: "compatibility",
            path: `${path}/security/allowInsecure`,
            message: "\"allowInsecure\" is scheduled for removal in Xray-core after 2026-06-01.",
            suggestion: "Use pinnedPeerCertSha256 and verifyPeerCertByName instead."
        }));
    }
    return issues;
}
export const xray265Adapter = {
    id: adapterId,
    versionRange: ">=26.5.0 <27.0.0",
    latestTestedVersion: "26.5.3",
    capabilities: xray265Capabilities,
    validateCompatibility(profile) {
        return profile.inbounds.flatMap((inbound, index) => validateInbound(inbound, index));
    }
};
//# sourceMappingURL=xray-26-5.js.map