export declare const generatedXrayReleaseTags: readonly ["v25.10.15", "v26.4.25", "v26.5.3", "v26.6.22", "v26.6.27", "v26.7.11", "v26.7.28"];
export declare const latestGeneratedXrayReleaseTag: "v26.7.28";
export declare const latestGeneratedXrayVersion: "26.7.28";
export declare const generatedXrayCapabilitiesByTag: {
    readonly "v25.10.15": {
        readonly adapterId: "xray@25.10";
        readonly xrayVersionRange: ">=25.10.0 <25.11.0";
        readonly latestTestedVersion: "25.10.15";
        readonly protocols: readonly ["blackhole", "block", "direct", "dns", "dokodemo-door", "freedom", "http", "loopback", "mixed", "shadowsocks", "socks", "trojan", "tunnel", "vless", "vmess", "wireguard"];
        readonly transports: readonly ["grpc", "httpupgrade", "kcp", "mkcp", "raw", "splithttp", "tcp", "websocket", "ws", "xhttp"];
        readonly securities: readonly ["none", "reality", "tls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
        }, {
            readonly feature: "\"serverNameToVerify\"";
            readonly replacement: "\"verifyPeerCertInNames\"";
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
        }, {
            readonly feature: "Flow for Trojan";
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }];
        readonly compatibilityMatrix: {
            readonly api: {
                readonly supported: true;
            };
            readonly blackhole: {
                readonly supported: true;
            };
            readonly block: {
                readonly supported: true;
            };
            readonly burstObservatory: {
                readonly supported: true;
            };
            readonly direct: {
                readonly supported: true;
            };
            readonly dns: {
                readonly supported: true;
            };
            readonly "dokodemo-door": {
                readonly supported: true;
            };
            readonly fakeDns: {
                readonly supported: true;
            };
            readonly freedom: {
                readonly supported: true;
            };
            readonly "freedom noise": {
                readonly supported: false;
                readonly removed: "25.10.15";
                readonly replacement: "noises = [ { ... } ]";
            };
            readonly "global transport": {
                readonly supported: false;
                readonly removed: "25.10.15";
                readonly replacement: "streamSettings in inbounds and outbounds";
            };
            readonly grpc: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP stream-up H2";
            };
            readonly http: {
                readonly supported: true;
            };
            readonly "http-transport": {
                readonly supported: false;
                readonly removed: "25.10.15";
                readonly replacement: "XHTTP stream-one H2 & H3";
            };
            readonly httpupgrade: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly inbounds: {
                readonly supported: true;
            };
            readonly kcp: {
                readonly supported: true;
            };
            readonly log: {
                readonly supported: true;
            };
            readonly loopback: {
                readonly supported: true;
            };
            readonly metrics: {
                readonly supported: true;
            };
            readonly mixed: {
                readonly supported: true;
            };
            readonly mkcp: {
                readonly supported: true;
            };
            readonly none: {
                readonly supported: true;
            };
            readonly observatory: {
                readonly supported: true;
            };
            readonly outbounds: {
                readonly supported: true;
            };
            readonly policy: {
                readonly supported: true;
            };
            readonly quic: {
                readonly supported: false;
                readonly removed: "25.10.15";
                readonly replacement: "XHTTP stream-one H3";
            };
            readonly raw: {
                readonly supported: true;
            };
            readonly reality: {
                readonly supported: true;
            };
            readonly reverse: {
                readonly supported: true;
            };
            readonly routing: {
                readonly supported: true;
            };
            readonly shadowsocks: {
                readonly supported: true;
            };
            readonly socks: {
                readonly supported: true;
            };
            readonly splithttp: {
                readonly supported: true;
            };
            readonly stats: {
                readonly supported: true;
            };
            readonly tcp: {
                readonly supported: true;
            };
            readonly tls: {
                readonly supported: true;
            };
            readonly transport: {
                readonly supported: true;
            };
            readonly trojan: {
                readonly supported: true;
            };
            readonly "trojan flow": {
                readonly supported: false;
                readonly removed: "25.10.15";
            };
            readonly tunnel: {
                readonly supported: true;
            };
            readonly version: {
                readonly supported: true;
            };
            readonly vless: {
                readonly supported: true;
            };
            readonly vmess: {
                readonly supported: true;
            };
            readonly websocket: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly wireguard: {
                readonly supported: true;
            };
            readonly ws: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly xhttp: {
                readonly supported: true;
            };
            readonly "xhttp headers host": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "independent \"host\"";
            };
            readonly xtls: {
                readonly supported: false;
                readonly removed: "25.10.15";
                readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            };
        };
    };
    readonly "v26.4.25": {
        readonly adapterId: "xray@26.4";
        readonly xrayVersionRange: ">=26.4.0 <26.5.0";
        readonly latestTestedVersion: "26.4.25";
        readonly protocols: readonly ["blackhole", "block", "direct", "dns", "dokodemo-door", "freedom", "http", "hysteria", "loopback", "mixed", "shadowsocks", "socks", "trojan", "tun", "tunnel", "vless", "vmess", "wireguard"];
        readonly transports: readonly ["grpc", "httpupgrade", "hysteria", "kcp", "mkcp", "raw", "splithttp", "tcp", "websocket", "ws", "xhttp"];
        readonly securities: readonly ["none", "reality", "tls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"";
        }, {
            readonly feature: "\"verifyPeerCertInNames\"";
            readonly replacement: "\"verifyPeerCertByName\"";
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
        }, {
            readonly feature: "Flow for Trojan";
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\" in DNS outbound";
            readonly replacement: "\"rules\"";
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }];
        readonly compatibilityMatrix: {
            readonly allowInsecure: {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "\"pinnedPeerCertSha256\"";
            };
            readonly api: {
                readonly supported: true;
            };
            readonly blackhole: {
                readonly supported: true;
            };
            readonly block: {
                readonly supported: true;
            };
            readonly burstObservatory: {
                readonly supported: true;
            };
            readonly direct: {
                readonly supported: true;
            };
            readonly dns: {
                readonly supported: true;
            };
            readonly "dns legacy nonIPQuery blockTypes": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "\"rules\"";
            };
            readonly "dokodemo-door": {
                readonly supported: true;
            };
            readonly fakeDns: {
                readonly supported: true;
            };
            readonly "finalmask xdns domain": {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "domains(server) & resolvers(client)";
            };
            readonly freedom: {
                readonly supported: true;
            };
            readonly "freedom noise": {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "noises = [ { ... } ]";
            };
            readonly geodata: {
                readonly supported: true;
            };
            readonly "global transport": {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "streamSettings in inbounds and outbounds";
            };
            readonly grpc: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP stream-up H2";
            };
            readonly http: {
                readonly supported: true;
            };
            readonly "http-transport": {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "XHTTP stream-one H2 & H3";
            };
            readonly httpupgrade: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly hysteria: {
                readonly supported: true;
            };
            readonly inbounds: {
                readonly supported: true;
            };
            readonly kcp: {
                readonly supported: true;
            };
            readonly log: {
                readonly supported: true;
            };
            readonly loopback: {
                readonly supported: true;
            };
            readonly metrics: {
                readonly supported: true;
            };
            readonly mixed: {
                readonly supported: true;
            };
            readonly mkcp: {
                readonly supported: true;
            };
            readonly "mkcp header/seed": {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            };
            readonly none: {
                readonly supported: true;
            };
            readonly observatory: {
                readonly supported: true;
            };
            readonly outbounds: {
                readonly supported: true;
            };
            readonly policy: {
                readonly supported: true;
            };
            readonly quic: {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "XHTTP stream-one H3";
            };
            readonly raw: {
                readonly supported: true;
            };
            readonly reality: {
                readonly supported: true;
            };
            readonly reverse: {
                readonly supported: true;
            };
            readonly routing: {
                readonly supported: true;
            };
            readonly shadowsocks: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly socks: {
                readonly supported: true;
            };
            readonly splithttp: {
                readonly supported: true;
            };
            readonly stats: {
                readonly supported: true;
            };
            readonly tcp: {
                readonly supported: true;
            };
            readonly tls: {
                readonly supported: true;
            };
            readonly transport: {
                readonly supported: true;
            };
            readonly trojan: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS with Flow & Seed";
            };
            readonly "trojan flow": {
                readonly supported: false;
                readonly removed: "26.4.25";
            };
            readonly tun: {
                readonly supported: true;
            };
            readonly tunnel: {
                readonly supported: true;
            };
            readonly verifyPeerCertInNames: {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "\"verifyPeerCertByName\"";
            };
            readonly version: {
                readonly supported: true;
            };
            readonly vless: {
                readonly supported: true;
            };
            readonly vmess: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly websocket: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly wireguard: {
                readonly supported: true;
            };
            readonly ws: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly xhttp: {
                readonly supported: true;
            };
            readonly "xhttp headers host": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "independent \"host\"";
            };
            readonly xtls: {
                readonly supported: false;
                readonly removed: "26.4.25";
                readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            };
        };
    };
    readonly "v26.5.3": {
        readonly adapterId: "xray@26.5";
        readonly xrayVersionRange: ">=26.5.0 <26.6.0";
        readonly latestTestedVersion: "26.5.3";
        readonly protocols: readonly ["blackhole", "block", "direct", "dns", "dokodemo-door", "freedom", "http", "hysteria", "loopback", "mixed", "shadowsocks", "socks", "trojan", "tun", "tunnel", "vless", "vmess", "wireguard"];
        readonly transports: readonly ["grpc", "httpupgrade", "hysteria", "kcp", "mkcp", "raw", "splithttp", "tcp", "websocket", "ws", "xhttp"];
        readonly securities: readonly ["none", "reality", "tls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"";
        }, {
            readonly feature: "\"verifyPeerCertInNames\"";
            readonly replacement: "\"verifyPeerCertByName\"";
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
        }, {
            readonly feature: "Flow for Trojan";
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }];
        readonly compatibilityMatrix: {
            readonly allowInsecure: {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "\"pinnedPeerCertSha256\"";
            };
            readonly api: {
                readonly supported: true;
            };
            readonly blackhole: {
                readonly supported: true;
            };
            readonly block: {
                readonly supported: true;
            };
            readonly burstObservatory: {
                readonly supported: true;
            };
            readonly direct: {
                readonly supported: true;
            };
            readonly dns: {
                readonly supported: true;
            };
            readonly "dns legacy nonIPQuery blockTypes": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "\"rules\"";
            };
            readonly "dokodemo-door": {
                readonly supported: true;
            };
            readonly fakeDns: {
                readonly supported: true;
            };
            readonly "finalmask xdns domain": {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "domains(server) & resolvers(client)";
            };
            readonly freedom: {
                readonly supported: true;
            };
            readonly "freedom noise": {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "noises = [ { ... } ]";
            };
            readonly geodata: {
                readonly supported: true;
            };
            readonly "global transport": {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "streamSettings in inbounds and outbounds";
            };
            readonly grpc: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP stream-up H2";
            };
            readonly http: {
                readonly supported: true;
            };
            readonly "http-transport": {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "XHTTP stream-one H2 & H3";
            };
            readonly httpupgrade: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly hysteria: {
                readonly supported: true;
            };
            readonly inbounds: {
                readonly supported: true;
            };
            readonly kcp: {
                readonly supported: true;
            };
            readonly log: {
                readonly supported: true;
            };
            readonly loopback: {
                readonly supported: true;
            };
            readonly metrics: {
                readonly supported: true;
            };
            readonly mixed: {
                readonly supported: true;
            };
            readonly mkcp: {
                readonly supported: true;
            };
            readonly "mkcp header/seed": {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            };
            readonly none: {
                readonly supported: true;
            };
            readonly observatory: {
                readonly supported: true;
            };
            readonly outbounds: {
                readonly supported: true;
            };
            readonly policy: {
                readonly supported: true;
            };
            readonly quic: {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "XHTTP stream-one H3";
            };
            readonly raw: {
                readonly supported: true;
            };
            readonly reality: {
                readonly supported: true;
            };
            readonly reverse: {
                readonly supported: true;
            };
            readonly routing: {
                readonly supported: true;
            };
            readonly shadowsocks: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly socks: {
                readonly supported: true;
            };
            readonly splithttp: {
                readonly supported: true;
            };
            readonly stats: {
                readonly supported: true;
            };
            readonly tcp: {
                readonly supported: true;
            };
            readonly tls: {
                readonly supported: true;
            };
            readonly transport: {
                readonly supported: true;
            };
            readonly trojan: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS with Flow & Seed";
            };
            readonly "trojan flow": {
                readonly supported: false;
                readonly removed: "26.5.3";
            };
            readonly tun: {
                readonly supported: true;
            };
            readonly tunnel: {
                readonly supported: true;
            };
            readonly verifyPeerCertInNames: {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "\"verifyPeerCertByName\"";
            };
            readonly version: {
                readonly supported: true;
            };
            readonly vless: {
                readonly supported: true;
            };
            readonly vmess: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly websocket: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly wireguard: {
                readonly supported: true;
            };
            readonly ws: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly xhttp: {
                readonly supported: true;
            };
            readonly "xhttp headers host": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "independent \"host\"";
            };
            readonly xtls: {
                readonly supported: false;
                readonly removed: "26.5.3";
                readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            };
        };
    };
    readonly "v26.6.22": {
        readonly adapterId: "xray@26.6";
        readonly xrayVersionRange: ">=26.6.0 <26.7.0";
        readonly latestTestedVersion: "26.6.22";
        readonly protocols: readonly ["blackhole", "block", "direct", "dns", "dokodemo-door", "freedom", "http", "hysteria", "loopback", "mixed", "shadowsocks", "socks", "trojan", "tun", "tunnel", "vless", "vmess", "wireguard"];
        readonly transports: readonly ["grpc", "httpupgrade", "hysteria", "kcp", "mkcp", "raw", "splithttp", "tcp", "websocket", "ws", "xhttp"];
        readonly securities: readonly ["none", "reality", "tls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_133", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_148", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_26_3", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
        }, {
            readonly feature: "Flow for Trojan";
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }];
        readonly compatibilityMatrix: {
            readonly allowInsecure: {
                readonly supported: false;
                readonly removed: "26.6.22";
                readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
            };
            readonly api: {
                readonly supported: true;
            };
            readonly blackhole: {
                readonly supported: true;
            };
            readonly block: {
                readonly supported: true;
            };
            readonly burstObservatory: {
                readonly supported: true;
            };
            readonly direct: {
                readonly supported: true;
            };
            readonly dns: {
                readonly supported: true;
            };
            readonly "dns legacy nonIPQuery blockTypes": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "\"rules\"";
            };
            readonly "dokodemo-door": {
                readonly supported: true;
            };
            readonly fakeDns: {
                readonly supported: true;
            };
            readonly "finalmask xdns domain": {
                readonly supported: false;
                readonly removed: "26.6.22";
                readonly replacement: "domains(server) & resolvers(client)";
            };
            readonly freedom: {
                readonly supported: true;
            };
            readonly "freedom noise": {
                readonly supported: false;
                readonly removed: "26.6.22";
                readonly replacement: "noises = [ { ... } ]";
            };
            readonly geodata: {
                readonly supported: true;
            };
            readonly "global transport": {
                readonly supported: false;
                readonly removed: "26.6.22";
                readonly replacement: "streamSettings in inbounds and outbounds";
            };
            readonly grpc: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP stream-up H2";
            };
            readonly http: {
                readonly supported: true;
            };
            readonly "http-transport": {
                readonly supported: false;
                readonly removed: "26.6.22";
                readonly replacement: "XHTTP stream-one H2 & H3";
            };
            readonly httpupgrade: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly hysteria: {
                readonly supported: true;
            };
            readonly inbounds: {
                readonly supported: true;
            };
            readonly kcp: {
                readonly supported: true;
            };
            readonly log: {
                readonly supported: true;
            };
            readonly loopback: {
                readonly supported: true;
            };
            readonly metrics: {
                readonly supported: true;
            };
            readonly mixed: {
                readonly supported: true;
            };
            readonly mkcp: {
                readonly supported: true;
            };
            readonly "mkcp header/seed": {
                readonly supported: false;
                readonly removed: "26.6.22";
                readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            };
            readonly none: {
                readonly supported: true;
            };
            readonly observatory: {
                readonly supported: true;
            };
            readonly outbounds: {
                readonly supported: true;
            };
            readonly policy: {
                readonly supported: true;
            };
            readonly quic: {
                readonly supported: false;
                readonly removed: "26.6.22";
                readonly replacement: "XHTTP stream-one H3";
            };
            readonly raw: {
                readonly supported: true;
            };
            readonly reality: {
                readonly supported: true;
            };
            readonly reverse: {
                readonly supported: true;
            };
            readonly routing: {
                readonly supported: true;
            };
            readonly shadowsocks: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly socks: {
                readonly supported: true;
            };
            readonly splithttp: {
                readonly supported: true;
            };
            readonly stats: {
                readonly supported: true;
            };
            readonly tcp: {
                readonly supported: true;
            };
            readonly tls: {
                readonly supported: true;
            };
            readonly transport: {
                readonly supported: true;
            };
            readonly trojan: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS with Flow & Seed";
            };
            readonly "trojan flow": {
                readonly supported: false;
                readonly removed: "26.6.22";
            };
            readonly tun: {
                readonly supported: true;
            };
            readonly tunnel: {
                readonly supported: true;
            };
            readonly version: {
                readonly supported: true;
            };
            readonly vless: {
                readonly supported: true;
            };
            readonly vmess: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly websocket: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly wireguard: {
                readonly supported: true;
            };
            readonly ws: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly xhttp: {
                readonly supported: true;
            };
            readonly "xhttp headers host": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "independent \"host\"";
            };
            readonly xtls: {
                readonly supported: false;
                readonly removed: "26.6.22";
                readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            };
        };
    };
    readonly "v26.6.27": {
        readonly adapterId: "xray@26.6";
        readonly xrayVersionRange: ">=26.6.0 <26.7.0";
        readonly latestTestedVersion: "26.6.27";
        readonly protocols: readonly ["blackhole", "block", "direct", "dns", "dokodemo-door", "freedom", "http", "hysteria", "loopback", "mixed", "shadowsocks", "socks", "trojan", "tun", "tunnel", "vless", "vmess", "wireguard"];
        readonly transports: readonly ["grpc", "httpupgrade", "hysteria", "kcp", "mkcp", "raw", "splithttp", "tcp", "websocket", "ws", "xhttp"];
        readonly securities: readonly ["none", "reality", "tls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_133", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_148", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_26_3", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
        }, {
            readonly feature: "Flow for Trojan";
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }];
        readonly compatibilityMatrix: {
            readonly allowInsecure: {
                readonly supported: false;
                readonly removed: "26.6.27";
                readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
            };
            readonly api: {
                readonly supported: true;
            };
            readonly blackhole: {
                readonly supported: true;
            };
            readonly block: {
                readonly supported: true;
            };
            readonly burstObservatory: {
                readonly supported: true;
            };
            readonly direct: {
                readonly supported: true;
            };
            readonly dns: {
                readonly supported: true;
            };
            readonly "dns legacy nonIPQuery blockTypes": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "\"rules\"";
            };
            readonly "dokodemo-door": {
                readonly supported: true;
            };
            readonly fakeDns: {
                readonly supported: true;
            };
            readonly "finalmask xdns domain": {
                readonly supported: false;
                readonly removed: "26.6.27";
                readonly replacement: "domains(server) & resolvers(client)";
            };
            readonly freedom: {
                readonly supported: true;
            };
            readonly "freedom noise": {
                readonly supported: false;
                readonly removed: "26.6.27";
                readonly replacement: "noises = [ { ... } ]";
            };
            readonly geodata: {
                readonly supported: true;
            };
            readonly "global transport": {
                readonly supported: false;
                readonly removed: "26.6.27";
                readonly replacement: "streamSettings in inbounds and outbounds";
            };
            readonly grpc: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP stream-up H2";
            };
            readonly http: {
                readonly supported: true;
            };
            readonly "http-transport": {
                readonly supported: false;
                readonly removed: "26.6.27";
                readonly replacement: "XHTTP stream-one H2 & H3";
            };
            readonly httpupgrade: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly hysteria: {
                readonly supported: true;
            };
            readonly inbounds: {
                readonly supported: true;
            };
            readonly kcp: {
                readonly supported: true;
            };
            readonly log: {
                readonly supported: true;
            };
            readonly loopback: {
                readonly supported: true;
            };
            readonly metrics: {
                readonly supported: true;
            };
            readonly mixed: {
                readonly supported: true;
            };
            readonly mkcp: {
                readonly supported: true;
            };
            readonly "mkcp header/seed": {
                readonly supported: false;
                readonly removed: "26.6.27";
                readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            };
            readonly none: {
                readonly supported: true;
            };
            readonly observatory: {
                readonly supported: true;
            };
            readonly outbounds: {
                readonly supported: true;
            };
            readonly policy: {
                readonly supported: true;
            };
            readonly quic: {
                readonly supported: false;
                readonly removed: "26.6.27";
                readonly replacement: "XHTTP stream-one H3";
            };
            readonly raw: {
                readonly supported: true;
            };
            readonly reality: {
                readonly supported: true;
            };
            readonly reverse: {
                readonly supported: true;
            };
            readonly routing: {
                readonly supported: true;
            };
            readonly shadowsocks: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly socks: {
                readonly supported: true;
            };
            readonly splithttp: {
                readonly supported: true;
            };
            readonly stats: {
                readonly supported: true;
            };
            readonly tcp: {
                readonly supported: true;
            };
            readonly tls: {
                readonly supported: true;
            };
            readonly transport: {
                readonly supported: true;
            };
            readonly trojan: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS with Flow & Seed";
            };
            readonly "trojan flow": {
                readonly supported: false;
                readonly removed: "26.6.27";
            };
            readonly tun: {
                readonly supported: true;
            };
            readonly tunnel: {
                readonly supported: true;
            };
            readonly version: {
                readonly supported: true;
            };
            readonly vless: {
                readonly supported: true;
            };
            readonly vmess: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly websocket: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly wireguard: {
                readonly supported: true;
            };
            readonly ws: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly xhttp: {
                readonly supported: true;
            };
            readonly "xhttp headers host": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "independent \"host\"";
            };
            readonly xtls: {
                readonly supported: false;
                readonly removed: "26.6.27";
                readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            };
        };
    };
    readonly "v26.7.11": {
        readonly adapterId: "xray@26.7";
        readonly xrayVersionRange: ">=26.7.0 <26.8.0";
        readonly latestTestedVersion: "26.7.11";
        readonly protocols: readonly ["blackhole", "block", "direct", "dns", "dokodemo-door", "freedom", "http", "hysteria", "loopback", "mixed", "shadowsocks", "socks", "trojan", "tun", "tunnel", "vless", "vmess", "wireguard"];
        readonly transports: readonly ["grpc", "httpupgrade", "hysteria", "kcp", "mkcp", "raw", "splithttp", "tcp", "websocket", "ws", "xhttp"];
        readonly securities: readonly ["none", "reality", "tls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_133", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_148", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_26_3", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
        }, {
            readonly feature: "Flow for Trojan";
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }];
        readonly compatibilityMatrix: {
            readonly allowInsecure: {
                readonly supported: false;
                readonly removed: "26.7.11";
                readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
            };
            readonly api: {
                readonly supported: true;
            };
            readonly blackhole: {
                readonly supported: true;
            };
            readonly block: {
                readonly supported: true;
            };
            readonly burstObservatory: {
                readonly supported: true;
            };
            readonly direct: {
                readonly supported: true;
            };
            readonly dns: {
                readonly supported: true;
            };
            readonly "dns legacy nonIPQuery blockTypes": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "\"rules\"";
            };
            readonly "dokodemo-door": {
                readonly supported: true;
            };
            readonly env: {
                readonly supported: true;
            };
            readonly fakeDns: {
                readonly supported: true;
            };
            readonly "finalmask xdns domain": {
                readonly supported: false;
                readonly removed: "26.7.11";
                readonly replacement: "domains(server) & resolvers(client)";
            };
            readonly freedom: {
                readonly supported: true;
            };
            readonly "freedom noise": {
                readonly supported: false;
                readonly removed: "26.7.11";
                readonly replacement: "noises = [ { ... } ]";
            };
            readonly geodata: {
                readonly supported: true;
            };
            readonly "global transport": {
                readonly supported: false;
                readonly removed: "26.7.11";
                readonly replacement: "streamSettings in inbounds and outbounds";
            };
            readonly grpc: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP stream-up H2";
            };
            readonly http: {
                readonly supported: true;
            };
            readonly "http-transport": {
                readonly supported: false;
                readonly removed: "26.7.11";
                readonly replacement: "XHTTP stream-one H2 & H3";
            };
            readonly httpupgrade: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly hysteria: {
                readonly supported: true;
            };
            readonly inbounds: {
                readonly supported: true;
            };
            readonly kcp: {
                readonly supported: true;
            };
            readonly log: {
                readonly supported: true;
            };
            readonly loopback: {
                readonly supported: true;
            };
            readonly metrics: {
                readonly supported: true;
            };
            readonly mixed: {
                readonly supported: true;
            };
            readonly mkcp: {
                readonly supported: true;
            };
            readonly "mkcp header/seed": {
                readonly supported: false;
                readonly removed: "26.7.11";
                readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            };
            readonly none: {
                readonly supported: true;
            };
            readonly observatory: {
                readonly supported: true;
            };
            readonly outbounds: {
                readonly supported: true;
            };
            readonly policy: {
                readonly supported: true;
            };
            readonly quic: {
                readonly supported: false;
                readonly removed: "26.7.11";
                readonly replacement: "XHTTP stream-one H3";
            };
            readonly raw: {
                readonly supported: true;
            };
            readonly reality: {
                readonly supported: true;
            };
            readonly reverse: {
                readonly supported: true;
            };
            readonly routing: {
                readonly supported: true;
            };
            readonly shadowsocks: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly socks: {
                readonly supported: true;
            };
            readonly splithttp: {
                readonly supported: true;
            };
            readonly stats: {
                readonly supported: true;
            };
            readonly tcp: {
                readonly supported: true;
            };
            readonly tls: {
                readonly supported: true;
            };
            readonly transport: {
                readonly supported: true;
            };
            readonly trojan: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS with Flow & Seed";
            };
            readonly "trojan flow": {
                readonly supported: false;
                readonly removed: "26.7.11";
            };
            readonly tun: {
                readonly supported: true;
            };
            readonly tunnel: {
                readonly supported: true;
            };
            readonly version: {
                readonly supported: true;
            };
            readonly vless: {
                readonly supported: true;
            };
            readonly vmess: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly websocket: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly wireguard: {
                readonly supported: true;
            };
            readonly ws: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly xhttp: {
                readonly supported: true;
            };
            readonly "xhttp headers host": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "independent \"host\"";
            };
            readonly xtls: {
                readonly supported: false;
                readonly removed: "26.7.11";
                readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            };
        };
    };
    readonly "v26.7.28": {
        readonly adapterId: "xray@26.7";
        readonly xrayVersionRange: ">=26.7.0 <26.8.0";
        readonly latestTestedVersion: "26.7.28";
        readonly protocols: readonly ["blackhole", "block", "direct", "dns", "dokodemo-door", "freedom", "http", "hysteria", "loopback", "mixed", "shadowsocks", "socks", "trojan", "tun", "tunnel", "vless", "vmess", "wireguard"];
        readonly transports: readonly ["grpc", "httpupgrade", "hysteria", "kcp", "mkcp", "raw", "splithttp", "tcp", "websocket", "ws", "xhttp"];
        readonly securities: readonly ["none", "reality", "tls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_133", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_148", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_26_3", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
        }, {
            readonly feature: "Flow for Trojan";
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
        }];
        readonly compatibilityMatrix: {
            readonly allowInsecure: {
                readonly supported: false;
                readonly removed: "26.7.28";
                readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
            };
            readonly api: {
                readonly supported: true;
            };
            readonly blackhole: {
                readonly supported: true;
            };
            readonly block: {
                readonly supported: true;
            };
            readonly burstObservatory: {
                readonly supported: true;
            };
            readonly direct: {
                readonly supported: true;
            };
            readonly dns: {
                readonly supported: true;
            };
            readonly "dns legacy nonIPQuery blockTypes": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "\"rules\"";
            };
            readonly "dokodemo-door": {
                readonly supported: true;
            };
            readonly env: {
                readonly supported: true;
            };
            readonly fakeDns: {
                readonly supported: true;
            };
            readonly "finalmask xdns domain": {
                readonly supported: false;
                readonly removed: "26.7.28";
                readonly replacement: "domains(server) & resolvers(client)";
            };
            readonly freedom: {
                readonly supported: true;
            };
            readonly "freedom noise": {
                readonly supported: false;
                readonly removed: "26.7.28";
                readonly replacement: "noises = [ { ... } ]";
            };
            readonly geodata: {
                readonly supported: true;
            };
            readonly "global transport": {
                readonly supported: false;
                readonly removed: "26.7.28";
                readonly replacement: "streamSettings in inbounds and outbounds";
            };
            readonly grpc: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP stream-up H2";
            };
            readonly http: {
                readonly supported: true;
            };
            readonly "http-transport": {
                readonly supported: false;
                readonly removed: "26.7.28";
                readonly replacement: "XHTTP stream-one H2 & H3";
            };
            readonly httpupgrade: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly hysteria: {
                readonly supported: true;
            };
            readonly inbounds: {
                readonly supported: true;
            };
            readonly kcp: {
                readonly supported: true;
            };
            readonly log: {
                readonly supported: true;
            };
            readonly loopback: {
                readonly supported: true;
            };
            readonly metrics: {
                readonly supported: true;
            };
            readonly mixed: {
                readonly supported: true;
            };
            readonly mkcp: {
                readonly supported: true;
            };
            readonly "mkcp header/seed": {
                readonly supported: false;
                readonly removed: "26.7.28";
                readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            };
            readonly none: {
                readonly supported: true;
            };
            readonly observatory: {
                readonly supported: true;
            };
            readonly outbounds: {
                readonly supported: true;
            };
            readonly policy: {
                readonly supported: true;
            };
            readonly quic: {
                readonly supported: false;
                readonly removed: "26.7.28";
                readonly replacement: "XHTTP stream-one H3";
            };
            readonly raw: {
                readonly supported: true;
            };
            readonly reality: {
                readonly supported: true;
            };
            readonly reverse: {
                readonly supported: true;
            };
            readonly routing: {
                readonly supported: true;
            };
            readonly shadowsocks: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly socks: {
                readonly supported: true;
            };
            readonly splithttp: {
                readonly supported: true;
            };
            readonly stats: {
                readonly supported: true;
            };
            readonly tcp: {
                readonly supported: true;
            };
            readonly tls: {
                readonly supported: true;
            };
            readonly transport: {
                readonly supported: true;
            };
            readonly trojan: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS with Flow & Seed";
            };
            readonly "trojan flow": {
                readonly supported: false;
                readonly removed: "26.7.28";
            };
            readonly tun: {
                readonly supported: true;
            };
            readonly tunnel: {
                readonly supported: true;
            };
            readonly version: {
                readonly supported: true;
            };
            readonly vless: {
                readonly supported: true;
            };
            readonly vmess: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "VLESS Encryption";
            };
            readonly websocket: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly wireguard: {
                readonly supported: true;
            };
            readonly ws: {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "XHTTP H2 & H3";
            };
            readonly xhttp: {
                readonly supported: true;
            };
            readonly "xhttp headers host": {
                readonly supported: true;
                readonly deprecated: true;
                readonly replacement: "independent \"host\"";
            };
            readonly xtls: {
                readonly supported: false;
                readonly removed: "26.7.28";
                readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            };
        };
    };
};
//# sourceMappingURL=generated-capabilities.d.ts.map