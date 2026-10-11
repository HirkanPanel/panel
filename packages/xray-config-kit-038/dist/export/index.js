import { buildXrayConfig, compileStreamSettings } from "../core/compiler.js";
import { base64EncodeUtf8 } from "../core/base64.js";
import { makeIssue } from "../core/issues.js";
function encode(value) {
    return encodeURIComponent(value);
}
function displayHost(inbound, host) {
    if (host)
        return host;
    if (inbound.listen && inbound.listen !== "0.0.0.0" && inbound.listen !== "::" && inbound.listen !== "[::]")
        return inbound.listen;
    return "example.com";
}
function findInbound(profile, tag) {
    const inbound = profile.inbounds.find((candidate) => candidate.tag === tag);
    return inbound?.protocol === "unmanaged" ? undefined : inbound;
}
function findClient(inbound, clientId) {
    if (inbound.protocol === "vless") {
        return inbound.clients.find((client) => client.id === clientId || client.email === clientId);
    }
    if (inbound.protocol === "trojan") {
        return inbound.clients.find((client) => client.password === clientId || client.email === clientId);
    }
    return inbound.clients.find((client) => client.password === clientId || client.email === clientId);
}
function appendTransportParams(params, transport) {
    params.set("type", transport.type);
    if (transport.type === "tcp") {
        params.set("headerType", transport.header?.type ?? "none");
    }
    if (transport.type === "grpc") {
        params.set("serviceName", transport.serviceName);
        if (transport.authority)
            params.set("authority", transport.authority);
        if (transport.multiMode)
            params.set("mode", "multi");
    }
    if (transport.type === "xhttp") {
        if (transport.path)
            params.set("path", transport.path);
        if (transport.host)
            params.set("host", transport.host);
        if (transport.mode)
            params.set("mode", transport.mode);
    }
    if (transport.type === "ws") {
        if (transport.path)
            params.set("path", transport.path);
        if (transport.host)
            params.set("host", transport.host);
    }
}
function appendSecurityParams(params, security) {
    params.set("security", security.type);
    if (security.type === "tls") {
        if (security.serverName)
            params.set("sni", security.serverName);
        if (security.fingerprint)
            params.set("fp", security.fingerprint);
        if (security.alpn?.length)
            params.set("alpn", security.alpn.join(","));
        return;
    }
    if (security.type === "reality") {
        if (!security.publicKey) {
            throw new Error("REALITY client link generation requires security.publicKey.");
        }
        params.set("pbk", security.publicKey);
        params.set("sni", security.serverNames[0] ?? "");
        params.set("sid", security.shortIds[0] ?? "");
        if (security.spiderX)
            params.set("spx", security.spiderX);
        if (security.fingerprint)
            params.set("fp", security.fingerprint);
        if (security.mldsa65Verify)
            params.set("mldsa65Verify", security.mldsa65Verify);
    }
}
function linkRemark(inbound, client, options) {
    return options.remark ?? client.email ?? `${inbound.tag}-${client.protocol}`;
}
export function generateClientLink(profile, options) {
    const inbound = findInbound(profile, options.inboundTag);
    if (!inbound)
        throw new Error(`Inbound "${options.inboundTag}" was not found or is unmanaged.`);
    const client = findClient(inbound, options.clientId);
    if (!client)
        throw new Error(`Client "${options.clientId}" was not found in inbound "${options.inboundTag}".`);
    if (client.enabled === false)
        throw new Error(`Client "${options.clientId}" is disabled.`);
    const host = displayHost(inbound, options.host);
    const port = options.port ?? inbound.port;
    const remark = encode(linkRemark(inbound, client, options));
    if (inbound.protocol === "vless" && client.protocol === "vless") {
        const params = new URLSearchParams();
        params.set("encryption", "none");
        if (client.flow)
            params.set("flow", client.flow);
        appendTransportParams(params, inbound.transport);
        appendSecurityParams(params, inbound.security);
        return `vless://${client.id}@${host}:${port}?${params.toString()}#${remark}`;
    }
    if (inbound.protocol === "trojan" && client.protocol === "trojan") {
        const params = new URLSearchParams();
        appendTransportParams(params, inbound.transport);
        appendSecurityParams(params, inbound.security);
        return `trojan://${encode(client.password)}@${host}:${port}?${params.toString()}#${remark}`;
    }
    if (inbound.protocol === "shadowsocks" && client.protocol === "shadowsocks") {
        const method = client.method ?? inbound.method;
        const userInfo = base64EncodeUtf8(`${method}:${client.password}`);
        return `ss://${userInfo}@${host}:${port}#${remark}`;
    }
    throw new Error(`Client protocol "${client.protocol}" does not match inbound "${inbound.protocol}".`);
}
function compileRealityClient(security) {
    if (!security.publicKey)
        throw new Error("REALITY xray-json subscription requires security.publicKey.");
    return {
        fingerprint: security.fingerprint ?? "chrome",
        serverName: security.serverNames[0] ?? "",
        publicKey: security.publicKey,
        shortId: security.shortIds[0] ?? "",
        spiderX: security.spiderX ?? "/",
        mldsa65Verify: security.mldsa65Verify
    };
}
function compileClientStream(transport, security) {
    if (security.type !== "reality")
        return compileStreamSettings(transport, security);
    const base = compileStreamSettings(transport, { type: "none" });
    return {
        ...base,
        security: "reality",
        realitySettings: compileRealityClient(security)
    };
}
function outboundTag(inbound, client) {
    return `client-${inbound.tag}-${client.email ?? (client.protocol === "vless" ? client.id.slice(0, 8) : client.password.slice(0, 8))}`;
}
function compileClientOutbound(inbound, client, host) {
    const address = displayHost(inbound, host);
    if (inbound.protocol === "vless" && client.protocol === "vless") {
        return {
            tag: outboundTag(inbound, client),
            protocol: "vless",
            settings: {
                vnext: [
                    {
                        address,
                        port: inbound.port,
                        users: [
                            {
                                id: client.id,
                                encryption: "none",
                                flow: client.flow,
                                level: client.level
                            }
                        ]
                    }
                ]
            },
            streamSettings: compileClientStream(inbound.transport, inbound.security)
        };
    }
    if (inbound.protocol === "trojan" && client.protocol === "trojan") {
        return {
            tag: outboundTag(inbound, client),
            protocol: "trojan",
            settings: {
                servers: [
                    {
                        address,
                        port: inbound.port,
                        password: client.password,
                        email: client.email,
                        level: client.level
                    }
                ]
            },
            streamSettings: compileClientStream(inbound.transport, inbound.security)
        };
    }
    if (inbound.protocol === "shadowsocks" && client.protocol === "shadowsocks") {
        return {
            tag: outboundTag(inbound, client),
            protocol: "shadowsocks",
            settings: {
                servers: [
                    {
                        address,
                        port: inbound.port,
                        method: client.method ?? inbound.method,
                        password: client.password,
                        email: client.email,
                        level: client.level
                    }
                ]
            }
        };
    }
    throw new Error("Inbound and client protocol mismatch.");
}
function selectedClients(profile, options) {
    const selected = new Set(options.clients ?? []);
    const result = [];
    for (const inbound of profile.inbounds) {
        if (inbound.protocol === "unmanaged")
            continue;
        const clients = inbound.protocol === "shadowsocks" ? inbound.clients : inbound.clients;
        for (const client of clients) {
            const ids = [
                client.email,
                client.protocol === "vless" ? client.id : client.password
            ].filter((value) => typeof value === "string");
            if (client.enabled === false && !options.includeDisabled)
                continue;
            if (selected.size > 0 && !ids.some((id) => selected.has(id)))
                continue;
            result.push([inbound, client]);
        }
    }
    return result;
}
export function generateSubscription(profile, options) {
    const issues = [];
    const entries = selectedClients(profile, options);
    if (options.format === "xray-json") {
        const outbounds = [];
        for (const [inbound, client] of entries) {
            try {
                outbounds.push(compileClientOutbound(inbound, client, options.host));
            }
            catch (error) {
                issues.push(makeIssue({
                    code: "XCK_SUBSCRIPTION_CLIENT_OUTBOUND_FAILED",
                    severity: "warning",
                    category: "suggestion",
                    path: `/inbounds/${profile.inbounds.indexOf(inbound)}`,
                    message: "Could not generate xray-json outbound for a client.",
                    suggestion: error instanceof Error ? error.message : undefined
                }));
            }
        }
        const config = buildXrayConfig({
            schemaVersion: "xck.v1",
            inbounds: [],
            outbounds: [
                { protocol: "freedom", tag: "direct", settings: { domainStrategy: "AsIs" } },
                { protocol: "blackhole", tag: "block", settings: { response: { type: "none" } } },
                ...outbounds.map((raw, index) => ({ protocol: "unmanaged", tag: `client-${index}`, editable: false, raw }))
            ]
        }, { mode: "permissive" }).config;
        return {
            format: options.format,
            content: JSON.stringify(config, null, 2),
            entries: outbounds.length,
            issues
        };
    }
    const links = [];
    for (const [inbound, client] of entries) {
        try {
            links.push(generateClientLink(profile, {
                inboundTag: inbound.tag,
                clientId: client.email ?? (client.protocol === "vless" ? client.id : client.password),
                host: options.host
            }));
        }
        catch (error) {
            issues.push(makeIssue({
                code: "XCK_SUBSCRIPTION_LINK_FAILED",
                severity: "warning",
                category: "suggestion",
                path: `/inbounds/${profile.inbounds.indexOf(inbound)}`,
                message: "Could not generate a subscription link for a client.",
                suggestion: error instanceof Error ? error.message : undefined
            }));
        }
    }
    const content = links.join("\n");
    return {
        format: options.format,
        content: options.format === "links-base64" ? base64EncodeUtf8(content) : content,
        entries: links.length,
        issues
    };
}
//# sourceMappingURL=index.js.map