import { knownXrayTopLevelKeys } from "../xray-json/index.js";
import { createProfile } from "../core/profile.js";
import { isJsonObject } from "../core/json.js";
import { makeIssue } from "../core/issues.js";
const knownTopLevel = new Set(knownXrayTopLevelKeys);
function pointerSegment(input) {
    return input.replace(/~/g, "~0").replace(/\//g, "~1");
}
function asString(value) {
    return typeof value === "string" ? value : undefined;
}
function asNumber(value) {
    return typeof value === "number" && Number.isInteger(value) ? value : undefined;
}
function asStringArray(value) {
    return Array.isArray(value) && value.every((item) => typeof item === "string") ? [...value] : undefined;
}
function asObjectArray(value) {
    return Array.isArray(value) && value.every(isJsonObject) ? [...value] : undefined;
}
function parseSecurity(streamSettings) {
    const securityType = String(streamSettings?.security ?? "none").toLowerCase();
    if (securityType === "none" || securityType === "")
        return { type: "none" };
    if (securityType === "tls") {
        const tls = isJsonObject(streamSettings?.tlsSettings) ? streamSettings.tlsSettings : {};
        return {
            type: "tls",
            serverName: asString(tls.serverName),
            alpn: asStringArray(tls.alpn),
            fingerprint: asString(tls.fingerprint),
            allowInsecure: typeof tls.allowInsecure === "boolean" ? tls.allowInsecure : undefined,
            pinnedPeerCertSha256: asString(tls.pinnedPeerCertSha256),
            verifyPeerCertByName: asString(tls.verifyPeerCertByName)?.split(",").map((value) => value.trim()).filter(Boolean)
        };
    }
    if (securityType === "reality") {
        const reality = isJsonObject(streamSettings?.realitySettings) ? streamSettings.realitySettings : {};
        const target = reality.target ?? reality.dest;
        return {
            type: "reality",
            serverNames: asStringArray(reality.serverNames) ?? [],
            privateKey: asString(reality.privateKey) ?? "",
            publicKey: asString(reality.publicKey),
            shortIds: asStringArray(reality.shortIds) ?? [],
            target: typeof target === "string" || typeof target === "number" ? target : "",
            spiderX: asString(reality.spiderX),
            fingerprint: asString(reality.fingerprint),
            mldsa65Seed: asString(reality.mldsa65Seed),
            mldsa65Verify: asString(reality.mldsa65Verify),
            maxTimeDiff: asNumber(reality.maxTimeDiff),
            show: typeof reality.show === "boolean" ? reality.show : undefined
        };
    }
    return undefined;
}
function parseTransport(streamSettings) {
    const network = String(streamSettings?.network ?? "tcp").toLowerCase();
    if (network === "tcp" || network === "raw") {
        const settings = isJsonObject(streamSettings?.tcpSettings) ? streamSettings.tcpSettings : isJsonObject(streamSettings?.rawSettings) ? streamSettings.rawSettings : {};
        return {
            type: "tcp",
            acceptProxyProtocol: typeof settings.acceptProxyProtocol === "boolean" ? settings.acceptProxyProtocol : undefined,
            header: isJsonObject(settings.header) ? settings.header : undefined
        };
    }
    if (network === "grpc") {
        const settings = isJsonObject(streamSettings?.grpcSettings) ? streamSettings.grpcSettings : {};
        return {
            type: "grpc",
            serviceName: asString(settings.serviceName) ?? "",
            authority: asString(settings.authority),
            multiMode: typeof settings.multiMode === "boolean" ? settings.multiMode : undefined,
            idleTimeout: asNumber(settings.idle_timeout),
            healthCheckTimeout: asNumber(settings.health_check_timeout),
            permitWithoutStream: typeof settings.permit_without_stream === "boolean" ? settings.permit_without_stream : undefined,
            initialWindowsSize: asNumber(settings.initial_windows_size),
            userAgent: asString(settings.user_agent)
        };
    }
    if (network === "xhttp" || network === "splithttp") {
        const settings = isJsonObject(streamSettings?.xhttpSettings)
            ? streamSettings.xhttpSettings
            : isJsonObject(streamSettings?.splithttpSettings)
                ? streamSettings.splithttpSettings
                : {};
        return {
            type: "xhttp",
            path: asString(settings.path),
            host: asString(settings.host),
            mode: asString(settings.mode),
            extra: {
                headers: isJsonObject(settings.headers) ? settings.headers : undefined,
                xmux: isJsonObject(settings.xmux) ? settings.xmux : undefined
            }
        };
    }
    if (network === "ws" || network === "websocket") {
        const settings = isJsonObject(streamSettings?.wsSettings) ? streamSettings.wsSettings : {};
        return {
            type: "ws",
            path: asString(settings.path),
            host: asString(settings.host),
            headers: isJsonObject(settings.headers) ? settings.headers : undefined,
            acceptProxyProtocol: typeof settings.acceptProxyProtocol === "boolean" ? settings.acceptProxyProtocol : undefined,
            heartbeatPeriod: asNumber(settings.heartbeatPeriod)
        };
    }
    if (network === "kcp" || network === "mkcp") {
        const settings = isJsonObject(streamSettings?.kcpSettings) ? streamSettings.kcpSettings : {};
        return {
            type: "kcp",
            mtu: asNumber(settings.mtu),
            tti: asNumber(settings.tti),
            uplinkCapacity: asNumber(settings.uplinkCapacity),
            downlinkCapacity: asNumber(settings.downlinkCapacity),
            cwndMultiplier: asNumber(settings.cwndMultiplier),
            maxSendingWindow: asNumber(settings.maxSendingWindow)
        };
    }
    return undefined;
}
function parseFallbacks(settings) {
    return asObjectArray(settings.fallbacks);
}
function parseInbound(raw, index, issues) {
    const protocol = asString(raw.protocol);
    const tag = asString(raw.tag) ?? `${protocol ?? "inbound"}-${index}`;
    const listen = asString(raw.listen);
    const port = asNumber(raw.port) ?? 1;
    const settings = isJsonObject(raw.settings) ? raw.settings : {};
    const streamSettings = isJsonObject(raw.streamSettings) ? raw.streamSettings : undefined;
    const security = parseSecurity(streamSettings);
    const transport = parseTransport(streamSettings);
    if (protocol === "vless" && security && transport) {
        const clients = asObjectArray(settings.clients)?.map((client) => ({
            protocol: "vless",
            id: asString(client.id) ?? "",
            email: asString(client.email),
            flow: asString(client.flow) === "xtls-rprx-vision" ? "xtls-rprx-vision" : undefined,
            level: asNumber(client.level)
        })) ?? [];
        return {
            kind: "inbound",
            protocol: "vless",
            tag,
            listen,
            port,
            clients,
            security,
            transport,
            decryption: asString(settings.decryption),
            fallbacks: parseFallbacks(settings)
        };
    }
    if (protocol === "trojan" && security && security.type !== "reality" && transport) {
        const clients = asObjectArray(settings.clients)?.map((client) => ({
            protocol: "trojan",
            password: asString(client.password) ?? "",
            email: asString(client.email),
            level: asNumber(client.level)
        })) ?? [];
        return {
            kind: "inbound",
            protocol: "trojan",
            tag,
            listen,
            port,
            clients,
            security,
            transport,
            fallbacks: parseFallbacks(settings)
        };
    }
    if (protocol === "shadowsocks") {
        const clients = asObjectArray(settings.clients)?.map((client) => ({
            protocol: "shadowsocks",
            password: asString(client.password) ?? "",
            method: asString(client.method),
            email: asString(client.email),
            level: asNumber(client.level)
        })) ?? [];
        return {
            kind: "inbound",
            protocol: "shadowsocks",
            tag,
            listen,
            port,
            method: asString(settings.method),
            password: asString(settings.password),
            network: asString(settings.network),
            clients
        };
    }
    issues.push(makeIssue({
        code: "XCK_IMPORT_UNMANAGED_INBOUND",
        severity: "warning",
        category: "import",
        path: `/inbounds/${index}`,
        message: `Inbound protocol "${protocol ?? "unknown"}" is preserved as unmanaged raw JSON.`
    }));
    return {
        kind: "inbound",
        protocol: "unmanaged",
        tag,
        editable: false,
        raw
    };
}
function parseOutbound(raw, index, issues) {
    const protocol = asString(raw.protocol);
    const tag = asString(raw.tag) ?? `${protocol ?? "outbound"}-${index}`;
    const settings = isJsonObject(raw.settings) ? raw.settings : {};
    if (protocol === "freedom")
        return { protocol, tag, settings: settings };
    if (protocol === "blackhole")
        return { protocol, tag, settings: settings };
    if (protocol === "dns")
        return { protocol, tag, settings: settings };
    issues.push(makeIssue({
        code: "XCK_IMPORT_UNMANAGED_OUTBOUND",
        severity: "warning",
        category: "import",
        path: `/outbounds/${index}`,
        message: `Outbound protocol "${protocol ?? "unknown"}" is preserved as unmanaged raw JSON.`
    }));
    return {
        protocol: "unmanaged",
        tag,
        editable: false,
        raw
    };
}
function parseRoutingRule(raw) {
    return {
        type: raw.type === "field" ? "field" : undefined,
        ruleTag: asString(raw.ruleTag),
        inboundTag: asStringArray(raw.inboundTag),
        outboundTag: asString(raw.outboundTag),
        balancerTag: asString(raw.balancerTag),
        domain: asStringArray(raw.domain),
        ip: asStringArray(raw.ip),
        port: typeof raw.port === "string" || typeof raw.port === "number" ? raw.port : undefined,
        protocol: asStringArray(raw.protocol),
        network: asString(raw.network)
    };
}
function parseRouting(raw) {
    if (!isJsonObject(raw))
        return undefined;
    const rules = asObjectArray(raw.rules)?.map(parseRoutingRule) ?? [];
    return {
        domainStrategy: asString(raw.domainStrategy),
        rules
    };
}
function parseDns(raw) {
    if (!isJsonObject(raw) || !Array.isArray(raw.servers))
        return undefined;
    return {
        servers: raw.servers
            .filter((server) => typeof server === "string" || isJsonObject(server))
            .map((server) => {
            if (typeof server === "string")
                return server;
            return {
                address: asString(server.address) ?? "",
                port: asNumber(server.port),
                domains: asStringArray(server.domains),
                expectedIPs: asStringArray(server.expectedIPs),
                skipFallback: typeof server.skipFallback === "boolean" ? server.skipFallback : undefined,
                queryStrategy: asString(server.queryStrategy),
                tag: asString(server.tag)
            };
        }),
        hosts: isJsonObject(raw.hosts) ? raw.hosts : undefined,
        queryStrategy: asString(raw.queryStrategy),
        disableCache: typeof raw.disableCache === "boolean" ? raw.disableCache : undefined,
        disableFallback: typeof raw.disableFallback === "boolean" ? raw.disableFallback : undefined
    };
}
function parseInput(input) {
    try {
        const parsed = typeof input === "string" ? JSON.parse(input) : input;
        if (!isJsonObject(parsed)) {
            return {
                issue: makeIssue({
                    code: "XCK_IMPORT_NON_OBJECT",
                    severity: "error",
                    category: "import",
                    path: "/",
                    message: "Xray config import requires a JSON object."
                })
            };
        }
        return { value: parsed };
    }
    catch (error) {
        return {
            issue: makeIssue({
                code: "XCK_IMPORT_INVALID_JSON",
                severity: "error",
                category: "import",
                path: "/",
                message: "Could not parse Xray config JSON.",
                suggestion: error instanceof Error ? error.message : undefined
            })
        };
    }
}
export function importXrayConfig(input, _options = {}) {
    const parsed = parseInput(input);
    if (!parsed.value) {
        return {
            profile: createProfile(),
            issues: parsed.issue ? [parsed.issue] : [],
            editable: 0,
            unmanaged: 0
        };
    }
    const issues = [];
    const raw = parsed.value;
    const inbounds = (asObjectArray(raw.inbounds) ?? []).map((inbound, index) => parseInbound(inbound, index, issues));
    const outbounds = (asObjectArray(raw.outbounds) ?? []).map((outbound, index) => parseOutbound(outbound, index, issues));
    const pointers = {};
    const topLevel = {};
    for (const [key, value] of Object.entries(raw)) {
        if (!knownTopLevel.has(key) && value !== undefined) {
            pointers[`/${pointerSegment(key)}`] = value;
            topLevel[key] = value;
            issues.push(makeIssue({
                code: "XCK_IMPORT_UNKNOWN_TOP_LEVEL",
                severity: "info",
                category: "import",
                path: `/${pointerSegment(key)}`,
                message: `Unknown top-level Xray config section "${key}" is preserved.`
            }));
        }
    }
    const profile = createProfile({
        inbounds,
        outbounds: outbounds.length > 0 ? outbounds : undefined,
        routing: parseRouting(raw.routing),
        dns: parseDns(raw.dns),
        log: isJsonObject(raw.log) ? raw.log : undefined,
        raw: Object.keys(topLevel).length > 0 ? { topLevel } : undefined,
        unknown: Object.keys(pointers).length > 0 ? { source: "import", pointers } : undefined
    });
    return {
        profile,
        issues,
        editable: [...inbounds, ...outbounds].filter((node) => node.protocol !== "unmanaged").length,
        unmanaged: [...inbounds, ...outbounds].filter((node) => node.protocol === "unmanaged").length
    };
}
//# sourceMappingURL=index.js.map