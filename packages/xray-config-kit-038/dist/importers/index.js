import { knownXrayTopLevelKeys } from "../xray-json/index.js";
import { createProfile, profileSourceFingerprint } from "../core/profile.js";
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
function asIntRange(value) {
    return typeof value === "number" || typeof value === "string" ? value : undefined;
}
function asBoolean(value) {
    return typeof value === "boolean" ? value : undefined;
}
/** `port` / `rewritePort` in tunnel/Dokodemo settings; integer 0..65535, string digits allowed. */
function asInboundTunnelTargetPort(value) {
    const n = asNumber(value);
    if (n !== undefined)
        return n >= 0 && n <= 65535 ? n : undefined;
    if (typeof value === "string") {
        const parsed = Number(value.trim());
        if (Number.isInteger(parsed) && parsed >= 0 && parsed <= 65535)
            return parsed;
    }
    return undefined;
}
function asStringArray(value) {
    return Array.isArray(value) && value.every((item) => typeof item === "string") ? [...value] : undefined;
}
function asStringOrStringArray(value) {
    if (typeof value === "string")
        return value;
    return asStringArray(value);
}
function asStringList(value) {
    if (typeof value === "string")
        return value.split(",").map((item) => item.trim()).filter(Boolean);
    return asStringArray(value);
}
function asObjectArray(value) {
    return Array.isArray(value) && value.every(isJsonObject) ? [...value] : undefined;
}
function asStringRecord(value) {
    if (!isJsonObject(value))
        return undefined;
    const entries = Object.entries(value);
    if (!entries.every(([, item]) => typeof item === "string"))
        return undefined;
    return Object.fromEntries(entries);
}
/** Dokodemo / tunnel `portMap`: string keys; values are host:port strings (coerce numbers if present). */
function asPortMapRecord(value) {
    if (!isJsonObject(value))
        return undefined;
    const out = {};
    for (const [k, v] of Object.entries(value)) {
        if (typeof v === "string")
            out[k] = v;
        else if (typeof v === "number" && Number.isFinite(v))
            out[k] = String(v);
        else if (typeof v === "boolean")
            out[k] = v ? "true" : "false";
    }
    return Object.keys(out).length > 0 ? out : undefined;
}
function asPortList(value) {
    return typeof value === "string" || typeof value === "number" ? value : undefined;
}
function pickUnknown(raw, known) {
    const knownSet = new Set(known);
    const output = {};
    for (const [key, value] of Object.entries(raw)) {
        if (!knownSet.has(key) && value !== undefined)
            output[key] = value;
    }
    return Object.keys(output).length > 0 ? output : undefined;
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
            enableSessionResumption: asBoolean(tls.enableSessionResumption),
            disableSystemRoot: asBoolean(tls.disableSystemRoot),
            minVersion: asString(tls.minVersion),
            maxVersion: asString(tls.maxVersion),
            cipherSuites: asString(tls.cipherSuites),
            rejectUnknownSni: asBoolean(tls.rejectUnknownSni),
            curvePreferences: asStringArray(tls.curvePreferences),
            masterKeyLog: asString(tls.masterKeyLog),
            pinnedPeerCertSha256: asString(tls.pinnedPeerCertSha256),
            verifyPeerCertByName: asString(tls.verifyPeerCertByName)?.split(",").map((value) => value.trim()).filter(Boolean)
                ?? asStringArray(tls.verifyPeerCertByName),
            echServerKeys: asString(tls.echServerKeys),
            echConfigList: asString(tls.echConfigList),
            echForceQuery: asString(tls.echForceQuery),
            echSockopt: isJsonObject(tls.echSockopt) ? tls.echSockopt : undefined,
            certificates: asObjectArray(tls.certificates)?.map((certificate) => ({
                raw: certificate,
                certificateFile: asString(certificate.certificateFile),
                keyFile: asString(certificate.keyFile),
                certificate: asStringOrStringArray(certificate.certificate),
                key: asStringOrStringArray(certificate.key),
                usage: asString(certificate.usage),
                ocspStapling: asNumber(certificate.ocspStapling),
                oneTimeLoading: asBoolean(certificate.oneTimeLoading),
                buildChain: asBoolean(certificate.buildChain),
                serveOnNode: asBoolean(certificate.serveOnNode)
            }))
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
    /** streamSettings.method (new) takes priority over the deprecated streamSettings.network. */
    const network = String(streamSettings?.method ?? streamSettings?.network ?? "tcp").toLowerCase();
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
                headers: asStringRecord(settings.headers),
                scMaxBufferedPosts: asNumber(settings.scMaxBufferedPosts),
                scMaxEachPostBytes: asIntRange(settings.scMaxEachPostBytes),
                scMinPostsIntervalMs: asIntRange(settings.scMinPostsIntervalMs),
                scStreamUpServerSecs: asIntRange(settings.scStreamUpServerSecs),
                noSSEHeader: asBoolean(settings.noSSEHeader),
                xPaddingBytes: asIntRange(settings.xPaddingBytes),
                xPaddingObfsMode: asBoolean(settings.xPaddingObfsMode),
                xPaddingKey: asString(settings.xPaddingKey),
                xPaddingHeader: asString(settings.xPaddingHeader),
                xPaddingPlacement: asString(settings.xPaddingPlacement),
                xPaddingMethod: asString(settings.xPaddingMethod),
                uplinkHTTPMethod: asString(settings.uplinkHTTPMethod),
                sessionPlacement: asString(settings.sessionPlacement),
                sessionKey: asString(settings.sessionKey),
                sessionIDPlacement: asString(settings.sessionIDPlacement),
                sessionIDKey: asString(settings.sessionIDKey),
                sessionIDTable: asString(settings.sessionIDTable),
                sessionIDLength: asIntRange(settings.sessionIDLength),
                seqPlacement: asString(settings.seqPlacement),
                seqKey: asString(settings.seqKey),
                uplinkDataPlacement: asString(settings.uplinkDataPlacement),
                uplinkDataKey: asString(settings.uplinkDataKey),
                uplinkChunkSize: asIntRange(settings.uplinkChunkSize),
                noGRPCHeader: asBoolean(settings.noGRPCHeader),
                xmux: isJsonObject(settings.xmux) ? settings.xmux : undefined,
                unknown: pickUnknown(settings, [
                    "host",
                    "path",
                    "mode",
                    "headers",
                    "scMaxBufferedPosts",
                    "scMaxEachPostBytes",
                    "scMinPostsIntervalMs",
                    "scStreamUpServerSecs",
                    "noSSEHeader",
                    "xPaddingBytes",
                    "xPaddingObfsMode",
                    "xPaddingKey",
                    "xPaddingHeader",
                    "xPaddingPlacement",
                    "xPaddingMethod",
                    "uplinkHTTPMethod",
                    "sessionPlacement",
                    "sessionKey",
                    "sessionIDPlacement",
                    "sessionIDKey",
                    "sessionIDTable",
                    "sessionIDLength",
                    "seqPlacement",
                    "seqKey",
                    "uplinkDataPlacement",
                    "uplinkDataKey",
                    "uplinkChunkSize",
                    "noGRPCHeader",
                    "xmux"
                ])
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
    if (network === "httpupgrade") {
        const settings = isJsonObject(streamSettings?.httpupgradeSettings) ? streamSettings.httpupgradeSettings : {};
        return {
            type: "httpupgrade",
            path: asString(settings.path),
            host: asString(settings.host),
            headers: asStringRecord(settings.headers),
            acceptProxyProtocol: asBoolean(settings.acceptProxyProtocol)
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
    if (network === "hysteria") {
        const settings = isJsonObject(streamSettings?.hysteriaSettings) ? streamSettings.hysteriaSettings : {};
        const masquerade = isJsonObject(settings.masquerade) ? settings.masquerade : undefined;
        const udpmasks = asObjectArray(settings.udpmasks) ?? asObjectArray(streamSettings?.udpmasks);
        return {
            type: "hysteria",
            version: 2,
            auth: asString(settings.auth),
            udpIdleTimeout: asNumber(settings.udpIdleTimeout),
            masquerade: masquerade ? {
                type: asString(masquerade.type),
                dir: asString(masquerade.dir),
                url: asString(masquerade.url),
                rewriteHost: asBoolean(masquerade.rewriteHost),
                insecure: asBoolean(masquerade.insecure),
                content: asString(masquerade.content),
                headers: asStringRecord(masquerade.headers),
                statusCode: asNumber(masquerade.statusCode)
            } : undefined,
            udpmasks: udpmasks?.map((mask) => ({
                type: asString(mask.type) ?? "",
                settings: isJsonObject(mask.settings) ? mask.settings : undefined
            })).filter((mask) => mask.type !== "")
        };
    }
    return undefined;
}
function parseStreamAdvanced(streamSettings) {
    const sockopt = isJsonObject(streamSettings?.sockopt) ? streamSettings.sockopt : undefined;
    const finalmask = isJsonObject(streamSettings?.finalmask) ? streamSettings.finalmask : undefined;
    const quicRaw = isJsonObject(finalmask?.quicParams) ? finalmask.quicParams : undefined;
    const quicParams = quicRaw ? {
        congestion: asString(quicRaw.congestion),
        debug: asBoolean(quicRaw.debug),
        bbrProfile: asString(quicRaw.bbrProfile),
        brutalUp: asString(quicRaw.brutalUp),
        brutalDown: asString(quicRaw.brutalDown),
        udpHop: isJsonObject(quicRaw.udpHop) ? {
            ports: typeof quicRaw.udpHop.ports === "string" ? quicRaw.udpHop.ports : asStringArray(quicRaw.udpHop.ports),
            interval: asIntRange(quicRaw.udpHop.interval)
        } : undefined,
        initStreamReceiveWindow: asNumber(quicRaw.initStreamReceiveWindow),
        maxStreamReceiveWindow: asNumber(quicRaw.maxStreamReceiveWindow),
        initConnectionReceiveWindow: asNumber(quicRaw.initConnectionReceiveWindow),
        maxConnectionReceiveWindow: asNumber(quicRaw.maxConnectionReceiveWindow),
        maxIdleTimeout: asNumber(quicRaw.maxIdleTimeout),
        keepAlivePeriod: asNumber(quicRaw.keepAlivePeriod),
        disablePathMTUDiscovery: asBoolean(quicRaw.disablePathMTUDiscovery),
        maxIncomingStreams: asNumber(quicRaw.maxIncomingStreams)
    } : undefined;
    if (!sockopt && !finalmask && !quicParams)
        return undefined;
    return { sockopt, finalmask, quicParams };
}
function parseFallbacks(settings) {
    return asObjectArray(settings.fallbacks);
}
function parseSniffing(raw) {
    if (!isJsonObject(raw))
        return undefined;
    const enabled = asBoolean(raw.enabled);
    if (enabled === undefined)
        return undefined;
    return {
        enabled,
        destOverride: asStringArray(raw.destOverride),
        domainsExcluded: asStringArray(raw.domainsExcluded),
        ipsExcluded: asStringArray(raw.ipsExcluded),
        metadataOnly: asBoolean(raw.metadataOnly),
        routeOnly: asBoolean(raw.routeOnly)
    };
}
function parseAccounts(settings) {
    return asObjectArray(settings.accounts)?.map((account) => ({
        user: asString(account.user) ?? "",
        pass: asString(account.pass) ?? ""
    }));
}
const clientMetadataKeys = [
    "limitIp",
    "totalGB",
    "expiryTime",
    "enable",
    "tgId",
    "subId",
    "comment",
    "reset",
    "created_at",
    "updated_at"
];
function parseClientMeta(raw) {
    const meta = {};
    for (const key of clientMetadataKeys) {
        const value = raw[key];
        if (value !== undefined)
            meta[key] = value;
    }
    return Object.keys(meta).length > 0 ? meta : undefined;
}
function parseInbound(raw, index, issues) {
    const protocol = asString(raw.protocol);
    const tag = asString(raw.tag) ?? `${protocol ?? "inbound"}-${index}`;
    const listenRaw = asString(raw.listen);
    const listen = listenRaw &&
        listenRaw.trim() !== "" &&
        listenRaw.trim() !== "0.0.0.0" &&
        listenRaw.trim() !== "::" &&
        listenRaw.trim() !== "[::]"
        ? listenRaw.trim()
        : undefined;
    const port = raw.port === undefined || raw.port === null
        ? undefined
        : typeof raw.port === "string" || typeof raw.port === "number"
            ? raw.port
            : 1;
    const settings = isJsonObject(raw.settings) ? raw.settings : {};
    const streamSettings = isJsonObject(raw.streamSettings) ? raw.streamSettings : undefined;
    const security = parseSecurity(streamSettings);
    const transport = parseTransport(streamSettings);
    const streamAdvanced = parseStreamAdvanced(streamSettings);
    const sniffing = parseSniffing(raw.sniffing);
    if (protocol === "vmess" && security && security.type !== "reality" && transport) {
        const defaultSettings = isJsonObject(settings.default) ? settings.default : undefined;
        const clients = asObjectArray(settings.clients)?.map((client) => ({
            protocol: "vmess",
            id: asString(client.id) ?? "",
            security: asString(client.security),
            email: asString(client.email),
            level: asNumber(client.level),
            enabled: asBoolean(client.enabled) ?? asBoolean(client.enable),
            meta: parseClientMeta(client)
        })) ?? [];
        return {
            kind: "inbound",
            protocol: "vmess",
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            clients,
            security,
            transport,
            streamAdvanced,
            defaultLevel: asNumber(defaultSettings?.level)
        };
    }
    if (protocol === "vless" && security && transport) {
        const clients = asObjectArray(settings.clients)?.map((client) => ({
            protocol: "vless",
            id: asString(client.id) ?? "",
            email: asString(client.email),
            flow: asString(client.flow) === "xtls-rprx-vision" ? "xtls-rprx-vision" : undefined,
            level: asNumber(client.level),
            enabled: asBoolean(client.enabled) ?? asBoolean(client.enable),
            meta: parseClientMeta(client)
        })) ?? [];
        const settingsFlow = asString(settings.flow);
        const flow = settingsFlow && settingsFlow.trim() !== "" ? settingsFlow.trim() : undefined;
        return {
            kind: "inbound",
            protocol: "vless",
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            clients,
            security,
            transport,
            streamAdvanced,
            ...(flow !== undefined ? { flow } : {}),
            decryption: asString(settings.decryption),
            encryption: asString(settings.encryption),
            fallbacks: parseFallbacks(settings)
        };
    }
    if (protocol === "trojan" && security && transport) {
        const clients = asObjectArray(settings.clients)?.map((client) => ({
            protocol: "trojan",
            password: asString(client.password) ?? "",
            email: asString(client.email),
            level: asNumber(client.level),
            enabled: asBoolean(client.enabled) ?? asBoolean(client.enable),
            meta: parseClientMeta(client)
        })) ?? [];
        return {
            kind: "inbound",
            protocol: "trojan",
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            clients,
            security,
            transport,
            streamAdvanced,
            fallbacks: parseFallbacks(settings)
        };
    }
    if (protocol === "shadowsocks") {
        const clients = asObjectArray(settings.clients)?.map((client) => ({
            protocol: "shadowsocks",
            password: asString(client.password) ?? "",
            method: asString(client.method),
            email: asString(client.email),
            level: asNumber(client.level),
            enabled: asBoolean(client.enabled) ?? asBoolean(client.enable),
            meta: parseClientMeta(client)
        })) ?? [];
        return {
            kind: "inbound",
            protocol: "shadowsocks",
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            method: asString(settings.method),
            password: asString(settings.password),
            network: asString(settings.network),
            clients,
            security: security && security.type !== "reality" ? security : undefined,
            transport
        };
    }
    if (protocol === "http") {
        return {
            kind: "inbound",
            protocol: "http",
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            accounts: parseAccounts(settings),
            allowTransparent: asBoolean(settings.allowTransparent),
            userLevel: asNumber(settings.userLevel),
            security: security && security.type !== "reality" ? security : undefined,
            transport,
            streamAdvanced
        };
    }
    if (protocol === "mixed" || protocol === "socks") {
        return {
            kind: "inbound",
            protocol,
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            auth: asString(settings.auth),
            accounts: parseAccounts(settings),
            udp: asBoolean(settings.udp),
            ip: asString(settings.ip),
            userLevel: asNumber(settings.userLevel),
            security: security && security.type !== "reality" ? security : undefined,
            transport,
            streamAdvanced
        };
    }
    if (protocol === "wireguard") {
        const peers = asObjectArray(settings.peers)?.map((peer) => ({
            publicKey: asString(peer.publicKey) ?? "",
            preSharedKey: asString(peer.preSharedKey),
            endpoint: asString(peer.endpoint),
            keepAlive: asNumber(peer.keepAlive),
            allowedIPs: asStringArray(peer.allowedIPs) ?? ["0.0.0.0/0", "::/0"],
            meta: isJsonObject(peer) && peer.privateKey !== undefined ? { privateKey: peer.privateKey } : undefined
        })) ?? [];
        return {
            kind: "inbound",
            protocol: "wireguard",
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            secretKey: asString(settings.secretKey) ?? "",
            publicKey: asString(settings.publicKey) ?? asString(settings.pubKey),
            address: asStringArray(settings.address),
            peers,
            mtu: asNumber(settings.mtu),
            workers: asNumber(settings.workers),
            reserved: Array.isArray(settings.reserved) && settings.reserved.every((item) => typeof item === "number")
                ? settings.reserved
                : asString(settings.reserved),
            domainStrategy: asString(settings.domainStrategy),
            noKernelTun: asBoolean(settings.noKernelTun),
            security: security && security.type !== "reality" ? security : undefined,
            transport,
            streamAdvanced
        };
    }
    if (protocol === "hysteria" && security && security.type !== "reality" && transport?.type === "hysteria") {
        const clients = asObjectArray(settings.clients)?.map((client) => ({
            protocol: "hysteria",
            auth: asString(client.auth) ?? "",
            email: asString(client.email),
            level: asNumber(client.level),
            enabled: asBoolean(client.enabled) ?? asBoolean(client.enable),
            meta: parseClientMeta(client)
        })) ?? [];
        return {
            kind: "inbound",
            protocol: "hysteria",
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            clients,
            security,
            transport,
            streamAdvanced,
            version: 2
        };
    }
    if (protocol === "dokodemo-door" || protocol === "tunnel") {
        const portMap = asPortMapRecord(settings.portMap);
        const st = settings;
        /** Xray parity JSON uses address/port/network; public tunnel docs alias rewriteAddress/rewritePort/allowedNetwork. */
        const address = asString(st.address) ?? asString(st.rewriteAddress);
        const targetPort = asInboundTunnelTargetPort(st.port ?? st.rewritePort);
        const netRaw = asString(st.network) ?? asString(st.allowedNetwork);
        return {
            kind: "inbound",
            protocol,
            tag,
            ...(listen !== undefined ? { listen } : {}),
            ...(port !== undefined ? { port } : {}),
            sniffing,
            address,
            ...(targetPort !== undefined ? { targetPort } : {}),
            ...(netRaw !== undefined ? { network: netRaw } : {}),
            followRedirect: asBoolean(settings.followRedirect),
            userLevel: asNumber(settings.userLevel),
            ...(portMap !== undefined ? { portMap } : {})
        };
    }
    if (protocol === "tun") {
        return {
            kind: "inbound",
            protocol: "tun",
            tag,
            ...(listen !== undefined ? { listen } : {}),
            sniffing,
            name: asString(settings.name),
            mtu: asNumber(settings.mtu),
            gateway: asStringArray(settings.gateway),
            dns: asStringArray(settings.dns),
            userLevel: asNumber(settings.userLevel),
            autoSystemRoutingTable: asStringArray(settings.autoSystemRoutingTable),
            autoOutboundsInterface: asString(settings.autoOutboundsInterface)
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
    const envelope = {
        sendThrough: asString(raw.sendThrough),
        streamSettings: isJsonObject(raw.streamSettings) ? raw.streamSettings : undefined,
        proxySettings: isJsonObject(raw.proxySettings) ? raw.proxySettings : undefined,
        mux: isJsonObject(raw.mux) ? raw.mux : undefined,
        targetStrategy: asString(raw.targetStrategy)
    };
    if (protocol === "freedom")
        return { protocol, tag, settings: settings, ...envelope };
    if (protocol === "blackhole")
        return { protocol, tag, settings: settings, ...envelope };
    if (protocol === "dns")
        return { protocol, tag, settings: settings, ...envelope };
    if (protocol === "http"
        || protocol === "socks"
        || protocol === "shadowsocks"
        || protocol === "vless"
        || protocol === "vmess"
        || protocol === "trojan"
        || protocol === "hysteria"
        || protocol === "wireguard"
        || protocol === "loopback") {
        return {
            protocol,
            tag,
            settings,
            ...envelope
        };
    }
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
    const webhook = isJsonObject(raw.webhook) ? raw.webhook : undefined;
    return {
        type: raw.type === "field" ? "field" : undefined,
        ruleTag: asString(raw.ruleTag),
        inboundTag: asStringList(raw.inboundTag),
        outboundTag: asString(raw.outboundTag),
        balancerTag: asString(raw.balancerTag),
        domain: asStringList(raw.domain),
        domains: asStringList(raw.domains),
        ip: asStringList(raw.ip),
        port: asPortList(raw.port),
        sourceIP: asStringList(raw.sourceIP),
        source: asStringList(raw.source),
        sourcePort: asPortList(raw.sourcePort),
        user: asStringList(raw.user),
        vlessRoute: asPortList(raw.vlessRoute),
        protocol: asStringList(raw.protocol),
        network: asStringOrStringArray(raw.network),
        attrs: asStringRecord(raw.attrs),
        localIP: asStringList(raw.localIP),
        localPort: asPortList(raw.localPort),
        process: asStringList(raw.process),
        webhook: webhook && asString(webhook.url) ? {
            url: asString(webhook.url) ?? "",
            deduplication: asNumber(webhook.deduplication),
            headers: asStringRecord(webhook.headers)
        } : undefined
    };
}
function parseRoutingBalancer(raw) {
    const strategy = isJsonObject(raw.strategy) ? raw.strategy : undefined;
    return {
        tag: asString(raw.tag) ?? "",
        selector: asStringList(raw.selector) ?? [],
        strategy: strategy ? {
            type: asString(strategy.type),
            settings: isJsonObject(strategy.settings) ? strategy.settings : undefined
        } : undefined,
        fallbackTag: asString(raw.fallbackTag)
    };
}
function parseRouting(raw) {
    if (!isJsonObject(raw))
        return undefined;
    const rules = asObjectArray(raw.rules)?.map(parseRoutingRule) ?? [];
    return {
        domainStrategy: asString(raw.domainStrategy),
        rules,
        balancers: asObjectArray(raw.balancers)?.map(parseRoutingBalancer)
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
            profile: createProfile({ includeDefaultPolicy: false }),
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
    const profileWithoutFingerprint = createProfile({
        inbounds,
        outbounds: outbounds.length > 0 ? outbounds : undefined,
        routing: parseRouting(raw.routing),
        dns: parseDns(raw.dns),
        log: isJsonObject(raw.log) ? raw.log : undefined,
        raw: { source: raw, ...(Object.keys(topLevel).length > 0 ? { topLevel } : {}) },
        unknown: Object.keys(pointers).length > 0 ? { source: "import", pointers } : undefined,
        includeDefaultPolicy: false
    });
    const profile = {
        ...profileWithoutFingerprint,
        raw: {
            ...profileWithoutFingerprint.raw,
            sourceProfileFingerprint: profileSourceFingerprint(profileWithoutFingerprint)
        }
    };
    return {
        profile,
        issues,
        editable: [...inbounds, ...outbounds].filter((node) => node.protocol !== "unmanaged").length,
        unmanaged: [...inbounds, ...outbounds].filter((node) => node.protocol === "unmanaged").length
    };
}
//# sourceMappingURL=index.js.map