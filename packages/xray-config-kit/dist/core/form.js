import { fieldDefinitions, fieldFlags, getGeneratedInboundFormMetadata, getGeneratedOutboundFormMetadata, getGeneratedRoutingRuleFields } from "../adapters/xray/form-metadata.js";
import { getCapabilities } from "../adapters/xray/registry.js";
import { validateProfile } from "./validate.js";
const placeholderUuid = "00000000-0000-4000-8000-000000000000";
const placeholderKey32 = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
function defaultTransport(type = "tcp") {
    if (type === "grpc")
        return { type: "grpc", serviceName: "" };
    if (type === "xhttp")
        return { type: "xhttp", path: "/", mode: "auto" };
    if (type === "ws")
        return { type: "ws", path: "/" };
    if (type === "httpupgrade")
        return { type: "httpupgrade", path: "/" };
    if (type === "kcp")
        return { type: "kcp" };
    if (type === "hysteria")
        return { type: "hysteria", version: 2, udpIdleTimeout: 60 };
    return { type: "tcp", header: { type: "none" } };
}
function defaultSecurity(type = "none") {
    if (type === "tls")
        return { type: "tls", serverName: "" };
    if (type === "reality") {
        return {
            type: "reality",
            serverNames: ["example.com"],
            privateKey: placeholderKey32,
            publicKey: placeholderKey32,
            shortIds: ["a1b2c3d4"],
            target: "example.com:443",
            fingerprint: "chrome",
            spiderX: "/"
        };
    }
    return { type: "none" };
}
function defaultNonRealitySecurity(type = "none") {
    if (type === "tls")
        return { type: "tls", serverName: "" };
    return { type: "none" };
}
function assertCreateDefaultInboundOptions(options) {
    const unsafe = options;
    const protocol = unsafe.protocol;
    const hasStreamSecurity = unsafe.security !== undefined;
    const hasTransport = unsafe.transport !== undefined;
    if (protocol === "http" ||
        protocol === "mixed" ||
        protocol === "socks" ||
        protocol === "dokodemo-door" ||
        protocol === "tunnel" ||
        protocol === "tun" ||
        protocol === "wireguard") {
        if (hasStreamSecurity)
            throw new TypeError(`${protocol} default inbound does not support stream security options.`);
        if (hasTransport)
            throw new TypeError(`${protocol} default inbound does not support transport options.`);
    }
    if (protocol === "vmess" && unsafe.security === "reality") {
        throw new TypeError("VMess default inbound supports only none or TLS security.");
    }
    if ((protocol === "shadowsocks" || protocol === "hysteria") && unsafe.security === "reality") {
        throw new TypeError(`${protocol} default inbound supports only none or TLS security.`);
    }
    if (protocol === "hysteria" && hasTransport) {
        throw new TypeError("Hysteria default inbound uses the hysteria transport and does not accept a transport option.");
    }
}
function normalizeDefaultInboundListen(listen) {
    if (listen === undefined)
        return {};
    const t = listen.trim();
    if (t === "" || t === "0.0.0.0" || t === "::" || t === "[::]")
        return {};
    return { listen: t };
}
function defaultInboundPort(port) {
    if (port === undefined)
        return {};
    return { port };
}
const defaultInboundProtocols = [
    "vmess",
    "vless",
    "trojan",
    "shadowsocks",
    "hysteria",
    "http",
    "mixed",
    "socks",
    "dokodemo-door",
    "tunnel",
    "tun",
    "wireguard"
];
function isDefaultInboundProtocol(protocol) {
    return defaultInboundProtocols.includes(protocol);
}
const inboundSecurityFieldKeysByType = {
    tls: [
        "serverName",
        "alpn",
        "fingerprint",
        "allowInsecure",
        "enableSessionResumption",
        "disableSystemRoot",
        "minVersion",
        "maxVersion",
        "cipherSuites",
        "rejectUnknownSni",
        "curvePreferences",
        "masterKeyLog",
        "pinnedPeerCertSha256",
        "verifyPeerCertByName",
        "echServerKeys",
        "echConfigList",
        "echForceQuery",
        "echSockopt"
    ],
    reality: [
        "serverNames",
        "privateKey",
        "publicKey",
        "shortIds",
        "target",
        "fingerprint",
        "spiderX",
        "mldsa65Seed",
        "mldsa65Verify",
        "maxTimeDiff",
        "show"
    ]
};
function inboundSecurityFields(type, rows) {
    const byKey = new Map(rows.map((row) => [row.json, row]));
    return inboundSecurityFieldKeysByType[type].flatMap((key) => {
        if (key === "target")
            return [{ json: "target", go: "Target", type: "string" }];
        const field = byKey.get(key);
        return field ? [field] : [];
    });
}
export function createDefaultInboundForProtocol(options) {
    const base = {
        tag: options.tag,
        listen: options.listen,
        port: options.port,
        clientDefaults: options.clientDefaults
    };
    if (options.protocol === "vmess") {
        return createDefaultInbound({
            protocol: "vmess",
            ...base,
            transport: options.transport,
            security: options.security === "tls" ? "tls" : "none"
        });
    }
    if (options.protocol === "vless") {
        return createDefaultInbound({
            protocol: "vless",
            ...base,
            transport: options.transport,
            security: options.security
        });
    }
    if (options.protocol === "trojan") {
        return createDefaultInbound({
            protocol: "trojan",
            ...base,
            transport: options.transport,
            security: options.security
        });
    }
    if (options.protocol === "shadowsocks") {
        return createDefaultInbound({
            protocol: "shadowsocks",
            ...base,
            transport: options.transport,
            security: options.security === "tls" ? "tls" : "none"
        });
    }
    if (options.protocol === "hysteria") {
        return createDefaultInbound({
            protocol: "hysteria",
            ...base,
            security: options.security === "none" ? "none" : "tls"
        });
    }
    return createDefaultInbound({
        protocol: options.protocol,
        ...base
    });
}
export function createDefaultInbound(options) {
    const typedOptions = options;
    assertCreateDefaultInboundOptions(typedOptions);
    const tag = typedOptions.tag ?? "";
    const listenFields = normalizeDefaultInboundListen(typedOptions.listen);
    const portFields = defaultInboundPort(typedOptions.port);
    if (typedOptions.protocol === "vmess") {
        return {
            kind: "inbound",
            protocol: "vmess",
            tag,
            ...listenFields,
            ...portFields,
            clients: typedOptions.clientDefaults === "empty"
                ? []
                : [{ protocol: "vmess", id: placeholderUuid, security: "auto", email: "user" }],
            security: typedOptions.security === "tls" ? { type: "tls", serverName: "" } : { type: "none" },
            transport: defaultTransport(typedOptions.transport)
        };
    }
    if (typedOptions.protocol === "vless") {
        return {
            kind: "inbound",
            protocol: "vless",
            tag,
            ...listenFields,
            ...portFields,
            clients: typedOptions.clientDefaults === "empty"
                ? []
                : [{ protocol: "vless", id: placeholderUuid, email: "user" }],
            security: defaultSecurity(typedOptions.security),
            transport: defaultTransport(typedOptions.transport),
            decryption: "none"
        };
    }
    if (typedOptions.protocol === "trojan") {
        return {
            kind: "inbound",
            protocol: "trojan",
            tag,
            ...listenFields,
            ...portFields,
            clients: typedOptions.clientDefaults === "empty"
                ? []
                : [{ protocol: "trojan", password: "change-me-trojan-password", email: "user" }],
            security: defaultSecurity(typedOptions.security === "reality" ? "reality" : typedOptions.security ?? "tls"),
            transport: defaultTransport(typedOptions.transport)
        };
    }
    if (typedOptions.protocol === "shadowsocks") {
        const usesStreamSettings = typedOptions.security !== undefined || typedOptions.transport !== undefined;
        const useEmptyClients = typedOptions.clientDefaults === "empty";
        const inbound = {
            kind: "inbound",
            protocol: "shadowsocks",
            tag,
            ...listenFields,
            ...portFields,
            method: useEmptyClients ? undefined : "chacha20-poly1305",
            password: undefined,
            network: "tcp,udp",
            clients: useEmptyClients ? [] : [{ protocol: "shadowsocks", password: "change-me-client-password", email: "user" }]
        };
        if (!usesStreamSettings)
            return inbound;
        return {
            ...inbound,
            security: defaultNonRealitySecurity(typedOptions.security),
            transport: defaultTransport(typedOptions.transport)
        };
    }
    if (typedOptions.protocol === "hysteria") {
        return {
            kind: "inbound",
            protocol: "hysteria",
            tag,
            ...listenFields,
            ...portFields,
            version: 2,
            clients: typedOptions.clientDefaults === "empty"
                ? []
                : [{ protocol: "hysteria", auth: "change-me-hysteria-auth", email: "user" }],
            security: typedOptions.security === "none" ? { type: "none" } : { type: "tls", serverName: "" },
            transport: { type: "hysteria", version: 2, udpIdleTimeout: 60 }
        };
    }
    if (typedOptions.protocol === "http") {
        return {
            kind: "inbound",
            protocol: "http",
            tag,
            ...listenFields,
            ...portFields,
            accounts: [{ user: "user", pass: "change-me-http-password" }]
        };
    }
    if (typedOptions.protocol === "mixed" || typedOptions.protocol === "socks") {
        return {
            kind: "inbound",
            protocol: typedOptions.protocol,
            tag,
            ...listenFields,
            ...portFields,
            auth: "password",
            accounts: [{ user: "user", pass: "change-me-socks-password" }],
            udp: true,
            ip: "127.0.0.1"
        };
    }
    if (typedOptions.protocol === "dokodemo-door" || typedOptions.protocol === "tunnel") {
        return {
            kind: "inbound",
            protocol: typedOptions.protocol,
            tag,
            ...listenFields,
            ...portFields,
            network: "tcp"
        };
    }
    if (typedOptions.protocol === "tun") {
        return {
            kind: "inbound",
            protocol: "tun",
            tag,
            ...listenFields,
            name: "xray0",
            mtu: 1500,
            gateway: ["198.18.0.1/15"],
            dns: ["1.1.1.1"],
            autoOutboundsInterface: "auto"
        };
    }
    return {
        kind: "inbound",
        protocol: "wireguard",
        tag,
        ...listenFields,
        ...portFields,
        secretKey: placeholderKey32,
        publicKey: placeholderKey32,
        address: ["10.0.0.1/24"],
        peers: [
            {
                publicKey: placeholderKey32,
                allowedIPs: ["10.0.0.2/32"],
                keepAlive: 25
            }
        ],
        mtu: 1420,
        noKernelTun: false
    };
}
export function getInboundFormCapabilities(options = {}) {
    const capabilities = getCapabilities(options);
    const metadata = getGeneratedInboundFormMetadata(options);
    const protocolRows = metadata.protocols.filter((entry) => isDefaultInboundProtocol(entry.protocol));
    const securityFieldRowsByType = Object.fromEntries(Object.entries(metadata.securityFieldsByType).map(([type, rows]) => [
        type,
        type === "tls" || type === "reality" ? inboundSecurityFields(type, rows) : rows
    ]));
    const settingsFieldOrderByProtocol = Object.fromEntries(Object.entries(metadata.settingsFieldsByProtocol).map(([protocol, rows]) => [protocol, rows.map((row) => row.json)]));
    const securityFieldOrderByType = Object.fromEntries(Object.entries(securityFieldRowsByType).map(([type, rows]) => [type, rows.map((row) => row.json)]));
    const transportFieldRowsByType = metadata.transportSettingsByType;
    const transportSettingsFieldOrderByType = Object.fromEntries(Object.entries(transportFieldRowsByType).map(([type, rows]) => [type, rows.map((row) => row.json)]));
    return {
        protocols: Object.fromEntries(protocolRows.map((entry) => [entry.protocol, true])),
        protocolConfigs: Object.fromEntries(protocolRows.map((entry) => [entry.protocol, entry.config])),
        protocolOrder: protocolRows.map((entry) => entry.protocol),
        transports: Object.fromEntries(capabilities.transports.map((item) => [item, true])),
        securities: Object.fromEntries(capabilities.securities.map((item) => [item, true])),
        securityFields: Object.fromEntries(Object.entries(securityFieldRowsByType).map(([type, rows]) => [
            type,
            fieldFlags(rows)
        ])),
        securityFieldDefinitions: Object.fromEntries(Object.entries(securityFieldRowsByType).map(([type, rows]) => [
            type,
            fieldDefinitions(rows)
        ])),
        securityFieldOrderByType,
        transportSettingsFields: Object.fromEntries(Object.entries(transportFieldRowsByType).map(([type, rows]) => [
            type,
            fieldFlags(rows)
        ])),
        transportSettingsFieldDefinitions: Object.fromEntries(Object.entries(transportFieldRowsByType).map(([type, rows]) => [
            type,
            fieldDefinitions(rows)
        ])),
        transportSettingsFieldOrderByType,
        settingsFields: Object.fromEntries(Object.entries(metadata.settingsFieldsByProtocol).map(([protocol, rows]) => [
            protocol,
            fieldFlags(rows)
        ])),
        settingsFieldDefinitions: Object.fromEntries(Object.entries(metadata.settingsFieldsByProtocol).map(([protocol, rows]) => [
            protocol,
            fieldDefinitions(rows)
        ])),
        settingsFieldOrderByProtocol,
        clientLinks: {
            vmess: capabilities.protocols.includes("vmess"),
            vless: capabilities.protocols.includes("vless"),
            trojan: capabilities.protocols.includes("trojan"),
            shadowsocks: capabilities.protocols.includes("shadowsocks"),
            hysteria: false,
            wireguard: capabilities.protocols.includes("wireguard")
        }
    };
}
export function getInboundFieldVisibility(draft, _capabilities = getInboundFormCapabilities()) {
    const stream = draft.protocol === "vmess" || draft.protocol === "vless" || draft.protocol === "trojan" || draft.protocol === "shadowsocks" || draft.protocol === "hysteria";
    const security = "security" in draft ? draft.security : undefined;
    return {
        clients: "clients" in draft,
        accounts: draft.protocol === "http" || draft.protocol === "mixed" || draft.protocol === "socks",
        wireguardPeers: draft.protocol === "wireguard",
        tun: draft.protocol === "tun",
        dokodemo: draft.protocol === "dokodemo-door" || draft.protocol === "tunnel",
        stream,
        tls: security?.type === "tls",
        reality: security?.type === "reality",
        shadowsocks: draft.protocol === "shadowsocks",
        sniffing: draft.protocol !== "wireguard",
        advancedStream: stream
    };
}
function uniqueStrings(values) {
    return [...new Set(values.filter((value) => typeof value === "string" && value.length > 0))];
}
function resolveRoutingCapabilityInput(input) {
    if (!input)
        return {};
    if ("profile" in input || "xrayVersion" in input)
        return input;
    return { profile: input };
}
export function createDefaultRoutingRule(options = {}) {
    const rule = {
        type: "field",
        ...options
    };
    if (rule.outboundTag === undefined && rule.balancerTag === undefined) {
        return { ...rule, outboundTag: "direct" };
    }
    return rule;
}
export function createDefaultRoutingBalancer(options = {}) {
    return {
        tag: options.tag ?? "balanced",
        selector: options.selector ?? ["proxy-"],
        strategy: options.strategy,
        fallbackTag: options.fallbackTag
    };
}
export function getRoutingRuleFormCapabilities(input) {
    const options = resolveRoutingCapabilityInput(input);
    const fields = getGeneratedRoutingRuleFields(options);
    const profile = options.profile;
    return {
        fields: fieldFlags(fields),
        fieldDefinitions: fieldDefinitions(fields),
        fieldOrder: fields.map((field) => field.json),
        networks: {
            tcp: true,
            udp: true,
            unix: true,
            "tcp,udp": true
        },
        protocols: {
            http: true,
            tls: true,
            bittorrent: true
        },
        inboundTags: uniqueStrings(profile?.inbounds?.map((inbound) => inbound.tag) ?? []),
        outboundTags: uniqueStrings(profile?.outbounds?.map((outbound) => outbound.tag) ?? []),
        balancerTags: uniqueStrings(profile?.routing?.balancers?.map((balancer) => balancer.tag) ?? [])
    };
}
export function getRoutingRuleFieldVisibility(_draft, capabilities = getRoutingRuleFormCapabilities()) {
    return capabilities.fields;
}
export function createDefaultOutbound(options) {
    const protocol = options.protocol === "direct"
        ? "freedom"
        : options.protocol === "block"
            ? "blackhole"
            : options.protocol;
    const tag = options.tag ?? (protocol === "freedom" ? "direct" : protocol === "blackhole" ? "block" : `${protocol}-outbound`);
    const envelope = {
        sendThrough: options.sendThrough,
        streamSettings: options.streamSettings,
        proxySettings: options.proxySettings,
        mux: options.mux,
        targetStrategy: options.targetStrategy
    };
    if (protocol === "freedom") {
        return {
            protocol,
            tag,
            settings: options.settings,
            ...envelope
        };
    }
    if (protocol === "blackhole") {
        return {
            protocol,
            tag,
            settings: options.settings,
            ...envelope
        };
    }
    if (protocol === "dns") {
        return {
            protocol,
            tag,
            settings: options.settings,
            ...envelope
        };
    }
    return {
        protocol: protocol,
        tag,
        settings: options.settings ?? {},
        raw: [],
        ...envelope
    };
}
export function getOutboundFormCapabilities(options = {}) {
    const metadata = getGeneratedOutboundFormMetadata(options);
    const settingsFieldOrderByProtocol = Object.fromEntries(Object.entries(metadata.settingsFieldsByProtocol).map(([protocol, rows]) => [protocol, rows.map((row) => row.json)]));
    return {
        protocols: Object.fromEntries(metadata.protocols.map((entry) => [entry.protocol, true])),
        protocolConfigs: Object.fromEntries(metadata.protocols.map((entry) => [entry.protocol, entry.config])),
        envelopeFields: fieldFlags(metadata.envelopeFields),
        envelopeFieldDefinitions: fieldDefinitions(metadata.envelopeFields),
        envelopeFieldOrder: metadata.envelopeFields.map((field) => field.json),
        settingsFields: Object.fromEntries(Object.entries(metadata.settingsFieldsByProtocol).map(([protocol, rows]) => [
            protocol,
            fieldFlags(rows)
        ])),
        settingsFieldDefinitions: Object.fromEntries(Object.entries(metadata.settingsFieldsByProtocol).map(([protocol, rows]) => [
            protocol,
            fieldDefinitions(rows)
        ])),
        settingsFieldOrderByProtocol,
        streamFields: fieldFlags(metadata.streamFields),
        streamFieldDefinitions: fieldDefinitions(metadata.streamFields),
        streamFieldOrder: metadata.streamFields.map((field) => field.json),
        muxFields: fieldFlags(metadata.muxFields),
        muxFieldDefinitions: fieldDefinitions(metadata.muxFields),
        proxySettingsFields: fieldFlags(metadata.proxySettingsFields),
        proxySettingsFieldDefinitions: fieldDefinitions(metadata.proxySettingsFields)
    };
}
export function getOutboundFieldVisibility(draft, capabilities = getOutboundFormCapabilities()) {
    if (draft.protocol === "unmanaged") {
        return {
            settings: false,
            streamSettings: false,
            mux: false,
            proxySettings: false,
            raw: true
        };
    }
    return {
        settings: Object.keys(capabilities.settingsFields[draft.protocol] ?? {}).length > 0 || "settings" in draft,
        streamSettings: capabilities.envelopeFields.streamSettings === true,
        mux: capabilities.envelopeFields.mux === true,
        proxySettings: capabilities.envelopeFields.proxySettings === true,
        raw: true
    };
}
export function validateInboundDraft(draft, options = {}) {
    return validateProfile({
        schemaVersion: "xck.v1",
        inbounds: [draft]
    }, options).issues.map((issue) => ({
        ...issue,
        path: issue.path.replace(/^\/inbounds\/1/, "")
    }));
}
export function validateRoutingRuleDraft(draft, options = {}) {
    return validateProfile({
        schemaVersion: "xck.v1",
        inbounds: [],
        routing: {
            rules: [draft]
        }
    }, options).issues.map((issue) => ({
        ...issue,
        path: issue.path.replace(/^\/routing\/rules\/0/, "")
    }));
}
export function validateOutboundDraft(draft, options = {}) {
    return validateProfile({
        schemaVersion: "xck.v1",
        inbounds: [],
        outbounds: [draft]
    }, options).issues.map((issue) => ({
        ...issue,
        path: issue.path.replace(/^\/outbounds\/1/, "")
    }));
}
//# sourceMappingURL=form.js.map