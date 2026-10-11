export declare const xrayParityManifest: {
    readonly source: {
        readonly repo: "XTLS/Xray-core";
        readonly sourcePathEnv: "XRAY_CORE_DIR";
        readonly config: "xray-parity.config.ts";
        readonly releaseInputs: readonly ["v25.10.15", "v26.4.25", "v26.5.3", "v26.6.22", "v26.6.27", "v26.7.11", "v26.7.28", "latest"];
        readonly selectedTags: readonly ["v25.10.15", "v26.4.25", "v26.5.3", "v26.6.22", "v26.6.27", "v26.7.11", "v26.7.28"];
        readonly tags: readonly ["v25.10.15", "v26.4.25", "v26.5.3", "v26.6.22", "v26.6.27", "v26.7.11", "v26.7.28"];
    };
    readonly releases: readonly [{
        readonly tag: "v25.10.15";
        readonly version: "25.10.15";
        readonly commit: "b69a376aa1b61ad94c9c05b2c2cd263567b8cc23";
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
            readonly source: "infra/conf/freedom.go";
            readonly keys: readonly ["freedom noise"];
        }, {
            readonly feature: "\"serverNameToVerify\"";
            readonly replacement: "\"verifyPeerCertInNames\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly [];
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["http-transport"];
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xtls"];
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["quic"];
        }, {
            readonly feature: "Flow for Trojan";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan flow"];
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly ["global transport"];
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xhttp headers host"];
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["grpc"];
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["httpupgrade"];
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["websocket", "ws"];
        }];
        readonly topLevelKeys: readonly ["api", "burstObservatory", "dns", "fakeDns", "inbounds", "log", "metrics", "observatory", "outbounds", "policy", "reverse", "routing", "stats", "transport", "version"];
        readonly inboundProtocols: readonly [{
            readonly protocol: "dokodemo-door";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPServerConfig";
        }, {
            readonly protocol: "mixed";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksServerConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanServerConfig";
        }, {
            readonly protocol: "tunnel";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessInboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessInboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly outboundProtocols: readonly [{
            readonly protocol: "blackhole";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "block";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "direct";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "dns";
            readonly config: "DNSOutboundConfig";
        }, {
            readonly protocol: "freedom";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPClientConfig";
        }, {
            readonly protocol: "loopback";
            readonly config: "LoopbackConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksClientConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksClientConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanClientConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessOutboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessOutboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly streamFields: readonly [{
            readonly go: "Address";
            readonly type: "*Address";
            readonly json: "address";
        }, {
            readonly go: "Port";
            readonly type: "uint16";
            readonly json: "port";
        }, {
            readonly go: "Network";
            readonly type: "*TransportProtocol";
            readonly json: "network";
        }, {
            readonly go: "Security";
            readonly type: "string";
            readonly json: "security";
        }, {
            readonly go: "TLSSettings";
            readonly type: "*TLSConfig";
            readonly json: "tlsSettings";
        }, {
            readonly go: "REALITYSettings";
            readonly type: "*REALITYConfig";
            readonly json: "realitySettings";
        }, {
            readonly go: "RAWSettings";
            readonly type: "*TCPConfig";
            readonly json: "rawSettings";
        }, {
            readonly go: "TCPSettings";
            readonly type: "*TCPConfig";
            readonly json: "tcpSettings";
        }, {
            readonly go: "XHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "xhttpSettings";
        }, {
            readonly go: "SplitHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "splithttpSettings";
        }, {
            readonly go: "KCPSettings";
            readonly type: "*KCPConfig";
            readonly json: "kcpSettings";
        }, {
            readonly go: "GRPCSettings";
            readonly type: "*GRPCConfig";
            readonly json: "grpcSettings";
        }, {
            readonly go: "WSSettings";
            readonly type: "*WebSocketConfig";
            readonly json: "wsSettings";
        }, {
            readonly go: "HTTPUPGRADESettings";
            readonly type: "*HttpUpgradeConfig";
            readonly json: "httpupgradeSettings";
        }, {
            readonly go: "SocketSettings";
            readonly type: "*SocketConfig";
            readonly json: "sockopt";
        }];
        readonly transportAliases: {
            readonly grpc: "grpc";
            readonly httpupgrade: "httpupgrade";
            readonly kcp: "mkcp";
            readonly mkcp: "mkcp";
            readonly raw: "tcp";
            readonly splithttp: "splithttp";
            readonly tcp: "tcp";
            readonly websocket: "websocket";
            readonly ws: "websocket";
            readonly xhttp: "splithttp";
        };
        readonly securityTypes: readonly ["none", "reality", "tls", "xtls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly jsonLoaders: {
            readonly "infra/conf/transport_internet.go:kcpHeaderLoader": readonly [{
                readonly protocol: "dns";
                readonly config: "DNSAuthenticator";
            }, {
                readonly protocol: "dtls";
                readonly config: "DTLSAuthenticator";
            }, {
                readonly protocol: "none";
                readonly config: "NoOpAuthenticator";
            }, {
                readonly protocol: "srtp";
                readonly config: "SRTPAuthenticator";
            }, {
                readonly protocol: "utp";
                readonly config: "UTPAuthenticator";
            }, {
                readonly protocol: "wechat-video";
                readonly config: "WechatVideoAuthenticator";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireguardAuthenticator";
            }];
            readonly "infra/conf/transport_internet.go:tcpHeaderLoader": readonly [{
                readonly protocol: "http";
                readonly config: "Authenticator";
            }, {
                readonly protocol: "none";
                readonly config: "NoOpConnectionAuthenticator";
            }];
            readonly "infra/conf/xray.go:inboundConfigLoader": readonly [{
                readonly protocol: "dokodemo-door";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPServerConfig";
            }, {
                readonly protocol: "mixed";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksServerConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanServerConfig";
            }, {
                readonly protocol: "tunnel";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessInboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessInboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
            readonly "infra/conf/xray.go:outboundConfigLoader": readonly [{
                readonly protocol: "blackhole";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "block";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "direct";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "dns";
                readonly config: "DNSOutboundConfig";
            }, {
                readonly protocol: "freedom";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPClientConfig";
            }, {
                readonly protocol: "loopback";
                readonly config: "LoopbackConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksClientConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksClientConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanClientConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessOutboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessOutboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
        };
        readonly structs: {
            readonly APIConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }, {
                readonly go: "Services";
                readonly type: "[]string";
                readonly json: "services";
            }];
            readonly Authenticator: readonly [{
                readonly go: "Request";
                readonly type: "AuthenticatorRequest";
                readonly json: "request";
            }, {
                readonly go: "Response";
                readonly type: "AuthenticatorResponse";
                readonly json: "response";
            }];
            readonly AuthenticatorRequest: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Method";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Path";
                readonly type: "StringList";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly AuthenticatorResponse: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Status";
                readonly type: "string";
                readonly json: "status";
            }, {
                readonly go: "Reason";
                readonly type: "string";
                readonly json: "reason";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly BalancingRule: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Selectors";
                readonly type: "StringList";
                readonly json: "selector";
            }, {
                readonly go: "Strategy";
                readonly type: "StrategyConfig";
                readonly json: "strategy";
            }, {
                readonly go: "FallbackTag";
                readonly type: "string";
                readonly json: "fallbackTag";
            }];
            readonly BlackholeConfig: readonly [{
                readonly go: "Response";
                readonly type: "json.RawMessage";
                readonly json: "response";
            }];
            readonly BridgeConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly BurstObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "HealthCheck";
                readonly type: "*healthCheckSettings";
                readonly json: "pingConfig";
            }];
            readonly Config: readonly [{
                readonly go: "Transport";
                readonly type: "map[string]json.RawMessage";
                readonly json: "transport";
            }, {
                readonly go: "LogConfig";
                readonly type: "*LogConfig";
                readonly json: "log";
            }, {
                readonly go: "RouterConfig";
                readonly type: "*RouterConfig";
                readonly json: "routing";
            }, {
                readonly go: "DNSConfig";
                readonly type: "*DNSConfig";
                readonly json: "dns";
            }, {
                readonly go: "InboundConfigs";
                readonly type: "[]InboundDetourConfig";
                readonly json: "inbounds";
            }, {
                readonly go: "OutboundConfigs";
                readonly type: "[]OutboundDetourConfig";
                readonly json: "outbounds";
            }, {
                readonly go: "Policy";
                readonly type: "*PolicyConfig";
                readonly json: "policy";
            }, {
                readonly go: "API";
                readonly type: "*APIConfig";
                readonly json: "api";
            }, {
                readonly go: "Metrics";
                readonly type: "*MetricsConfig";
                readonly json: "metrics";
            }, {
                readonly go: "Stats";
                readonly type: "*StatsConfig";
                readonly json: "stats";
            }, {
                readonly go: "Reverse";
                readonly type: "*ReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "FakeDNS";
                readonly type: "*FakeDNSConfig";
                readonly json: "fakeDns";
            }, {
                readonly go: "Observatory";
                readonly type: "*ObservatoryConfig";
                readonly json: "observatory";
            }, {
                readonly go: "BurstObservatory";
                readonly type: "*BurstObservatoryConfig";
                readonly json: "burstObservatory";
            }, {
                readonly go: "Version";
                readonly type: "*VersionConfig";
                readonly json: "version";
            }];
            readonly CustomSockoptConfig: readonly [{
                readonly go: "Syetem";
                readonly type: "string";
                readonly json: "system";
            }, {
                readonly go: "Network";
                readonly type: "string";
                readonly json: "network";
            }, {
                readonly go: "Level";
                readonly type: "string";
                readonly json: "level";
            }, {
                readonly go: "Opt";
                readonly type: "string";
                readonly json: "opt";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }];
            readonly DNSAuthenticator: readonly [{
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly DNSConfig: readonly [{
                readonly go: "Servers";
                readonly type: "[]*NameServerConfig";
                readonly json: "servers";
            }, {
                readonly go: "Hosts";
                readonly type: "*HostsWrapper";
                readonly json: "hosts";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "DisableCache";
                readonly type: "bool";
                readonly json: "disableCache";
            }, {
                readonly go: "DisableFallback";
                readonly type: "bool";
                readonly json: "disableFallback";
            }, {
                readonly go: "DisableFallbackIfMatch";
                readonly type: "bool";
                readonly json: "disableFallbackIfMatch";
            }, {
                readonly go: "UseSystemHosts";
                readonly type: "bool";
                readonly json: "useSystemHosts";
            }];
            readonly DNSOutboundConfig: readonly [{
                readonly go: "Network";
                readonly type: "Network";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "NonIPQuery";
                readonly type: "string";
                readonly json: "nonIPQuery";
            }, {
                readonly go: "BlockTypes";
                readonly type: "[]int32";
                readonly json: "blockTypes";
            }];
            readonly DokodemoConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "PortMap";
                readonly type: "map[string]string";
                readonly json: "portMap";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "FollowRedirect";
                readonly type: "bool";
                readonly json: "followRedirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly DTLSAuthenticator: readonly [];
            readonly FakeDNSPoolElementConfig: readonly [{
                readonly go: "IPPool";
                readonly type: "string";
                readonly json: "ipPool";
            }, {
                readonly go: "LRUSize";
                readonly type: "int64";
                readonly json: "poolSize";
            }];
            readonly FakeDNSPostProcessingStage: readonly [];
            readonly Fragment: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "*Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Interval";
                readonly type: "*Int32Range";
                readonly json: "interval";
            }, {
                readonly go: "MaxSplit";
                readonly type: "*Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FreedomConfig: readonly [{
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Redirect";
                readonly type: "string";
                readonly json: "redirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Fragment";
                readonly type: "*Fragment";
                readonly json: "fragment";
            }, {
                readonly go: "Noise";
                readonly type: "*Noise";
                readonly json: "noise";
            }, {
                readonly go: "Noises";
                readonly type: "[]*Noise";
                readonly json: "noises";
            }, {
                readonly go: "ProxyProtocol";
                readonly type: "uint32";
                readonly json: "proxyProtocol";
            }];
            readonly GRPCConfig: readonly [{
                readonly go: "Authority";
                readonly type: "string";
                readonly json: "authority";
            }, {
                readonly go: "ServiceName";
                readonly type: "string";
                readonly json: "serviceName";
            }, {
                readonly go: "MultiMode";
                readonly type: "bool";
                readonly json: "multiMode";
            }, {
                readonly go: "IdleTimeout";
                readonly type: "int32";
                readonly json: "idle_timeout";
            }, {
                readonly go: "HealthCheckTimeout";
                readonly type: "int32";
                readonly json: "health_check_timeout";
            }, {
                readonly go: "PermitWithoutStream";
                readonly type: "bool";
                readonly json: "permit_without_stream";
            }, {
                readonly go: "InitialWindowsSize";
                readonly type: "int32";
                readonly json: "initial_windows_size";
            }, {
                readonly go: "UserAgent";
                readonly type: "string";
                readonly json: "user_agent";
            }];
            readonly HappyEyeballsConfig: readonly [{
                readonly go: "PrioritizeIPv6";
                readonly type: "bool";
                readonly json: "prioritizeIPv6";
            }, {
                readonly go: "TryDelayMs";
                readonly type: "uint64";
                readonly json: "tryDelayMs";
            }, {
                readonly go: "Interleave";
                readonly type: "uint32";
                readonly json: "interleave";
            }, {
                readonly go: "MaxConcurrentTry";
                readonly type: "uint32";
                readonly json: "maxConcurrentTry";
            }];
            readonly healthCheckSettings: readonly [{
                readonly go: "Destination";
                readonly type: "string";
                readonly json: "destination";
            }, {
                readonly go: "Connectivity";
                readonly type: "string";
                readonly json: "connectivity";
            }, {
                readonly go: "Interval";
                readonly type: "duration.Duration";
                readonly json: "interval";
            }, {
                readonly go: "SamplingCount";
                readonly type: "int";
                readonly json: "sampling";
            }, {
                readonly go: "Timeout";
                readonly type: "duration.Duration";
                readonly json: "timeout";
            }, {
                readonly go: "HttpMethod";
                readonly type: "string";
                readonly json: "httpMethod";
            }];
            readonly HTTPAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly HTTPClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*HTTPRemoteConfig";
                readonly json: "servers";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly HTTPRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly HTTPResponse: readonly [];
            readonly HTTPServerConfig: readonly [{
                readonly go: "Accounts";
                readonly type: "[]*HTTPAccount";
                readonly json: "accounts";
            }, {
                readonly go: "Transparent";
                readonly type: "bool";
                readonly json: "allowTransparent";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly HttpUpgradeConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly InboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "PortList";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "ListenOn";
                readonly type: "*Address";
                readonly json: "listen";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "SniffingConfig";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly KCPConfig: readonly [{
                readonly go: "Mtu";
                readonly type: "*uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Tti";
                readonly type: "*uint32";
                readonly json: "tti";
            }, {
                readonly go: "UpCap";
                readonly type: "*uint32";
                readonly json: "uplinkCapacity";
            }, {
                readonly go: "DownCap";
                readonly type: "*uint32";
                readonly json: "downlinkCapacity";
            }, {
                readonly go: "Congestion";
                readonly type: "*bool";
                readonly json: "congestion";
            }, {
                readonly go: "ReadBufferSize";
                readonly type: "*uint32";
                readonly json: "readBufferSize";
            }, {
                readonly go: "WriteBufferSize";
                readonly type: "*uint32";
                readonly json: "writeBufferSize";
            }, {
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "Seed";
                readonly type: "*string";
                readonly json: "seed";
            }];
            readonly LogConfig: readonly [{
                readonly go: "AccessLog";
                readonly type: "string";
                readonly json: "access";
            }, {
                readonly go: "ErrorLog";
                readonly type: "string";
                readonly json: "error";
            }, {
                readonly go: "LogLevel";
                readonly type: "string";
                readonly json: "loglevel";
            }, {
                readonly go: "DNSLog";
                readonly type: "bool";
                readonly json: "dnsLog";
            }, {
                readonly go: "MaskAddress";
                readonly type: "string";
                readonly json: "maskAddress";
            }];
            readonly LoopbackConfig: readonly [{
                readonly go: "InboundTag";
                readonly type: "string";
                readonly json: "inboundTag";
            }];
            readonly MetricsConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }];
            readonly MuxConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "Concurrency";
                readonly type: "int16";
                readonly json: "concurrency";
            }, {
                readonly go: "XudpConcurrency";
                readonly type: "int16";
                readonly json: "xudpConcurrency";
            }, {
                readonly go: "XudpProxyUDP443";
                readonly type: "string";
                readonly json: "xudpProxyUDP443";
            }];
            readonly NameServerConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "SkipFallback";
                readonly type: "bool";
                readonly json: "skipFallback";
            }, {
                readonly go: "Domains";
                readonly type: "[]string";
                readonly json: "domains";
            }, {
                readonly go: "ExpectedIPs";
                readonly type: "StringList";
                readonly json: "expectedIPs";
            }, {
                readonly go: "ExpectIPs";
                readonly type: "StringList";
                readonly json: "expectIPs";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TimeoutMs";
                readonly type: "uint64";
                readonly json: "timeoutMs";
            }, {
                readonly go: "DisableCache";
                readonly type: "bool";
                readonly json: "disableCache";
            }, {
                readonly go: "FinalQuery";
                readonly type: "bool";
                readonly json: "finalQuery";
            }, {
                readonly go: "UnexpectedIPs";
                readonly type: "StringList";
                readonly json: "unexpectedIPs";
            }];
            readonly Noise: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "string";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "*Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "ApplyTo";
                readonly type: "string";
                readonly json: "applyTo";
            }];
            readonly NoneResponse: readonly [];
            readonly NoOpAuthenticator: readonly [];
            readonly NoOpConnectionAuthenticator: readonly [];
            readonly ObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "ProbeURL";
                readonly type: "string";
                readonly json: "probeURL";
            }, {
                readonly go: "ProbeInterval";
                readonly type: "duration.Duration";
                readonly json: "probeInterval";
            }, {
                readonly go: "EnableConcurrency";
                readonly type: "bool";
                readonly json: "enableConcurrency";
            }];
            readonly OutboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "SendThrough";
                readonly type: "*string";
                readonly json: "sendThrough";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "ProxySettings";
                readonly type: "*ProxyConfig";
                readonly json: "proxySettings";
            }, {
                readonly go: "MuxSettings";
                readonly type: "*MuxConfig";
                readonly json: "mux";
            }, {
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }];
            readonly Policy: readonly [{
                readonly go: "Handshake";
                readonly type: "*uint32";
                readonly json: "handshake";
            }, {
                readonly go: "ConnectionIdle";
                readonly type: "*uint32";
                readonly json: "connIdle";
            }, {
                readonly go: "UplinkOnly";
                readonly type: "*uint32";
                readonly json: "uplinkOnly";
            }, {
                readonly go: "DownlinkOnly";
                readonly type: "*uint32";
                readonly json: "downlinkOnly";
            }, {
                readonly go: "StatsUserUplink";
                readonly type: "bool";
                readonly json: "statsUserUplink";
            }, {
                readonly go: "StatsUserDownlink";
                readonly type: "bool";
                readonly json: "statsUserDownlink";
            }, {
                readonly go: "StatsUserOnline";
                readonly type: "bool";
                readonly json: "statsUserOnline";
            }, {
                readonly go: "BufferSize";
                readonly type: "*int32";
                readonly json: "bufferSize";
            }];
            readonly PolicyConfig: readonly [{
                readonly go: "Levels";
                readonly type: "map[uint32]*Policy";
                readonly json: "levels";
            }, {
                readonly go: "System";
                readonly type: "*SystemPolicy";
                readonly json: "system";
            }];
            readonly PortalConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly ProxyConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TransportLayerProxy";
                readonly type: "bool";
                readonly json: "transportLayer";
            }];
            readonly RawFieldRule: readonly [{
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "*StringList";
                readonly json: "domains";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "SourceIP";
                readonly type: "*StringList";
                readonly json: "sourceIP";
            }, {
                readonly go: "Source";
                readonly type: "*StringList";
                readonly json: "source";
            }, {
                readonly go: "SourcePort";
                readonly type: "*PortList";
                readonly json: "sourcePort";
            }, {
                readonly go: "User";
                readonly type: "*StringList";
                readonly json: "user";
            }, {
                readonly go: "VlessRoute";
                readonly type: "*PortList";
                readonly json: "vlessRoute";
            }, {
                readonly go: "InboundTag";
                readonly type: "*StringList";
                readonly json: "inboundTag";
            }, {
                readonly go: "Protocols";
                readonly type: "*StringList";
                readonly json: "protocol";
            }, {
                readonly go: "Attributes";
                readonly type: "map[string]string";
                readonly json: "attrs";
            }, {
                readonly go: "LocalIP";
                readonly type: "*StringList";
                readonly json: "localIP";
            }, {
                readonly go: "LocalPort";
                readonly type: "*PortList";
                readonly json: "localPort";
            }];
            readonly REALITYConfig: readonly [{
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "Show";
                readonly type: "bool";
                readonly json: "show";
            }, {
                readonly go: "Target";
                readonly type: "json.RawMessage";
                readonly json: "target";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }, {
                readonly go: "ServerNames";
                readonly type: "[]string";
                readonly json: "serverNames";
            }, {
                readonly go: "PrivateKey";
                readonly type: "string";
                readonly json: "privateKey";
            }, {
                readonly go: "MinClientVer";
                readonly type: "string";
                readonly json: "minClientVer";
            }, {
                readonly go: "MaxClientVer";
                readonly type: "string";
                readonly json: "maxClientVer";
            }, {
                readonly go: "MaxTimeDiff";
                readonly type: "uint64";
                readonly json: "maxTimeDiff";
            }, {
                readonly go: "ShortIds";
                readonly type: "[]string";
                readonly json: "shortIds";
            }, {
                readonly go: "Mldsa65Seed";
                readonly type: "string";
                readonly json: "mldsa65Seed";
            }, {
                readonly go: "LimitFallbackUpload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackUpload";
            }, {
                readonly go: "LimitFallbackDownload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackDownload";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "ShortId";
                readonly type: "string";
                readonly json: "shortId";
            }, {
                readonly go: "Mldsa65Verify";
                readonly type: "string";
                readonly json: "mldsa65Verify";
            }, {
                readonly go: "SpiderX";
                readonly type: "string";
                readonly json: "spiderX";
            }];
            readonly ReverseConfig: readonly [{
                readonly go: "Bridges";
                readonly type: "[]BridgeConfig";
                readonly json: "bridges";
            }, {
                readonly go: "Portals";
                readonly type: "[]PortalConfig";
                readonly json: "portals";
            }];
            readonly RouterConfig: readonly [{
                readonly go: "RuleList";
                readonly type: "[]json.RawMessage";
                readonly json: "rules";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "*string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Balancers";
                readonly type: "[]*BalancingRule";
                readonly json: "balancers";
            }];
            readonly RouterRule: readonly [{
                readonly go: "RuleTag";
                readonly type: "string";
                readonly json: "ruleTag";
            }, {
                readonly go: "OutboundTag";
                readonly type: "string";
                readonly json: "outboundTag";
            }, {
                readonly go: "BalancerTag";
                readonly type: "string";
                readonly json: "balancerTag";
            }];
            readonly ShadowsocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "IVCheck";
                readonly type: "bool";
                readonly json: "ivCheck";
            }, {
                readonly go: "UoT";
                readonly type: "bool";
                readonly json: "uot";
            }, {
                readonly go: "UoTVersion";
                readonly type: "int";
                readonly json: "uotVersion";
            }, {
                readonly go: "Servers";
                readonly type: "[]*ShadowsocksServerTarget";
                readonly json: "servers";
            }];
            readonly ShadowsocksServerConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Users";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "NetworkList";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "IVCheck";
                readonly type: "bool";
                readonly json: "ivCheck";
            }];
            readonly ShadowsocksServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "IVCheck";
                readonly type: "bool";
                readonly json: "ivCheck";
            }, {
                readonly go: "UoT";
                readonly type: "bool";
                readonly json: "uot";
            }, {
                readonly go: "UoTVersion";
                readonly type: "int";
                readonly json: "uotVersion";
            }];
            readonly ShadowsocksUserConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly SniffingConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "DestOverride";
                readonly type: "*StringList";
                readonly json: "destOverride";
            }, {
                readonly go: "DomainsExcluded";
                readonly type: "*StringList";
                readonly json: "domainsExcluded";
            }, {
                readonly go: "MetadataOnly";
                readonly type: "bool";
                readonly json: "metadataOnly";
            }, {
                readonly go: "RouteOnly";
                readonly type: "bool";
                readonly json: "routeOnly";
            }];
            readonly SocketConfig: readonly [{
                readonly go: "Mark";
                readonly type: "int32";
                readonly json: "mark";
            }, {
                readonly go: "TFO";
                readonly type: "interface{}";
                readonly json: "tcpFastOpen";
            }, {
                readonly go: "TProxy";
                readonly type: "string";
                readonly json: "tproxy";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "DialerProxy";
                readonly type: "string";
                readonly json: "dialerProxy";
            }, {
                readonly go: "TCPKeepAliveInterval";
                readonly type: "int32";
                readonly json: "tcpKeepAliveInterval";
            }, {
                readonly go: "TCPKeepAliveIdle";
                readonly type: "int32";
                readonly json: "tcpKeepAliveIdle";
            }, {
                readonly go: "TCPCongestion";
                readonly type: "string";
                readonly json: "tcpCongestion";
            }, {
                readonly go: "TCPWindowClamp";
                readonly type: "int32";
                readonly json: "tcpWindowClamp";
            }, {
                readonly go: "TCPMaxSeg";
                readonly type: "int32";
                readonly json: "tcpMaxSeg";
            }, {
                readonly go: "Penetrate";
                readonly type: "bool";
                readonly json: "penetrate";
            }, {
                readonly go: "TCPUserTimeout";
                readonly type: "int32";
                readonly json: "tcpUserTimeout";
            }, {
                readonly go: "V6only";
                readonly type: "bool";
                readonly json: "v6only";
            }, {
                readonly go: "Interface";
                readonly type: "string";
                readonly json: "interface";
            }, {
                readonly go: "TcpMptcp";
                readonly type: "bool";
                readonly json: "tcpMptcp";
            }, {
                readonly go: "CustomSockopt";
                readonly type: "[]*CustomSockoptConfig";
                readonly json: "customSockopt";
            }, {
                readonly go: "AddressPortStrategy";
                readonly type: "string";
                readonly json: "addressPortStrategy";
            }, {
                readonly go: "HappyEyeballsSettings";
                readonly type: "*HappyEyeballsConfig";
                readonly json: "happyEyeballs";
            }];
            readonly SocksAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly SocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*SocksRemoteConfig";
                readonly json: "servers";
            }];
            readonly SocksRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly SocksServerConfig: readonly [{
                readonly go: "AuthMethod";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*SocksAccount";
                readonly json: "accounts";
            }, {
                readonly go: "UDP";
                readonly type: "bool";
                readonly json: "udp";
            }, {
                readonly go: "Host";
                readonly type: "*Address";
                readonly json: "ip";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly SplitHTTPConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "XPaddingBytes";
                readonly type: "Int32Range";
                readonly json: "xPaddingBytes";
            }, {
                readonly go: "NoGRPCHeader";
                readonly type: "bool";
                readonly json: "noGRPCHeader";
            }, {
                readonly go: "NoSSEHeader";
                readonly type: "bool";
                readonly json: "noSSEHeader";
            }, {
                readonly go: "ScMaxEachPostBytes";
                readonly type: "Int32Range";
                readonly json: "scMaxEachPostBytes";
            }, {
                readonly go: "ScMinPostsIntervalMs";
                readonly type: "Int32Range";
                readonly json: "scMinPostsIntervalMs";
            }, {
                readonly go: "ScMaxBufferedPosts";
                readonly type: "int64";
                readonly json: "scMaxBufferedPosts";
            }, {
                readonly go: "ScStreamUpServerSecs";
                readonly type: "Int32Range";
                readonly json: "scStreamUpServerSecs";
            }, {
                readonly go: "Xmux";
                readonly type: "XmuxConfig";
                readonly json: "xmux";
            }, {
                readonly go: "DownloadSettings";
                readonly type: "*StreamConfig";
                readonly json: "downloadSettings";
            }, {
                readonly go: "Extra";
                readonly type: "json.RawMessage";
                readonly json: "extra";
            }];
            readonly SRTPAuthenticator: readonly [];
            readonly StatsConfig: readonly [];
            readonly StrategyConfig: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly strategyEmptyConfig: readonly [];
            readonly strategyLeastLoadConfig: readonly [{
                readonly go: "Costs";
                readonly type: "[]*router.StrategyWeight";
                readonly json: "costs";
            }, {
                readonly go: "Baselines";
                readonly type: "[]duration.Duration";
                readonly json: "baselines";
            }, {
                readonly go: "Expected";
                readonly type: "int32";
                readonly json: "expected";
            }, {
                readonly go: "MaxRTT";
                readonly type: "duration.Duration";
                readonly json: "maxRTT";
            }, {
                readonly go: "Tolerance";
                readonly type: "float64";
                readonly json: "tolerance";
            }];
            readonly StreamConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*TransportProtocol";
                readonly json: "network";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "TLSSettings";
                readonly type: "*TLSConfig";
                readonly json: "tlsSettings";
            }, {
                readonly go: "REALITYSettings";
                readonly type: "*REALITYConfig";
                readonly json: "realitySettings";
            }, {
                readonly go: "RAWSettings";
                readonly type: "*TCPConfig";
                readonly json: "rawSettings";
            }, {
                readonly go: "TCPSettings";
                readonly type: "*TCPConfig";
                readonly json: "tcpSettings";
            }, {
                readonly go: "XHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "xhttpSettings";
            }, {
                readonly go: "SplitHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "splithttpSettings";
            }, {
                readonly go: "KCPSettings";
                readonly type: "*KCPConfig";
                readonly json: "kcpSettings";
            }, {
                readonly go: "GRPCSettings";
                readonly type: "*GRPCConfig";
                readonly json: "grpcSettings";
            }, {
                readonly go: "WSSettings";
                readonly type: "*WebSocketConfig";
                readonly json: "wsSettings";
            }, {
                readonly go: "HTTPUPGRADESettings";
                readonly type: "*HttpUpgradeConfig";
                readonly json: "httpupgradeSettings";
            }, {
                readonly go: "SocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "sockopt";
            }];
            readonly SystemPolicy: readonly [{
                readonly go: "StatsInboundUplink";
                readonly type: "bool";
                readonly json: "statsInboundUplink";
            }, {
                readonly go: "StatsInboundDownlink";
                readonly type: "bool";
                readonly json: "statsInboundDownlink";
            }, {
                readonly go: "StatsOutboundUplink";
                readonly type: "bool";
                readonly json: "statsOutboundUplink";
            }, {
                readonly go: "StatsOutboundDownlink";
                readonly type: "bool";
                readonly json: "statsOutboundDownlink";
            }];
            readonly TCPConfig: readonly [{
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly TLSCertConfig: readonly [{
                readonly go: "CertFile";
                readonly type: "string";
                readonly json: "certificateFile";
            }, {
                readonly go: "CertStr";
                readonly type: "[]string";
                readonly json: "certificate";
            }, {
                readonly go: "KeyFile";
                readonly type: "string";
                readonly json: "keyFile";
            }, {
                readonly go: "KeyStr";
                readonly type: "[]string";
                readonly json: "key";
            }, {
                readonly go: "Usage";
                readonly type: "string";
                readonly json: "usage";
            }, {
                readonly go: "OcspStapling";
                readonly type: "uint64";
                readonly json: "ocspStapling";
            }, {
                readonly go: "OneTimeLoading";
                readonly type: "bool";
                readonly json: "oneTimeLoading";
            }, {
                readonly go: "BuildChain";
                readonly type: "bool";
                readonly json: "buildChain";
            }];
            readonly TLSConfig: readonly [{
                readonly go: "Insecure";
                readonly type: "bool";
                readonly json: "allowInsecure";
            }, {
                readonly go: "Certs";
                readonly type: "[]*TLSCertConfig";
                readonly json: "certificates";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "ALPN";
                readonly type: "*StringList";
                readonly json: "alpn";
            }, {
                readonly go: "EnableSessionResumption";
                readonly type: "bool";
                readonly json: "enableSessionResumption";
            }, {
                readonly go: "DisableSystemRoot";
                readonly type: "bool";
                readonly json: "disableSystemRoot";
            }, {
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "minVersion";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "maxVersion";
            }, {
                readonly go: "CipherSuites";
                readonly type: "string";
                readonly json: "cipherSuites";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "RejectUnknownSNI";
                readonly type: "bool";
                readonly json: "rejectUnknownSni";
            }, {
                readonly go: "PinnedPeerCertificateChainSha256";
                readonly type: "*[]string";
                readonly json: "pinnedPeerCertificateChainSha256";
            }, {
                readonly go: "PinnedPeerCertificatePublicKeySha256";
                readonly type: "*[]string";
                readonly json: "pinnedPeerCertificatePublicKeySha256";
            }, {
                readonly go: "CurvePreferences";
                readonly type: "*StringList";
                readonly json: "curvePreferences";
            }, {
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "ServerNameToVerify";
                readonly type: "string";
                readonly json: "serverNameToVerify";
            }, {
                readonly go: "VerifyPeerCertInNames";
                readonly type: "[]string";
                readonly json: "verifyPeerCertInNames";
            }, {
                readonly go: "ECHServerKeys";
                readonly type: "string";
                readonly json: "echServerKeys";
            }, {
                readonly go: "ECHConfigList";
                readonly type: "string";
                readonly json: "echConfigList";
            }, {
                readonly go: "ECHForceQuery";
                readonly type: "string";
                readonly json: "echForceQuery";
            }, {
                readonly go: "ECHSocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "echSockopt";
            }];
            readonly TrojanClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Servers";
                readonly type: "[]*TrojanServerTarget";
                readonly json: "servers";
            }];
            readonly TrojanInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly TrojanServerConfig: readonly [{
                readonly go: "Clients";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*TrojanInboundFallback";
                readonly json: "fallbacks";
            }];
            readonly TrojanServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TrojanUserConfig: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly User: readonly [{
                readonly go: "EmailString";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "LevelByte";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly UTPAuthenticator: readonly [];
            readonly VersionConfig: readonly [{
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "min";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "max";
            }];
            readonly VLessInboundConfig: readonly [{
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Decryption";
                readonly type: "string";
                readonly json: "decryption";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*VLessInboundFallback";
                readonly json: "fallbacks";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly VLessInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly VLessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Id";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Seed";
                readonly type: "string";
                readonly json: "seed";
            }, {
                readonly go: "Encryption";
                readonly type: "string";
                readonly json: "encryption";
            }, {
                readonly go: "Reverse";
                readonly type: "*vless.Reverse";
                readonly json: "reverse";
            }, {
                readonly go: "Vnext";
                readonly type: "[]*VLessOutboundVnext";
                readonly json: "vnext";
            }];
            readonly VLessOutboundVnext: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly VMessAccount: readonly [{
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }];
            readonly VMessDefaultConfig: readonly [{
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VMessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Defaults";
                readonly type: "*VMessDefaultConfig";
                readonly json: "default";
            }];
            readonly VMessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }, {
                readonly go: "Receivers";
                readonly type: "[]*VMessOutboundTarget";
                readonly json: "vnext";
            }];
            readonly VMessOutboundTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly WebSocketConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "HeartbeatPeriod";
                readonly type: "uint32";
                readonly json: "heartbeatPeriod";
            }];
            readonly WechatVideoAuthenticator: readonly [];
            readonly WireguardAuthenticator: readonly [];
            readonly WireGuardConfig: readonly [{
                readonly go: "NoKernelTun";
                readonly type: "bool";
                readonly json: "noKernelTun";
            }, {
                readonly go: "SecretKey";
                readonly type: "string";
                readonly json: "secretKey";
            }, {
                readonly go: "Address";
                readonly type: "[]string";
                readonly json: "address";
            }, {
                readonly go: "Peers";
                readonly type: "[]*WireGuardPeerConfig";
                readonly json: "peers";
            }, {
                readonly go: "MTU";
                readonly type: "int32";
                readonly json: "mtu";
            }, {
                readonly go: "NumWorkers";
                readonly type: "int32";
                readonly json: "workers";
            }, {
                readonly go: "Reserved";
                readonly type: "[]byte";
                readonly json: "reserved";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }];
            readonly WireGuardPeerConfig: readonly [{
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "PreSharedKey";
                readonly type: "string";
                readonly json: "preSharedKey";
            }, {
                readonly go: "Endpoint";
                readonly type: "string";
                readonly json: "endpoint";
            }, {
                readonly go: "KeepAlive";
                readonly type: "uint32";
                readonly json: "keepAlive";
            }, {
                readonly go: "AllowedIPs";
                readonly type: "[]string";
                readonly json: "allowedIPs";
            }];
            readonly XmuxConfig: readonly [{
                readonly go: "MaxConcurrency";
                readonly type: "Int32Range";
                readonly json: "maxConcurrency";
            }, {
                readonly go: "MaxConnections";
                readonly type: "Int32Range";
                readonly json: "maxConnections";
            }, {
                readonly go: "CMaxReuseTimes";
                readonly type: "Int32Range";
                readonly json: "cMaxReuseTimes";
            }, {
                readonly go: "HMaxRequestTimes";
                readonly type: "Int32Range";
                readonly json: "hMaxRequestTimes";
            }, {
                readonly go: "HMaxReusableSecs";
                readonly type: "Int32Range";
                readonly json: "hMaxReusableSecs";
            }, {
                readonly go: "HKeepAlivePeriod";
                readonly type: "int64";
                readonly json: "hKeepAlivePeriod";
            }];
        };
    }, {
        readonly tag: "v26.4.25";
        readonly version: "26.4.25";
        readonly commit: "b4f08981becb71eaa995fa98ed2098ade92566bb";
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
            readonly source: "infra/conf/freedom.go";
            readonly keys: readonly ["freedom noise"];
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["allowInsecure"];
        }, {
            readonly feature: "\"verifyPeerCertInNames\"";
            readonly replacement: "\"verifyPeerCertByName\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["verifyPeerCertInNames"];
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["finalmask xdns domain"];
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["http-transport"];
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xtls"];
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["mkcp header/seed"];
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["quic"];
        }, {
            readonly feature: "Flow for Trojan";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan flow"];
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly [];
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly ["global transport"];
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\" in DNS outbound";
            readonly replacement: "\"rules\"";
            readonly source: "infra/conf/dns_proxy.go";
            readonly keys: readonly ["dns legacy nonIPQuery blockTypes"];
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/shadowsocks.go";
            readonly keys: readonly ["shadowsocks"];
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xhttp headers host"];
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["grpc"];
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["httpupgrade"];
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["websocket", "ws"];
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan"];
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/vmess.go";
            readonly keys: readonly ["vmess"];
        }];
        readonly topLevelKeys: readonly ["api", "burstObservatory", "dns", "fakeDns", "geodata", "inbounds", "log", "metrics", "observatory", "outbounds", "policy", "reverse", "routing", "stats", "transport", "version"];
        readonly inboundProtocols: readonly [{
            readonly protocol: "dokodemo-door";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPServerConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaServerConfig";
        }, {
            readonly protocol: "mixed";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksServerConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanServerConfig";
        }, {
            readonly protocol: "tun";
            readonly config: "TunConfig";
        }, {
            readonly protocol: "tunnel";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessInboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessInboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly outboundProtocols: readonly [{
            readonly protocol: "blackhole";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "block";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "direct";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "dns";
            readonly config: "DNSOutboundConfig";
        }, {
            readonly protocol: "freedom";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPClientConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaClientConfig";
        }, {
            readonly protocol: "loopback";
            readonly config: "LoopbackConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksClientConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksClientConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanClientConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessOutboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessOutboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly streamFields: readonly [{
            readonly go: "Address";
            readonly type: "*Address";
            readonly json: "address";
        }, {
            readonly go: "Port";
            readonly type: "uint16";
            readonly json: "port";
        }, {
            readonly go: "Network";
            readonly type: "*TransportProtocol";
            readonly json: "network";
        }, {
            readonly go: "Security";
            readonly type: "string";
            readonly json: "security";
        }, {
            readonly go: "FinalMask";
            readonly type: "*FinalMask";
            readonly json: "finalmask";
        }, {
            readonly go: "TLSSettings";
            readonly type: "*TLSConfig";
            readonly json: "tlsSettings";
        }, {
            readonly go: "REALITYSettings";
            readonly type: "*REALITYConfig";
            readonly json: "realitySettings";
        }, {
            readonly go: "RAWSettings";
            readonly type: "*TCPConfig";
            readonly json: "rawSettings";
        }, {
            readonly go: "TCPSettings";
            readonly type: "*TCPConfig";
            readonly json: "tcpSettings";
        }, {
            readonly go: "XHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "xhttpSettings";
        }, {
            readonly go: "SplitHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "splithttpSettings";
        }, {
            readonly go: "KCPSettings";
            readonly type: "*KCPConfig";
            readonly json: "kcpSettings";
        }, {
            readonly go: "GRPCSettings";
            readonly type: "*GRPCConfig";
            readonly json: "grpcSettings";
        }, {
            readonly go: "WSSettings";
            readonly type: "*WebSocketConfig";
            readonly json: "wsSettings";
        }, {
            readonly go: "HTTPUPGRADESettings";
            readonly type: "*HttpUpgradeConfig";
            readonly json: "httpupgradeSettings";
        }, {
            readonly go: "HysteriaSettings";
            readonly type: "*HysteriaConfig";
            readonly json: "hysteriaSettings";
        }, {
            readonly go: "SocketSettings";
            readonly type: "*SocketConfig";
            readonly json: "sockopt";
        }];
        readonly transportAliases: {
            readonly grpc: "grpc";
            readonly httpupgrade: "httpupgrade";
            readonly hysteria: "hysteria";
            readonly kcp: "mkcp";
            readonly mkcp: "mkcp";
            readonly raw: "tcp";
            readonly splithttp: "splithttp";
            readonly tcp: "tcp";
            readonly websocket: "websocket";
            readonly ws: "websocket";
            readonly xhttp: "splithttp";
        };
        readonly securityTypes: readonly ["none", "reality", "tls", "xtls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly jsonLoaders: {
            readonly "infra/conf/transport_internet.go:tcpHeaderLoader": readonly [{
                readonly protocol: "http";
                readonly config: "Authenticator";
            }, {
                readonly protocol: "none";
                readonly config: "NoOpConnectionAuthenticator";
            }];
            readonly "infra/conf/transport_internet.go:tcpmaskLoader": readonly [{
                readonly protocol: "fragment";
                readonly config: "FragmentMask";
            }, {
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomTCP";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }];
            readonly "infra/conf/transport_internet.go:udpmaskLoader": readonly [{
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomUDP";
            }, {
                readonly protocol: "header-dns";
                readonly config: "Dns";
            }, {
                readonly protocol: "header-dtls";
                readonly config: "Dtls";
            }, {
                readonly protocol: "header-srtp";
                readonly config: "Srtp";
            }, {
                readonly protocol: "header-utp";
                readonly config: "Utp";
            }, {
                readonly protocol: "header-wechat";
                readonly config: "Wechat";
            }, {
                readonly protocol: "header-wireguard";
                readonly config: "Wireguard";
            }, {
                readonly protocol: "mkcp-aes128gcm";
                readonly config: "Aes128Gcm";
            }, {
                readonly protocol: "mkcp-original";
                readonly config: "Original";
            }, {
                readonly protocol: "noise";
                readonly config: "NoiseMask";
            }, {
                readonly protocol: "salamander";
                readonly config: "Salamander";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }, {
                readonly protocol: "xdns";
                readonly config: "Xdns";
            }, {
                readonly protocol: "xicmp";
                readonly config: "Xicmp";
            }];
            readonly "infra/conf/xray.go:inboundConfigLoader": readonly [{
                readonly protocol: "dokodemo-door";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPServerConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaServerConfig";
            }, {
                readonly protocol: "mixed";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksServerConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanServerConfig";
            }, {
                readonly protocol: "tun";
                readonly config: "TunConfig";
            }, {
                readonly protocol: "tunnel";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessInboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessInboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
            readonly "infra/conf/xray.go:outboundConfigLoader": readonly [{
                readonly protocol: "blackhole";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "block";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "direct";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "dns";
                readonly config: "DNSOutboundConfig";
            }, {
                readonly protocol: "freedom";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPClientConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaClientConfig";
            }, {
                readonly protocol: "loopback";
                readonly config: "LoopbackConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksClientConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksClientConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanClientConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessOutboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessOutboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
        };
        readonly structs: {
            readonly Aes128Gcm: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly APIConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }, {
                readonly go: "Services";
                readonly type: "[]string";
                readonly json: "services";
            }];
            readonly Authenticator: readonly [{
                readonly go: "Request";
                readonly type: "AuthenticatorRequest";
                readonly json: "request";
            }, {
                readonly go: "Response";
                readonly type: "AuthenticatorResponse";
                readonly json: "response";
            }];
            readonly AuthenticatorRequest: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Method";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Path";
                readonly type: "StringList";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly AuthenticatorResponse: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Status";
                readonly type: "string";
                readonly json: "status";
            }, {
                readonly go: "Reason";
                readonly type: "string";
                readonly json: "reason";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly BalancingRule: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Selectors";
                readonly type: "StringList";
                readonly json: "selector";
            }, {
                readonly go: "Strategy";
                readonly type: "StrategyConfig";
                readonly json: "strategy";
            }, {
                readonly go: "FallbackTag";
                readonly type: "string";
                readonly json: "fallbackTag";
            }];
            readonly BlackholeConfig: readonly [{
                readonly go: "Response";
                readonly type: "json.RawMessage";
                readonly json: "response";
            }];
            readonly BridgeConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly BurstObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "HealthCheck";
                readonly type: "*healthCheckSettings";
                readonly json: "pingConfig";
            }];
            readonly Config: readonly [{
                readonly go: "Transport";
                readonly type: "map[string]json.RawMessage";
                readonly json: "transport";
            }, {
                readonly go: "LogConfig";
                readonly type: "*LogConfig";
                readonly json: "log";
            }, {
                readonly go: "RouterConfig";
                readonly type: "*RouterConfig";
                readonly json: "routing";
            }, {
                readonly go: "DNSConfig";
                readonly type: "*DNSConfig";
                readonly json: "dns";
            }, {
                readonly go: "InboundConfigs";
                readonly type: "[]InboundDetourConfig";
                readonly json: "inbounds";
            }, {
                readonly go: "OutboundConfigs";
                readonly type: "[]OutboundDetourConfig";
                readonly json: "outbounds";
            }, {
                readonly go: "Policy";
                readonly type: "*PolicyConfig";
                readonly json: "policy";
            }, {
                readonly go: "API";
                readonly type: "*APIConfig";
                readonly json: "api";
            }, {
                readonly go: "Metrics";
                readonly type: "*MetricsConfig";
                readonly json: "metrics";
            }, {
                readonly go: "Stats";
                readonly type: "*StatsConfig";
                readonly json: "stats";
            }, {
                readonly go: "Reverse";
                readonly type: "*ReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "FakeDNS";
                readonly type: "*FakeDNSConfig";
                readonly json: "fakeDns";
            }, {
                readonly go: "Observatory";
                readonly type: "*ObservatoryConfig";
                readonly json: "observatory";
            }, {
                readonly go: "BurstObservatory";
                readonly type: "*BurstObservatoryConfig";
                readonly json: "burstObservatory";
            }, {
                readonly go: "Version";
                readonly type: "*VersionConfig";
                readonly json: "version";
            }, {
                readonly go: "Geodata";
                readonly type: "*GeodataConfig";
                readonly json: "geodata";
            }];
            readonly CustomSockoptConfig: readonly [{
                readonly go: "Syetem";
                readonly type: "string";
                readonly json: "system";
            }, {
                readonly go: "Network";
                readonly type: "string";
                readonly json: "network";
            }, {
                readonly go: "Level";
                readonly type: "string";
                readonly json: "level";
            }, {
                readonly go: "Opt";
                readonly type: "string";
                readonly json: "opt";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }];
            readonly CustomTransform: readonly [{
                readonly go: "Op";
                readonly type: "string";
                readonly json: "op";
            }, {
                readonly go: "Args";
                readonly type: "[]CustomTransformArg";
                readonly json: "args";
            }];
            readonly CustomTransformArg: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Bytes";
                readonly type: "json.RawMessage";
                readonly json: "bytes";
            }, {
                readonly go: "U64";
                readonly type: "*uint64";
                readonly json: "u64";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Metadata";
                readonly type: "string";
                readonly json: "metadata";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }];
            readonly Dns: readonly [{
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly DNSConfig: readonly [{
                readonly go: "Servers";
                readonly type: "[]*NameServerConfig";
                readonly json: "servers";
            }, {
                readonly go: "Hosts";
                readonly type: "*HostsWrapper";
                readonly json: "hosts";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "DisableCache";
                readonly type: "bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "DisableFallback";
                readonly type: "bool";
                readonly json: "disableFallback";
            }, {
                readonly go: "DisableFallbackIfMatch";
                readonly type: "bool";
                readonly json: "disableFallbackIfMatch";
            }, {
                readonly go: "EnableParallelQuery";
                readonly type: "bool";
                readonly json: "enableParallelQuery";
            }, {
                readonly go: "UseSystemHosts";
                readonly type: "bool";
                readonly json: "useSystemHosts";
            }];
            readonly DNSOutboundConfig: readonly [{
                readonly go: "Network";
                readonly type: "Network";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Rules";
                readonly type: "[]*DNSOutboundRuleConfig";
                readonly json: "rules";
            }, {
                readonly go: "NonIPQuery";
                readonly type: "*string";
                readonly json: "nonIPQuery";
            }, {
                readonly go: "BlockTypes";
                readonly type: "*[]int32";
                readonly json: "blockTypes";
            }];
            readonly DNSOutboundRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "QType";
                readonly type: "*PortList";
                readonly json: "qtype";
            }, {
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }];
            readonly DokodemoConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "PortMap";
                readonly type: "map[string]string";
                readonly json: "portMap";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "FollowRedirect";
                readonly type: "bool";
                readonly json: "followRedirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly Dtls: readonly [];
            readonly FakeDNSPoolElementConfig: readonly [{
                readonly go: "IPPool";
                readonly type: "string";
                readonly json: "ipPool";
            }, {
                readonly go: "LRUSize";
                readonly type: "int64";
                readonly json: "poolSize";
            }];
            readonly FakeDNSPostProcessingStage: readonly [];
            readonly FinalMask: readonly [{
                readonly go: "Tcp";
                readonly type: "[]Mask";
                readonly json: "tcp";
            }, {
                readonly go: "Udp";
                readonly type: "[]Mask";
                readonly json: "udp";
            }, {
                readonly go: "QuicParams";
                readonly type: "*QuicParamsConfig";
                readonly json: "quicParams";
            }];
            readonly Fragment: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "*Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Interval";
                readonly type: "*Int32Range";
                readonly json: "interval";
            }, {
                readonly go: "MaxSplit";
                readonly type: "*Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FragmentMask: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "MaxSplit";
                readonly type: "Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FreedomConfig: readonly [{
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Redirect";
                readonly type: "string";
                readonly json: "redirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Fragment";
                readonly type: "*Fragment";
                readonly json: "fragment";
            }, {
                readonly go: "Noise";
                readonly type: "*Noise";
                readonly json: "noise";
            }, {
                readonly go: "Noises";
                readonly type: "[]*Noise";
                readonly json: "noises";
            }, {
                readonly go: "ProxyProtocol";
                readonly type: "uint32";
                readonly json: "proxyProtocol";
            }, {
                readonly go: "IPsBlocked";
                readonly type: "*StringList";
                readonly json: "ipsBlocked";
            }];
            readonly GeodataAssetConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "File";
                readonly type: "string";
                readonly json: "file";
            }];
            readonly GeodataConfig: readonly [{
                readonly go: "Cron";
                readonly type: "*string";
                readonly json: "cron";
            }, {
                readonly go: "Outbound";
                readonly type: "string";
                readonly json: "outbound";
            }, {
                readonly go: "Assets";
                readonly type: "[]*GeodataAssetConfig";
                readonly json: "assets";
            }];
            readonly GRPCConfig: readonly [{
                readonly go: "Authority";
                readonly type: "string";
                readonly json: "authority";
            }, {
                readonly go: "ServiceName";
                readonly type: "string";
                readonly json: "serviceName";
            }, {
                readonly go: "MultiMode";
                readonly type: "bool";
                readonly json: "multiMode";
            }, {
                readonly go: "IdleTimeout";
                readonly type: "int32";
                readonly json: "idle_timeout";
            }, {
                readonly go: "HealthCheckTimeout";
                readonly type: "int32";
                readonly json: "health_check_timeout";
            }, {
                readonly go: "PermitWithoutStream";
                readonly type: "bool";
                readonly json: "permit_without_stream";
            }, {
                readonly go: "InitialWindowsSize";
                readonly type: "int32";
                readonly json: "initial_windows_size";
            }, {
                readonly go: "UserAgent";
                readonly type: "string";
                readonly json: "user_agent";
            }];
            readonly HappyEyeballsConfig: readonly [{
                readonly go: "PrioritizeIPv6";
                readonly type: "bool";
                readonly json: "prioritizeIPv6";
            }, {
                readonly go: "TryDelayMs";
                readonly type: "uint64";
                readonly json: "tryDelayMs";
            }, {
                readonly go: "Interleave";
                readonly type: "uint32";
                readonly json: "interleave";
            }, {
                readonly go: "MaxConcurrentTry";
                readonly type: "uint32";
                readonly json: "maxConcurrentTry";
            }];
            readonly HeaderCustomTCP: readonly [{
                readonly go: "Clients";
                readonly type: "[][]TCPItem";
                readonly json: "clients";
            }, {
                readonly go: "Servers";
                readonly type: "[][]TCPItem";
                readonly json: "servers";
            }, {
                readonly go: "Errors";
                readonly type: "[][]TCPItem";
                readonly json: "errors";
            }];
            readonly HeaderCustomUDP: readonly [{
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Client";
                readonly type: "[]UDPItem";
                readonly json: "client";
            }, {
                readonly go: "Server";
                readonly type: "[]UDPItem";
                readonly json: "server";
            }];
            readonly healthCheckSettings: readonly [{
                readonly go: "Destination";
                readonly type: "string";
                readonly json: "destination";
            }, {
                readonly go: "Connectivity";
                readonly type: "string";
                readonly json: "connectivity";
            }, {
                readonly go: "Interval";
                readonly type: "duration.Duration";
                readonly json: "interval";
            }, {
                readonly go: "SamplingCount";
                readonly type: "int";
                readonly json: "sampling";
            }, {
                readonly go: "Timeout";
                readonly type: "duration.Duration";
                readonly json: "timeout";
            }, {
                readonly go: "HttpMethod";
                readonly type: "string";
                readonly json: "httpMethod";
            }];
            readonly HTTPAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly HTTPClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*HTTPRemoteConfig";
                readonly json: "servers";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly HTTPRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly HTTPResponse: readonly [];
            readonly HTTPServerConfig: readonly [{
                readonly go: "Accounts";
                readonly type: "[]*HTTPAccount";
                readonly json: "accounts";
            }, {
                readonly go: "Transparent";
                readonly type: "bool";
                readonly json: "allowTransparent";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly HttpUpgradeConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly HysteriaClientConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly HysteriaConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Congestion";
                readonly type: "*string";
                readonly json: "congestion";
            }, {
                readonly go: "Up";
                readonly type: "*Bandwidth";
                readonly json: "up";
            }, {
                readonly go: "Down";
                readonly type: "*Bandwidth";
                readonly json: "down";
            }, {
                readonly go: "UdpHop";
                readonly type: "*UdpHop";
                readonly json: "udphop";
            }, {
                readonly go: "UdpIdleTimeout";
                readonly type: "int64";
                readonly json: "udpIdleTimeout";
            }, {
                readonly go: "Masquerade";
                readonly type: "Masquerade";
                readonly json: "masquerade";
            }];
            readonly HysteriaServerConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Users";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "clients";
            }];
            readonly HysteriaUserConfig: readonly [{
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly InboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "PortList";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "ListenOn";
                readonly type: "*Address";
                readonly json: "listen";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "SniffingConfig";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly KCPConfig: readonly [{
                readonly go: "Mtu";
                readonly type: "*uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Tti";
                readonly type: "*uint32";
                readonly json: "tti";
            }, {
                readonly go: "UpCap";
                readonly type: "*uint32";
                readonly json: "uplinkCapacity";
            }, {
                readonly go: "DownCap";
                readonly type: "*uint32";
                readonly json: "downlinkCapacity";
            }, {
                readonly go: "CwndMultiplier";
                readonly type: "*uint32";
                readonly json: "cwndMultiplier";
            }, {
                readonly go: "MaxSendingWindow";
                readonly type: "*uint32";
                readonly json: "maxSendingWindow";
            }, {
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "Seed";
                readonly type: "*string";
                readonly json: "seed";
            }];
            readonly LogConfig: readonly [{
                readonly go: "AccessLog";
                readonly type: "string";
                readonly json: "access";
            }, {
                readonly go: "ErrorLog";
                readonly type: "string";
                readonly json: "error";
            }, {
                readonly go: "LogLevel";
                readonly type: "string";
                readonly json: "loglevel";
            }, {
                readonly go: "DNSLog";
                readonly type: "bool";
                readonly json: "dnsLog";
            }, {
                readonly go: "MaskAddress";
                readonly type: "string";
                readonly json: "maskAddress";
            }];
            readonly LoopbackConfig: readonly [{
                readonly go: "InboundTag";
                readonly type: "string";
                readonly json: "inboundTag";
            }];
            readonly Mask: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly Masquerade: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dir";
                readonly type: "string";
                readonly json: "dir";
            }, {
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "RewriteHost";
                readonly type: "bool";
                readonly json: "rewriteHost";
            }, {
                readonly go: "Insecure";
                readonly type: "bool";
                readonly json: "insecure";
            }, {
                readonly go: "Content";
                readonly type: "string";
                readonly json: "content";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "StatusCode";
                readonly type: "int32";
                readonly json: "statusCode";
            }];
            readonly MetricsConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }];
            readonly MuxConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "Concurrency";
                readonly type: "int16";
                readonly json: "concurrency";
            }, {
                readonly go: "XudpConcurrency";
                readonly type: "int16";
                readonly json: "xudpConcurrency";
            }, {
                readonly go: "XudpProxyUDP443";
                readonly type: "string";
                readonly json: "xudpProxyUDP443";
            }];
            readonly NameServerConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "SkipFallback";
                readonly type: "bool";
                readonly json: "skipFallback";
            }, {
                readonly go: "Domains";
                readonly type: "StringList";
                readonly json: "domains";
            }, {
                readonly go: "ExpectedIPs";
                readonly type: "StringList";
                readonly json: "expectedIPs";
            }, {
                readonly go: "ExpectIPs";
                readonly type: "StringList";
                readonly json: "expectIPs";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TimeoutMs";
                readonly type: "uint64";
                readonly json: "timeoutMs";
            }, {
                readonly go: "DisableCache";
                readonly type: "*bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "*bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "*uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "FinalQuery";
                readonly type: "bool";
                readonly json: "finalQuery";
            }, {
                readonly go: "UnexpectedIPs";
                readonly type: "StringList";
                readonly json: "unexpectedIPs";
            }];
            readonly Noise: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "string";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "*Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "ApplyTo";
                readonly type: "string";
                readonly json: "applyTo";
            }];
            readonly NoiseItem: readonly [{
                readonly go: "Rand";
                readonly type: "Int32Range";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }];
            readonly NoiseMask: readonly [{
                readonly go: "Reset";
                readonly type: "Int32Range";
                readonly json: "reset";
            }, {
                readonly go: "Noise";
                readonly type: "[]NoiseItem";
                readonly json: "noise";
            }];
            readonly NoneResponse: readonly [];
            readonly NoOpConnectionAuthenticator: readonly [];
            readonly ObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "ProbeURL";
                readonly type: "string";
                readonly json: "probeURL";
            }, {
                readonly go: "ProbeInterval";
                readonly type: "duration.Duration";
                readonly json: "probeInterval";
            }, {
                readonly go: "EnableConcurrency";
                readonly type: "bool";
                readonly json: "enableConcurrency";
            }];
            readonly Original: readonly [];
            readonly OutboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "SendThrough";
                readonly type: "*string";
                readonly json: "sendThrough";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "ProxySettings";
                readonly type: "*ProxyConfig";
                readonly json: "proxySettings";
            }, {
                readonly go: "MuxSettings";
                readonly type: "*MuxConfig";
                readonly json: "mux";
            }, {
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }];
            readonly Policy: readonly [{
                readonly go: "Handshake";
                readonly type: "*uint32";
                readonly json: "handshake";
            }, {
                readonly go: "ConnectionIdle";
                readonly type: "*uint32";
                readonly json: "connIdle";
            }, {
                readonly go: "UplinkOnly";
                readonly type: "*uint32";
                readonly json: "uplinkOnly";
            }, {
                readonly go: "DownlinkOnly";
                readonly type: "*uint32";
                readonly json: "downlinkOnly";
            }, {
                readonly go: "StatsUserUplink";
                readonly type: "bool";
                readonly json: "statsUserUplink";
            }, {
                readonly go: "StatsUserDownlink";
                readonly type: "bool";
                readonly json: "statsUserDownlink";
            }, {
                readonly go: "StatsUserOnline";
                readonly type: "bool";
                readonly json: "statsUserOnline";
            }, {
                readonly go: "BufferSize";
                readonly type: "*int32";
                readonly json: "bufferSize";
            }];
            readonly PolicyConfig: readonly [{
                readonly go: "Levels";
                readonly type: "map[uint32]*Policy";
                readonly json: "levels";
            }, {
                readonly go: "System";
                readonly type: "*SystemPolicy";
                readonly json: "system";
            }];
            readonly PortalConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly ProxyConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TransportLayerProxy";
                readonly type: "bool";
                readonly json: "transportLayer";
            }];
            readonly QuicParamsConfig: readonly [{
                readonly go: "Congestion";
                readonly type: "string";
                readonly json: "congestion";
            }, {
                readonly go: "Debug";
                readonly type: "bool";
                readonly json: "debug";
            }, {
                readonly go: "BbrProfile";
                readonly type: "string";
                readonly json: "bbrProfile";
            }, {
                readonly go: "BrutalUp";
                readonly type: "Bandwidth";
                readonly json: "brutalUp";
            }, {
                readonly go: "BrutalDown";
                readonly type: "Bandwidth";
                readonly json: "brutalDown";
            }, {
                readonly go: "UdpHop";
                readonly type: "UdpHop";
                readonly json: "udpHop";
            }, {
                readonly go: "InitStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "initStreamReceiveWindow";
            }, {
                readonly go: "MaxStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxStreamReceiveWindow";
            }, {
                readonly go: "InitConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "initConnectionReceiveWindow";
            }, {
                readonly go: "MaxConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxConnectionReceiveWindow";
            }, {
                readonly go: "MaxIdleTimeout";
                readonly type: "int64";
                readonly json: "maxIdleTimeout";
            }, {
                readonly go: "KeepAlivePeriod";
                readonly type: "int64";
                readonly json: "keepAlivePeriod";
            }, {
                readonly go: "DisablePathMTUDiscovery";
                readonly type: "bool";
                readonly json: "disablePathMTUDiscovery";
            }, {
                readonly go: "MaxIncomingStreams";
                readonly type: "int64";
                readonly json: "maxIncomingStreams";
            }];
            readonly RawFieldRule: readonly [{
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "*StringList";
                readonly json: "domains";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "SourceIP";
                readonly type: "*StringList";
                readonly json: "sourceIP";
            }, {
                readonly go: "Source";
                readonly type: "*StringList";
                readonly json: "source";
            }, {
                readonly go: "SourcePort";
                readonly type: "*PortList";
                readonly json: "sourcePort";
            }, {
                readonly go: "User";
                readonly type: "*StringList";
                readonly json: "user";
            }, {
                readonly go: "VlessRoute";
                readonly type: "*PortList";
                readonly json: "vlessRoute";
            }, {
                readonly go: "InboundTag";
                readonly type: "*StringList";
                readonly json: "inboundTag";
            }, {
                readonly go: "Protocols";
                readonly type: "*StringList";
                readonly json: "protocol";
            }, {
                readonly go: "Attributes";
                readonly type: "map[string]string";
                readonly json: "attrs";
            }, {
                readonly go: "LocalIP";
                readonly type: "*StringList";
                readonly json: "localIP";
            }, {
                readonly go: "LocalPort";
                readonly type: "*PortList";
                readonly json: "localPort";
            }, {
                readonly go: "Process";
                readonly type: "*StringList";
                readonly json: "process";
            }, {
                readonly go: "Webhook";
                readonly type: "*WebhookRuleConfig";
                readonly json: "webhook";
            }];
            readonly REALITYConfig: readonly [{
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "Show";
                readonly type: "bool";
                readonly json: "show";
            }, {
                readonly go: "Target";
                readonly type: "json.RawMessage";
                readonly json: "target";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }, {
                readonly go: "ServerNames";
                readonly type: "[]string";
                readonly json: "serverNames";
            }, {
                readonly go: "PrivateKey";
                readonly type: "string";
                readonly json: "privateKey";
            }, {
                readonly go: "MinClientVer";
                readonly type: "string";
                readonly json: "minClientVer";
            }, {
                readonly go: "MaxClientVer";
                readonly type: "string";
                readonly json: "maxClientVer";
            }, {
                readonly go: "MaxTimeDiff";
                readonly type: "uint64";
                readonly json: "maxTimeDiff";
            }, {
                readonly go: "ShortIds";
                readonly type: "[]string";
                readonly json: "shortIds";
            }, {
                readonly go: "Mldsa65Seed";
                readonly type: "string";
                readonly json: "mldsa65Seed";
            }, {
                readonly go: "LimitFallbackUpload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackUpload";
            }, {
                readonly go: "LimitFallbackDownload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackDownload";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "ShortId";
                readonly type: "string";
                readonly json: "shortId";
            }, {
                readonly go: "Mldsa65Verify";
                readonly type: "string";
                readonly json: "mldsa65Verify";
            }, {
                readonly go: "SpiderX";
                readonly type: "string";
                readonly json: "spiderX";
            }];
            readonly ReverseConfig: readonly [{
                readonly go: "Bridges";
                readonly type: "[]BridgeConfig";
                readonly json: "bridges";
            }, {
                readonly go: "Portals";
                readonly type: "[]PortalConfig";
                readonly json: "portals";
            }];
            readonly RouterConfig: readonly [{
                readonly go: "RuleList";
                readonly type: "[]json.RawMessage";
                readonly json: "rules";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "*string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Balancers";
                readonly type: "[]*BalancingRule";
                readonly json: "balancers";
            }];
            readonly RouterRule: readonly [{
                readonly go: "RuleTag";
                readonly type: "string";
                readonly json: "ruleTag";
            }, {
                readonly go: "OutboundTag";
                readonly type: "string";
                readonly json: "outboundTag";
            }, {
                readonly go: "BalancerTag";
                readonly type: "string";
                readonly json: "balancerTag";
            }];
            readonly Salamander: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly ShadowsocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "UoT";
                readonly type: "bool";
                readonly json: "uot";
            }, {
                readonly go: "UoTVersion";
                readonly type: "int";
                readonly json: "uotVersion";
            }, {
                readonly go: "Servers";
                readonly type: "[]*ShadowsocksServerTarget";
                readonly json: "servers";
            }];
            readonly ShadowsocksServerConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Users";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "NetworkList";
                readonly type: "*NetworkList";
                readonly json: "network";
            }];
            readonly ShadowsocksServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "UoT";
                readonly type: "bool";
                readonly json: "uot";
            }, {
                readonly go: "UoTVersion";
                readonly type: "int";
                readonly json: "uotVersion";
            }];
            readonly ShadowsocksUserConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly SniffingConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "DestOverride";
                readonly type: "StringList";
                readonly json: "destOverride";
            }, {
                readonly go: "DomainsExcluded";
                readonly type: "StringList";
                readonly json: "domainsExcluded";
            }, {
                readonly go: "IPsExcluded";
                readonly type: "StringList";
                readonly json: "ipsExcluded";
            }, {
                readonly go: "MetadataOnly";
                readonly type: "bool";
                readonly json: "metadataOnly";
            }, {
                readonly go: "RouteOnly";
                readonly type: "bool";
                readonly json: "routeOnly";
            }];
            readonly SocketConfig: readonly [{
                readonly go: "Mark";
                readonly type: "int32";
                readonly json: "mark";
            }, {
                readonly go: "TFO";
                readonly type: "interface{}";
                readonly json: "tcpFastOpen";
            }, {
                readonly go: "TProxy";
                readonly type: "string";
                readonly json: "tproxy";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "DialerProxy";
                readonly type: "string";
                readonly json: "dialerProxy";
            }, {
                readonly go: "TCPKeepAliveInterval";
                readonly type: "int32";
                readonly json: "tcpKeepAliveInterval";
            }, {
                readonly go: "TCPKeepAliveIdle";
                readonly type: "int32";
                readonly json: "tcpKeepAliveIdle";
            }, {
                readonly go: "TCPCongestion";
                readonly type: "string";
                readonly json: "tcpCongestion";
            }, {
                readonly go: "TCPWindowClamp";
                readonly type: "int32";
                readonly json: "tcpWindowClamp";
            }, {
                readonly go: "TCPMaxSeg";
                readonly type: "int32";
                readonly json: "tcpMaxSeg";
            }, {
                readonly go: "Penetrate";
                readonly type: "bool";
                readonly json: "penetrate";
            }, {
                readonly go: "TCPUserTimeout";
                readonly type: "int32";
                readonly json: "tcpUserTimeout";
            }, {
                readonly go: "V6only";
                readonly type: "bool";
                readonly json: "v6only";
            }, {
                readonly go: "Interface";
                readonly type: "string";
                readonly json: "interface";
            }, {
                readonly go: "TcpMptcp";
                readonly type: "bool";
                readonly json: "tcpMptcp";
            }, {
                readonly go: "CustomSockopt";
                readonly type: "[]*CustomSockoptConfig";
                readonly json: "customSockopt";
            }, {
                readonly go: "AddressPortStrategy";
                readonly type: "string";
                readonly json: "addressPortStrategy";
            }, {
                readonly go: "HappyEyeballsSettings";
                readonly type: "*HappyEyeballsConfig";
                readonly json: "happyEyeballs";
            }, {
                readonly go: "TrustedXForwardedFor";
                readonly type: "[]string";
                readonly json: "trustedXForwardedFor";
            }];
            readonly SocksAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly SocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*SocksRemoteConfig";
                readonly json: "servers";
            }];
            readonly SocksRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly SocksServerConfig: readonly [{
                readonly go: "AuthMethod";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*SocksAccount";
                readonly json: "accounts";
            }, {
                readonly go: "UDP";
                readonly type: "bool";
                readonly json: "udp";
            }, {
                readonly go: "Host";
                readonly type: "*Address";
                readonly json: "ip";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly SplitHTTPConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "XPaddingBytes";
                readonly type: "Int32Range";
                readonly json: "xPaddingBytes";
            }, {
                readonly go: "XPaddingObfsMode";
                readonly type: "bool";
                readonly json: "xPaddingObfsMode";
            }, {
                readonly go: "XPaddingKey";
                readonly type: "string";
                readonly json: "xPaddingKey";
            }, {
                readonly go: "XPaddingHeader";
                readonly type: "string";
                readonly json: "xPaddingHeader";
            }, {
                readonly go: "XPaddingPlacement";
                readonly type: "string";
                readonly json: "xPaddingPlacement";
            }, {
                readonly go: "XPaddingMethod";
                readonly type: "string";
                readonly json: "xPaddingMethod";
            }, {
                readonly go: "UplinkHTTPMethod";
                readonly type: "string";
                readonly json: "uplinkHTTPMethod";
            }, {
                readonly go: "SessionPlacement";
                readonly type: "string";
                readonly json: "sessionPlacement";
            }, {
                readonly go: "SessionKey";
                readonly type: "string";
                readonly json: "sessionKey";
            }, {
                readonly go: "SeqPlacement";
                readonly type: "string";
                readonly json: "seqPlacement";
            }, {
                readonly go: "SeqKey";
                readonly type: "string";
                readonly json: "seqKey";
            }, {
                readonly go: "UplinkDataPlacement";
                readonly type: "string";
                readonly json: "uplinkDataPlacement";
            }, {
                readonly go: "UplinkDataKey";
                readonly type: "string";
                readonly json: "uplinkDataKey";
            }, {
                readonly go: "UplinkChunkSize";
                readonly type: "Int32Range";
                readonly json: "uplinkChunkSize";
            }, {
                readonly go: "NoGRPCHeader";
                readonly type: "bool";
                readonly json: "noGRPCHeader";
            }, {
                readonly go: "NoSSEHeader";
                readonly type: "bool";
                readonly json: "noSSEHeader";
            }, {
                readonly go: "ScMaxEachPostBytes";
                readonly type: "Int32Range";
                readonly json: "scMaxEachPostBytes";
            }, {
                readonly go: "ScMinPostsIntervalMs";
                readonly type: "Int32Range";
                readonly json: "scMinPostsIntervalMs";
            }, {
                readonly go: "ScMaxBufferedPosts";
                readonly type: "int64";
                readonly json: "scMaxBufferedPosts";
            }, {
                readonly go: "ScStreamUpServerSecs";
                readonly type: "Int32Range";
                readonly json: "scStreamUpServerSecs";
            }, {
                readonly go: "ServerMaxHeaderBytes";
                readonly type: "int32";
                readonly json: "serverMaxHeaderBytes";
            }, {
                readonly go: "Xmux";
                readonly type: "XmuxConfig";
                readonly json: "xmux";
            }, {
                readonly go: "DownloadSettings";
                readonly type: "*StreamConfig";
                readonly json: "downloadSettings";
            }, {
                readonly go: "Extra";
                readonly type: "json.RawMessage";
                readonly json: "extra";
            }];
            readonly Srtp: readonly [];
            readonly StatsConfig: readonly [];
            readonly StrategyConfig: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly strategyEmptyConfig: readonly [];
            readonly strategyLeastLoadConfig: readonly [{
                readonly go: "Costs";
                readonly type: "[]*router.StrategyWeight";
                readonly json: "costs";
            }, {
                readonly go: "Baselines";
                readonly type: "[]duration.Duration";
                readonly json: "baselines";
            }, {
                readonly go: "Expected";
                readonly type: "int32";
                readonly json: "expected";
            }, {
                readonly go: "MaxRTT";
                readonly type: "duration.Duration";
                readonly json: "maxRTT";
            }, {
                readonly go: "Tolerance";
                readonly type: "float64";
                readonly json: "tolerance";
            }];
            readonly StreamConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*TransportProtocol";
                readonly json: "network";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "FinalMask";
                readonly type: "*FinalMask";
                readonly json: "finalmask";
            }, {
                readonly go: "TLSSettings";
                readonly type: "*TLSConfig";
                readonly json: "tlsSettings";
            }, {
                readonly go: "REALITYSettings";
                readonly type: "*REALITYConfig";
                readonly json: "realitySettings";
            }, {
                readonly go: "RAWSettings";
                readonly type: "*TCPConfig";
                readonly json: "rawSettings";
            }, {
                readonly go: "TCPSettings";
                readonly type: "*TCPConfig";
                readonly json: "tcpSettings";
            }, {
                readonly go: "XHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "xhttpSettings";
            }, {
                readonly go: "SplitHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "splithttpSettings";
            }, {
                readonly go: "KCPSettings";
                readonly type: "*KCPConfig";
                readonly json: "kcpSettings";
            }, {
                readonly go: "GRPCSettings";
                readonly type: "*GRPCConfig";
                readonly json: "grpcSettings";
            }, {
                readonly go: "WSSettings";
                readonly type: "*WebSocketConfig";
                readonly json: "wsSettings";
            }, {
                readonly go: "HTTPUPGRADESettings";
                readonly type: "*HttpUpgradeConfig";
                readonly json: "httpupgradeSettings";
            }, {
                readonly go: "HysteriaSettings";
                readonly type: "*HysteriaConfig";
                readonly json: "hysteriaSettings";
            }, {
                readonly go: "SocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "sockopt";
            }];
            readonly Sudoku: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "ASCII";
                readonly type: "string";
                readonly json: "ascii";
            }, {
                readonly go: "CustomTable";
                readonly type: "string";
                readonly json: "customTable";
            }, {
                readonly go: "LegacyCustomTable";
                readonly type: "string";
                readonly json: "custom_table";
            }, {
                readonly go: "CustomTables";
                readonly type: "[]string";
                readonly json: "customTables";
            }, {
                readonly go: "LegacyCustomSets";
                readonly type: "[]string";
                readonly json: "custom_tables";
            }, {
                readonly go: "PaddingMin";
                readonly type: "uint32";
                readonly json: "paddingMin";
            }, {
                readonly go: "LegacyPaddingMin";
                readonly type: "uint32";
                readonly json: "padding_min";
            }, {
                readonly go: "PaddingMax";
                readonly type: "uint32";
                readonly json: "paddingMax";
            }, {
                readonly go: "LegacyPaddingMax";
                readonly type: "uint32";
                readonly json: "padding_max";
            }];
            readonly SystemPolicy: readonly [{
                readonly go: "StatsInboundUplink";
                readonly type: "bool";
                readonly json: "statsInboundUplink";
            }, {
                readonly go: "StatsInboundDownlink";
                readonly type: "bool";
                readonly json: "statsInboundDownlink";
            }, {
                readonly go: "StatsOutboundUplink";
                readonly type: "bool";
                readonly json: "statsOutboundUplink";
            }, {
                readonly go: "StatsOutboundDownlink";
                readonly type: "bool";
                readonly json: "statsOutboundDownlink";
            }];
            readonly TCPConfig: readonly [{
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly TCPItem: readonly [{
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly TLSCertConfig: readonly [{
                readonly go: "CertFile";
                readonly type: "string";
                readonly json: "certificateFile";
            }, {
                readonly go: "CertStr";
                readonly type: "[]string";
                readonly json: "certificate";
            }, {
                readonly go: "KeyFile";
                readonly type: "string";
                readonly json: "keyFile";
            }, {
                readonly go: "KeyStr";
                readonly type: "[]string";
                readonly json: "key";
            }, {
                readonly go: "Usage";
                readonly type: "string";
                readonly json: "usage";
            }, {
                readonly go: "OcspStapling";
                readonly type: "uint64";
                readonly json: "ocspStapling";
            }, {
                readonly go: "OneTimeLoading";
                readonly type: "bool";
                readonly json: "oneTimeLoading";
            }, {
                readonly go: "BuildChain";
                readonly type: "bool";
                readonly json: "buildChain";
            }];
            readonly TLSConfig: readonly [{
                readonly go: "AllowInsecure";
                readonly type: "bool";
                readonly json: "allowInsecure";
            }, {
                readonly go: "Certs";
                readonly type: "[]*TLSCertConfig";
                readonly json: "certificates";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "ALPN";
                readonly type: "*StringList";
                readonly json: "alpn";
            }, {
                readonly go: "EnableSessionResumption";
                readonly type: "bool";
                readonly json: "enableSessionResumption";
            }, {
                readonly go: "DisableSystemRoot";
                readonly type: "bool";
                readonly json: "disableSystemRoot";
            }, {
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "minVersion";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "maxVersion";
            }, {
                readonly go: "CipherSuites";
                readonly type: "string";
                readonly json: "cipherSuites";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "RejectUnknownSNI";
                readonly type: "bool";
                readonly json: "rejectUnknownSni";
            }, {
                readonly go: "CurvePreferences";
                readonly type: "*StringList";
                readonly json: "curvePreferences";
            }, {
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "PinnedPeerCertSha256";
                readonly type: "string";
                readonly json: "pinnedPeerCertSha256";
            }, {
                readonly go: "VerifyPeerCertByName";
                readonly type: "string";
                readonly json: "verifyPeerCertByName";
            }, {
                readonly go: "VerifyPeerCertInNames";
                readonly type: "[]string";
                readonly json: "verifyPeerCertInNames";
            }, {
                readonly go: "ECHServerKeys";
                readonly type: "string";
                readonly json: "echServerKeys";
            }, {
                readonly go: "ECHConfigList";
                readonly type: "string";
                readonly json: "echConfigList";
            }, {
                readonly go: "ECHForceQuery";
                readonly type: "string";
                readonly json: "echForceQuery";
            }, {
                readonly go: "ECHSocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "echSockopt";
            }];
            readonly TrojanClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Servers";
                readonly type: "[]*TrojanServerTarget";
                readonly json: "servers";
            }];
            readonly TrojanInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly TrojanServerConfig: readonly [{
                readonly go: "Clients";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*TrojanInboundFallback";
                readonly json: "fallbacks";
            }];
            readonly TrojanServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TrojanUserConfig: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TunConfig: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "MTU";
                readonly type: "uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Gateway";
                readonly type: "[]string";
                readonly json: "gateway";
            }, {
                readonly go: "DNS";
                readonly type: "[]string";
                readonly json: "dns";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "AutoSystemRoutingTable";
                readonly type: "[]string";
                readonly json: "autoSystemRoutingTable";
            }, {
                readonly go: "AutoOutboundsInterface";
                readonly type: "*string";
                readonly json: "autoOutboundsInterface";
            }];
            readonly UdpHop: readonly [{
                readonly go: "PortList";
                readonly type: "json.RawMessage";
                readonly json: "ports";
            }, {
                readonly go: "Interval";
                readonly type: "*Int32Range";
                readonly json: "interval";
            }];
            readonly UDPItem: readonly [{
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly User: readonly [{
                readonly go: "EmailString";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "LevelByte";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly Utp: readonly [];
            readonly VersionConfig: readonly [{
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "min";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "max";
            }];
            readonly VLessInboundConfig: readonly [{
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Decryption";
                readonly type: "string";
                readonly json: "decryption";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*VLessInboundFallback";
                readonly json: "fallbacks";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }];
            readonly VLessInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly VLessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Id";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Seed";
                readonly type: "string";
                readonly json: "seed";
            }, {
                readonly go: "Encryption";
                readonly type: "string";
                readonly json: "encryption";
            }, {
                readonly go: "Reverse";
                readonly type: "*VLessReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "Testpre";
                readonly type: "uint32";
                readonly json: "testpre";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }, {
                readonly go: "Vnext";
                readonly type: "[]*VLessOutboundVnext";
                readonly json: "vnext";
            }];
            readonly VLessOutboundVnext: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly VLessReverseConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly VMessAccount: readonly [{
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }];
            readonly VMessDefaultConfig: readonly [{
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VMessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Defaults";
                readonly type: "*VMessDefaultConfig";
                readonly json: "default";
            }];
            readonly VMessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }, {
                readonly go: "Receivers";
                readonly type: "[]*VMessOutboundTarget";
                readonly json: "vnext";
            }];
            readonly VMessOutboundTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly WebhookRuleConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "Deduplication";
                readonly type: "uint32";
                readonly json: "deduplication";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly WebSocketConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "HeartbeatPeriod";
                readonly type: "uint32";
                readonly json: "heartbeatPeriod";
            }];
            readonly Wechat: readonly [];
            readonly Wireguard: readonly [];
            readonly WireGuardConfig: readonly [{
                readonly go: "NoKernelTun";
                readonly type: "bool";
                readonly json: "noKernelTun";
            }, {
                readonly go: "SecretKey";
                readonly type: "string";
                readonly json: "secretKey";
            }, {
                readonly go: "Address";
                readonly type: "[]string";
                readonly json: "address";
            }, {
                readonly go: "Peers";
                readonly type: "[]*WireGuardPeerConfig";
                readonly json: "peers";
            }, {
                readonly go: "MTU";
                readonly type: "int32";
                readonly json: "mtu";
            }, {
                readonly go: "NumWorkers";
                readonly type: "int32";
                readonly json: "workers";
            }, {
                readonly go: "Reserved";
                readonly type: "[]byte";
                readonly json: "reserved";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }];
            readonly WireGuardPeerConfig: readonly [{
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "PreSharedKey";
                readonly type: "string";
                readonly json: "preSharedKey";
            }, {
                readonly go: "Endpoint";
                readonly type: "string";
                readonly json: "endpoint";
            }, {
                readonly go: "KeepAlive";
                readonly type: "uint32";
                readonly json: "keepAlive";
            }, {
                readonly go: "AllowedIPs";
                readonly type: "[]string";
                readonly json: "allowedIPs";
            }];
            readonly Xdns: readonly [{
                readonly go: "Domain";
                readonly type: "json.RawMessage";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "[]string";
                readonly json: "domains";
            }, {
                readonly go: "Resolvers";
                readonly type: "[]string";
                readonly json: "resolvers";
            }];
            readonly Xicmp: readonly [{
                readonly go: "ListenIp";
                readonly type: "string";
                readonly json: "listenIp";
            }, {
                readonly go: "Id";
                readonly type: "uint16";
                readonly json: "id";
            }];
            readonly XmuxConfig: readonly [{
                readonly go: "MaxConcurrency";
                readonly type: "Int32Range";
                readonly json: "maxConcurrency";
            }, {
                readonly go: "MaxConnections";
                readonly type: "Int32Range";
                readonly json: "maxConnections";
            }, {
                readonly go: "CMaxReuseTimes";
                readonly type: "Int32Range";
                readonly json: "cMaxReuseTimes";
            }, {
                readonly go: "HMaxRequestTimes";
                readonly type: "Int32Range";
                readonly json: "hMaxRequestTimes";
            }, {
                readonly go: "HMaxReusableSecs";
                readonly type: "Int32Range";
                readonly json: "hMaxReusableSecs";
            }, {
                readonly go: "HKeepAlivePeriod";
                readonly type: "int64";
                readonly json: "hKeepAlivePeriod";
            }];
        };
    }, {
        readonly tag: "v26.5.3";
        readonly version: "26.5.3";
        readonly commit: "228f1e13aa22739b0d6b9adbdb2b600f1e2018e1";
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
            readonly source: "infra/conf/freedom.go";
            readonly keys: readonly ["freedom noise"];
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["allowInsecure"];
        }, {
            readonly feature: "\"verifyPeerCertInNames\"";
            readonly replacement: "\"verifyPeerCertByName\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["verifyPeerCertInNames"];
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["finalmask xdns domain"];
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["http-transport"];
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xtls"];
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["mkcp header/seed"];
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["quic"];
        }, {
            readonly feature: "Flow for Trojan";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan flow"];
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly [];
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly ["global transport"];
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
            readonly source: "infra/conf/dns_proxy.go";
            readonly keys: readonly ["dns legacy nonIPQuery blockTypes"];
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/shadowsocks.go";
            readonly keys: readonly ["shadowsocks"];
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xhttp headers host"];
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["grpc"];
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["httpupgrade"];
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["websocket", "ws"];
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan"];
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/vmess.go";
            readonly keys: readonly ["vmess"];
        }];
        readonly topLevelKeys: readonly ["api", "burstObservatory", "dns", "fakeDns", "geodata", "inbounds", "log", "metrics", "observatory", "outbounds", "policy", "reverse", "routing", "stats", "transport", "version"];
        readonly inboundProtocols: readonly [{
            readonly protocol: "dokodemo-door";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPServerConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaServerConfig";
        }, {
            readonly protocol: "mixed";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksServerConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanServerConfig";
        }, {
            readonly protocol: "tun";
            readonly config: "TunConfig";
        }, {
            readonly protocol: "tunnel";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessInboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessInboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly outboundProtocols: readonly [{
            readonly protocol: "blackhole";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "block";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "direct";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "dns";
            readonly config: "DNSOutboundConfig";
        }, {
            readonly protocol: "freedom";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPClientConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaClientConfig";
        }, {
            readonly protocol: "loopback";
            readonly config: "LoopbackConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksClientConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksClientConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanClientConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessOutboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessOutboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly streamFields: readonly [{
            readonly go: "Address";
            readonly type: "*Address";
            readonly json: "address";
        }, {
            readonly go: "Port";
            readonly type: "uint16";
            readonly json: "port";
        }, {
            readonly go: "Network";
            readonly type: "*TransportProtocol";
            readonly json: "network";
        }, {
            readonly go: "Security";
            readonly type: "string";
            readonly json: "security";
        }, {
            readonly go: "FinalMask";
            readonly type: "*FinalMask";
            readonly json: "finalmask";
        }, {
            readonly go: "TLSSettings";
            readonly type: "*TLSConfig";
            readonly json: "tlsSettings";
        }, {
            readonly go: "REALITYSettings";
            readonly type: "*REALITYConfig";
            readonly json: "realitySettings";
        }, {
            readonly go: "RAWSettings";
            readonly type: "*TCPConfig";
            readonly json: "rawSettings";
        }, {
            readonly go: "TCPSettings";
            readonly type: "*TCPConfig";
            readonly json: "tcpSettings";
        }, {
            readonly go: "XHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "xhttpSettings";
        }, {
            readonly go: "SplitHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "splithttpSettings";
        }, {
            readonly go: "KCPSettings";
            readonly type: "*KCPConfig";
            readonly json: "kcpSettings";
        }, {
            readonly go: "GRPCSettings";
            readonly type: "*GRPCConfig";
            readonly json: "grpcSettings";
        }, {
            readonly go: "WSSettings";
            readonly type: "*WebSocketConfig";
            readonly json: "wsSettings";
        }, {
            readonly go: "HTTPUPGRADESettings";
            readonly type: "*HttpUpgradeConfig";
            readonly json: "httpupgradeSettings";
        }, {
            readonly go: "HysteriaSettings";
            readonly type: "*HysteriaConfig";
            readonly json: "hysteriaSettings";
        }, {
            readonly go: "SocketSettings";
            readonly type: "*SocketConfig";
            readonly json: "sockopt";
        }];
        readonly transportAliases: {
            readonly grpc: "grpc";
            readonly httpupgrade: "httpupgrade";
            readonly hysteria: "hysteria";
            readonly kcp: "mkcp";
            readonly mkcp: "mkcp";
            readonly raw: "tcp";
            readonly splithttp: "splithttp";
            readonly tcp: "tcp";
            readonly websocket: "websocket";
            readonly ws: "websocket";
            readonly xhttp: "splithttp";
        };
        readonly securityTypes: readonly ["none", "reality", "tls", "xtls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly jsonLoaders: {
            readonly "infra/conf/transport_internet.go:tcpHeaderLoader": readonly [{
                readonly protocol: "http";
                readonly config: "Authenticator";
            }, {
                readonly protocol: "none";
                readonly config: "NoOpConnectionAuthenticator";
            }];
            readonly "infra/conf/transport_internet.go:tcpmaskLoader": readonly [{
                readonly protocol: "fragment";
                readonly config: "FragmentMask";
            }, {
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomTCP";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }];
            readonly "infra/conf/transport_internet.go:udpmaskLoader": readonly [{
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomUDP";
            }, {
                readonly protocol: "header-dns";
                readonly config: "Dns";
            }, {
                readonly protocol: "header-dtls";
                readonly config: "Dtls";
            }, {
                readonly protocol: "header-srtp";
                readonly config: "Srtp";
            }, {
                readonly protocol: "header-utp";
                readonly config: "Utp";
            }, {
                readonly protocol: "header-wechat";
                readonly config: "Wechat";
            }, {
                readonly protocol: "header-wireguard";
                readonly config: "Wireguard";
            }, {
                readonly protocol: "mkcp-aes128gcm";
                readonly config: "Aes128Gcm";
            }, {
                readonly protocol: "mkcp-original";
                readonly config: "Original";
            }, {
                readonly protocol: "noise";
                readonly config: "NoiseMask";
            }, {
                readonly protocol: "salamander";
                readonly config: "Salamander";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }, {
                readonly protocol: "xdns";
                readonly config: "Xdns";
            }, {
                readonly protocol: "xicmp";
                readonly config: "Xicmp";
            }];
            readonly "infra/conf/xray.go:inboundConfigLoader": readonly [{
                readonly protocol: "dokodemo-door";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPServerConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaServerConfig";
            }, {
                readonly protocol: "mixed";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksServerConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanServerConfig";
            }, {
                readonly protocol: "tun";
                readonly config: "TunConfig";
            }, {
                readonly protocol: "tunnel";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessInboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessInboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
            readonly "infra/conf/xray.go:outboundConfigLoader": readonly [{
                readonly protocol: "blackhole";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "block";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "direct";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "dns";
                readonly config: "DNSOutboundConfig";
            }, {
                readonly protocol: "freedom";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPClientConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaClientConfig";
            }, {
                readonly protocol: "loopback";
                readonly config: "LoopbackConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksClientConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksClientConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanClientConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessOutboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessOutboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
        };
        readonly structs: {
            readonly Aes128Gcm: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly APIConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }, {
                readonly go: "Services";
                readonly type: "[]string";
                readonly json: "services";
            }];
            readonly Authenticator: readonly [{
                readonly go: "Request";
                readonly type: "AuthenticatorRequest";
                readonly json: "request";
            }, {
                readonly go: "Response";
                readonly type: "AuthenticatorResponse";
                readonly json: "response";
            }];
            readonly AuthenticatorRequest: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Method";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Path";
                readonly type: "StringList";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly AuthenticatorResponse: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Status";
                readonly type: "string";
                readonly json: "status";
            }, {
                readonly go: "Reason";
                readonly type: "string";
                readonly json: "reason";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly BalancingRule: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Selectors";
                readonly type: "StringList";
                readonly json: "selector";
            }, {
                readonly go: "Strategy";
                readonly type: "StrategyConfig";
                readonly json: "strategy";
            }, {
                readonly go: "FallbackTag";
                readonly type: "string";
                readonly json: "fallbackTag";
            }];
            readonly BlackholeConfig: readonly [{
                readonly go: "Response";
                readonly type: "json.RawMessage";
                readonly json: "response";
            }];
            readonly BridgeConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly BurstObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "HealthCheck";
                readonly type: "*healthCheckSettings";
                readonly json: "pingConfig";
            }];
            readonly Config: readonly [{
                readonly go: "Transport";
                readonly type: "map[string]json.RawMessage";
                readonly json: "transport";
            }, {
                readonly go: "LogConfig";
                readonly type: "*LogConfig";
                readonly json: "log";
            }, {
                readonly go: "RouterConfig";
                readonly type: "*RouterConfig";
                readonly json: "routing";
            }, {
                readonly go: "DNSConfig";
                readonly type: "*DNSConfig";
                readonly json: "dns";
            }, {
                readonly go: "InboundConfigs";
                readonly type: "[]InboundDetourConfig";
                readonly json: "inbounds";
            }, {
                readonly go: "OutboundConfigs";
                readonly type: "[]OutboundDetourConfig";
                readonly json: "outbounds";
            }, {
                readonly go: "Policy";
                readonly type: "*PolicyConfig";
                readonly json: "policy";
            }, {
                readonly go: "API";
                readonly type: "*APIConfig";
                readonly json: "api";
            }, {
                readonly go: "Metrics";
                readonly type: "*MetricsConfig";
                readonly json: "metrics";
            }, {
                readonly go: "Stats";
                readonly type: "*StatsConfig";
                readonly json: "stats";
            }, {
                readonly go: "Reverse";
                readonly type: "*ReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "FakeDNS";
                readonly type: "*FakeDNSConfig";
                readonly json: "fakeDns";
            }, {
                readonly go: "Observatory";
                readonly type: "*ObservatoryConfig";
                readonly json: "observatory";
            }, {
                readonly go: "BurstObservatory";
                readonly type: "*BurstObservatoryConfig";
                readonly json: "burstObservatory";
            }, {
                readonly go: "Version";
                readonly type: "*VersionConfig";
                readonly json: "version";
            }, {
                readonly go: "Geodata";
                readonly type: "*GeodataConfig";
                readonly json: "geodata";
            }];
            readonly CustomSockoptConfig: readonly [{
                readonly go: "Syetem";
                readonly type: "string";
                readonly json: "system";
            }, {
                readonly go: "Network";
                readonly type: "string";
                readonly json: "network";
            }, {
                readonly go: "Level";
                readonly type: "string";
                readonly json: "level";
            }, {
                readonly go: "Opt";
                readonly type: "string";
                readonly json: "opt";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }];
            readonly CustomTransform: readonly [{
                readonly go: "Op";
                readonly type: "string";
                readonly json: "op";
            }, {
                readonly go: "Args";
                readonly type: "[]CustomTransformArg";
                readonly json: "args";
            }];
            readonly CustomTransformArg: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Bytes";
                readonly type: "json.RawMessage";
                readonly json: "bytes";
            }, {
                readonly go: "U64";
                readonly type: "*uint64";
                readonly json: "u64";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Metadata";
                readonly type: "string";
                readonly json: "metadata";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }];
            readonly Dns: readonly [{
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly DNSConfig: readonly [{
                readonly go: "Servers";
                readonly type: "[]*NameServerConfig";
                readonly json: "servers";
            }, {
                readonly go: "Hosts";
                readonly type: "*HostsWrapper";
                readonly json: "hosts";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "DisableCache";
                readonly type: "bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "DisableFallback";
                readonly type: "bool";
                readonly json: "disableFallback";
            }, {
                readonly go: "DisableFallbackIfMatch";
                readonly type: "bool";
                readonly json: "disableFallbackIfMatch";
            }, {
                readonly go: "EnableParallelQuery";
                readonly type: "bool";
                readonly json: "enableParallelQuery";
            }, {
                readonly go: "UseSystemHosts";
                readonly type: "bool";
                readonly json: "useSystemHosts";
            }];
            readonly DNSOutboundConfig: readonly [{
                readonly go: "Network";
                readonly type: "Network";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Rules";
                readonly type: "[]*DNSOutboundRuleConfig";
                readonly json: "rules";
            }, {
                readonly go: "NonIPQuery";
                readonly type: "*string";
                readonly json: "nonIPQuery";
            }, {
                readonly go: "BlockTypes";
                readonly type: "*[]int32";
                readonly json: "blockTypes";
            }];
            readonly DNSOutboundRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "QType";
                readonly type: "*PortList";
                readonly json: "qtype";
            }, {
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }];
            readonly DokodemoConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "PortMap";
                readonly type: "map[string]string";
                readonly json: "portMap";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "FollowRedirect";
                readonly type: "bool";
                readonly json: "followRedirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly Dtls: readonly [];
            readonly FakeDNSPoolElementConfig: readonly [{
                readonly go: "IPPool";
                readonly type: "string";
                readonly json: "ipPool";
            }, {
                readonly go: "LRUSize";
                readonly type: "int64";
                readonly json: "poolSize";
            }];
            readonly FakeDNSPostProcessingStage: readonly [];
            readonly FinalMask: readonly [{
                readonly go: "Tcp";
                readonly type: "[]Mask";
                readonly json: "tcp";
            }, {
                readonly go: "Udp";
                readonly type: "[]Mask";
                readonly json: "udp";
            }, {
                readonly go: "QuicParams";
                readonly type: "*QuicParamsConfig";
                readonly json: "quicParams";
            }];
            readonly Fragment: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "*Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Interval";
                readonly type: "*Int32Range";
                readonly json: "interval";
            }, {
                readonly go: "MaxSplit";
                readonly type: "*Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FragmentMask: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "MaxSplit";
                readonly type: "Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FreedomConfig: readonly [{
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Redirect";
                readonly type: "string";
                readonly json: "redirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Fragment";
                readonly type: "*Fragment";
                readonly json: "fragment";
            }, {
                readonly go: "Noise";
                readonly type: "*Noise";
                readonly json: "noise";
            }, {
                readonly go: "Noises";
                readonly type: "[]*Noise";
                readonly json: "noises";
            }, {
                readonly go: "ProxyProtocol";
                readonly type: "uint32";
                readonly json: "proxyProtocol";
            }, {
                readonly go: "IPsBlocked";
                readonly type: "*StringList";
                readonly json: "ipsBlocked";
            }, {
                readonly go: "FinalRules";
                readonly type: "[]*FreedomFinalRuleConfig";
                readonly json: "finalRules";
            }];
            readonly FreedomFinalRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "BlockDelay";
                readonly type: "*Int32Range";
                readonly json: "blockDelay";
            }];
            readonly GeodataAssetConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "File";
                readonly type: "string";
                readonly json: "file";
            }];
            readonly GeodataConfig: readonly [{
                readonly go: "Cron";
                readonly type: "*string";
                readonly json: "cron";
            }, {
                readonly go: "Outbound";
                readonly type: "string";
                readonly json: "outbound";
            }, {
                readonly go: "Assets";
                readonly type: "[]*GeodataAssetConfig";
                readonly json: "assets";
            }];
            readonly GRPCConfig: readonly [{
                readonly go: "Authority";
                readonly type: "string";
                readonly json: "authority";
            }, {
                readonly go: "ServiceName";
                readonly type: "string";
                readonly json: "serviceName";
            }, {
                readonly go: "MultiMode";
                readonly type: "bool";
                readonly json: "multiMode";
            }, {
                readonly go: "IdleTimeout";
                readonly type: "int32";
                readonly json: "idle_timeout";
            }, {
                readonly go: "HealthCheckTimeout";
                readonly type: "int32";
                readonly json: "health_check_timeout";
            }, {
                readonly go: "PermitWithoutStream";
                readonly type: "bool";
                readonly json: "permit_without_stream";
            }, {
                readonly go: "InitialWindowsSize";
                readonly type: "int32";
                readonly json: "initial_windows_size";
            }, {
                readonly go: "UserAgent";
                readonly type: "string";
                readonly json: "user_agent";
            }];
            readonly HappyEyeballsConfig: readonly [{
                readonly go: "PrioritizeIPv6";
                readonly type: "bool";
                readonly json: "prioritizeIPv6";
            }, {
                readonly go: "TryDelayMs";
                readonly type: "uint64";
                readonly json: "tryDelayMs";
            }, {
                readonly go: "Interleave";
                readonly type: "uint32";
                readonly json: "interleave";
            }, {
                readonly go: "MaxConcurrentTry";
                readonly type: "uint32";
                readonly json: "maxConcurrentTry";
            }];
            readonly HeaderCustomTCP: readonly [{
                readonly go: "Clients";
                readonly type: "[][]TCPItem";
                readonly json: "clients";
            }, {
                readonly go: "Servers";
                readonly type: "[][]TCPItem";
                readonly json: "servers";
            }, {
                readonly go: "Errors";
                readonly type: "[][]TCPItem";
                readonly json: "errors";
            }];
            readonly HeaderCustomUDP: readonly [{
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Client";
                readonly type: "[]UDPItem";
                readonly json: "client";
            }, {
                readonly go: "Server";
                readonly type: "[]UDPItem";
                readonly json: "server";
            }];
            readonly healthCheckSettings: readonly [{
                readonly go: "Destination";
                readonly type: "string";
                readonly json: "destination";
            }, {
                readonly go: "Connectivity";
                readonly type: "string";
                readonly json: "connectivity";
            }, {
                readonly go: "Interval";
                readonly type: "duration.Duration";
                readonly json: "interval";
            }, {
                readonly go: "SamplingCount";
                readonly type: "int";
                readonly json: "sampling";
            }, {
                readonly go: "Timeout";
                readonly type: "duration.Duration";
                readonly json: "timeout";
            }, {
                readonly go: "HttpMethod";
                readonly type: "string";
                readonly json: "httpMethod";
            }];
            readonly HTTPAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly HTTPClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*HTTPRemoteConfig";
                readonly json: "servers";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly HTTPRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly HTTPResponse: readonly [];
            readonly HTTPServerConfig: readonly [{
                readonly go: "Accounts";
                readonly type: "[]*HTTPAccount";
                readonly json: "accounts";
            }, {
                readonly go: "Transparent";
                readonly type: "bool";
                readonly json: "allowTransparent";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly HttpUpgradeConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly HysteriaClientConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly HysteriaConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Congestion";
                readonly type: "*string";
                readonly json: "congestion";
            }, {
                readonly go: "Up";
                readonly type: "*Bandwidth";
                readonly json: "up";
            }, {
                readonly go: "Down";
                readonly type: "*Bandwidth";
                readonly json: "down";
            }, {
                readonly go: "UdpHop";
                readonly type: "*UdpHop";
                readonly json: "udphop";
            }, {
                readonly go: "UdpIdleTimeout";
                readonly type: "int64";
                readonly json: "udpIdleTimeout";
            }, {
                readonly go: "Masquerade";
                readonly type: "Masquerade";
                readonly json: "masquerade";
            }];
            readonly HysteriaServerConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Users";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "clients";
            }];
            readonly HysteriaUserConfig: readonly [{
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly InboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "PortList";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "ListenOn";
                readonly type: "*Address";
                readonly json: "listen";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "SniffingConfig";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly KCPConfig: readonly [{
                readonly go: "Mtu";
                readonly type: "*uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Tti";
                readonly type: "*uint32";
                readonly json: "tti";
            }, {
                readonly go: "UpCap";
                readonly type: "*uint32";
                readonly json: "uplinkCapacity";
            }, {
                readonly go: "DownCap";
                readonly type: "*uint32";
                readonly json: "downlinkCapacity";
            }, {
                readonly go: "CwndMultiplier";
                readonly type: "*uint32";
                readonly json: "cwndMultiplier";
            }, {
                readonly go: "MaxSendingWindow";
                readonly type: "*uint32";
                readonly json: "maxSendingWindow";
            }, {
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "Seed";
                readonly type: "*string";
                readonly json: "seed";
            }];
            readonly LogConfig: readonly [{
                readonly go: "AccessLog";
                readonly type: "string";
                readonly json: "access";
            }, {
                readonly go: "ErrorLog";
                readonly type: "string";
                readonly json: "error";
            }, {
                readonly go: "LogLevel";
                readonly type: "string";
                readonly json: "loglevel";
            }, {
                readonly go: "DNSLog";
                readonly type: "bool";
                readonly json: "dnsLog";
            }, {
                readonly go: "MaskAddress";
                readonly type: "string";
                readonly json: "maskAddress";
            }];
            readonly LoopbackConfig: readonly [{
                readonly go: "InboundTag";
                readonly type: "string";
                readonly json: "inboundTag";
            }];
            readonly Mask: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly Masquerade: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dir";
                readonly type: "string";
                readonly json: "dir";
            }, {
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "RewriteHost";
                readonly type: "bool";
                readonly json: "rewriteHost";
            }, {
                readonly go: "Insecure";
                readonly type: "bool";
                readonly json: "insecure";
            }, {
                readonly go: "Content";
                readonly type: "string";
                readonly json: "content";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "StatusCode";
                readonly type: "int32";
                readonly json: "statusCode";
            }];
            readonly MetricsConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }];
            readonly MuxConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "Concurrency";
                readonly type: "int16";
                readonly json: "concurrency";
            }, {
                readonly go: "XudpConcurrency";
                readonly type: "int16";
                readonly json: "xudpConcurrency";
            }, {
                readonly go: "XudpProxyUDP443";
                readonly type: "string";
                readonly json: "xudpProxyUDP443";
            }];
            readonly NameServerConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "SkipFallback";
                readonly type: "bool";
                readonly json: "skipFallback";
            }, {
                readonly go: "Domains";
                readonly type: "StringList";
                readonly json: "domains";
            }, {
                readonly go: "ExpectedIPs";
                readonly type: "StringList";
                readonly json: "expectedIPs";
            }, {
                readonly go: "ExpectIPs";
                readonly type: "StringList";
                readonly json: "expectIPs";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TimeoutMs";
                readonly type: "uint64";
                readonly json: "timeoutMs";
            }, {
                readonly go: "DisableCache";
                readonly type: "*bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "*bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "*uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "FinalQuery";
                readonly type: "bool";
                readonly json: "finalQuery";
            }, {
                readonly go: "UnexpectedIPs";
                readonly type: "StringList";
                readonly json: "unexpectedIPs";
            }];
            readonly Noise: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "string";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "*Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "ApplyTo";
                readonly type: "string";
                readonly json: "applyTo";
            }];
            readonly NoiseItem: readonly [{
                readonly go: "Rand";
                readonly type: "Int32Range";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }];
            readonly NoiseMask: readonly [{
                readonly go: "Reset";
                readonly type: "Int32Range";
                readonly json: "reset";
            }, {
                readonly go: "Noise";
                readonly type: "[]NoiseItem";
                readonly json: "noise";
            }];
            readonly NoneResponse: readonly [];
            readonly NoOpConnectionAuthenticator: readonly [];
            readonly ObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "ProbeURL";
                readonly type: "string";
                readonly json: "probeURL";
            }, {
                readonly go: "ProbeInterval";
                readonly type: "duration.Duration";
                readonly json: "probeInterval";
            }, {
                readonly go: "EnableConcurrency";
                readonly type: "bool";
                readonly json: "enableConcurrency";
            }];
            readonly Original: readonly [];
            readonly OutboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "SendThrough";
                readonly type: "*string";
                readonly json: "sendThrough";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "ProxySettings";
                readonly type: "*ProxyConfig";
                readonly json: "proxySettings";
            }, {
                readonly go: "MuxSettings";
                readonly type: "*MuxConfig";
                readonly json: "mux";
            }, {
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }];
            readonly Policy: readonly [{
                readonly go: "Handshake";
                readonly type: "*uint32";
                readonly json: "handshake";
            }, {
                readonly go: "ConnectionIdle";
                readonly type: "*uint32";
                readonly json: "connIdle";
            }, {
                readonly go: "UplinkOnly";
                readonly type: "*uint32";
                readonly json: "uplinkOnly";
            }, {
                readonly go: "DownlinkOnly";
                readonly type: "*uint32";
                readonly json: "downlinkOnly";
            }, {
                readonly go: "StatsUserUplink";
                readonly type: "bool";
                readonly json: "statsUserUplink";
            }, {
                readonly go: "StatsUserDownlink";
                readonly type: "bool";
                readonly json: "statsUserDownlink";
            }, {
                readonly go: "StatsUserOnline";
                readonly type: "bool";
                readonly json: "statsUserOnline";
            }, {
                readonly go: "BufferSize";
                readonly type: "*int32";
                readonly json: "bufferSize";
            }];
            readonly PolicyConfig: readonly [{
                readonly go: "Levels";
                readonly type: "map[uint32]*Policy";
                readonly json: "levels";
            }, {
                readonly go: "System";
                readonly type: "*SystemPolicy";
                readonly json: "system";
            }];
            readonly PortalConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly ProxyConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TransportLayerProxy";
                readonly type: "bool";
                readonly json: "transportLayer";
            }];
            readonly QuicParamsConfig: readonly [{
                readonly go: "Congestion";
                readonly type: "string";
                readonly json: "congestion";
            }, {
                readonly go: "Debug";
                readonly type: "bool";
                readonly json: "debug";
            }, {
                readonly go: "BbrProfile";
                readonly type: "string";
                readonly json: "bbrProfile";
            }, {
                readonly go: "BrutalUp";
                readonly type: "Bandwidth";
                readonly json: "brutalUp";
            }, {
                readonly go: "BrutalDown";
                readonly type: "Bandwidth";
                readonly json: "brutalDown";
            }, {
                readonly go: "UdpHop";
                readonly type: "UdpHop";
                readonly json: "udpHop";
            }, {
                readonly go: "InitStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "initStreamReceiveWindow";
            }, {
                readonly go: "MaxStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxStreamReceiveWindow";
            }, {
                readonly go: "InitConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "initConnectionReceiveWindow";
            }, {
                readonly go: "MaxConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxConnectionReceiveWindow";
            }, {
                readonly go: "MaxIdleTimeout";
                readonly type: "int64";
                readonly json: "maxIdleTimeout";
            }, {
                readonly go: "KeepAlivePeriod";
                readonly type: "int64";
                readonly json: "keepAlivePeriod";
            }, {
                readonly go: "DisablePathMTUDiscovery";
                readonly type: "bool";
                readonly json: "disablePathMTUDiscovery";
            }, {
                readonly go: "MaxIncomingStreams";
                readonly type: "int64";
                readonly json: "maxIncomingStreams";
            }];
            readonly RawFieldRule: readonly [{
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "*StringList";
                readonly json: "domains";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "SourceIP";
                readonly type: "*StringList";
                readonly json: "sourceIP";
            }, {
                readonly go: "Source";
                readonly type: "*StringList";
                readonly json: "source";
            }, {
                readonly go: "SourcePort";
                readonly type: "*PortList";
                readonly json: "sourcePort";
            }, {
                readonly go: "User";
                readonly type: "*StringList";
                readonly json: "user";
            }, {
                readonly go: "VlessRoute";
                readonly type: "*PortList";
                readonly json: "vlessRoute";
            }, {
                readonly go: "InboundTag";
                readonly type: "*StringList";
                readonly json: "inboundTag";
            }, {
                readonly go: "Protocols";
                readonly type: "*StringList";
                readonly json: "protocol";
            }, {
                readonly go: "Attributes";
                readonly type: "map[string]string";
                readonly json: "attrs";
            }, {
                readonly go: "LocalIP";
                readonly type: "*StringList";
                readonly json: "localIP";
            }, {
                readonly go: "LocalPort";
                readonly type: "*PortList";
                readonly json: "localPort";
            }, {
                readonly go: "Process";
                readonly type: "*StringList";
                readonly json: "process";
            }, {
                readonly go: "Webhook";
                readonly type: "*WebhookRuleConfig";
                readonly json: "webhook";
            }];
            readonly REALITYConfig: readonly [{
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "Show";
                readonly type: "bool";
                readonly json: "show";
            }, {
                readonly go: "Target";
                readonly type: "json.RawMessage";
                readonly json: "target";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }, {
                readonly go: "ServerNames";
                readonly type: "[]string";
                readonly json: "serverNames";
            }, {
                readonly go: "PrivateKey";
                readonly type: "string";
                readonly json: "privateKey";
            }, {
                readonly go: "MinClientVer";
                readonly type: "string";
                readonly json: "minClientVer";
            }, {
                readonly go: "MaxClientVer";
                readonly type: "string";
                readonly json: "maxClientVer";
            }, {
                readonly go: "MaxTimeDiff";
                readonly type: "uint64";
                readonly json: "maxTimeDiff";
            }, {
                readonly go: "ShortIds";
                readonly type: "[]string";
                readonly json: "shortIds";
            }, {
                readonly go: "Mldsa65Seed";
                readonly type: "string";
                readonly json: "mldsa65Seed";
            }, {
                readonly go: "LimitFallbackUpload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackUpload";
            }, {
                readonly go: "LimitFallbackDownload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackDownload";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "ShortId";
                readonly type: "string";
                readonly json: "shortId";
            }, {
                readonly go: "Mldsa65Verify";
                readonly type: "string";
                readonly json: "mldsa65Verify";
            }, {
                readonly go: "SpiderX";
                readonly type: "string";
                readonly json: "spiderX";
            }];
            readonly ReverseConfig: readonly [{
                readonly go: "Bridges";
                readonly type: "[]BridgeConfig";
                readonly json: "bridges";
            }, {
                readonly go: "Portals";
                readonly type: "[]PortalConfig";
                readonly json: "portals";
            }];
            readonly RouterConfig: readonly [{
                readonly go: "RuleList";
                readonly type: "[]json.RawMessage";
                readonly json: "rules";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "*string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Balancers";
                readonly type: "[]*BalancingRule";
                readonly json: "balancers";
            }];
            readonly RouterRule: readonly [{
                readonly go: "RuleTag";
                readonly type: "string";
                readonly json: "ruleTag";
            }, {
                readonly go: "OutboundTag";
                readonly type: "string";
                readonly json: "outboundTag";
            }, {
                readonly go: "BalancerTag";
                readonly type: "string";
                readonly json: "balancerTag";
            }];
            readonly Salamander: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly ShadowsocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "UoT";
                readonly type: "bool";
                readonly json: "uot";
            }, {
                readonly go: "UoTVersion";
                readonly type: "int";
                readonly json: "uotVersion";
            }, {
                readonly go: "Servers";
                readonly type: "[]*ShadowsocksServerTarget";
                readonly json: "servers";
            }];
            readonly ShadowsocksServerConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Users";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "NetworkList";
                readonly type: "*NetworkList";
                readonly json: "network";
            }];
            readonly ShadowsocksServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "UoT";
                readonly type: "bool";
                readonly json: "uot";
            }, {
                readonly go: "UoTVersion";
                readonly type: "int";
                readonly json: "uotVersion";
            }];
            readonly ShadowsocksUserConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly SniffingConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "DestOverride";
                readonly type: "StringList";
                readonly json: "destOverride";
            }, {
                readonly go: "DomainsExcluded";
                readonly type: "StringList";
                readonly json: "domainsExcluded";
            }, {
                readonly go: "IPsExcluded";
                readonly type: "StringList";
                readonly json: "ipsExcluded";
            }, {
                readonly go: "MetadataOnly";
                readonly type: "bool";
                readonly json: "metadataOnly";
            }, {
                readonly go: "RouteOnly";
                readonly type: "bool";
                readonly json: "routeOnly";
            }];
            readonly SocketConfig: readonly [{
                readonly go: "Mark";
                readonly type: "int32";
                readonly json: "mark";
            }, {
                readonly go: "TFO";
                readonly type: "interface{}";
                readonly json: "tcpFastOpen";
            }, {
                readonly go: "TProxy";
                readonly type: "string";
                readonly json: "tproxy";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "DialerProxy";
                readonly type: "string";
                readonly json: "dialerProxy";
            }, {
                readonly go: "TCPKeepAliveInterval";
                readonly type: "int32";
                readonly json: "tcpKeepAliveInterval";
            }, {
                readonly go: "TCPKeepAliveIdle";
                readonly type: "int32";
                readonly json: "tcpKeepAliveIdle";
            }, {
                readonly go: "TCPCongestion";
                readonly type: "string";
                readonly json: "tcpCongestion";
            }, {
                readonly go: "TCPWindowClamp";
                readonly type: "int32";
                readonly json: "tcpWindowClamp";
            }, {
                readonly go: "TCPMaxSeg";
                readonly type: "int32";
                readonly json: "tcpMaxSeg";
            }, {
                readonly go: "Penetrate";
                readonly type: "bool";
                readonly json: "penetrate";
            }, {
                readonly go: "TCPUserTimeout";
                readonly type: "int32";
                readonly json: "tcpUserTimeout";
            }, {
                readonly go: "V6only";
                readonly type: "bool";
                readonly json: "v6only";
            }, {
                readonly go: "Interface";
                readonly type: "string";
                readonly json: "interface";
            }, {
                readonly go: "TcpMptcp";
                readonly type: "bool";
                readonly json: "tcpMptcp";
            }, {
                readonly go: "CustomSockopt";
                readonly type: "[]*CustomSockoptConfig";
                readonly json: "customSockopt";
            }, {
                readonly go: "AddressPortStrategy";
                readonly type: "string";
                readonly json: "addressPortStrategy";
            }, {
                readonly go: "HappyEyeballsSettings";
                readonly type: "*HappyEyeballsConfig";
                readonly json: "happyEyeballs";
            }, {
                readonly go: "TrustedXForwardedFor";
                readonly type: "[]string";
                readonly json: "trustedXForwardedFor";
            }];
            readonly SocksAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly SocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*SocksRemoteConfig";
                readonly json: "servers";
            }];
            readonly SocksRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly SocksServerConfig: readonly [{
                readonly go: "AuthMethod";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*SocksAccount";
                readonly json: "accounts";
            }, {
                readonly go: "UDP";
                readonly type: "bool";
                readonly json: "udp";
            }, {
                readonly go: "Host";
                readonly type: "*Address";
                readonly json: "ip";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly SplitHTTPConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "XPaddingBytes";
                readonly type: "Int32Range";
                readonly json: "xPaddingBytes";
            }, {
                readonly go: "XPaddingObfsMode";
                readonly type: "bool";
                readonly json: "xPaddingObfsMode";
            }, {
                readonly go: "XPaddingKey";
                readonly type: "string";
                readonly json: "xPaddingKey";
            }, {
                readonly go: "XPaddingHeader";
                readonly type: "string";
                readonly json: "xPaddingHeader";
            }, {
                readonly go: "XPaddingPlacement";
                readonly type: "string";
                readonly json: "xPaddingPlacement";
            }, {
                readonly go: "XPaddingMethod";
                readonly type: "string";
                readonly json: "xPaddingMethod";
            }, {
                readonly go: "UplinkHTTPMethod";
                readonly type: "string";
                readonly json: "uplinkHTTPMethod";
            }, {
                readonly go: "SessionPlacement";
                readonly type: "string";
                readonly json: "sessionPlacement";
            }, {
                readonly go: "SessionKey";
                readonly type: "string";
                readonly json: "sessionKey";
            }, {
                readonly go: "SeqPlacement";
                readonly type: "string";
                readonly json: "seqPlacement";
            }, {
                readonly go: "SeqKey";
                readonly type: "string";
                readonly json: "seqKey";
            }, {
                readonly go: "UplinkDataPlacement";
                readonly type: "string";
                readonly json: "uplinkDataPlacement";
            }, {
                readonly go: "UplinkDataKey";
                readonly type: "string";
                readonly json: "uplinkDataKey";
            }, {
                readonly go: "UplinkChunkSize";
                readonly type: "Int32Range";
                readonly json: "uplinkChunkSize";
            }, {
                readonly go: "NoGRPCHeader";
                readonly type: "bool";
                readonly json: "noGRPCHeader";
            }, {
                readonly go: "NoSSEHeader";
                readonly type: "bool";
                readonly json: "noSSEHeader";
            }, {
                readonly go: "ScMaxEachPostBytes";
                readonly type: "Int32Range";
                readonly json: "scMaxEachPostBytes";
            }, {
                readonly go: "ScMinPostsIntervalMs";
                readonly type: "Int32Range";
                readonly json: "scMinPostsIntervalMs";
            }, {
                readonly go: "ScMaxBufferedPosts";
                readonly type: "int64";
                readonly json: "scMaxBufferedPosts";
            }, {
                readonly go: "ScStreamUpServerSecs";
                readonly type: "Int32Range";
                readonly json: "scStreamUpServerSecs";
            }, {
                readonly go: "ServerMaxHeaderBytes";
                readonly type: "int32";
                readonly json: "serverMaxHeaderBytes";
            }, {
                readonly go: "Xmux";
                readonly type: "XmuxConfig";
                readonly json: "xmux";
            }, {
                readonly go: "DownloadSettings";
                readonly type: "*StreamConfig";
                readonly json: "downloadSettings";
            }, {
                readonly go: "Extra";
                readonly type: "json.RawMessage";
                readonly json: "extra";
            }];
            readonly Srtp: readonly [];
            readonly StatsConfig: readonly [];
            readonly StrategyConfig: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly strategyEmptyConfig: readonly [];
            readonly strategyLeastLoadConfig: readonly [{
                readonly go: "Costs";
                readonly type: "[]*router.StrategyWeight";
                readonly json: "costs";
            }, {
                readonly go: "Baselines";
                readonly type: "[]duration.Duration";
                readonly json: "baselines";
            }, {
                readonly go: "Expected";
                readonly type: "int32";
                readonly json: "expected";
            }, {
                readonly go: "MaxRTT";
                readonly type: "duration.Duration";
                readonly json: "maxRTT";
            }, {
                readonly go: "Tolerance";
                readonly type: "float64";
                readonly json: "tolerance";
            }];
            readonly StreamConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*TransportProtocol";
                readonly json: "network";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "FinalMask";
                readonly type: "*FinalMask";
                readonly json: "finalmask";
            }, {
                readonly go: "TLSSettings";
                readonly type: "*TLSConfig";
                readonly json: "tlsSettings";
            }, {
                readonly go: "REALITYSettings";
                readonly type: "*REALITYConfig";
                readonly json: "realitySettings";
            }, {
                readonly go: "RAWSettings";
                readonly type: "*TCPConfig";
                readonly json: "rawSettings";
            }, {
                readonly go: "TCPSettings";
                readonly type: "*TCPConfig";
                readonly json: "tcpSettings";
            }, {
                readonly go: "XHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "xhttpSettings";
            }, {
                readonly go: "SplitHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "splithttpSettings";
            }, {
                readonly go: "KCPSettings";
                readonly type: "*KCPConfig";
                readonly json: "kcpSettings";
            }, {
                readonly go: "GRPCSettings";
                readonly type: "*GRPCConfig";
                readonly json: "grpcSettings";
            }, {
                readonly go: "WSSettings";
                readonly type: "*WebSocketConfig";
                readonly json: "wsSettings";
            }, {
                readonly go: "HTTPUPGRADESettings";
                readonly type: "*HttpUpgradeConfig";
                readonly json: "httpupgradeSettings";
            }, {
                readonly go: "HysteriaSettings";
                readonly type: "*HysteriaConfig";
                readonly json: "hysteriaSettings";
            }, {
                readonly go: "SocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "sockopt";
            }];
            readonly Sudoku: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "ASCII";
                readonly type: "string";
                readonly json: "ascii";
            }, {
                readonly go: "CustomTable";
                readonly type: "string";
                readonly json: "customTable";
            }, {
                readonly go: "LegacyCustomTable";
                readonly type: "string";
                readonly json: "custom_table";
            }, {
                readonly go: "CustomTables";
                readonly type: "[]string";
                readonly json: "customTables";
            }, {
                readonly go: "LegacyCustomSets";
                readonly type: "[]string";
                readonly json: "custom_tables";
            }, {
                readonly go: "PaddingMin";
                readonly type: "uint32";
                readonly json: "paddingMin";
            }, {
                readonly go: "LegacyPaddingMin";
                readonly type: "uint32";
                readonly json: "padding_min";
            }, {
                readonly go: "PaddingMax";
                readonly type: "uint32";
                readonly json: "paddingMax";
            }, {
                readonly go: "LegacyPaddingMax";
                readonly type: "uint32";
                readonly json: "padding_max";
            }];
            readonly SystemPolicy: readonly [{
                readonly go: "StatsInboundUplink";
                readonly type: "bool";
                readonly json: "statsInboundUplink";
            }, {
                readonly go: "StatsInboundDownlink";
                readonly type: "bool";
                readonly json: "statsInboundDownlink";
            }, {
                readonly go: "StatsOutboundUplink";
                readonly type: "bool";
                readonly json: "statsOutboundUplink";
            }, {
                readonly go: "StatsOutboundDownlink";
                readonly type: "bool";
                readonly json: "statsOutboundDownlink";
            }];
            readonly TCPConfig: readonly [{
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly TCPItem: readonly [{
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly TLSCertConfig: readonly [{
                readonly go: "CertFile";
                readonly type: "string";
                readonly json: "certificateFile";
            }, {
                readonly go: "CertStr";
                readonly type: "[]string";
                readonly json: "certificate";
            }, {
                readonly go: "KeyFile";
                readonly type: "string";
                readonly json: "keyFile";
            }, {
                readonly go: "KeyStr";
                readonly type: "[]string";
                readonly json: "key";
            }, {
                readonly go: "Usage";
                readonly type: "string";
                readonly json: "usage";
            }, {
                readonly go: "OcspStapling";
                readonly type: "uint64";
                readonly json: "ocspStapling";
            }, {
                readonly go: "OneTimeLoading";
                readonly type: "bool";
                readonly json: "oneTimeLoading";
            }, {
                readonly go: "BuildChain";
                readonly type: "bool";
                readonly json: "buildChain";
            }];
            readonly TLSConfig: readonly [{
                readonly go: "AllowInsecure";
                readonly type: "bool";
                readonly json: "allowInsecure";
            }, {
                readonly go: "Certs";
                readonly type: "[]*TLSCertConfig";
                readonly json: "certificates";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "ALPN";
                readonly type: "*StringList";
                readonly json: "alpn";
            }, {
                readonly go: "EnableSessionResumption";
                readonly type: "bool";
                readonly json: "enableSessionResumption";
            }, {
                readonly go: "DisableSystemRoot";
                readonly type: "bool";
                readonly json: "disableSystemRoot";
            }, {
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "minVersion";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "maxVersion";
            }, {
                readonly go: "CipherSuites";
                readonly type: "string";
                readonly json: "cipherSuites";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "RejectUnknownSNI";
                readonly type: "bool";
                readonly json: "rejectUnknownSni";
            }, {
                readonly go: "CurvePreferences";
                readonly type: "*StringList";
                readonly json: "curvePreferences";
            }, {
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "PinnedPeerCertSha256";
                readonly type: "string";
                readonly json: "pinnedPeerCertSha256";
            }, {
                readonly go: "VerifyPeerCertByName";
                readonly type: "string";
                readonly json: "verifyPeerCertByName";
            }, {
                readonly go: "VerifyPeerCertInNames";
                readonly type: "[]string";
                readonly json: "verifyPeerCertInNames";
            }, {
                readonly go: "ECHServerKeys";
                readonly type: "string";
                readonly json: "echServerKeys";
            }, {
                readonly go: "ECHConfigList";
                readonly type: "string";
                readonly json: "echConfigList";
            }, {
                readonly go: "ECHForceQuery";
                readonly type: "string";
                readonly json: "echForceQuery";
            }, {
                readonly go: "ECHSocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "echSockopt";
            }];
            readonly TrojanClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Servers";
                readonly type: "[]*TrojanServerTarget";
                readonly json: "servers";
            }];
            readonly TrojanInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly TrojanServerConfig: readonly [{
                readonly go: "Clients";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*TrojanInboundFallback";
                readonly json: "fallbacks";
            }];
            readonly TrojanServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TrojanUserConfig: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TunConfig: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "MTU";
                readonly type: "uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Gateway";
                readonly type: "[]string";
                readonly json: "gateway";
            }, {
                readonly go: "DNS";
                readonly type: "[]string";
                readonly json: "dns";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "AutoSystemRoutingTable";
                readonly type: "[]string";
                readonly json: "autoSystemRoutingTable";
            }, {
                readonly go: "AutoOutboundsInterface";
                readonly type: "*string";
                readonly json: "autoOutboundsInterface";
            }];
            readonly UdpHop: readonly [{
                readonly go: "PortList";
                readonly type: "PortList";
                readonly json: "ports";
            }, {
                readonly go: "Interval";
                readonly type: "Int32Range";
                readonly json: "interval";
            }];
            readonly UDPItem: readonly [{
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly User: readonly [{
                readonly go: "EmailString";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "LevelByte";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly Utp: readonly [];
            readonly VersionConfig: readonly [{
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "min";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "max";
            }];
            readonly VLessInboundConfig: readonly [{
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Decryption";
                readonly type: "string";
                readonly json: "decryption";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*VLessInboundFallback";
                readonly json: "fallbacks";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }];
            readonly VLessInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly VLessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Id";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Seed";
                readonly type: "string";
                readonly json: "seed";
            }, {
                readonly go: "Encryption";
                readonly type: "string";
                readonly json: "encryption";
            }, {
                readonly go: "Reverse";
                readonly type: "*VLessReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "Testpre";
                readonly type: "uint32";
                readonly json: "testpre";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }, {
                readonly go: "Vnext";
                readonly type: "[]*VLessOutboundVnext";
                readonly json: "vnext";
            }];
            readonly VLessOutboundVnext: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly VLessReverseConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly VMessAccount: readonly [{
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }];
            readonly VMessDefaultConfig: readonly [{
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VMessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Defaults";
                readonly type: "*VMessDefaultConfig";
                readonly json: "default";
            }];
            readonly VMessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }, {
                readonly go: "Receivers";
                readonly type: "[]*VMessOutboundTarget";
                readonly json: "vnext";
            }];
            readonly VMessOutboundTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly WebhookRuleConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "Deduplication";
                readonly type: "uint32";
                readonly json: "deduplication";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly WebSocketConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "HeartbeatPeriod";
                readonly type: "uint32";
                readonly json: "heartbeatPeriod";
            }];
            readonly Wechat: readonly [];
            readonly Wireguard: readonly [];
            readonly WireGuardConfig: readonly [{
                readonly go: "NoKernelTun";
                readonly type: "bool";
                readonly json: "noKernelTun";
            }, {
                readonly go: "SecretKey";
                readonly type: "string";
                readonly json: "secretKey";
            }, {
                readonly go: "Address";
                readonly type: "[]string";
                readonly json: "address";
            }, {
                readonly go: "Peers";
                readonly type: "[]*WireGuardPeerConfig";
                readonly json: "peers";
            }, {
                readonly go: "MTU";
                readonly type: "int32";
                readonly json: "mtu";
            }, {
                readonly go: "NumWorkers";
                readonly type: "int32";
                readonly json: "workers";
            }, {
                readonly go: "Reserved";
                readonly type: "[]byte";
                readonly json: "reserved";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }];
            readonly WireGuardPeerConfig: readonly [{
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "PreSharedKey";
                readonly type: "string";
                readonly json: "preSharedKey";
            }, {
                readonly go: "Endpoint";
                readonly type: "string";
                readonly json: "endpoint";
            }, {
                readonly go: "KeepAlive";
                readonly type: "uint32";
                readonly json: "keepAlive";
            }, {
                readonly go: "AllowedIPs";
                readonly type: "[]string";
                readonly json: "allowedIPs";
            }];
            readonly Xdns: readonly [{
                readonly go: "Domain";
                readonly type: "json.RawMessage";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "[]string";
                readonly json: "domains";
            }, {
                readonly go: "Resolvers";
                readonly type: "[]string";
                readonly json: "resolvers";
            }];
            readonly Xicmp: readonly [{
                readonly go: "ListenIp";
                readonly type: "string";
                readonly json: "listenIp";
            }, {
                readonly go: "Id";
                readonly type: "uint16";
                readonly json: "id";
            }];
            readonly XmuxConfig: readonly [{
                readonly go: "MaxConcurrency";
                readonly type: "Int32Range";
                readonly json: "maxConcurrency";
            }, {
                readonly go: "MaxConnections";
                readonly type: "Int32Range";
                readonly json: "maxConnections";
            }, {
                readonly go: "CMaxReuseTimes";
                readonly type: "Int32Range";
                readonly json: "cMaxReuseTimes";
            }, {
                readonly go: "HMaxRequestTimes";
                readonly type: "Int32Range";
                readonly json: "hMaxRequestTimes";
            }, {
                readonly go: "HMaxReusableSecs";
                readonly type: "Int32Range";
                readonly json: "hMaxReusableSecs";
            }, {
                readonly go: "HKeepAlivePeriod";
                readonly type: "int64";
                readonly json: "hKeepAlivePeriod";
            }];
        };
    }, {
        readonly tag: "v26.6.22";
        readonly version: "26.6.22";
        readonly commit: "b99c3e56574fb0317608c49dd1dd9af816db7a9e";
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
            readonly source: "infra/conf/freedom.go";
            readonly keys: readonly ["freedom noise"];
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["allowInsecure"];
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["finalmask xdns domain"];
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["http-transport"];
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xtls"];
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["mkcp header/seed"];
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["quic"];
        }, {
            readonly feature: "Flow for Trojan";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan flow"];
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly [];
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly ["global transport"];
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
            readonly source: "infra/conf/dns_proxy.go";
            readonly keys: readonly ["dns legacy nonIPQuery blockTypes"];
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/shadowsocks.go";
            readonly keys: readonly ["shadowsocks"];
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xhttp headers host"];
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["grpc"];
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["httpupgrade"];
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["websocket", "ws"];
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan"];
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/vmess.go";
            readonly keys: readonly ["vmess"];
        }];
        readonly topLevelKeys: readonly ["api", "burstObservatory", "dns", "fakeDns", "geodata", "inbounds", "log", "metrics", "observatory", "outbounds", "policy", "reverse", "routing", "stats", "transport", "version"];
        readonly inboundProtocols: readonly [{
            readonly protocol: "dokodemo-door";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPServerConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaServerConfig";
        }, {
            readonly protocol: "mixed";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksServerConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanServerConfig";
        }, {
            readonly protocol: "tun";
            readonly config: "TunConfig";
        }, {
            readonly protocol: "tunnel";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessInboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessInboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly outboundProtocols: readonly [{
            readonly protocol: "blackhole";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "block";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "direct";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "dns";
            readonly config: "DNSOutboundConfig";
        }, {
            readonly protocol: "freedom";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPClientConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaClientConfig";
        }, {
            readonly protocol: "loopback";
            readonly config: "LoopbackConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksClientConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksClientConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanClientConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessOutboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessOutboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly streamFields: readonly [{
            readonly go: "Address";
            readonly type: "*Address";
            readonly json: "address";
        }, {
            readonly go: "Port";
            readonly type: "uint16";
            readonly json: "port";
        }, {
            readonly go: "Network";
            readonly type: "*TransportProtocol";
            readonly json: "network";
        }, {
            readonly go: "Security";
            readonly type: "string";
            readonly json: "security";
        }, {
            readonly go: "FinalMask";
            readonly type: "*FinalMask";
            readonly json: "finalmask";
        }, {
            readonly go: "TLSSettings";
            readonly type: "*TLSConfig";
            readonly json: "tlsSettings";
        }, {
            readonly go: "REALITYSettings";
            readonly type: "*REALITYConfig";
            readonly json: "realitySettings";
        }, {
            readonly go: "RAWSettings";
            readonly type: "*TCPConfig";
            readonly json: "rawSettings";
        }, {
            readonly go: "TCPSettings";
            readonly type: "*TCPConfig";
            readonly json: "tcpSettings";
        }, {
            readonly go: "XHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "xhttpSettings";
        }, {
            readonly go: "SplitHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "splithttpSettings";
        }, {
            readonly go: "KCPSettings";
            readonly type: "*KCPConfig";
            readonly json: "kcpSettings";
        }, {
            readonly go: "GRPCSettings";
            readonly type: "*GRPCConfig";
            readonly json: "grpcSettings";
        }, {
            readonly go: "WSSettings";
            readonly type: "*WebSocketConfig";
            readonly json: "wsSettings";
        }, {
            readonly go: "HTTPUPGRADESettings";
            readonly type: "*HttpUpgradeConfig";
            readonly json: "httpupgradeSettings";
        }, {
            readonly go: "HysteriaSettings";
            readonly type: "*HysteriaConfig";
            readonly json: "hysteriaSettings";
        }, {
            readonly go: "SocketSettings";
            readonly type: "*SocketConfig";
            readonly json: "sockopt";
        }];
        readonly transportAliases: {
            readonly grpc: "grpc";
            readonly httpupgrade: "httpupgrade";
            readonly hysteria: "hysteria";
            readonly kcp: "mkcp";
            readonly mkcp: "mkcp";
            readonly raw: "tcp";
            readonly splithttp: "splithttp";
            readonly tcp: "tcp";
            readonly websocket: "websocket";
            readonly ws: "websocket";
            readonly xhttp: "splithttp";
        };
        readonly securityTypes: readonly ["none", "reality", "tls", "xtls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_133", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_148", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_26_3", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly jsonLoaders: {
            readonly "infra/conf/transport_internet.go:tcpHeaderLoader": readonly [{
                readonly protocol: "http";
                readonly config: "Authenticator";
            }, {
                readonly protocol: "none";
                readonly config: "NoOpConnectionAuthenticator";
            }];
            readonly "infra/conf/transport_internet.go:tcpmaskLoader": readonly [{
                readonly protocol: "fragment";
                readonly config: "FragmentMask";
            }, {
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomTCP";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }];
            readonly "infra/conf/transport_internet.go:udpmaskLoader": readonly [{
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomUDP";
            }, {
                readonly protocol: "mkcp-legacy";
                readonly config: "MkcpLegacy";
            }, {
                readonly protocol: "noise";
                readonly config: "NoiseMask";
            }, {
                readonly protocol: "realm";
                readonly config: "Realm";
            }, {
                readonly protocol: "salamander";
                readonly config: "Salamander";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }, {
                readonly protocol: "xdns";
                readonly config: "Xdns";
            }, {
                readonly protocol: "xicmp";
                readonly config: "Xicmp";
            }];
            readonly "infra/conf/xray.go:inboundConfigLoader": readonly [{
                readonly protocol: "dokodemo-door";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPServerConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaServerConfig";
            }, {
                readonly protocol: "mixed";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksServerConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanServerConfig";
            }, {
                readonly protocol: "tun";
                readonly config: "TunConfig";
            }, {
                readonly protocol: "tunnel";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessInboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessInboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
            readonly "infra/conf/xray.go:outboundConfigLoader": readonly [{
                readonly protocol: "blackhole";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "block";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "direct";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "dns";
                readonly config: "DNSOutboundConfig";
            }, {
                readonly protocol: "freedom";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPClientConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaClientConfig";
            }, {
                readonly protocol: "loopback";
                readonly config: "LoopbackConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksClientConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksClientConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanClientConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessOutboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessOutboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
        };
        readonly structs: {
            readonly APIConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }, {
                readonly go: "Services";
                readonly type: "[]string";
                readonly json: "services";
            }];
            readonly Authenticator: readonly [{
                readonly go: "Request";
                readonly type: "AuthenticatorRequest";
                readonly json: "request";
            }, {
                readonly go: "Response";
                readonly type: "AuthenticatorResponse";
                readonly json: "response";
            }];
            readonly AuthenticatorRequest: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Method";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Path";
                readonly type: "StringList";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly AuthenticatorResponse: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Status";
                readonly type: "string";
                readonly json: "status";
            }, {
                readonly go: "Reason";
                readonly type: "string";
                readonly json: "reason";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly BalancingRule: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Selectors";
                readonly type: "StringList";
                readonly json: "selector";
            }, {
                readonly go: "Strategy";
                readonly type: "StrategyConfig";
                readonly json: "strategy";
            }, {
                readonly go: "FallbackTag";
                readonly type: "string";
                readonly json: "fallbackTag";
            }];
            readonly BlackholeConfig: readonly [{
                readonly go: "Response";
                readonly type: "json.RawMessage";
                readonly json: "response";
            }];
            readonly BridgeConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly BurstObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "HealthCheck";
                readonly type: "*healthCheckSettings";
                readonly json: "pingConfig";
            }];
            readonly Config: readonly [{
                readonly go: "Transport";
                readonly type: "map[string]json.RawMessage";
                readonly json: "transport";
            }, {
                readonly go: "LogConfig";
                readonly type: "*LogConfig";
                readonly json: "log";
            }, {
                readonly go: "RouterConfig";
                readonly type: "*RouterConfig";
                readonly json: "routing";
            }, {
                readonly go: "DNSConfig";
                readonly type: "*DNSConfig";
                readonly json: "dns";
            }, {
                readonly go: "InboundConfigs";
                readonly type: "[]InboundDetourConfig";
                readonly json: "inbounds";
            }, {
                readonly go: "OutboundConfigs";
                readonly type: "[]OutboundDetourConfig";
                readonly json: "outbounds";
            }, {
                readonly go: "Policy";
                readonly type: "*PolicyConfig";
                readonly json: "policy";
            }, {
                readonly go: "API";
                readonly type: "*APIConfig";
                readonly json: "api";
            }, {
                readonly go: "Metrics";
                readonly type: "*MetricsConfig";
                readonly json: "metrics";
            }, {
                readonly go: "Stats";
                readonly type: "*StatsConfig";
                readonly json: "stats";
            }, {
                readonly go: "Reverse";
                readonly type: "*ReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "FakeDNS";
                readonly type: "*FakeDNSConfig";
                readonly json: "fakeDns";
            }, {
                readonly go: "Observatory";
                readonly type: "*ObservatoryConfig";
                readonly json: "observatory";
            }, {
                readonly go: "BurstObservatory";
                readonly type: "*BurstObservatoryConfig";
                readonly json: "burstObservatory";
            }, {
                readonly go: "Version";
                readonly type: "*VersionConfig";
                readonly json: "version";
            }, {
                readonly go: "Geodata";
                readonly type: "*GeodataConfig";
                readonly json: "geodata";
            }];
            readonly CustomSockoptConfig: readonly [{
                readonly go: "Syetem";
                readonly type: "string";
                readonly json: "system";
            }, {
                readonly go: "Network";
                readonly type: "string";
                readonly json: "network";
            }, {
                readonly go: "Level";
                readonly type: "string";
                readonly json: "level";
            }, {
                readonly go: "Opt";
                readonly type: "string";
                readonly json: "opt";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }];
            readonly CustomTransform: readonly [{
                readonly go: "Op";
                readonly type: "string";
                readonly json: "op";
            }, {
                readonly go: "Args";
                readonly type: "[]CustomTransformArg";
                readonly json: "args";
            }];
            readonly CustomTransformArg: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Bytes";
                readonly type: "json.RawMessage";
                readonly json: "bytes";
            }, {
                readonly go: "U64";
                readonly type: "*uint64";
                readonly json: "u64";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Metadata";
                readonly type: "string";
                readonly json: "metadata";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }];
            readonly DNSConfig: readonly [{
                readonly go: "Servers";
                readonly type: "[]*NameServerConfig";
                readonly json: "servers";
            }, {
                readonly go: "Hosts";
                readonly type: "*HostsWrapper";
                readonly json: "hosts";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "DisableCache";
                readonly type: "bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "DisableFallback";
                readonly type: "bool";
                readonly json: "disableFallback";
            }, {
                readonly go: "DisableFallbackIfMatch";
                readonly type: "bool";
                readonly json: "disableFallbackIfMatch";
            }, {
                readonly go: "EnableParallelQuery";
                readonly type: "bool";
                readonly json: "enableParallelQuery";
            }, {
                readonly go: "UseSystemHosts";
                readonly type: "bool";
                readonly json: "useSystemHosts";
            }];
            readonly DNSOutboundConfig: readonly [{
                readonly go: "RewriteNetwork";
                readonly type: "Network";
                readonly json: "rewriteNetwork";
            }, {
                readonly go: "RewriteAddress";
                readonly type: "*Address";
                readonly json: "rewriteAddress";
            }, {
                readonly go: "RewritePort";
                readonly type: "uint16";
                readonly json: "rewritePort";
            }, {
                readonly go: "Network";
                readonly type: "Network";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Rules";
                readonly type: "[]*DNSOutboundRuleConfig";
                readonly json: "rules";
            }, {
                readonly go: "NonIPQuery";
                readonly type: "*string";
                readonly json: "nonIPQuery";
            }, {
                readonly go: "BlockTypes";
                readonly type: "*[]int32";
                readonly json: "blockTypes";
            }];
            readonly DNSOutboundRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "QType";
                readonly type: "*PortList";
                readonly json: "qType";
            }, {
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "RCode";
                readonly type: "uint32";
                readonly json: "rCode";
            }];
            readonly DokodemoConfig: readonly [{
                readonly go: "AllowedNetwork";
                readonly type: "*NetworkList";
                readonly json: "allowedNetwork";
            }, {
                readonly go: "RewriteAddress";
                readonly type: "*Address";
                readonly json: "rewriteAddress";
            }, {
                readonly go: "RewritePort";
                readonly type: "uint16";
                readonly json: "rewritePort";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "PortMap";
                readonly type: "map[string]string";
                readonly json: "portMap";
            }, {
                readonly go: "FollowRedirect";
                readonly type: "bool";
                readonly json: "followRedirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly FakeDNSPoolElementConfig: readonly [{
                readonly go: "IPPool";
                readonly type: "string";
                readonly json: "ipPool";
            }, {
                readonly go: "LRUSize";
                readonly type: "int64";
                readonly json: "poolSize";
            }];
            readonly FakeDNSPostProcessingStage: readonly [];
            readonly FinalMask: readonly [{
                readonly go: "Tcp";
                readonly type: "[]Mask";
                readonly json: "tcp";
            }, {
                readonly go: "Udp";
                readonly type: "[]Mask";
                readonly json: "udp";
            }, {
                readonly go: "QuicParams";
                readonly type: "*QuicParamsConfig";
                readonly json: "quicParams";
            }];
            readonly Fragment: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "*Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Interval";
                readonly type: "*Int32Range";
                readonly json: "interval";
            }, {
                readonly go: "MaxSplit";
                readonly type: "*Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FragmentMask: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Lengths";
                readonly type: "[]Int32Range";
                readonly json: "lengths";
            }, {
                readonly go: "Delays";
                readonly type: "[]Int32Range";
                readonly json: "delays";
            }, {
                readonly go: "MaxSplit";
                readonly type: "Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FreedomConfig: readonly [{
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Redirect";
                readonly type: "string";
                readonly json: "redirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Fragment";
                readonly type: "*Fragment";
                readonly json: "fragment";
            }, {
                readonly go: "Noise";
                readonly type: "*Noise";
                readonly json: "noise";
            }, {
                readonly go: "Noises";
                readonly type: "[]*Noise";
                readonly json: "noises";
            }, {
                readonly go: "ProxyProtocol";
                readonly type: "uint32";
                readonly json: "proxyProtocol";
            }, {
                readonly go: "IPsBlocked";
                readonly type: "*StringList";
                readonly json: "ipsBlocked";
            }, {
                readonly go: "FinalRules";
                readonly type: "[]*FreedomFinalRuleConfig";
                readonly json: "finalRules";
            }];
            readonly FreedomFinalRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "BlockDelay";
                readonly type: "*Int32Range";
                readonly json: "blockDelay";
            }];
            readonly GeodataAssetConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "File";
                readonly type: "string";
                readonly json: "file";
            }];
            readonly GeodataConfig: readonly [{
                readonly go: "Cron";
                readonly type: "*string";
                readonly json: "cron";
            }, {
                readonly go: "Outbound";
                readonly type: "string";
                readonly json: "outbound";
            }, {
                readonly go: "Assets";
                readonly type: "[]*GeodataAssetConfig";
                readonly json: "assets";
            }];
            readonly GRPCConfig: readonly [{
                readonly go: "Authority";
                readonly type: "string";
                readonly json: "authority";
            }, {
                readonly go: "ServiceName";
                readonly type: "string";
                readonly json: "serviceName";
            }, {
                readonly go: "MultiMode";
                readonly type: "bool";
                readonly json: "multiMode";
            }, {
                readonly go: "IdleTimeout";
                readonly type: "int32";
                readonly json: "idle_timeout";
            }, {
                readonly go: "HealthCheckTimeout";
                readonly type: "int32";
                readonly json: "health_check_timeout";
            }, {
                readonly go: "PermitWithoutStream";
                readonly type: "bool";
                readonly json: "permit_without_stream";
            }, {
                readonly go: "InitialWindowsSize";
                readonly type: "int32";
                readonly json: "initial_windows_size";
            }, {
                readonly go: "UserAgent";
                readonly type: "string";
                readonly json: "user_agent";
            }];
            readonly HappyEyeballsConfig: readonly [{
                readonly go: "PrioritizeIPv6";
                readonly type: "bool";
                readonly json: "prioritizeIPv6";
            }, {
                readonly go: "TryDelayMs";
                readonly type: "uint64";
                readonly json: "tryDelayMs";
            }, {
                readonly go: "Interleave";
                readonly type: "uint32";
                readonly json: "interleave";
            }, {
                readonly go: "MaxConcurrentTry";
                readonly type: "uint32";
                readonly json: "maxConcurrentTry";
            }];
            readonly HeaderCustomTCP: readonly [{
                readonly go: "Clients";
                readonly type: "[][]TCPItem";
                readonly json: "clients";
            }, {
                readonly go: "Servers";
                readonly type: "[][]TCPItem";
                readonly json: "servers";
            }, {
                readonly go: "Errors";
                readonly type: "[][]TCPItem";
                readonly json: "errors";
            }];
            readonly HeaderCustomUDP: readonly [{
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Client";
                readonly type: "[]UDPItem";
                readonly json: "client";
            }, {
                readonly go: "Server";
                readonly type: "[]UDPItem";
                readonly json: "server";
            }];
            readonly healthCheckSettings: readonly [{
                readonly go: "Destination";
                readonly type: "string";
                readonly json: "destination";
            }, {
                readonly go: "Connectivity";
                readonly type: "string";
                readonly json: "connectivity";
            }, {
                readonly go: "Interval";
                readonly type: "duration.Duration";
                readonly json: "interval";
            }, {
                readonly go: "SamplingCount";
                readonly type: "int";
                readonly json: "sampling";
            }, {
                readonly go: "Timeout";
                readonly type: "duration.Duration";
                readonly json: "timeout";
            }, {
                readonly go: "HttpMethod";
                readonly type: "string";
                readonly json: "httpMethod";
            }];
            readonly HTTPAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly HTTPClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*HTTPRemoteConfig";
                readonly json: "servers";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly HTTPRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly HTTPResponse: readonly [];
            readonly HTTPServerConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]*HTTPAccount";
                readonly json: "users";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*HTTPAccount";
                readonly json: "accounts";
            }, {
                readonly go: "Transparent";
                readonly type: "bool";
                readonly json: "allowTransparent";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly HttpUpgradeConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly HysteriaClientConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly HysteriaConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Congestion";
                readonly type: "*string";
                readonly json: "congestion";
            }, {
                readonly go: "Up";
                readonly type: "*Bandwidth";
                readonly json: "up";
            }, {
                readonly go: "Down";
                readonly type: "*Bandwidth";
                readonly json: "down";
            }, {
                readonly go: "UdpHop";
                readonly type: "*UdpHop";
                readonly json: "udphop";
            }, {
                readonly go: "UdpIdleTimeout";
                readonly type: "int64";
                readonly json: "udpIdleTimeout";
            }, {
                readonly go: "Masquerade";
                readonly type: "Masquerade";
                readonly json: "masquerade";
            }];
            readonly HysteriaServerConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Users";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "clients";
            }];
            readonly HysteriaUserConfig: readonly [{
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly InboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "PortList";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "ListenOn";
                readonly type: "*Address";
                readonly json: "listen";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "SniffingConfig";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly KCPConfig: readonly [{
                readonly go: "Mtu";
                readonly type: "*uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Tti";
                readonly type: "*uint32";
                readonly json: "tti";
            }, {
                readonly go: "UpCap";
                readonly type: "*uint32";
                readonly json: "uplinkCapacity";
            }, {
                readonly go: "DownCap";
                readonly type: "*uint32";
                readonly json: "downlinkCapacity";
            }, {
                readonly go: "CwndMultiplier";
                readonly type: "*uint32";
                readonly json: "cwndMultiplier";
            }, {
                readonly go: "MaxSendingWindow";
                readonly type: "*uint32";
                readonly json: "maxSendingWindow";
            }, {
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "Seed";
                readonly type: "*string";
                readonly json: "seed";
            }];
            readonly LogConfig: readonly [{
                readonly go: "AccessLog";
                readonly type: "string";
                readonly json: "access";
            }, {
                readonly go: "ErrorLog";
                readonly type: "string";
                readonly json: "error";
            }, {
                readonly go: "LogLevel";
                readonly type: "string";
                readonly json: "loglevel";
            }, {
                readonly go: "DNSLog";
                readonly type: "bool";
                readonly json: "dnsLog";
            }, {
                readonly go: "MaskAddress";
                readonly type: "string";
                readonly json: "maskAddress";
            }];
            readonly LoopbackConfig: readonly [{
                readonly go: "InboundTag";
                readonly type: "string";
                readonly json: "inboundTag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly Mask: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly Masquerade: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dir";
                readonly type: "string";
                readonly json: "dir";
            }, {
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "RewriteHost";
                readonly type: "bool";
                readonly json: "rewriteHost";
            }, {
                readonly go: "Insecure";
                readonly type: "bool";
                readonly json: "insecure";
            }, {
                readonly go: "Content";
                readonly type: "string";
                readonly json: "content";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "StatusCode";
                readonly type: "int32";
                readonly json: "statusCode";
            }];
            readonly MetricsConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }];
            readonly MkcpLegacy: readonly [{
                readonly go: "Header";
                readonly type: "string";
                readonly json: "header";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }];
            readonly MuxConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "Concurrency";
                readonly type: "int16";
                readonly json: "concurrency";
            }, {
                readonly go: "XudpConcurrency";
                readonly type: "int16";
                readonly json: "xudpConcurrency";
            }, {
                readonly go: "XudpProxyUDP443";
                readonly type: "string";
                readonly json: "xudpProxyUDP443";
            }];
            readonly NameServerConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "SkipFallback";
                readonly type: "bool";
                readonly json: "skipFallback";
            }, {
                readonly go: "Domains";
                readonly type: "StringList";
                readonly json: "domains";
            }, {
                readonly go: "ExpectedIPs";
                readonly type: "StringList";
                readonly json: "expectedIPs";
            }, {
                readonly go: "ExpectIPs";
                readonly type: "StringList";
                readonly json: "expectIPs";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TimeoutMs";
                readonly type: "uint64";
                readonly json: "timeoutMs";
            }, {
                readonly go: "DisableCache";
                readonly type: "*bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "*bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "*uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "FinalQuery";
                readonly type: "bool";
                readonly json: "finalQuery";
            }, {
                readonly go: "UnexpectedIPs";
                readonly type: "StringList";
                readonly json: "unexpectedIPs";
            }];
            readonly Noise: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "string";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "*Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "ApplyTo";
                readonly type: "string";
                readonly json: "applyTo";
            }];
            readonly NoiseItem: readonly [{
                readonly go: "Rand";
                readonly type: "Int32Range";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }];
            readonly NoiseMask: readonly [{
                readonly go: "Reset";
                readonly type: "Int32Range";
                readonly json: "reset";
            }, {
                readonly go: "Noise";
                readonly type: "[]NoiseItem";
                readonly json: "noise";
            }];
            readonly NoneResponse: readonly [];
            readonly NoOpConnectionAuthenticator: readonly [];
            readonly ObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "ProbeURL";
                readonly type: "string";
                readonly json: "probeURL";
            }, {
                readonly go: "ProbeInterval";
                readonly type: "duration.Duration";
                readonly json: "probeInterval";
            }, {
                readonly go: "EnableConcurrency";
                readonly type: "bool";
                readonly json: "enableConcurrency";
            }];
            readonly OutboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "SendThrough";
                readonly type: "*string";
                readonly json: "sendThrough";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "ProxySettings";
                readonly type: "*ProxyConfig";
                readonly json: "proxySettings";
            }, {
                readonly go: "MuxSettings";
                readonly type: "*MuxConfig";
                readonly json: "mux";
            }, {
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }];
            readonly Policy: readonly [{
                readonly go: "Handshake";
                readonly type: "*uint32";
                readonly json: "handshake";
            }, {
                readonly go: "ConnectionIdle";
                readonly type: "*uint32";
                readonly json: "connIdle";
            }, {
                readonly go: "UplinkOnly";
                readonly type: "*uint32";
                readonly json: "uplinkOnly";
            }, {
                readonly go: "DownlinkOnly";
                readonly type: "*uint32";
                readonly json: "downlinkOnly";
            }, {
                readonly go: "StatsUserUplink";
                readonly type: "bool";
                readonly json: "statsUserUplink";
            }, {
                readonly go: "StatsUserDownlink";
                readonly type: "bool";
                readonly json: "statsUserDownlink";
            }, {
                readonly go: "StatsUserOnline";
                readonly type: "bool";
                readonly json: "statsUserOnline";
            }, {
                readonly go: "BufferSize";
                readonly type: "*int32";
                readonly json: "bufferSize";
            }];
            readonly PolicyConfig: readonly [{
                readonly go: "Levels";
                readonly type: "map[uint32]*Policy";
                readonly json: "levels";
            }, {
                readonly go: "System";
                readonly type: "*SystemPolicy";
                readonly json: "system";
            }];
            readonly PortalConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly ProxyConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TransportLayerProxy";
                readonly type: "bool";
                readonly json: "transportLayer";
            }];
            readonly QuicParamsConfig: readonly [{
                readonly go: "Congestion";
                readonly type: "string";
                readonly json: "congestion";
            }, {
                readonly go: "Debug";
                readonly type: "bool";
                readonly json: "debug";
            }, {
                readonly go: "BbrProfile";
                readonly type: "string";
                readonly json: "bbrProfile";
            }, {
                readonly go: "BrutalUp";
                readonly type: "Bandwidth";
                readonly json: "brutalUp";
            }, {
                readonly go: "BrutalDown";
                readonly type: "Bandwidth";
                readonly json: "brutalDown";
            }, {
                readonly go: "UdpHop";
                readonly type: "UdpHop";
                readonly json: "udpHop";
            }, {
                readonly go: "InitStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "initStreamReceiveWindow";
            }, {
                readonly go: "MaxStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxStreamReceiveWindow";
            }, {
                readonly go: "InitConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "initConnectionReceiveWindow";
            }, {
                readonly go: "MaxConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxConnectionReceiveWindow";
            }, {
                readonly go: "MaxIdleTimeout";
                readonly type: "int64";
                readonly json: "maxIdleTimeout";
            }, {
                readonly go: "KeepAlivePeriod";
                readonly type: "int64";
                readonly json: "keepAlivePeriod";
            }, {
                readonly go: "DisablePathMTUDiscovery";
                readonly type: "bool";
                readonly json: "disablePathMTUDiscovery";
            }, {
                readonly go: "MaxIncomingStreams";
                readonly type: "int64";
                readonly json: "maxIncomingStreams";
            }];
            readonly RawFieldRule: readonly [{
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "*StringList";
                readonly json: "domains";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "SourceIP";
                readonly type: "*StringList";
                readonly json: "sourceIP";
            }, {
                readonly go: "Source";
                readonly type: "*StringList";
                readonly json: "source";
            }, {
                readonly go: "SourcePort";
                readonly type: "*PortList";
                readonly json: "sourcePort";
            }, {
                readonly go: "User";
                readonly type: "*StringList";
                readonly json: "user";
            }, {
                readonly go: "VlessRoute";
                readonly type: "*PortList";
                readonly json: "vlessRoute";
            }, {
                readonly go: "InboundTag";
                readonly type: "*StringList";
                readonly json: "inboundTag";
            }, {
                readonly go: "Protocols";
                readonly type: "*StringList";
                readonly json: "protocol";
            }, {
                readonly go: "Attributes";
                readonly type: "map[string]string";
                readonly json: "attrs";
            }, {
                readonly go: "LocalIP";
                readonly type: "*StringList";
                readonly json: "localIP";
            }, {
                readonly go: "LocalPort";
                readonly type: "*PortList";
                readonly json: "localPort";
            }, {
                readonly go: "Process";
                readonly type: "*StringList";
                readonly json: "process";
            }, {
                readonly go: "Webhook";
                readonly type: "*WebhookRuleConfig";
                readonly json: "webhook";
            }];
            readonly REALITYConfig: readonly [{
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "Show";
                readonly type: "bool";
                readonly json: "show";
            }, {
                readonly go: "Target";
                readonly type: "json.RawMessage";
                readonly json: "target";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }, {
                readonly go: "ServerNames";
                readonly type: "[]string";
                readonly json: "serverNames";
            }, {
                readonly go: "PrivateKey";
                readonly type: "string";
                readonly json: "privateKey";
            }, {
                readonly go: "MinClientVer";
                readonly type: "string";
                readonly json: "minClientVer";
            }, {
                readonly go: "MaxClientVer";
                readonly type: "string";
                readonly json: "maxClientVer";
            }, {
                readonly go: "MaxTimeDiff";
                readonly type: "uint64";
                readonly json: "maxTimeDiff";
            }, {
                readonly go: "ShortIds";
                readonly type: "[]string";
                readonly json: "shortIds";
            }, {
                readonly go: "Mldsa65Seed";
                readonly type: "string";
                readonly json: "mldsa65Seed";
            }, {
                readonly go: "LimitFallbackUpload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackUpload";
            }, {
                readonly go: "LimitFallbackDownload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackDownload";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "ShortId";
                readonly type: "string";
                readonly json: "shortId";
            }, {
                readonly go: "Mldsa65Verify";
                readonly type: "string";
                readonly json: "mldsa65Verify";
            }, {
                readonly go: "SpiderX";
                readonly type: "string";
                readonly json: "spiderX";
            }];
            readonly Realm: readonly [{
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "StunServers";
                readonly type: "[]string";
                readonly json: "stunServers";
            }, {
                readonly go: "TlsConfig";
                readonly type: "*TLSConfig";
                readonly json: "tlsConfig";
            }];
            readonly ReverseConfig: readonly [{
                readonly go: "Bridges";
                readonly type: "[]BridgeConfig";
                readonly json: "bridges";
            }, {
                readonly go: "Portals";
                readonly type: "[]PortalConfig";
                readonly json: "portals";
            }];
            readonly RouterConfig: readonly [{
                readonly go: "RuleList";
                readonly type: "[]json.RawMessage";
                readonly json: "rules";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "*string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Balancers";
                readonly type: "[]*BalancingRule";
                readonly json: "balancers";
            }];
            readonly RouterRule: readonly [{
                readonly go: "RuleTag";
                readonly type: "string";
                readonly json: "ruleTag";
            }, {
                readonly go: "OutboundTag";
                readonly type: "string";
                readonly json: "outboundTag";
            }, {
                readonly go: "BalancerTag";
                readonly type: "string";
                readonly json: "balancerTag";
            }];
            readonly Salamander: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PacketSize";
                readonly type: "Int32Range";
                readonly json: "packetSize";
            }];
            readonly ShadowsocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Servers";
                readonly type: "[]*ShadowsocksServerTarget";
                readonly json: "servers";
            }];
            readonly ShadowsocksServerConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Users";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "NetworkList";
                readonly type: "*NetworkList";
                readonly json: "network";
            }];
            readonly ShadowsocksServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly ShadowsocksUserConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly SniffingConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "DestOverride";
                readonly type: "StringList";
                readonly json: "destOverride";
            }, {
                readonly go: "DomainsExcluded";
                readonly type: "StringList";
                readonly json: "domainsExcluded";
            }, {
                readonly go: "IPsExcluded";
                readonly type: "StringList";
                readonly json: "ipsExcluded";
            }, {
                readonly go: "MetadataOnly";
                readonly type: "bool";
                readonly json: "metadataOnly";
            }, {
                readonly go: "RouteOnly";
                readonly type: "bool";
                readonly json: "routeOnly";
            }];
            readonly SocketConfig: readonly [{
                readonly go: "Mark";
                readonly type: "int32";
                readonly json: "mark";
            }, {
                readonly go: "TFO";
                readonly type: "interface{}";
                readonly json: "tcpFastOpen";
            }, {
                readonly go: "TProxy";
                readonly type: "string";
                readonly json: "tproxy";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "DialerProxy";
                readonly type: "string";
                readonly json: "dialerProxy";
            }, {
                readonly go: "TCPKeepAliveInterval";
                readonly type: "int32";
                readonly json: "tcpKeepAliveInterval";
            }, {
                readonly go: "TCPKeepAliveIdle";
                readonly type: "int32";
                readonly json: "tcpKeepAliveIdle";
            }, {
                readonly go: "TCPCongestion";
                readonly type: "string";
                readonly json: "tcpCongestion";
            }, {
                readonly go: "TCPWindowClamp";
                readonly type: "int32";
                readonly json: "tcpWindowClamp";
            }, {
                readonly go: "TCPMaxSeg";
                readonly type: "int32";
                readonly json: "tcpMaxSeg";
            }, {
                readonly go: "Penetrate";
                readonly type: "bool";
                readonly json: "penetrate";
            }, {
                readonly go: "TCPUserTimeout";
                readonly type: "int32";
                readonly json: "tcpUserTimeout";
            }, {
                readonly go: "V6only";
                readonly type: "bool";
                readonly json: "v6only";
            }, {
                readonly go: "Interface";
                readonly type: "string";
                readonly json: "interface";
            }, {
                readonly go: "TcpMptcp";
                readonly type: "bool";
                readonly json: "tcpMptcp";
            }, {
                readonly go: "CustomSockopt";
                readonly type: "[]*CustomSockoptConfig";
                readonly json: "customSockopt";
            }, {
                readonly go: "AddressPortStrategy";
                readonly type: "string";
                readonly json: "addressPortStrategy";
            }, {
                readonly go: "HappyEyeballsSettings";
                readonly type: "*HappyEyeballsConfig";
                readonly json: "happyEyeballs";
            }, {
                readonly go: "TrustedXForwardedFor";
                readonly type: "[]string";
                readonly json: "trustedXForwardedFor";
            }];
            readonly SocksAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly SocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*SocksRemoteConfig";
                readonly json: "servers";
            }];
            readonly SocksRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly SocksServerConfig: readonly [{
                readonly go: "AuthMethod";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Users";
                readonly type: "[]*SocksAccount";
                readonly json: "users";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*SocksAccount";
                readonly json: "accounts";
            }, {
                readonly go: "UDP";
                readonly type: "bool";
                readonly json: "udp";
            }, {
                readonly go: "Host";
                readonly type: "*Address";
                readonly json: "ip";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly SplitHTTPConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "XPaddingBytes";
                readonly type: "Int32Range";
                readonly json: "xPaddingBytes";
            }, {
                readonly go: "XPaddingObfsMode";
                readonly type: "bool";
                readonly json: "xPaddingObfsMode";
            }, {
                readonly go: "XPaddingKey";
                readonly type: "string";
                readonly json: "xPaddingKey";
            }, {
                readonly go: "XPaddingHeader";
                readonly type: "string";
                readonly json: "xPaddingHeader";
            }, {
                readonly go: "XPaddingPlacement";
                readonly type: "string";
                readonly json: "xPaddingPlacement";
            }, {
                readonly go: "XPaddingMethod";
                readonly type: "string";
                readonly json: "xPaddingMethod";
            }, {
                readonly go: "UplinkHTTPMethod";
                readonly type: "string";
                readonly json: "uplinkHTTPMethod";
            }, {
                readonly go: "SessionIDPlacement";
                readonly type: "string";
                readonly json: "sessionIDPlacement";
            }, {
                readonly go: "SessionIDKey";
                readonly type: "string";
                readonly json: "sessionIDKey";
            }, {
                readonly go: "SessionIDTable";
                readonly type: "string";
                readonly json: "sessionIDTable";
            }, {
                readonly go: "SessionIDLength";
                readonly type: "Int32Range";
                readonly json: "sessionIDLength";
            }, {
                readonly go: "SeqPlacement";
                readonly type: "string";
                readonly json: "seqPlacement";
            }, {
                readonly go: "SeqKey";
                readonly type: "string";
                readonly json: "seqKey";
            }, {
                readonly go: "UplinkDataPlacement";
                readonly type: "string";
                readonly json: "uplinkDataPlacement";
            }, {
                readonly go: "UplinkDataKey";
                readonly type: "string";
                readonly json: "uplinkDataKey";
            }, {
                readonly go: "UplinkChunkSize";
                readonly type: "Int32Range";
                readonly json: "uplinkChunkSize";
            }, {
                readonly go: "NoGRPCHeader";
                readonly type: "bool";
                readonly json: "noGRPCHeader";
            }, {
                readonly go: "NoSSEHeader";
                readonly type: "bool";
                readonly json: "noSSEHeader";
            }, {
                readonly go: "ScMaxEachPostBytes";
                readonly type: "Int32Range";
                readonly json: "scMaxEachPostBytes";
            }, {
                readonly go: "ScMinPostsIntervalMs";
                readonly type: "Int32Range";
                readonly json: "scMinPostsIntervalMs";
            }, {
                readonly go: "ScMaxBufferedPosts";
                readonly type: "int64";
                readonly json: "scMaxBufferedPosts";
            }, {
                readonly go: "ScStreamUpServerSecs";
                readonly type: "Int32Range";
                readonly json: "scStreamUpServerSecs";
            }, {
                readonly go: "ServerMaxHeaderBytes";
                readonly type: "int32";
                readonly json: "serverMaxHeaderBytes";
            }, {
                readonly go: "Xmux";
                readonly type: "XmuxConfig";
                readonly json: "xmux";
            }, {
                readonly go: "DownloadSettings";
                readonly type: "*StreamConfig";
                readonly json: "downloadSettings";
            }, {
                readonly go: "Extra";
                readonly type: "json.RawMessage";
                readonly json: "extra";
            }];
            readonly StatsConfig: readonly [];
            readonly StrategyConfig: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly strategyEmptyConfig: readonly [];
            readonly strategyLeastLoadConfig: readonly [{
                readonly go: "Costs";
                readonly type: "[]*router.StrategyWeight";
                readonly json: "costs";
            }, {
                readonly go: "Baselines";
                readonly type: "[]duration.Duration";
                readonly json: "baselines";
            }, {
                readonly go: "Expected";
                readonly type: "int32";
                readonly json: "expected";
            }, {
                readonly go: "MaxRTT";
                readonly type: "duration.Duration";
                readonly json: "maxRTT";
            }, {
                readonly go: "Tolerance";
                readonly type: "float64";
                readonly json: "tolerance";
            }];
            readonly StreamConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*TransportProtocol";
                readonly json: "network";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "FinalMask";
                readonly type: "*FinalMask";
                readonly json: "finalmask";
            }, {
                readonly go: "TLSSettings";
                readonly type: "*TLSConfig";
                readonly json: "tlsSettings";
            }, {
                readonly go: "REALITYSettings";
                readonly type: "*REALITYConfig";
                readonly json: "realitySettings";
            }, {
                readonly go: "RAWSettings";
                readonly type: "*TCPConfig";
                readonly json: "rawSettings";
            }, {
                readonly go: "TCPSettings";
                readonly type: "*TCPConfig";
                readonly json: "tcpSettings";
            }, {
                readonly go: "XHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "xhttpSettings";
            }, {
                readonly go: "SplitHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "splithttpSettings";
            }, {
                readonly go: "KCPSettings";
                readonly type: "*KCPConfig";
                readonly json: "kcpSettings";
            }, {
                readonly go: "GRPCSettings";
                readonly type: "*GRPCConfig";
                readonly json: "grpcSettings";
            }, {
                readonly go: "WSSettings";
                readonly type: "*WebSocketConfig";
                readonly json: "wsSettings";
            }, {
                readonly go: "HTTPUPGRADESettings";
                readonly type: "*HttpUpgradeConfig";
                readonly json: "httpupgradeSettings";
            }, {
                readonly go: "HysteriaSettings";
                readonly type: "*HysteriaConfig";
                readonly json: "hysteriaSettings";
            }, {
                readonly go: "SocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "sockopt";
            }];
            readonly Sudoku: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "ASCII";
                readonly type: "string";
                readonly json: "ascii";
            }, {
                readonly go: "CustomTable";
                readonly type: "string";
                readonly json: "customTable";
            }, {
                readonly go: "LegacyCustomTable";
                readonly type: "string";
                readonly json: "custom_table";
            }, {
                readonly go: "CustomTables";
                readonly type: "[]string";
                readonly json: "customTables";
            }, {
                readonly go: "LegacyCustomSets";
                readonly type: "[]string";
                readonly json: "custom_tables";
            }, {
                readonly go: "PaddingMin";
                readonly type: "uint32";
                readonly json: "paddingMin";
            }, {
                readonly go: "LegacyPaddingMin";
                readonly type: "uint32";
                readonly json: "padding_min";
            }, {
                readonly go: "PaddingMax";
                readonly type: "uint32";
                readonly json: "paddingMax";
            }, {
                readonly go: "LegacyPaddingMax";
                readonly type: "uint32";
                readonly json: "padding_max";
            }];
            readonly SystemPolicy: readonly [{
                readonly go: "StatsInboundUplink";
                readonly type: "bool";
                readonly json: "statsInboundUplink";
            }, {
                readonly go: "StatsInboundDownlink";
                readonly type: "bool";
                readonly json: "statsInboundDownlink";
            }, {
                readonly go: "StatsOutboundUplink";
                readonly type: "bool";
                readonly json: "statsOutboundUplink";
            }, {
                readonly go: "StatsOutboundDownlink";
                readonly type: "bool";
                readonly json: "statsOutboundDownlink";
            }];
            readonly TCPConfig: readonly [{
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly TCPItem: readonly [{
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly TLSCertConfig: readonly [{
                readonly go: "CertFile";
                readonly type: "string";
                readonly json: "certificateFile";
            }, {
                readonly go: "CertStr";
                readonly type: "[]string";
                readonly json: "certificate";
            }, {
                readonly go: "KeyFile";
                readonly type: "string";
                readonly json: "keyFile";
            }, {
                readonly go: "KeyStr";
                readonly type: "[]string";
                readonly json: "key";
            }, {
                readonly go: "Usage";
                readonly type: "string";
                readonly json: "usage";
            }, {
                readonly go: "OcspStapling";
                readonly type: "uint64";
                readonly json: "ocspStapling";
            }, {
                readonly go: "OneTimeLoading";
                readonly type: "bool";
                readonly json: "oneTimeLoading";
            }, {
                readonly go: "BuildChain";
                readonly type: "bool";
                readonly json: "buildChain";
            }];
            readonly TLSConfig: readonly [{
                readonly go: "AllowInsecure";
                readonly type: "bool";
                readonly json: "allowInsecure";
            }, {
                readonly go: "Certs";
                readonly type: "[]*TLSCertConfig";
                readonly json: "certificates";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "ALPN";
                readonly type: "*StringList";
                readonly json: "alpn";
            }, {
                readonly go: "EnableSessionResumption";
                readonly type: "bool";
                readonly json: "enableSessionResumption";
            }, {
                readonly go: "DisableSystemRoot";
                readonly type: "bool";
                readonly json: "disableSystemRoot";
            }, {
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "minVersion";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "maxVersion";
            }, {
                readonly go: "CipherSuites";
                readonly type: "string";
                readonly json: "cipherSuites";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "RejectUnknownSNI";
                readonly type: "bool";
                readonly json: "rejectUnknownSni";
            }, {
                readonly go: "CurvePreferences";
                readonly type: "*StringList";
                readonly json: "curvePreferences";
            }, {
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "PinnedPeerCertSha256";
                readonly type: "string";
                readonly json: "pinnedPeerCertSha256";
            }, {
                readonly go: "VerifyPeerCertByName";
                readonly type: "string";
                readonly json: "verifyPeerCertByName";
            }, {
                readonly go: "ECHServerKeys";
                readonly type: "string";
                readonly json: "echServerKeys";
            }, {
                readonly go: "ECHConfigList";
                readonly type: "string";
                readonly json: "echConfigList";
            }, {
                readonly go: "ECHSocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "echSockopt";
            }];
            readonly TrojanClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Servers";
                readonly type: "[]*TrojanServerTarget";
                readonly json: "servers";
            }];
            readonly TrojanInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly TrojanServerConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*TrojanInboundFallback";
                readonly json: "fallbacks";
            }];
            readonly TrojanServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TrojanUserConfig: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TunConfig: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "MTU";
                readonly type: "uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Gateway";
                readonly type: "[]string";
                readonly json: "gateway";
            }, {
                readonly go: "DNS";
                readonly type: "[]string";
                readonly json: "dns";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "AutoSystemRoutingTable";
                readonly type: "[]string";
                readonly json: "autoSystemRoutingTable";
            }, {
                readonly go: "AutoOutboundsInterface";
                readonly type: "*string";
                readonly json: "autoOutboundsInterface";
            }];
            readonly UdpHop: readonly [{
                readonly go: "PortList";
                readonly type: "PortList";
                readonly json: "ports";
            }, {
                readonly go: "Interval";
                readonly type: "Int32Range";
                readonly json: "interval";
            }];
            readonly UDPItem: readonly [{
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly User: readonly [{
                readonly go: "EmailString";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "LevelByte";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VersionConfig: readonly [{
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "min";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "max";
            }];
            readonly VLessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Decryption";
                readonly type: "string";
                readonly json: "decryption";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*VLessInboundFallback";
                readonly json: "fallbacks";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }];
            readonly VLessInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly VLessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Id";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Seed";
                readonly type: "string";
                readonly json: "seed";
            }, {
                readonly go: "Encryption";
                readonly type: "string";
                readonly json: "encryption";
            }, {
                readonly go: "Reverse";
                readonly type: "*VLessReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "Testpre";
                readonly type: "uint32";
                readonly json: "testpre";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }, {
                readonly go: "Vnext";
                readonly type: "[]*VLessOutboundVnext";
                readonly json: "vnext";
            }];
            readonly VLessOutboundVnext: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly VLessReverseConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly VMessAccount: readonly [{
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }];
            readonly VMessDefaultConfig: readonly [{
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VMessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Defaults";
                readonly type: "*VMessDefaultConfig";
                readonly json: "default";
            }];
            readonly VMessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }, {
                readonly go: "Receivers";
                readonly type: "[]*VMessOutboundTarget";
                readonly json: "vnext";
            }];
            readonly VMessOutboundTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly WebhookRuleConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "Deduplication";
                readonly type: "uint32";
                readonly json: "deduplication";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly WebSocketConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "HeartbeatPeriod";
                readonly type: "uint32";
                readonly json: "heartbeatPeriod";
            }];
            readonly WireGuardConfig: readonly [{
                readonly go: "NoKernelTun";
                readonly type: "bool";
                readonly json: "noKernelTun";
            }, {
                readonly go: "SecretKey";
                readonly type: "string";
                readonly json: "secretKey";
            }, {
                readonly go: "Address";
                readonly type: "[]string";
                readonly json: "address";
            }, {
                readonly go: "Peers";
                readonly type: "[]*WireGuardPeerConfig";
                readonly json: "peers";
            }, {
                readonly go: "MTU";
                readonly type: "int32";
                readonly json: "mtu";
            }, {
                readonly go: "Reserved";
                readonly type: "[]byte";
                readonly json: "reserved";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }];
            readonly WireGuardPeerConfig: readonly [{
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "PreSharedKey";
                readonly type: "string";
                readonly json: "preSharedKey";
            }, {
                readonly go: "Endpoint";
                readonly type: "string";
                readonly json: "endpoint";
            }, {
                readonly go: "KeepAlive";
                readonly type: "uint32";
                readonly json: "keepAlive";
            }, {
                readonly go: "AllowedIPs";
                readonly type: "[]string";
                readonly json: "allowedIPs";
            }];
            readonly Xdns: readonly [{
                readonly go: "Domain";
                readonly type: "json.RawMessage";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "[]string";
                readonly json: "domains";
            }, {
                readonly go: "Resolvers";
                readonly type: "[]string";
                readonly json: "resolvers";
            }];
            readonly Xicmp: readonly [{
                readonly go: "DGRAM";
                readonly type: "bool";
                readonly json: "dgram";
            }, {
                readonly go: "IPs";
                readonly type: "[]string";
                readonly json: "ips";
            }];
            readonly XmuxConfig: readonly [{
                readonly go: "MaxConcurrency";
                readonly type: "Int32Range";
                readonly json: "maxConcurrency";
            }, {
                readonly go: "MaxConnections";
                readonly type: "Int32Range";
                readonly json: "maxConnections";
            }, {
                readonly go: "CMaxReuseTimes";
                readonly type: "Int32Range";
                readonly json: "cMaxReuseTimes";
            }, {
                readonly go: "HMaxRequestTimes";
                readonly type: "Int32Range";
                readonly json: "hMaxRequestTimes";
            }, {
                readonly go: "HMaxReusableSecs";
                readonly type: "Int32Range";
                readonly json: "hMaxReusableSecs";
            }, {
                readonly go: "HKeepAlivePeriod";
                readonly type: "int64";
                readonly json: "hKeepAlivePeriod";
            }];
        };
    }, {
        readonly tag: "v26.6.27";
        readonly version: "26.6.27";
        readonly commit: "45cf2898ab12e97a55dd8f1f3d78d903340bdc9e";
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
            readonly source: "infra/conf/freedom.go";
            readonly keys: readonly ["freedom noise"];
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["allowInsecure"];
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["finalmask xdns domain"];
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["http-transport"];
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xtls"];
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["mkcp header/seed"];
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["quic"];
        }, {
            readonly feature: "Flow for Trojan";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan flow"];
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly [];
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly ["global transport"];
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
            readonly source: "infra/conf/dns_proxy.go";
            readonly keys: readonly ["dns legacy nonIPQuery blockTypes"];
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/shadowsocks.go";
            readonly keys: readonly ["shadowsocks"];
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xhttp headers host"];
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["grpc"];
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["httpupgrade"];
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["websocket", "ws"];
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan"];
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/vmess.go";
            readonly keys: readonly ["vmess"];
        }];
        readonly topLevelKeys: readonly ["api", "burstObservatory", "dns", "fakeDns", "geodata", "inbounds", "log", "metrics", "observatory", "outbounds", "policy", "reverse", "routing", "stats", "transport", "version"];
        readonly inboundProtocols: readonly [{
            readonly protocol: "dokodemo-door";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPServerConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaServerConfig";
        }, {
            readonly protocol: "mixed";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksServerConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanServerConfig";
        }, {
            readonly protocol: "tun";
            readonly config: "TunConfig";
        }, {
            readonly protocol: "tunnel";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessInboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessInboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly outboundProtocols: readonly [{
            readonly protocol: "blackhole";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "block";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "direct";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "dns";
            readonly config: "DNSOutboundConfig";
        }, {
            readonly protocol: "freedom";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPClientConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaClientConfig";
        }, {
            readonly protocol: "loopback";
            readonly config: "LoopbackConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksClientConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksClientConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanClientConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessOutboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessOutboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly streamFields: readonly [{
            readonly go: "Address";
            readonly type: "*Address";
            readonly json: "address";
        }, {
            readonly go: "Port";
            readonly type: "uint16";
            readonly json: "port";
        }, {
            readonly go: "Network";
            readonly type: "*TransportProtocol";
            readonly json: "network";
        }, {
            readonly go: "Security";
            readonly type: "string";
            readonly json: "security";
        }, {
            readonly go: "FinalMask";
            readonly type: "*FinalMask";
            readonly json: "finalmask";
        }, {
            readonly go: "TLSSettings";
            readonly type: "*TLSConfig";
            readonly json: "tlsSettings";
        }, {
            readonly go: "REALITYSettings";
            readonly type: "*REALITYConfig";
            readonly json: "realitySettings";
        }, {
            readonly go: "RAWSettings";
            readonly type: "*TCPConfig";
            readonly json: "rawSettings";
        }, {
            readonly go: "TCPSettings";
            readonly type: "*TCPConfig";
            readonly json: "tcpSettings";
        }, {
            readonly go: "XHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "xhttpSettings";
        }, {
            readonly go: "SplitHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "splithttpSettings";
        }, {
            readonly go: "KCPSettings";
            readonly type: "*KCPConfig";
            readonly json: "kcpSettings";
        }, {
            readonly go: "GRPCSettings";
            readonly type: "*GRPCConfig";
            readonly json: "grpcSettings";
        }, {
            readonly go: "WSSettings";
            readonly type: "*WebSocketConfig";
            readonly json: "wsSettings";
        }, {
            readonly go: "HTTPUPGRADESettings";
            readonly type: "*HttpUpgradeConfig";
            readonly json: "httpupgradeSettings";
        }, {
            readonly go: "HysteriaSettings";
            readonly type: "*HysteriaConfig";
            readonly json: "hysteriaSettings";
        }, {
            readonly go: "SocketSettings";
            readonly type: "*SocketConfig";
            readonly json: "sockopt";
        }];
        readonly transportAliases: {
            readonly grpc: "grpc";
            readonly httpupgrade: "httpupgrade";
            readonly hysteria: "hysteria";
            readonly kcp: "mkcp";
            readonly mkcp: "mkcp";
            readonly raw: "tcp";
            readonly splithttp: "splithttp";
            readonly tcp: "tcp";
            readonly websocket: "websocket";
            readonly ws: "websocket";
            readonly xhttp: "splithttp";
        };
        readonly securityTypes: readonly ["none", "reality", "tls", "xtls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_133", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_148", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_26_3", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly jsonLoaders: {
            readonly "infra/conf/transport_internet.go:tcpHeaderLoader": readonly [{
                readonly protocol: "http";
                readonly config: "Authenticator";
            }, {
                readonly protocol: "none";
                readonly config: "NoOpConnectionAuthenticator";
            }];
            readonly "infra/conf/transport_internet.go:tcpmaskLoader": readonly [{
                readonly protocol: "fragment";
                readonly config: "FragmentMask";
            }, {
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomTCP";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }];
            readonly "infra/conf/transport_internet.go:udpmaskLoader": readonly [{
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomUDP";
            }, {
                readonly protocol: "mkcp-legacy";
                readonly config: "MkcpLegacy";
            }, {
                readonly protocol: "noise";
                readonly config: "NoiseMask";
            }, {
                readonly protocol: "realm";
                readonly config: "Realm";
            }, {
                readonly protocol: "salamander";
                readonly config: "Salamander";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }, {
                readonly protocol: "xdns";
                readonly config: "Xdns";
            }, {
                readonly protocol: "xicmp";
                readonly config: "Xicmp";
            }];
            readonly "infra/conf/xray.go:inboundConfigLoader": readonly [{
                readonly protocol: "dokodemo-door";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPServerConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaServerConfig";
            }, {
                readonly protocol: "mixed";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksServerConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanServerConfig";
            }, {
                readonly protocol: "tun";
                readonly config: "TunConfig";
            }, {
                readonly protocol: "tunnel";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessInboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessInboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
            readonly "infra/conf/xray.go:outboundConfigLoader": readonly [{
                readonly protocol: "blackhole";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "block";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "direct";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "dns";
                readonly config: "DNSOutboundConfig";
            }, {
                readonly protocol: "freedom";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPClientConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaClientConfig";
            }, {
                readonly protocol: "loopback";
                readonly config: "LoopbackConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksClientConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksClientConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanClientConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessOutboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessOutboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
        };
        readonly structs: {
            readonly APIConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }, {
                readonly go: "Services";
                readonly type: "[]string";
                readonly json: "services";
            }];
            readonly Authenticator: readonly [{
                readonly go: "Request";
                readonly type: "AuthenticatorRequest";
                readonly json: "request";
            }, {
                readonly go: "Response";
                readonly type: "AuthenticatorResponse";
                readonly json: "response";
            }];
            readonly AuthenticatorRequest: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Method";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Path";
                readonly type: "StringList";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly AuthenticatorResponse: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Status";
                readonly type: "string";
                readonly json: "status";
            }, {
                readonly go: "Reason";
                readonly type: "string";
                readonly json: "reason";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly BalancingRule: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Selectors";
                readonly type: "StringList";
                readonly json: "selector";
            }, {
                readonly go: "Strategy";
                readonly type: "StrategyConfig";
                readonly json: "strategy";
            }, {
                readonly go: "FallbackTag";
                readonly type: "string";
                readonly json: "fallbackTag";
            }];
            readonly BlackholeConfig: readonly [{
                readonly go: "Response";
                readonly type: "json.RawMessage";
                readonly json: "response";
            }];
            readonly BridgeConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly BurstObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "HealthCheck";
                readonly type: "*healthCheckSettings";
                readonly json: "pingConfig";
            }];
            readonly Config: readonly [{
                readonly go: "Transport";
                readonly type: "map[string]json.RawMessage";
                readonly json: "transport";
            }, {
                readonly go: "LogConfig";
                readonly type: "*LogConfig";
                readonly json: "log";
            }, {
                readonly go: "RouterConfig";
                readonly type: "*RouterConfig";
                readonly json: "routing";
            }, {
                readonly go: "DNSConfig";
                readonly type: "*DNSConfig";
                readonly json: "dns";
            }, {
                readonly go: "InboundConfigs";
                readonly type: "[]InboundDetourConfig";
                readonly json: "inbounds";
            }, {
                readonly go: "OutboundConfigs";
                readonly type: "[]OutboundDetourConfig";
                readonly json: "outbounds";
            }, {
                readonly go: "Policy";
                readonly type: "*PolicyConfig";
                readonly json: "policy";
            }, {
                readonly go: "API";
                readonly type: "*APIConfig";
                readonly json: "api";
            }, {
                readonly go: "Metrics";
                readonly type: "*MetricsConfig";
                readonly json: "metrics";
            }, {
                readonly go: "Stats";
                readonly type: "*StatsConfig";
                readonly json: "stats";
            }, {
                readonly go: "Reverse";
                readonly type: "*ReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "FakeDNS";
                readonly type: "*FakeDNSConfig";
                readonly json: "fakeDns";
            }, {
                readonly go: "Observatory";
                readonly type: "*ObservatoryConfig";
                readonly json: "observatory";
            }, {
                readonly go: "BurstObservatory";
                readonly type: "*BurstObservatoryConfig";
                readonly json: "burstObservatory";
            }, {
                readonly go: "Version";
                readonly type: "*VersionConfig";
                readonly json: "version";
            }, {
                readonly go: "Geodata";
                readonly type: "*GeodataConfig";
                readonly json: "geodata";
            }];
            readonly CustomSockoptConfig: readonly [{
                readonly go: "Syetem";
                readonly type: "string";
                readonly json: "system";
            }, {
                readonly go: "Network";
                readonly type: "string";
                readonly json: "network";
            }, {
                readonly go: "Level";
                readonly type: "string";
                readonly json: "level";
            }, {
                readonly go: "Opt";
                readonly type: "string";
                readonly json: "opt";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }];
            readonly CustomTransform: readonly [{
                readonly go: "Op";
                readonly type: "string";
                readonly json: "op";
            }, {
                readonly go: "Args";
                readonly type: "[]CustomTransformArg";
                readonly json: "args";
            }];
            readonly CustomTransformArg: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Bytes";
                readonly type: "json.RawMessage";
                readonly json: "bytes";
            }, {
                readonly go: "U64";
                readonly type: "*uint64";
                readonly json: "u64";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Metadata";
                readonly type: "string";
                readonly json: "metadata";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }];
            readonly DNSConfig: readonly [{
                readonly go: "Servers";
                readonly type: "[]*NameServerConfig";
                readonly json: "servers";
            }, {
                readonly go: "Hosts";
                readonly type: "*HostsWrapper";
                readonly json: "hosts";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "DisableCache";
                readonly type: "bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "DisableFallback";
                readonly type: "bool";
                readonly json: "disableFallback";
            }, {
                readonly go: "DisableFallbackIfMatch";
                readonly type: "bool";
                readonly json: "disableFallbackIfMatch";
            }, {
                readonly go: "EnableParallelQuery";
                readonly type: "bool";
                readonly json: "enableParallelQuery";
            }, {
                readonly go: "UseSystemHosts";
                readonly type: "bool";
                readonly json: "useSystemHosts";
            }];
            readonly DNSOutboundConfig: readonly [{
                readonly go: "RewriteNetwork";
                readonly type: "Network";
                readonly json: "rewriteNetwork";
            }, {
                readonly go: "RewriteAddress";
                readonly type: "*Address";
                readonly json: "rewriteAddress";
            }, {
                readonly go: "RewritePort";
                readonly type: "uint16";
                readonly json: "rewritePort";
            }, {
                readonly go: "Network";
                readonly type: "Network";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Rules";
                readonly type: "[]*DNSOutboundRuleConfig";
                readonly json: "rules";
            }, {
                readonly go: "NonIPQuery";
                readonly type: "*string";
                readonly json: "nonIPQuery";
            }, {
                readonly go: "BlockTypes";
                readonly type: "*[]int32";
                readonly json: "blockTypes";
            }];
            readonly DNSOutboundRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "QType";
                readonly type: "*PortList";
                readonly json: "qType";
            }, {
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "RCode";
                readonly type: "uint32";
                readonly json: "rCode";
            }];
            readonly DokodemoConfig: readonly [{
                readonly go: "AllowedNetwork";
                readonly type: "*NetworkList";
                readonly json: "allowedNetwork";
            }, {
                readonly go: "RewriteAddress";
                readonly type: "*Address";
                readonly json: "rewriteAddress";
            }, {
                readonly go: "RewritePort";
                readonly type: "uint16";
                readonly json: "rewritePort";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "PortMap";
                readonly type: "map[string]string";
                readonly json: "portMap";
            }, {
                readonly go: "FollowRedirect";
                readonly type: "bool";
                readonly json: "followRedirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly FakeDNSPoolElementConfig: readonly [{
                readonly go: "IPPool";
                readonly type: "string";
                readonly json: "ipPool";
            }, {
                readonly go: "LRUSize";
                readonly type: "int64";
                readonly json: "poolSize";
            }];
            readonly FakeDNSPostProcessingStage: readonly [];
            readonly FinalMask: readonly [{
                readonly go: "Tcp";
                readonly type: "[]Mask";
                readonly json: "tcp";
            }, {
                readonly go: "Udp";
                readonly type: "[]Mask";
                readonly json: "udp";
            }, {
                readonly go: "QuicParams";
                readonly type: "*QuicParamsConfig";
                readonly json: "quicParams";
            }];
            readonly Fragment: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "*Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Interval";
                readonly type: "*Int32Range";
                readonly json: "interval";
            }, {
                readonly go: "MaxSplit";
                readonly type: "*Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FragmentMask: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Lengths";
                readonly type: "[]Int32Range";
                readonly json: "lengths";
            }, {
                readonly go: "Delays";
                readonly type: "[]Int32Range";
                readonly json: "delays";
            }, {
                readonly go: "MaxSplit";
                readonly type: "Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FreedomConfig: readonly [{
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Redirect";
                readonly type: "string";
                readonly json: "redirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Fragment";
                readonly type: "*Fragment";
                readonly json: "fragment";
            }, {
                readonly go: "Noise";
                readonly type: "*Noise";
                readonly json: "noise";
            }, {
                readonly go: "Noises";
                readonly type: "[]*Noise";
                readonly json: "noises";
            }, {
                readonly go: "ProxyProtocol";
                readonly type: "uint32";
                readonly json: "proxyProtocol";
            }, {
                readonly go: "IPsBlocked";
                readonly type: "*StringList";
                readonly json: "ipsBlocked";
            }, {
                readonly go: "FinalRules";
                readonly type: "[]*FreedomFinalRuleConfig";
                readonly json: "finalRules";
            }];
            readonly FreedomFinalRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "BlockDelay";
                readonly type: "*Int32Range";
                readonly json: "blockDelay";
            }];
            readonly GeodataAssetConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "File";
                readonly type: "string";
                readonly json: "file";
            }];
            readonly GeodataConfig: readonly [{
                readonly go: "Cron";
                readonly type: "*string";
                readonly json: "cron";
            }, {
                readonly go: "Outbound";
                readonly type: "string";
                readonly json: "outbound";
            }, {
                readonly go: "Assets";
                readonly type: "[]*GeodataAssetConfig";
                readonly json: "assets";
            }];
            readonly GRPCConfig: readonly [{
                readonly go: "Authority";
                readonly type: "string";
                readonly json: "authority";
            }, {
                readonly go: "ServiceName";
                readonly type: "string";
                readonly json: "serviceName";
            }, {
                readonly go: "MultiMode";
                readonly type: "bool";
                readonly json: "multiMode";
            }, {
                readonly go: "IdleTimeout";
                readonly type: "int32";
                readonly json: "idle_timeout";
            }, {
                readonly go: "HealthCheckTimeout";
                readonly type: "int32";
                readonly json: "health_check_timeout";
            }, {
                readonly go: "PermitWithoutStream";
                readonly type: "bool";
                readonly json: "permit_without_stream";
            }, {
                readonly go: "InitialWindowsSize";
                readonly type: "int32";
                readonly json: "initial_windows_size";
            }, {
                readonly go: "UserAgent";
                readonly type: "string";
                readonly json: "user_agent";
            }];
            readonly HappyEyeballsConfig: readonly [{
                readonly go: "PrioritizeIPv6";
                readonly type: "bool";
                readonly json: "prioritizeIPv6";
            }, {
                readonly go: "TryDelayMs";
                readonly type: "uint64";
                readonly json: "tryDelayMs";
            }, {
                readonly go: "Interleave";
                readonly type: "uint32";
                readonly json: "interleave";
            }, {
                readonly go: "MaxConcurrentTry";
                readonly type: "uint32";
                readonly json: "maxConcurrentTry";
            }];
            readonly HeaderCustomTCP: readonly [{
                readonly go: "Clients";
                readonly type: "[][]TCPItem";
                readonly json: "clients";
            }, {
                readonly go: "Servers";
                readonly type: "[][]TCPItem";
                readonly json: "servers";
            }, {
                readonly go: "Errors";
                readonly type: "[][]TCPItem";
                readonly json: "errors";
            }];
            readonly HeaderCustomUDP: readonly [{
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Client";
                readonly type: "[]UDPItem";
                readonly json: "client";
            }, {
                readonly go: "Server";
                readonly type: "[]UDPItem";
                readonly json: "server";
            }];
            readonly healthCheckSettings: readonly [{
                readonly go: "Destination";
                readonly type: "string";
                readonly json: "destination";
            }, {
                readonly go: "Connectivity";
                readonly type: "string";
                readonly json: "connectivity";
            }, {
                readonly go: "Interval";
                readonly type: "duration.Duration";
                readonly json: "interval";
            }, {
                readonly go: "SamplingCount";
                readonly type: "int";
                readonly json: "sampling";
            }, {
                readonly go: "Timeout";
                readonly type: "duration.Duration";
                readonly json: "timeout";
            }, {
                readonly go: "HttpMethod";
                readonly type: "string";
                readonly json: "httpMethod";
            }];
            readonly HTTPAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly HTTPClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*HTTPRemoteConfig";
                readonly json: "servers";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly HTTPRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly HTTPResponse: readonly [];
            readonly HTTPServerConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]*HTTPAccount";
                readonly json: "users";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*HTTPAccount";
                readonly json: "accounts";
            }, {
                readonly go: "Transparent";
                readonly type: "bool";
                readonly json: "allowTransparent";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly HttpUpgradeConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly HysteriaClientConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly HysteriaConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Congestion";
                readonly type: "*string";
                readonly json: "congestion";
            }, {
                readonly go: "Up";
                readonly type: "*Bandwidth";
                readonly json: "up";
            }, {
                readonly go: "Down";
                readonly type: "*Bandwidth";
                readonly json: "down";
            }, {
                readonly go: "UdpHop";
                readonly type: "*UdpHop";
                readonly json: "udphop";
            }, {
                readonly go: "UdpIdleTimeout";
                readonly type: "int64";
                readonly json: "udpIdleTimeout";
            }, {
                readonly go: "Masquerade";
                readonly type: "Masquerade";
                readonly json: "masquerade";
            }];
            readonly HysteriaServerConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Users";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "clients";
            }];
            readonly HysteriaUserConfig: readonly [{
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly InboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "PortList";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "ListenOn";
                readonly type: "*Address";
                readonly json: "listen";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "SniffingConfig";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly KCPConfig: readonly [{
                readonly go: "Mtu";
                readonly type: "*uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Tti";
                readonly type: "*uint32";
                readonly json: "tti";
            }, {
                readonly go: "UpCap";
                readonly type: "*uint32";
                readonly json: "uplinkCapacity";
            }, {
                readonly go: "DownCap";
                readonly type: "*uint32";
                readonly json: "downlinkCapacity";
            }, {
                readonly go: "CwndMultiplier";
                readonly type: "*uint32";
                readonly json: "cwndMultiplier";
            }, {
                readonly go: "MaxSendingWindow";
                readonly type: "*uint32";
                readonly json: "maxSendingWindow";
            }, {
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "Seed";
                readonly type: "*string";
                readonly json: "seed";
            }];
            readonly LogConfig: readonly [{
                readonly go: "AccessLog";
                readonly type: "string";
                readonly json: "access";
            }, {
                readonly go: "ErrorLog";
                readonly type: "string";
                readonly json: "error";
            }, {
                readonly go: "LogLevel";
                readonly type: "string";
                readonly json: "loglevel";
            }, {
                readonly go: "DNSLog";
                readonly type: "bool";
                readonly json: "dnsLog";
            }, {
                readonly go: "MaskAddress";
                readonly type: "string";
                readonly json: "maskAddress";
            }];
            readonly LoopbackConfig: readonly [{
                readonly go: "InboundTag";
                readonly type: "string";
                readonly json: "inboundTag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly Mask: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly Masquerade: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dir";
                readonly type: "string";
                readonly json: "dir";
            }, {
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "RewriteHost";
                readonly type: "bool";
                readonly json: "rewriteHost";
            }, {
                readonly go: "Insecure";
                readonly type: "bool";
                readonly json: "insecure";
            }, {
                readonly go: "Content";
                readonly type: "string";
                readonly json: "content";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "StatusCode";
                readonly type: "int32";
                readonly json: "statusCode";
            }];
            readonly MetricsConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }];
            readonly MkcpLegacy: readonly [{
                readonly go: "Header";
                readonly type: "string";
                readonly json: "header";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }];
            readonly MuxConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "Concurrency";
                readonly type: "int16";
                readonly json: "concurrency";
            }, {
                readonly go: "XudpConcurrency";
                readonly type: "int16";
                readonly json: "xudpConcurrency";
            }, {
                readonly go: "XudpProxyUDP443";
                readonly type: "string";
                readonly json: "xudpProxyUDP443";
            }];
            readonly NameServerConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "SkipFallback";
                readonly type: "bool";
                readonly json: "skipFallback";
            }, {
                readonly go: "Domains";
                readonly type: "StringList";
                readonly json: "domains";
            }, {
                readonly go: "ExpectedIPs";
                readonly type: "StringList";
                readonly json: "expectedIPs";
            }, {
                readonly go: "ExpectIPs";
                readonly type: "StringList";
                readonly json: "expectIPs";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TimeoutMs";
                readonly type: "uint64";
                readonly json: "timeoutMs";
            }, {
                readonly go: "DisableCache";
                readonly type: "*bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "*bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "*uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "FinalQuery";
                readonly type: "bool";
                readonly json: "finalQuery";
            }, {
                readonly go: "UnexpectedIPs";
                readonly type: "StringList";
                readonly json: "unexpectedIPs";
            }];
            readonly Noise: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "string";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "*Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "ApplyTo";
                readonly type: "string";
                readonly json: "applyTo";
            }];
            readonly NoiseItem: readonly [{
                readonly go: "Rand";
                readonly type: "Int32Range";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }];
            readonly NoiseMask: readonly [{
                readonly go: "Reset";
                readonly type: "Int32Range";
                readonly json: "reset";
            }, {
                readonly go: "Noise";
                readonly type: "[]NoiseItem";
                readonly json: "noise";
            }];
            readonly NoneResponse: readonly [];
            readonly NoOpConnectionAuthenticator: readonly [];
            readonly ObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "ProbeURL";
                readonly type: "string";
                readonly json: "probeURL";
            }, {
                readonly go: "ProbeInterval";
                readonly type: "duration.Duration";
                readonly json: "probeInterval";
            }, {
                readonly go: "EnableConcurrency";
                readonly type: "bool";
                readonly json: "enableConcurrency";
            }];
            readonly OutboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "SendThrough";
                readonly type: "*string";
                readonly json: "sendThrough";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "ProxySettings";
                readonly type: "*ProxyConfig";
                readonly json: "proxySettings";
            }, {
                readonly go: "MuxSettings";
                readonly type: "*MuxConfig";
                readonly json: "mux";
            }, {
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }];
            readonly Policy: readonly [{
                readonly go: "Handshake";
                readonly type: "*uint32";
                readonly json: "handshake";
            }, {
                readonly go: "ConnectionIdle";
                readonly type: "*uint32";
                readonly json: "connIdle";
            }, {
                readonly go: "UplinkOnly";
                readonly type: "*uint32";
                readonly json: "uplinkOnly";
            }, {
                readonly go: "DownlinkOnly";
                readonly type: "*uint32";
                readonly json: "downlinkOnly";
            }, {
                readonly go: "StatsUserUplink";
                readonly type: "bool";
                readonly json: "statsUserUplink";
            }, {
                readonly go: "StatsUserDownlink";
                readonly type: "bool";
                readonly json: "statsUserDownlink";
            }, {
                readonly go: "StatsUserOnline";
                readonly type: "bool";
                readonly json: "statsUserOnline";
            }, {
                readonly go: "BufferSize";
                readonly type: "*int32";
                readonly json: "bufferSize";
            }];
            readonly PolicyConfig: readonly [{
                readonly go: "Levels";
                readonly type: "map[uint32]*Policy";
                readonly json: "levels";
            }, {
                readonly go: "System";
                readonly type: "*SystemPolicy";
                readonly json: "system";
            }];
            readonly PortalConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly ProxyConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TransportLayerProxy";
                readonly type: "bool";
                readonly json: "transportLayer";
            }];
            readonly QuicParamsConfig: readonly [{
                readonly go: "Congestion";
                readonly type: "string";
                readonly json: "congestion";
            }, {
                readonly go: "Debug";
                readonly type: "bool";
                readonly json: "debug";
            }, {
                readonly go: "BbrProfile";
                readonly type: "string";
                readonly json: "bbrProfile";
            }, {
                readonly go: "BrutalUp";
                readonly type: "Bandwidth";
                readonly json: "brutalUp";
            }, {
                readonly go: "BrutalDown";
                readonly type: "Bandwidth";
                readonly json: "brutalDown";
            }, {
                readonly go: "UdpHop";
                readonly type: "UdpHop";
                readonly json: "udpHop";
            }, {
                readonly go: "InitStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "initStreamReceiveWindow";
            }, {
                readonly go: "MaxStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxStreamReceiveWindow";
            }, {
                readonly go: "InitConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "initConnectionReceiveWindow";
            }, {
                readonly go: "MaxConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxConnectionReceiveWindow";
            }, {
                readonly go: "MaxIdleTimeout";
                readonly type: "int64";
                readonly json: "maxIdleTimeout";
            }, {
                readonly go: "KeepAlivePeriod";
                readonly type: "int64";
                readonly json: "keepAlivePeriod";
            }, {
                readonly go: "DisablePathMTUDiscovery";
                readonly type: "bool";
                readonly json: "disablePathMTUDiscovery";
            }, {
                readonly go: "MaxIncomingStreams";
                readonly type: "int64";
                readonly json: "maxIncomingStreams";
            }];
            readonly RawFieldRule: readonly [{
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "*StringList";
                readonly json: "domains";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "SourceIP";
                readonly type: "*StringList";
                readonly json: "sourceIP";
            }, {
                readonly go: "Source";
                readonly type: "*StringList";
                readonly json: "source";
            }, {
                readonly go: "SourcePort";
                readonly type: "*PortList";
                readonly json: "sourcePort";
            }, {
                readonly go: "User";
                readonly type: "*StringList";
                readonly json: "user";
            }, {
                readonly go: "VlessRoute";
                readonly type: "*PortList";
                readonly json: "vlessRoute";
            }, {
                readonly go: "InboundTag";
                readonly type: "*StringList";
                readonly json: "inboundTag";
            }, {
                readonly go: "Protocols";
                readonly type: "*StringList";
                readonly json: "protocol";
            }, {
                readonly go: "Attributes";
                readonly type: "map[string]string";
                readonly json: "attrs";
            }, {
                readonly go: "LocalIP";
                readonly type: "*StringList";
                readonly json: "localIP";
            }, {
                readonly go: "LocalPort";
                readonly type: "*PortList";
                readonly json: "localPort";
            }, {
                readonly go: "Process";
                readonly type: "*StringList";
                readonly json: "process";
            }, {
                readonly go: "Webhook";
                readonly type: "*WebhookRuleConfig";
                readonly json: "webhook";
            }];
            readonly REALITYConfig: readonly [{
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "Show";
                readonly type: "bool";
                readonly json: "show";
            }, {
                readonly go: "Target";
                readonly type: "json.RawMessage";
                readonly json: "target";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }, {
                readonly go: "ServerNames";
                readonly type: "[]string";
                readonly json: "serverNames";
            }, {
                readonly go: "PrivateKey";
                readonly type: "string";
                readonly json: "privateKey";
            }, {
                readonly go: "MinClientVer";
                readonly type: "string";
                readonly json: "minClientVer";
            }, {
                readonly go: "MaxClientVer";
                readonly type: "string";
                readonly json: "maxClientVer";
            }, {
                readonly go: "MaxTimeDiff";
                readonly type: "uint64";
                readonly json: "maxTimeDiff";
            }, {
                readonly go: "ShortIds";
                readonly type: "[]string";
                readonly json: "shortIds";
            }, {
                readonly go: "Mldsa65Seed";
                readonly type: "string";
                readonly json: "mldsa65Seed";
            }, {
                readonly go: "LimitFallbackUpload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackUpload";
            }, {
                readonly go: "LimitFallbackDownload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackDownload";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "ShortId";
                readonly type: "string";
                readonly json: "shortId";
            }, {
                readonly go: "Mldsa65Verify";
                readonly type: "string";
                readonly json: "mldsa65Verify";
            }, {
                readonly go: "SpiderX";
                readonly type: "string";
                readonly json: "spiderX";
            }];
            readonly Realm: readonly [{
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "StunServers";
                readonly type: "[]string";
                readonly json: "stunServers";
            }, {
                readonly go: "TlsConfig";
                readonly type: "*TLSConfig";
                readonly json: "tlsConfig";
            }];
            readonly ReverseConfig: readonly [{
                readonly go: "Bridges";
                readonly type: "[]BridgeConfig";
                readonly json: "bridges";
            }, {
                readonly go: "Portals";
                readonly type: "[]PortalConfig";
                readonly json: "portals";
            }];
            readonly RouterConfig: readonly [{
                readonly go: "RuleList";
                readonly type: "[]json.RawMessage";
                readonly json: "rules";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "*string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Balancers";
                readonly type: "[]*BalancingRule";
                readonly json: "balancers";
            }];
            readonly RouterRule: readonly [{
                readonly go: "RuleTag";
                readonly type: "string";
                readonly json: "ruleTag";
            }, {
                readonly go: "OutboundTag";
                readonly type: "string";
                readonly json: "outboundTag";
            }, {
                readonly go: "BalancerTag";
                readonly type: "string";
                readonly json: "balancerTag";
            }];
            readonly Salamander: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PacketSize";
                readonly type: "Int32Range";
                readonly json: "packetSize";
            }];
            readonly ShadowsocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Servers";
                readonly type: "[]*ShadowsocksServerTarget";
                readonly json: "servers";
            }];
            readonly ShadowsocksServerConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Users";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "NetworkList";
                readonly type: "*NetworkList";
                readonly json: "network";
            }];
            readonly ShadowsocksServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly ShadowsocksUserConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly SniffingConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "DestOverride";
                readonly type: "StringList";
                readonly json: "destOverride";
            }, {
                readonly go: "DomainsExcluded";
                readonly type: "StringList";
                readonly json: "domainsExcluded";
            }, {
                readonly go: "IPsExcluded";
                readonly type: "StringList";
                readonly json: "ipsExcluded";
            }, {
                readonly go: "MetadataOnly";
                readonly type: "bool";
                readonly json: "metadataOnly";
            }, {
                readonly go: "RouteOnly";
                readonly type: "bool";
                readonly json: "routeOnly";
            }];
            readonly SocketConfig: readonly [{
                readonly go: "Mark";
                readonly type: "int32";
                readonly json: "mark";
            }, {
                readonly go: "TFO";
                readonly type: "interface{}";
                readonly json: "tcpFastOpen";
            }, {
                readonly go: "TProxy";
                readonly type: "string";
                readonly json: "tproxy";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "DialerProxy";
                readonly type: "string";
                readonly json: "dialerProxy";
            }, {
                readonly go: "TCPKeepAliveInterval";
                readonly type: "int32";
                readonly json: "tcpKeepAliveInterval";
            }, {
                readonly go: "TCPKeepAliveIdle";
                readonly type: "int32";
                readonly json: "tcpKeepAliveIdle";
            }, {
                readonly go: "TCPCongestion";
                readonly type: "string";
                readonly json: "tcpCongestion";
            }, {
                readonly go: "TCPWindowClamp";
                readonly type: "int32";
                readonly json: "tcpWindowClamp";
            }, {
                readonly go: "TCPMaxSeg";
                readonly type: "int32";
                readonly json: "tcpMaxSeg";
            }, {
                readonly go: "Penetrate";
                readonly type: "bool";
                readonly json: "penetrate";
            }, {
                readonly go: "TCPUserTimeout";
                readonly type: "int32";
                readonly json: "tcpUserTimeout";
            }, {
                readonly go: "V6only";
                readonly type: "bool";
                readonly json: "v6only";
            }, {
                readonly go: "Interface";
                readonly type: "string";
                readonly json: "interface";
            }, {
                readonly go: "TcpMptcp";
                readonly type: "bool";
                readonly json: "tcpMptcp";
            }, {
                readonly go: "CustomSockopt";
                readonly type: "[]*CustomSockoptConfig";
                readonly json: "customSockopt";
            }, {
                readonly go: "AddressPortStrategy";
                readonly type: "string";
                readonly json: "addressPortStrategy";
            }, {
                readonly go: "HappyEyeballsSettings";
                readonly type: "*HappyEyeballsConfig";
                readonly json: "happyEyeballs";
            }, {
                readonly go: "TrustedXForwardedFor";
                readonly type: "[]string";
                readonly json: "trustedXForwardedFor";
            }];
            readonly SocksAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly SocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*SocksRemoteConfig";
                readonly json: "servers";
            }];
            readonly SocksRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly SocksServerConfig: readonly [{
                readonly go: "AuthMethod";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Users";
                readonly type: "[]*SocksAccount";
                readonly json: "users";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*SocksAccount";
                readonly json: "accounts";
            }, {
                readonly go: "UDP";
                readonly type: "bool";
                readonly json: "udp";
            }, {
                readonly go: "Host";
                readonly type: "*Address";
                readonly json: "ip";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly SplitHTTPConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "XPaddingBytes";
                readonly type: "Int32Range";
                readonly json: "xPaddingBytes";
            }, {
                readonly go: "XPaddingObfsMode";
                readonly type: "bool";
                readonly json: "xPaddingObfsMode";
            }, {
                readonly go: "XPaddingKey";
                readonly type: "string";
                readonly json: "xPaddingKey";
            }, {
                readonly go: "XPaddingHeader";
                readonly type: "string";
                readonly json: "xPaddingHeader";
            }, {
                readonly go: "XPaddingPlacement";
                readonly type: "string";
                readonly json: "xPaddingPlacement";
            }, {
                readonly go: "XPaddingMethod";
                readonly type: "string";
                readonly json: "xPaddingMethod";
            }, {
                readonly go: "UplinkHTTPMethod";
                readonly type: "string";
                readonly json: "uplinkHTTPMethod";
            }, {
                readonly go: "SessionIDPlacement";
                readonly type: "string";
                readonly json: "sessionIDPlacement";
            }, {
                readonly go: "SessionIDKey";
                readonly type: "string";
                readonly json: "sessionIDKey";
            }, {
                readonly go: "SessionIDTable";
                readonly type: "string";
                readonly json: "sessionIDTable";
            }, {
                readonly go: "SessionIDLength";
                readonly type: "Int32Range";
                readonly json: "sessionIDLength";
            }, {
                readonly go: "SeqPlacement";
                readonly type: "string";
                readonly json: "seqPlacement";
            }, {
                readonly go: "SeqKey";
                readonly type: "string";
                readonly json: "seqKey";
            }, {
                readonly go: "UplinkDataPlacement";
                readonly type: "string";
                readonly json: "uplinkDataPlacement";
            }, {
                readonly go: "UplinkDataKey";
                readonly type: "string";
                readonly json: "uplinkDataKey";
            }, {
                readonly go: "UplinkChunkSize";
                readonly type: "Int32Range";
                readonly json: "uplinkChunkSize";
            }, {
                readonly go: "NoGRPCHeader";
                readonly type: "bool";
                readonly json: "noGRPCHeader";
            }, {
                readonly go: "NoSSEHeader";
                readonly type: "bool";
                readonly json: "noSSEHeader";
            }, {
                readonly go: "ScMaxEachPostBytes";
                readonly type: "Int32Range";
                readonly json: "scMaxEachPostBytes";
            }, {
                readonly go: "ScMinPostsIntervalMs";
                readonly type: "Int32Range";
                readonly json: "scMinPostsIntervalMs";
            }, {
                readonly go: "ScMaxBufferedPosts";
                readonly type: "int64";
                readonly json: "scMaxBufferedPosts";
            }, {
                readonly go: "ScStreamUpServerSecs";
                readonly type: "Int32Range";
                readonly json: "scStreamUpServerSecs";
            }, {
                readonly go: "ServerMaxHeaderBytes";
                readonly type: "int32";
                readonly json: "serverMaxHeaderBytes";
            }, {
                readonly go: "Xmux";
                readonly type: "XmuxConfig";
                readonly json: "xmux";
            }, {
                readonly go: "DownloadSettings";
                readonly type: "*StreamConfig";
                readonly json: "downloadSettings";
            }, {
                readonly go: "Extra";
                readonly type: "json.RawMessage";
                readonly json: "extra";
            }];
            readonly StatsConfig: readonly [];
            readonly StrategyConfig: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly strategyEmptyConfig: readonly [];
            readonly strategyLeastLoadConfig: readonly [{
                readonly go: "Costs";
                readonly type: "[]*router.StrategyWeight";
                readonly json: "costs";
            }, {
                readonly go: "Baselines";
                readonly type: "[]duration.Duration";
                readonly json: "baselines";
            }, {
                readonly go: "Expected";
                readonly type: "int32";
                readonly json: "expected";
            }, {
                readonly go: "MaxRTT";
                readonly type: "duration.Duration";
                readonly json: "maxRTT";
            }, {
                readonly go: "Tolerance";
                readonly type: "float64";
                readonly json: "tolerance";
            }];
            readonly StreamConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*TransportProtocol";
                readonly json: "network";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "FinalMask";
                readonly type: "*FinalMask";
                readonly json: "finalmask";
            }, {
                readonly go: "TLSSettings";
                readonly type: "*TLSConfig";
                readonly json: "tlsSettings";
            }, {
                readonly go: "REALITYSettings";
                readonly type: "*REALITYConfig";
                readonly json: "realitySettings";
            }, {
                readonly go: "RAWSettings";
                readonly type: "*TCPConfig";
                readonly json: "rawSettings";
            }, {
                readonly go: "TCPSettings";
                readonly type: "*TCPConfig";
                readonly json: "tcpSettings";
            }, {
                readonly go: "XHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "xhttpSettings";
            }, {
                readonly go: "SplitHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "splithttpSettings";
            }, {
                readonly go: "KCPSettings";
                readonly type: "*KCPConfig";
                readonly json: "kcpSettings";
            }, {
                readonly go: "GRPCSettings";
                readonly type: "*GRPCConfig";
                readonly json: "grpcSettings";
            }, {
                readonly go: "WSSettings";
                readonly type: "*WebSocketConfig";
                readonly json: "wsSettings";
            }, {
                readonly go: "HTTPUPGRADESettings";
                readonly type: "*HttpUpgradeConfig";
                readonly json: "httpupgradeSettings";
            }, {
                readonly go: "HysteriaSettings";
                readonly type: "*HysteriaConfig";
                readonly json: "hysteriaSettings";
            }, {
                readonly go: "SocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "sockopt";
            }];
            readonly Sudoku: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "ASCII";
                readonly type: "string";
                readonly json: "ascii";
            }, {
                readonly go: "CustomTable";
                readonly type: "string";
                readonly json: "customTable";
            }, {
                readonly go: "LegacyCustomTable";
                readonly type: "string";
                readonly json: "custom_table";
            }, {
                readonly go: "CustomTables";
                readonly type: "[]string";
                readonly json: "customTables";
            }, {
                readonly go: "LegacyCustomSets";
                readonly type: "[]string";
                readonly json: "custom_tables";
            }, {
                readonly go: "PaddingMin";
                readonly type: "uint32";
                readonly json: "paddingMin";
            }, {
                readonly go: "LegacyPaddingMin";
                readonly type: "uint32";
                readonly json: "padding_min";
            }, {
                readonly go: "PaddingMax";
                readonly type: "uint32";
                readonly json: "paddingMax";
            }, {
                readonly go: "LegacyPaddingMax";
                readonly type: "uint32";
                readonly json: "padding_max";
            }];
            readonly SystemPolicy: readonly [{
                readonly go: "StatsInboundUplink";
                readonly type: "bool";
                readonly json: "statsInboundUplink";
            }, {
                readonly go: "StatsInboundDownlink";
                readonly type: "bool";
                readonly json: "statsInboundDownlink";
            }, {
                readonly go: "StatsOutboundUplink";
                readonly type: "bool";
                readonly json: "statsOutboundUplink";
            }, {
                readonly go: "StatsOutboundDownlink";
                readonly type: "bool";
                readonly json: "statsOutboundDownlink";
            }];
            readonly TCPConfig: readonly [{
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly TCPItem: readonly [{
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly TLSCertConfig: readonly [{
                readonly go: "CertFile";
                readonly type: "string";
                readonly json: "certificateFile";
            }, {
                readonly go: "CertStr";
                readonly type: "[]string";
                readonly json: "certificate";
            }, {
                readonly go: "KeyFile";
                readonly type: "string";
                readonly json: "keyFile";
            }, {
                readonly go: "KeyStr";
                readonly type: "[]string";
                readonly json: "key";
            }, {
                readonly go: "Usage";
                readonly type: "string";
                readonly json: "usage";
            }, {
                readonly go: "OcspStapling";
                readonly type: "uint64";
                readonly json: "ocspStapling";
            }, {
                readonly go: "OneTimeLoading";
                readonly type: "bool";
                readonly json: "oneTimeLoading";
            }, {
                readonly go: "BuildChain";
                readonly type: "bool";
                readonly json: "buildChain";
            }];
            readonly TLSConfig: readonly [{
                readonly go: "AllowInsecure";
                readonly type: "bool";
                readonly json: "allowInsecure";
            }, {
                readonly go: "Certs";
                readonly type: "[]*TLSCertConfig";
                readonly json: "certificates";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "ALPN";
                readonly type: "*StringList";
                readonly json: "alpn";
            }, {
                readonly go: "EnableSessionResumption";
                readonly type: "bool";
                readonly json: "enableSessionResumption";
            }, {
                readonly go: "DisableSystemRoot";
                readonly type: "bool";
                readonly json: "disableSystemRoot";
            }, {
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "minVersion";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "maxVersion";
            }, {
                readonly go: "CipherSuites";
                readonly type: "string";
                readonly json: "cipherSuites";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "RejectUnknownSNI";
                readonly type: "bool";
                readonly json: "rejectUnknownSni";
            }, {
                readonly go: "CurvePreferences";
                readonly type: "*StringList";
                readonly json: "curvePreferences";
            }, {
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "PinnedPeerCertSha256";
                readonly type: "string";
                readonly json: "pinnedPeerCertSha256";
            }, {
                readonly go: "VerifyPeerCertByName";
                readonly type: "string";
                readonly json: "verifyPeerCertByName";
            }, {
                readonly go: "ECHServerKeys";
                readonly type: "string";
                readonly json: "echServerKeys";
            }, {
                readonly go: "ECHConfigList";
                readonly type: "string";
                readonly json: "echConfigList";
            }, {
                readonly go: "ECHSocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "echSockopt";
            }];
            readonly TrojanClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Servers";
                readonly type: "[]*TrojanServerTarget";
                readonly json: "servers";
            }];
            readonly TrojanInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly TrojanServerConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*TrojanInboundFallback";
                readonly json: "fallbacks";
            }];
            readonly TrojanServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TrojanUserConfig: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TunConfig: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "MTU";
                readonly type: "uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Gateway";
                readonly type: "[]string";
                readonly json: "gateway";
            }, {
                readonly go: "DNS";
                readonly type: "[]string";
                readonly json: "dns";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "AutoSystemRoutingTable";
                readonly type: "[]string";
                readonly json: "autoSystemRoutingTable";
            }, {
                readonly go: "AutoOutboundsInterface";
                readonly type: "*string";
                readonly json: "autoOutboundsInterface";
            }];
            readonly UdpHop: readonly [{
                readonly go: "PortList";
                readonly type: "PortList";
                readonly json: "ports";
            }, {
                readonly go: "Interval";
                readonly type: "Int32Range";
                readonly json: "interval";
            }];
            readonly UDPItem: readonly [{
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly User: readonly [{
                readonly go: "EmailString";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "LevelByte";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VersionConfig: readonly [{
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "min";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "max";
            }];
            readonly VLessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Decryption";
                readonly type: "string";
                readonly json: "decryption";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*VLessInboundFallback";
                readonly json: "fallbacks";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }];
            readonly VLessInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly VLessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Id";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Seed";
                readonly type: "string";
                readonly json: "seed";
            }, {
                readonly go: "Encryption";
                readonly type: "string";
                readonly json: "encryption";
            }, {
                readonly go: "Reverse";
                readonly type: "*VLessReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "Testpre";
                readonly type: "uint32";
                readonly json: "testpre";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }, {
                readonly go: "Vnext";
                readonly type: "[]*VLessOutboundVnext";
                readonly json: "vnext";
            }];
            readonly VLessOutboundVnext: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly VLessReverseConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly VMessAccount: readonly [{
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }];
            readonly VMessDefaultConfig: readonly [{
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VMessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Defaults";
                readonly type: "*VMessDefaultConfig";
                readonly json: "default";
            }];
            readonly VMessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }, {
                readonly go: "Receivers";
                readonly type: "[]*VMessOutboundTarget";
                readonly json: "vnext";
            }];
            readonly VMessOutboundTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly WebhookRuleConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "Deduplication";
                readonly type: "uint32";
                readonly json: "deduplication";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly WebSocketConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "HeartbeatPeriod";
                readonly type: "uint32";
                readonly json: "heartbeatPeriod";
            }];
            readonly WireGuardConfig: readonly [{
                readonly go: "NoKernelTun";
                readonly type: "bool";
                readonly json: "noKernelTun";
            }, {
                readonly go: "SecretKey";
                readonly type: "string";
                readonly json: "secretKey";
            }, {
                readonly go: "Address";
                readonly type: "[]string";
                readonly json: "address";
            }, {
                readonly go: "Peers";
                readonly type: "[]*WireGuardPeerConfig";
                readonly json: "peers";
            }, {
                readonly go: "MTU";
                readonly type: "int32";
                readonly json: "mtu";
            }, {
                readonly go: "Reserved";
                readonly type: "[]byte";
                readonly json: "reserved";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }];
            readonly WireGuardPeerConfig: readonly [{
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "PreSharedKey";
                readonly type: "string";
                readonly json: "preSharedKey";
            }, {
                readonly go: "Endpoint";
                readonly type: "string";
                readonly json: "endpoint";
            }, {
                readonly go: "KeepAlive";
                readonly type: "uint32";
                readonly json: "keepAlive";
            }, {
                readonly go: "AllowedIPs";
                readonly type: "[]string";
                readonly json: "allowedIPs";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly Xdns: readonly [{
                readonly go: "Domain";
                readonly type: "json.RawMessage";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "[]string";
                readonly json: "domains";
            }, {
                readonly go: "Resolvers";
                readonly type: "[]string";
                readonly json: "resolvers";
            }];
            readonly Xicmp: readonly [{
                readonly go: "DGRAM";
                readonly type: "bool";
                readonly json: "dgram";
            }, {
                readonly go: "IPs";
                readonly type: "[]string";
                readonly json: "ips";
            }];
            readonly XmuxConfig: readonly [{
                readonly go: "MaxConcurrency";
                readonly type: "Int32Range";
                readonly json: "maxConcurrency";
            }, {
                readonly go: "MaxConnections";
                readonly type: "Int32Range";
                readonly json: "maxConnections";
            }, {
                readonly go: "CMaxReuseTimes";
                readonly type: "Int32Range";
                readonly json: "cMaxReuseTimes";
            }, {
                readonly go: "HMaxRequestTimes";
                readonly type: "Int32Range";
                readonly json: "hMaxRequestTimes";
            }, {
                readonly go: "HMaxReusableSecs";
                readonly type: "Int32Range";
                readonly json: "hMaxReusableSecs";
            }, {
                readonly go: "HKeepAlivePeriod";
                readonly type: "int64";
                readonly json: "hKeepAlivePeriod";
            }];
        };
    }, {
        readonly tag: "v26.7.11";
        readonly version: "26.7.11";
        readonly commit: "50231eaff98ccc31b5cbd247a721c16e97fe5ec1";
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
            readonly source: "infra/conf/freedom.go";
            readonly keys: readonly ["freedom noise"];
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
            readonly source: "infra/conf/transport_finalmask.go";
            readonly keys: readonly ["finalmask xdns domain"];
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["http-transport"];
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xtls"];
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["quic"];
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            readonly source: "infra/conf/transport_method.go";
            readonly keys: readonly ["mkcp header/seed"];
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
            readonly source: "infra/conf/transport_security.go";
            readonly keys: readonly ["allowInsecure"];
        }, {
            readonly feature: "Flow for Trojan";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan flow"];
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly [];
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly ["global transport"];
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
            readonly source: "infra/conf/dns_proxy.go";
            readonly keys: readonly ["dns legacy nonIPQuery blockTypes"];
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/shadowsocks.go";
            readonly keys: readonly ["shadowsocks"];
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["grpc"];
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["httpupgrade"];
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["websocket", "ws"];
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
            readonly source: "infra/conf/transport_method.go";
            readonly keys: readonly ["xhttp headers host"];
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan"];
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/vmess.go";
            readonly keys: readonly ["vmess"];
        }];
        readonly topLevelKeys: readonly ["api", "burstObservatory", "dns", "env", "fakeDns", "geodata", "inbounds", "log", "metrics", "observatory", "outbounds", "policy", "reverse", "routing", "stats", "transport", "version"];
        readonly inboundProtocols: readonly [{
            readonly protocol: "dokodemo-door";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPServerConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaServerConfig";
        }, {
            readonly protocol: "mixed";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksServerConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanServerConfig";
        }, {
            readonly protocol: "tun";
            readonly config: "TunConfig";
        }, {
            readonly protocol: "tunnel";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessInboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessInboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly outboundProtocols: readonly [{
            readonly protocol: "blackhole";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "block";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "direct";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "dns";
            readonly config: "DNSOutboundConfig";
        }, {
            readonly protocol: "freedom";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPClientConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaClientConfig";
        }, {
            readonly protocol: "loopback";
            readonly config: "LoopbackConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksClientConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksClientConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanClientConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessOutboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessOutboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly streamFields: readonly [{
            readonly go: "Address";
            readonly type: "*Address";
            readonly json: "address";
        }, {
            readonly go: "Port";
            readonly type: "uint16";
            readonly json: "port";
        }, {
            readonly go: "Method";
            readonly type: "*TransportProtocol";
            readonly json: "method";
        }, {
            readonly go: "Network";
            readonly type: "*TransportProtocol";
            readonly json: "network";
        }, {
            readonly go: "Security";
            readonly type: "string";
            readonly json: "security";
        }, {
            readonly go: "FinalMask";
            readonly type: "*FinalMask";
            readonly json: "finalmask";
        }, {
            readonly go: "TLSSettings";
            readonly type: "*TLSConfig";
            readonly json: "tlsSettings";
        }, {
            readonly go: "REALITYSettings";
            readonly type: "*REALITYConfig";
            readonly json: "realitySettings";
        }, {
            readonly go: "RAWSettings";
            readonly type: "*TCPConfig";
            readonly json: "rawSettings";
        }, {
            readonly go: "TCPSettings";
            readonly type: "*TCPConfig";
            readonly json: "tcpSettings";
        }, {
            readonly go: "XHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "xhttpSettings";
        }, {
            readonly go: "SplitHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "splithttpSettings";
        }, {
            readonly go: "KCPSettings";
            readonly type: "*KCPConfig";
            readonly json: "kcpSettings";
        }, {
            readonly go: "GRPCSettings";
            readonly type: "*GRPCConfig";
            readonly json: "grpcSettings";
        }, {
            readonly go: "WSSettings";
            readonly type: "*WebSocketConfig";
            readonly json: "wsSettings";
        }, {
            readonly go: "HTTPUPGRADESettings";
            readonly type: "*HttpUpgradeConfig";
            readonly json: "httpupgradeSettings";
        }, {
            readonly go: "HysteriaSettings";
            readonly type: "*HysteriaConfig";
            readonly json: "hysteriaSettings";
        }, {
            readonly go: "SocketSettings";
            readonly type: "*SocketConfig";
            readonly json: "sockopt";
        }];
        readonly transportAliases: {
            readonly grpc: "grpc";
            readonly httpupgrade: "httpupgrade";
            readonly hysteria: "hysteria";
            readonly kcp: "mkcp";
            readonly mkcp: "mkcp";
            readonly raw: "tcp";
            readonly splithttp: "splithttp";
            readonly tcp: "tcp";
            readonly websocket: "websocket";
            readonly ws: "websocket";
            readonly xhttp: "splithttp";
        };
        readonly securityTypes: readonly ["none", "reality", "tls", "xtls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_133", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_148", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_26_3", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly jsonLoaders: {
            readonly "infra/conf/transport_finalmask.go:tcpmaskLoader": readonly [{
                readonly protocol: "fragment";
                readonly config: "FragmentMask";
            }, {
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomTCP";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }, {
                readonly protocol: "xmc";
                readonly config: "XMC";
            }];
            readonly "infra/conf/transport_finalmask.go:udpmaskLoader": readonly [{
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomUDP";
            }, {
                readonly protocol: "mkcp-legacy";
                readonly config: "MkcpLegacy";
            }, {
                readonly protocol: "noise";
                readonly config: "NoiseMask";
            }, {
                readonly protocol: "realm";
                readonly config: "Realm";
            }, {
                readonly protocol: "salamander";
                readonly config: "Salamander";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }, {
                readonly protocol: "xdns";
                readonly config: "Xdns";
            }, {
                readonly protocol: "xicmp";
                readonly config: "Xicmp";
            }];
            readonly "infra/conf/transport_method.go:tcpHeaderLoader": readonly [{
                readonly protocol: "http";
                readonly config: "Authenticator";
            }, {
                readonly protocol: "none";
                readonly config: "NoOpConnectionAuthenticator";
            }];
            readonly "infra/conf/xray.go:inboundConfigLoader": readonly [{
                readonly protocol: "dokodemo-door";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPServerConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaServerConfig";
            }, {
                readonly protocol: "mixed";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksServerConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanServerConfig";
            }, {
                readonly protocol: "tun";
                readonly config: "TunConfig";
            }, {
                readonly protocol: "tunnel";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessInboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessInboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
            readonly "infra/conf/xray.go:outboundConfigLoader": readonly [{
                readonly protocol: "blackhole";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "block";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "direct";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "dns";
                readonly config: "DNSOutboundConfig";
            }, {
                readonly protocol: "freedom";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPClientConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaClientConfig";
            }, {
                readonly protocol: "loopback";
                readonly config: "LoopbackConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksClientConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksClientConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanClientConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessOutboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessOutboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
        };
        readonly structs: {
            readonly APIConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }, {
                readonly go: "Services";
                readonly type: "[]string";
                readonly json: "services";
            }];
            readonly Authenticator: readonly [{
                readonly go: "Request";
                readonly type: "AuthenticatorRequest";
                readonly json: "request";
            }, {
                readonly go: "Response";
                readonly type: "AuthenticatorResponse";
                readonly json: "response";
            }];
            readonly AuthenticatorRequest: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Method";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Path";
                readonly type: "StringList";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly AuthenticatorResponse: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Status";
                readonly type: "string";
                readonly json: "status";
            }, {
                readonly go: "Reason";
                readonly type: "string";
                readonly json: "reason";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly BalancingRule: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Selectors";
                readonly type: "StringList";
                readonly json: "selector";
            }, {
                readonly go: "Strategy";
                readonly type: "StrategyConfig";
                readonly json: "strategy";
            }, {
                readonly go: "FallbackTag";
                readonly type: "string";
                readonly json: "fallbackTag";
            }];
            readonly BlackholeConfig: readonly [{
                readonly go: "Response";
                readonly type: "json.RawMessage";
                readonly json: "response";
            }];
            readonly BridgeConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly BurstObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "HealthCheck";
                readonly type: "*healthCheckSettings";
                readonly json: "pingConfig";
            }];
            readonly Config: readonly [{
                readonly go: "Transport";
                readonly type: "map[string]json.RawMessage";
                readonly json: "transport";
            }, {
                readonly go: "Env";
                readonly type: "EnvConfig";
                readonly json: "env";
            }, {
                readonly go: "LogConfig";
                readonly type: "*LogConfig";
                readonly json: "log";
            }, {
                readonly go: "RouterConfig";
                readonly type: "*RouterConfig";
                readonly json: "routing";
            }, {
                readonly go: "DNSConfig";
                readonly type: "*DNSConfig";
                readonly json: "dns";
            }, {
                readonly go: "InboundConfigs";
                readonly type: "[]InboundDetourConfig";
                readonly json: "inbounds";
            }, {
                readonly go: "OutboundConfigs";
                readonly type: "[]OutboundDetourConfig";
                readonly json: "outbounds";
            }, {
                readonly go: "Policy";
                readonly type: "*PolicyConfig";
                readonly json: "policy";
            }, {
                readonly go: "API";
                readonly type: "*APIConfig";
                readonly json: "api";
            }, {
                readonly go: "Metrics";
                readonly type: "*MetricsConfig";
                readonly json: "metrics";
            }, {
                readonly go: "Stats";
                readonly type: "*StatsConfig";
                readonly json: "stats";
            }, {
                readonly go: "Reverse";
                readonly type: "*ReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "FakeDNS";
                readonly type: "*FakeDNSConfig";
                readonly json: "fakeDns";
            }, {
                readonly go: "Observatory";
                readonly type: "*ObservatoryConfig";
                readonly json: "observatory";
            }, {
                readonly go: "BurstObservatory";
                readonly type: "*BurstObservatoryConfig";
                readonly json: "burstObservatory";
            }, {
                readonly go: "Version";
                readonly type: "*VersionConfig";
                readonly json: "version";
            }, {
                readonly go: "Geodata";
                readonly type: "*GeodataConfig";
                readonly json: "geodata";
            }];
            readonly CustomSockoptConfig: readonly [{
                readonly go: "Syetem";
                readonly type: "string";
                readonly json: "system";
            }, {
                readonly go: "Network";
                readonly type: "string";
                readonly json: "network";
            }, {
                readonly go: "Level";
                readonly type: "string";
                readonly json: "level";
            }, {
                readonly go: "Opt";
                readonly type: "string";
                readonly json: "opt";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }];
            readonly CustomTransform: readonly [{
                readonly go: "Op";
                readonly type: "string";
                readonly json: "op";
            }, {
                readonly go: "Args";
                readonly type: "[]CustomTransformArg";
                readonly json: "args";
            }];
            readonly CustomTransformArg: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Bytes";
                readonly type: "json.RawMessage";
                readonly json: "bytes";
            }, {
                readonly go: "U64";
                readonly type: "*uint64";
                readonly json: "u64";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Metadata";
                readonly type: "string";
                readonly json: "metadata";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }];
            readonly DNSConfig: readonly [{
                readonly go: "Servers";
                readonly type: "[]*NameServerConfig";
                readonly json: "servers";
            }, {
                readonly go: "Hosts";
                readonly type: "*HostsWrapper";
                readonly json: "hosts";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "DisableCache";
                readonly type: "bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "DisableFallback";
                readonly type: "bool";
                readonly json: "disableFallback";
            }, {
                readonly go: "DisableFallbackIfMatch";
                readonly type: "bool";
                readonly json: "disableFallbackIfMatch";
            }, {
                readonly go: "EnableParallelQuery";
                readonly type: "bool";
                readonly json: "enableParallelQuery";
            }, {
                readonly go: "UseSystemHosts";
                readonly type: "bool";
                readonly json: "useSystemHosts";
            }];
            readonly DNSOutboundConfig: readonly [{
                readonly go: "RewriteNetwork";
                readonly type: "Network";
                readonly json: "rewriteNetwork";
            }, {
                readonly go: "RewriteAddress";
                readonly type: "*Address";
                readonly json: "rewriteAddress";
            }, {
                readonly go: "RewritePort";
                readonly type: "uint16";
                readonly json: "rewritePort";
            }, {
                readonly go: "Network";
                readonly type: "Network";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Rules";
                readonly type: "[]*DNSOutboundRuleConfig";
                readonly json: "rules";
            }, {
                readonly go: "NonIPQuery";
                readonly type: "*string";
                readonly json: "nonIPQuery";
            }, {
                readonly go: "BlockTypes";
                readonly type: "*[]int32";
                readonly json: "blockTypes";
            }];
            readonly DNSOutboundRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "QType";
                readonly type: "*PortList";
                readonly json: "qType";
            }, {
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "RCode";
                readonly type: "uint32";
                readonly json: "rCode";
            }];
            readonly DokodemoConfig: readonly [{
                readonly go: "AllowedNetwork";
                readonly type: "*NetworkList";
                readonly json: "allowedNetwork";
            }, {
                readonly go: "RewriteAddress";
                readonly type: "*Address";
                readonly json: "rewriteAddress";
            }, {
                readonly go: "RewritePort";
                readonly type: "uint16";
                readonly json: "rewritePort";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "PortMap";
                readonly type: "map[string]string";
                readonly json: "portMap";
            }, {
                readonly go: "FollowRedirect";
                readonly type: "bool";
                readonly json: "followRedirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly FakeDNSPoolElementConfig: readonly [{
                readonly go: "IPPool";
                readonly type: "string";
                readonly json: "ipPool";
            }, {
                readonly go: "LRUSize";
                readonly type: "int64";
                readonly json: "poolSize";
            }];
            readonly FakeDNSPostProcessingStage: readonly [];
            readonly FinalMask: readonly [{
                readonly go: "Tcp";
                readonly type: "[]Mask";
                readonly json: "tcp";
            }, {
                readonly go: "Udp";
                readonly type: "[]Mask";
                readonly json: "udp";
            }, {
                readonly go: "QuicParams";
                readonly type: "*QuicParamsConfig";
                readonly json: "quicParams";
            }];
            readonly Fragment: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "*Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Interval";
                readonly type: "*Int32Range";
                readonly json: "interval";
            }, {
                readonly go: "MaxSplit";
                readonly type: "*Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FragmentMask: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Lengths";
                readonly type: "[]Int32Range";
                readonly json: "lengths";
            }, {
                readonly go: "Delays";
                readonly type: "[]Int32Range";
                readonly json: "delays";
            }, {
                readonly go: "MaxSplit";
                readonly type: "Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FreedomConfig: readonly [{
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Redirect";
                readonly type: "string";
                readonly json: "redirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Fragment";
                readonly type: "*Fragment";
                readonly json: "fragment";
            }, {
                readonly go: "Noise";
                readonly type: "*Noise";
                readonly json: "noise";
            }, {
                readonly go: "Noises";
                readonly type: "[]*Noise";
                readonly json: "noises";
            }, {
                readonly go: "ProxyProtocol";
                readonly type: "uint32";
                readonly json: "proxyProtocol";
            }, {
                readonly go: "IPsBlocked";
                readonly type: "*StringList";
                readonly json: "ipsBlocked";
            }, {
                readonly go: "FinalRules";
                readonly type: "[]*FreedomFinalRuleConfig";
                readonly json: "finalRules";
            }];
            readonly FreedomFinalRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "BlockDelay";
                readonly type: "*Int32Range";
                readonly json: "blockDelay";
            }];
            readonly GeodataAssetConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "File";
                readonly type: "string";
                readonly json: "file";
            }];
            readonly GeodataConfig: readonly [{
                readonly go: "Cron";
                readonly type: "*string";
                readonly json: "cron";
            }, {
                readonly go: "Outbound";
                readonly type: "string";
                readonly json: "outbound";
            }, {
                readonly go: "Assets";
                readonly type: "[]*GeodataAssetConfig";
                readonly json: "assets";
            }];
            readonly GRPCConfig: readonly [{
                readonly go: "Authority";
                readonly type: "string";
                readonly json: "authority";
            }, {
                readonly go: "ServiceName";
                readonly type: "string";
                readonly json: "serviceName";
            }, {
                readonly go: "MultiMode";
                readonly type: "bool";
                readonly json: "multiMode";
            }, {
                readonly go: "IdleTimeout";
                readonly type: "int32";
                readonly json: "idle_timeout";
            }, {
                readonly go: "HealthCheckTimeout";
                readonly type: "int32";
                readonly json: "health_check_timeout";
            }, {
                readonly go: "PermitWithoutStream";
                readonly type: "bool";
                readonly json: "permit_without_stream";
            }, {
                readonly go: "InitialWindowsSize";
                readonly type: "int32";
                readonly json: "initial_windows_size";
            }, {
                readonly go: "UserAgent";
                readonly type: "string";
                readonly json: "user_agent";
            }];
            readonly HappyEyeballsConfig: readonly [{
                readonly go: "PrioritizeIPv6";
                readonly type: "bool";
                readonly json: "prioritizeIPv6";
            }, {
                readonly go: "TryDelayMs";
                readonly type: "uint64";
                readonly json: "tryDelayMs";
            }, {
                readonly go: "Interleave";
                readonly type: "uint32";
                readonly json: "interleave";
            }, {
                readonly go: "MaxConcurrentTry";
                readonly type: "uint32";
                readonly json: "maxConcurrentTry";
            }];
            readonly HeaderCustomTCP: readonly [{
                readonly go: "Clients";
                readonly type: "[][]TCPItem";
                readonly json: "clients";
            }, {
                readonly go: "Servers";
                readonly type: "[][]TCPItem";
                readonly json: "servers";
            }, {
                readonly go: "Errors";
                readonly type: "[][]TCPItem";
                readonly json: "errors";
            }];
            readonly HeaderCustomUDP: readonly [{
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Client";
                readonly type: "[]UDPItem";
                readonly json: "client";
            }, {
                readonly go: "Server";
                readonly type: "[]UDPItem";
                readonly json: "server";
            }];
            readonly healthCheckSettings: readonly [{
                readonly go: "Destination";
                readonly type: "string";
                readonly json: "destination";
            }, {
                readonly go: "Connectivity";
                readonly type: "string";
                readonly json: "connectivity";
            }, {
                readonly go: "Interval";
                readonly type: "duration.Duration";
                readonly json: "interval";
            }, {
                readonly go: "SamplingCount";
                readonly type: "int";
                readonly json: "sampling";
            }, {
                readonly go: "Timeout";
                readonly type: "duration.Duration";
                readonly json: "timeout";
            }, {
                readonly go: "HttpMethod";
                readonly type: "string";
                readonly json: "httpMethod";
            }];
            readonly HTTPAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly HTTPClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*HTTPRemoteConfig";
                readonly json: "servers";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly HTTPRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly HTTPResponse: readonly [];
            readonly HTTPServerConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]*HTTPAccount";
                readonly json: "users";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*HTTPAccount";
                readonly json: "accounts";
            }, {
                readonly go: "Transparent";
                readonly type: "bool";
                readonly json: "allowTransparent";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly HttpUpgradeConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly HysteriaClientConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly HysteriaConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Congestion";
                readonly type: "*string";
                readonly json: "congestion";
            }, {
                readonly go: "Up";
                readonly type: "*Bandwidth";
                readonly json: "up";
            }, {
                readonly go: "Down";
                readonly type: "*Bandwidth";
                readonly json: "down";
            }, {
                readonly go: "UdpHop";
                readonly type: "*UdpHop";
                readonly json: "udphop";
            }, {
                readonly go: "UdpIdleTimeout";
                readonly type: "int64";
                readonly json: "udpIdleTimeout";
            }, {
                readonly go: "Masquerade";
                readonly type: "Masquerade";
                readonly json: "masquerade";
            }];
            readonly HysteriaServerConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Users";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "clients";
            }];
            readonly HysteriaUserConfig: readonly [{
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly InboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "PortList";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "ListenOn";
                readonly type: "*Address";
                readonly json: "listen";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "SniffingConfig";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly KCPConfig: readonly [{
                readonly go: "Mtu";
                readonly type: "*uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Tti";
                readonly type: "*uint32";
                readonly json: "tti";
            }, {
                readonly go: "UpCap";
                readonly type: "*uint32";
                readonly json: "uplinkCapacity";
            }, {
                readonly go: "DownCap";
                readonly type: "*uint32";
                readonly json: "downlinkCapacity";
            }, {
                readonly go: "CwndMultiplier";
                readonly type: "*uint32";
                readonly json: "cwndMultiplier";
            }, {
                readonly go: "MaxSendingWindow";
                readonly type: "*uint32";
                readonly json: "maxSendingWindow";
            }, {
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "Seed";
                readonly type: "*string";
                readonly json: "seed";
            }];
            readonly LogConfig: readonly [{
                readonly go: "AccessLog";
                readonly type: "string";
                readonly json: "access";
            }, {
                readonly go: "ErrorLog";
                readonly type: "string";
                readonly json: "error";
            }, {
                readonly go: "LogLevel";
                readonly type: "string";
                readonly json: "loglevel";
            }, {
                readonly go: "DNSLog";
                readonly type: "bool";
                readonly json: "dnsLog";
            }, {
                readonly go: "MaskAddress";
                readonly type: "string";
                readonly json: "maskAddress";
            }];
            readonly LoopbackConfig: readonly [{
                readonly go: "InboundTag";
                readonly type: "string";
                readonly json: "inboundTag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly Mask: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly Masquerade: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dir";
                readonly type: "string";
                readonly json: "dir";
            }, {
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "RewriteHost";
                readonly type: "bool";
                readonly json: "rewriteHost";
            }, {
                readonly go: "Insecure";
                readonly type: "bool";
                readonly json: "insecure";
            }, {
                readonly go: "Content";
                readonly type: "string";
                readonly json: "content";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "StatusCode";
                readonly type: "int32";
                readonly json: "statusCode";
            }];
            readonly MetricsConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }];
            readonly MkcpLegacy: readonly [{
                readonly go: "Header";
                readonly type: "string";
                readonly json: "header";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }];
            readonly MuxConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "Concurrency";
                readonly type: "int16";
                readonly json: "concurrency";
            }, {
                readonly go: "XudpConcurrency";
                readonly type: "int16";
                readonly json: "xudpConcurrency";
            }, {
                readonly go: "XudpProxyUDP443";
                readonly type: "string";
                readonly json: "xudpProxyUDP443";
            }];
            readonly NameServerConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "SkipFallback";
                readonly type: "bool";
                readonly json: "skipFallback";
            }, {
                readonly go: "Domains";
                readonly type: "StringList";
                readonly json: "domains";
            }, {
                readonly go: "ExpectedIPs";
                readonly type: "StringList";
                readonly json: "expectedIPs";
            }, {
                readonly go: "ExpectIPs";
                readonly type: "StringList";
                readonly json: "expectIPs";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TimeoutMs";
                readonly type: "uint64";
                readonly json: "timeoutMs";
            }, {
                readonly go: "DisableCache";
                readonly type: "*bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "*bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "*uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "FinalQuery";
                readonly type: "bool";
                readonly json: "finalQuery";
            }, {
                readonly go: "UnexpectedIPs";
                readonly type: "StringList";
                readonly json: "unexpectedIPs";
            }];
            readonly Noise: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "string";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "*Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "ApplyTo";
                readonly type: "string";
                readonly json: "applyTo";
            }];
            readonly NoiseItem: readonly [{
                readonly go: "Rand";
                readonly type: "Int32Range";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }];
            readonly NoiseMask: readonly [{
                readonly go: "Reset";
                readonly type: "Int32Range";
                readonly json: "reset";
            }, {
                readonly go: "Noise";
                readonly type: "[]NoiseItem";
                readonly json: "noise";
            }];
            readonly NoneResponse: readonly [];
            readonly NoOpConnectionAuthenticator: readonly [];
            readonly ObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "ProbeURL";
                readonly type: "string";
                readonly json: "probeURL";
            }, {
                readonly go: "ProbeInterval";
                readonly type: "duration.Duration";
                readonly json: "probeInterval";
            }, {
                readonly go: "EnableConcurrency";
                readonly type: "bool";
                readonly json: "enableConcurrency";
            }];
            readonly OutboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "SendThrough";
                readonly type: "*string";
                readonly json: "sendThrough";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "ProxySettings";
                readonly type: "*ProxyConfig";
                readonly json: "proxySettings";
            }, {
                readonly go: "MuxSettings";
                readonly type: "*MuxConfig";
                readonly json: "mux";
            }, {
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }];
            readonly Policy: readonly [{
                readonly go: "Handshake";
                readonly type: "*uint32";
                readonly json: "handshake";
            }, {
                readonly go: "ConnectionIdle";
                readonly type: "*uint32";
                readonly json: "connIdle";
            }, {
                readonly go: "UplinkOnly";
                readonly type: "*uint32";
                readonly json: "uplinkOnly";
            }, {
                readonly go: "DownlinkOnly";
                readonly type: "*uint32";
                readonly json: "downlinkOnly";
            }, {
                readonly go: "StatsUserUplink";
                readonly type: "bool";
                readonly json: "statsUserUplink";
            }, {
                readonly go: "StatsUserDownlink";
                readonly type: "bool";
                readonly json: "statsUserDownlink";
            }, {
                readonly go: "StatsUserOnline";
                readonly type: "bool";
                readonly json: "statsUserOnline";
            }, {
                readonly go: "BufferSize";
                readonly type: "*int32";
                readonly json: "bufferSize";
            }];
            readonly PolicyConfig: readonly [{
                readonly go: "Levels";
                readonly type: "map[uint32]*Policy";
                readonly json: "levels";
            }, {
                readonly go: "System";
                readonly type: "*SystemPolicy";
                readonly json: "system";
            }];
            readonly PortalConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly ProxyConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TransportLayerProxy";
                readonly type: "bool";
                readonly json: "transportLayer";
            }];
            readonly QuicParamsConfig: readonly [{
                readonly go: "Congestion";
                readonly type: "string";
                readonly json: "congestion";
            }, {
                readonly go: "Debug";
                readonly type: "bool";
                readonly json: "debug";
            }, {
                readonly go: "BbrProfile";
                readonly type: "string";
                readonly json: "bbrProfile";
            }, {
                readonly go: "BrutalUp";
                readonly type: "Bandwidth";
                readonly json: "brutalUp";
            }, {
                readonly go: "BrutalDown";
                readonly type: "Bandwidth";
                readonly json: "brutalDown";
            }, {
                readonly go: "UdpHop";
                readonly type: "UdpHop";
                readonly json: "udpHop";
            }, {
                readonly go: "InitStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "initStreamReceiveWindow";
            }, {
                readonly go: "MaxStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxStreamReceiveWindow";
            }, {
                readonly go: "InitConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "initConnectionReceiveWindow";
            }, {
                readonly go: "MaxConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxConnectionReceiveWindow";
            }, {
                readonly go: "MaxIdleTimeout";
                readonly type: "int64";
                readonly json: "maxIdleTimeout";
            }, {
                readonly go: "KeepAlivePeriod";
                readonly type: "int64";
                readonly json: "keepAlivePeriod";
            }, {
                readonly go: "DisablePathMTUDiscovery";
                readonly type: "bool";
                readonly json: "disablePathMTUDiscovery";
            }, {
                readonly go: "MaxIncomingStreams";
                readonly type: "int64";
                readonly json: "maxIncomingStreams";
            }];
            readonly RawFieldRule: readonly [{
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "*StringList";
                readonly json: "domains";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "SourceIP";
                readonly type: "*StringList";
                readonly json: "sourceIP";
            }, {
                readonly go: "Source";
                readonly type: "*StringList";
                readonly json: "source";
            }, {
                readonly go: "SourcePort";
                readonly type: "*PortList";
                readonly json: "sourcePort";
            }, {
                readonly go: "User";
                readonly type: "*StringList";
                readonly json: "user";
            }, {
                readonly go: "VlessRoute";
                readonly type: "*PortList";
                readonly json: "vlessRoute";
            }, {
                readonly go: "InboundTag";
                readonly type: "*StringList";
                readonly json: "inboundTag";
            }, {
                readonly go: "Protocols";
                readonly type: "*StringList";
                readonly json: "protocol";
            }, {
                readonly go: "Attributes";
                readonly type: "map[string]string";
                readonly json: "attrs";
            }, {
                readonly go: "LocalIP";
                readonly type: "*StringList";
                readonly json: "localIP";
            }, {
                readonly go: "LocalPort";
                readonly type: "*PortList";
                readonly json: "localPort";
            }, {
                readonly go: "Process";
                readonly type: "*StringList";
                readonly json: "process";
            }, {
                readonly go: "Webhook";
                readonly type: "*WebhookRuleConfig";
                readonly json: "webhook";
            }];
            readonly REALITYConfig: readonly [{
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "Show";
                readonly type: "bool";
                readonly json: "show";
            }, {
                readonly go: "Target";
                readonly type: "json.RawMessage";
                readonly json: "target";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }, {
                readonly go: "ServerNames";
                readonly type: "[]string";
                readonly json: "serverNames";
            }, {
                readonly go: "PrivateKey";
                readonly type: "string";
                readonly json: "privateKey";
            }, {
                readonly go: "MinClientVer";
                readonly type: "string";
                readonly json: "minClientVer";
            }, {
                readonly go: "MaxClientVer";
                readonly type: "string";
                readonly json: "maxClientVer";
            }, {
                readonly go: "MaxTimeDiff";
                readonly type: "uint64";
                readonly json: "maxTimeDiff";
            }, {
                readonly go: "ShortIds";
                readonly type: "[]string";
                readonly json: "shortIds";
            }, {
                readonly go: "Mldsa65Seed";
                readonly type: "string";
                readonly json: "mldsa65Seed";
            }, {
                readonly go: "LimitFallbackUpload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackUpload";
            }, {
                readonly go: "LimitFallbackDownload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackDownload";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "ShortId";
                readonly type: "string";
                readonly json: "shortId";
            }, {
                readonly go: "Mldsa65Verify";
                readonly type: "string";
                readonly json: "mldsa65Verify";
            }, {
                readonly go: "SpiderX";
                readonly type: "string";
                readonly json: "spiderX";
            }];
            readonly Realm: readonly [{
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "StunServers";
                readonly type: "[]string";
                readonly json: "stunServers";
            }, {
                readonly go: "TlsConfig";
                readonly type: "*TLSConfig";
                readonly json: "tlsConfig";
            }];
            readonly ReverseConfig: readonly [{
                readonly go: "Bridges";
                readonly type: "[]BridgeConfig";
                readonly json: "bridges";
            }, {
                readonly go: "Portals";
                readonly type: "[]PortalConfig";
                readonly json: "portals";
            }];
            readonly RouterConfig: readonly [{
                readonly go: "RuleList";
                readonly type: "[]json.RawMessage";
                readonly json: "rules";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "*string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Balancers";
                readonly type: "[]*BalancingRule";
                readonly json: "balancers";
            }];
            readonly RouterRule: readonly [{
                readonly go: "RuleTag";
                readonly type: "string";
                readonly json: "ruleTag";
            }, {
                readonly go: "OutboundTag";
                readonly type: "string";
                readonly json: "outboundTag";
            }, {
                readonly go: "BalancerTag";
                readonly type: "string";
                readonly json: "balancerTag";
            }];
            readonly Salamander: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PacketSize";
                readonly type: "Int32Range";
                readonly json: "packetSize";
            }];
            readonly ShadowsocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Servers";
                readonly type: "[]*ShadowsocksServerTarget";
                readonly json: "servers";
            }];
            readonly ShadowsocksServerConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Users";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "NetworkList";
                readonly type: "*NetworkList";
                readonly json: "network";
            }];
            readonly ShadowsocksServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly ShadowsocksUserConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly SniffingConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "DestOverride";
                readonly type: "StringList";
                readonly json: "destOverride";
            }, {
                readonly go: "DomainsExcluded";
                readonly type: "StringList";
                readonly json: "domainsExcluded";
            }, {
                readonly go: "IPsExcluded";
                readonly type: "StringList";
                readonly json: "ipsExcluded";
            }, {
                readonly go: "MetadataOnly";
                readonly type: "bool";
                readonly json: "metadataOnly";
            }, {
                readonly go: "RouteOnly";
                readonly type: "bool";
                readonly json: "routeOnly";
            }];
            readonly SocketConfig: readonly [{
                readonly go: "Mark";
                readonly type: "int32";
                readonly json: "mark";
            }, {
                readonly go: "TFO";
                readonly type: "interface{}";
                readonly json: "tcpFastOpen";
            }, {
                readonly go: "TProxy";
                readonly type: "string";
                readonly json: "tproxy";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "DialerProxy";
                readonly type: "string";
                readonly json: "dialerProxy";
            }, {
                readonly go: "TCPKeepAliveInterval";
                readonly type: "int32";
                readonly json: "tcpKeepAliveInterval";
            }, {
                readonly go: "TCPKeepAliveIdle";
                readonly type: "int32";
                readonly json: "tcpKeepAliveIdle";
            }, {
                readonly go: "TCPCongestion";
                readonly type: "string";
                readonly json: "tcpCongestion";
            }, {
                readonly go: "TCPWindowClamp";
                readonly type: "int32";
                readonly json: "tcpWindowClamp";
            }, {
                readonly go: "TCPMaxSeg";
                readonly type: "int32";
                readonly json: "tcpMaxSeg";
            }, {
                readonly go: "Penetrate";
                readonly type: "bool";
                readonly json: "penetrate";
            }, {
                readonly go: "TCPUserTimeout";
                readonly type: "int32";
                readonly json: "tcpUserTimeout";
            }, {
                readonly go: "V6only";
                readonly type: "bool";
                readonly json: "v6only";
            }, {
                readonly go: "Interface";
                readonly type: "string";
                readonly json: "interface";
            }, {
                readonly go: "TcpMptcp";
                readonly type: "bool";
                readonly json: "tcpMptcp";
            }, {
                readonly go: "CustomSockopt";
                readonly type: "[]*CustomSockoptConfig";
                readonly json: "customSockopt";
            }, {
                readonly go: "AddressPortStrategy";
                readonly type: "string";
                readonly json: "addressPortStrategy";
            }, {
                readonly go: "HappyEyeballsSettings";
                readonly type: "*HappyEyeballsConfig";
                readonly json: "happyEyeballs";
            }, {
                readonly go: "TrustedXForwardedFor";
                readonly type: "[]string";
                readonly json: "trustedXForwardedFor";
            }];
            readonly SocksAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly SocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*SocksRemoteConfig";
                readonly json: "servers";
            }];
            readonly SocksRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly SocksServerConfig: readonly [{
                readonly go: "AuthMethod";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Users";
                readonly type: "[]*SocksAccount";
                readonly json: "users";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*SocksAccount";
                readonly json: "accounts";
            }, {
                readonly go: "UDP";
                readonly type: "bool";
                readonly json: "udp";
            }, {
                readonly go: "Host";
                readonly type: "*Address";
                readonly json: "ip";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly SplitHTTPConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "XPaddingBytes";
                readonly type: "Int32Range";
                readonly json: "xPaddingBytes";
            }, {
                readonly go: "XPaddingObfsMode";
                readonly type: "bool";
                readonly json: "xPaddingObfsMode";
            }, {
                readonly go: "XPaddingKey";
                readonly type: "string";
                readonly json: "xPaddingKey";
            }, {
                readonly go: "XPaddingHeader";
                readonly type: "string";
                readonly json: "xPaddingHeader";
            }, {
                readonly go: "XPaddingPlacement";
                readonly type: "string";
                readonly json: "xPaddingPlacement";
            }, {
                readonly go: "XPaddingMethod";
                readonly type: "string";
                readonly json: "xPaddingMethod";
            }, {
                readonly go: "UplinkHTTPMethod";
                readonly type: "string";
                readonly json: "uplinkHTTPMethod";
            }, {
                readonly go: "SessionIDPlacement";
                readonly type: "string";
                readonly json: "sessionIDPlacement";
            }, {
                readonly go: "SessionIDKey";
                readonly type: "string";
                readonly json: "sessionIDKey";
            }, {
                readonly go: "SessionIDTable";
                readonly type: "string";
                readonly json: "sessionIDTable";
            }, {
                readonly go: "SessionIDLength";
                readonly type: "Int32Range";
                readonly json: "sessionIDLength";
            }, {
                readonly go: "SeqPlacement";
                readonly type: "string";
                readonly json: "seqPlacement";
            }, {
                readonly go: "SeqKey";
                readonly type: "string";
                readonly json: "seqKey";
            }, {
                readonly go: "UplinkDataPlacement";
                readonly type: "string";
                readonly json: "uplinkDataPlacement";
            }, {
                readonly go: "UplinkDataKey";
                readonly type: "string";
                readonly json: "uplinkDataKey";
            }, {
                readonly go: "UplinkChunkSize";
                readonly type: "Int32Range";
                readonly json: "uplinkChunkSize";
            }, {
                readonly go: "NoGRPCHeader";
                readonly type: "bool";
                readonly json: "noGRPCHeader";
            }, {
                readonly go: "NoSSEHeader";
                readonly type: "bool";
                readonly json: "noSSEHeader";
            }, {
                readonly go: "ScMaxEachPostBytes";
                readonly type: "Int32Range";
                readonly json: "scMaxEachPostBytes";
            }, {
                readonly go: "ScMinPostsIntervalMs";
                readonly type: "Int32Range";
                readonly json: "scMinPostsIntervalMs";
            }, {
                readonly go: "ScMaxBufferedPosts";
                readonly type: "int64";
                readonly json: "scMaxBufferedPosts";
            }, {
                readonly go: "ScStreamUpServerSecs";
                readonly type: "Int32Range";
                readonly json: "scStreamUpServerSecs";
            }, {
                readonly go: "ServerMaxHeaderBytes";
                readonly type: "int32";
                readonly json: "serverMaxHeaderBytes";
            }, {
                readonly go: "Xmux";
                readonly type: "XmuxConfig";
                readonly json: "xmux";
            }, {
                readonly go: "DownloadSettings";
                readonly type: "*StreamConfig";
                readonly json: "downloadSettings";
            }, {
                readonly go: "Extra";
                readonly type: "json.RawMessage";
                readonly json: "extra";
            }];
            readonly StatsConfig: readonly [];
            readonly StrategyConfig: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly strategyEmptyConfig: readonly [];
            readonly strategyLeastLoadConfig: readonly [{
                readonly go: "Costs";
                readonly type: "[]*router.StrategyWeight";
                readonly json: "costs";
            }, {
                readonly go: "Baselines";
                readonly type: "[]duration.Duration";
                readonly json: "baselines";
            }, {
                readonly go: "Expected";
                readonly type: "int32";
                readonly json: "expected";
            }, {
                readonly go: "MaxRTT";
                readonly type: "duration.Duration";
                readonly json: "maxRTT";
            }, {
                readonly go: "Tolerance";
                readonly type: "float64";
                readonly json: "tolerance";
            }];
            readonly StreamConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Method";
                readonly type: "*TransportProtocol";
                readonly json: "method";
            }, {
                readonly go: "Network";
                readonly type: "*TransportProtocol";
                readonly json: "network";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "FinalMask";
                readonly type: "*FinalMask";
                readonly json: "finalmask";
            }, {
                readonly go: "TLSSettings";
                readonly type: "*TLSConfig";
                readonly json: "tlsSettings";
            }, {
                readonly go: "REALITYSettings";
                readonly type: "*REALITYConfig";
                readonly json: "realitySettings";
            }, {
                readonly go: "RAWSettings";
                readonly type: "*TCPConfig";
                readonly json: "rawSettings";
            }, {
                readonly go: "TCPSettings";
                readonly type: "*TCPConfig";
                readonly json: "tcpSettings";
            }, {
                readonly go: "XHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "xhttpSettings";
            }, {
                readonly go: "SplitHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "splithttpSettings";
            }, {
                readonly go: "KCPSettings";
                readonly type: "*KCPConfig";
                readonly json: "kcpSettings";
            }, {
                readonly go: "GRPCSettings";
                readonly type: "*GRPCConfig";
                readonly json: "grpcSettings";
            }, {
                readonly go: "WSSettings";
                readonly type: "*WebSocketConfig";
                readonly json: "wsSettings";
            }, {
                readonly go: "HTTPUPGRADESettings";
                readonly type: "*HttpUpgradeConfig";
                readonly json: "httpupgradeSettings";
            }, {
                readonly go: "HysteriaSettings";
                readonly type: "*HysteriaConfig";
                readonly json: "hysteriaSettings";
            }, {
                readonly go: "SocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "sockopt";
            }];
            readonly Sudoku: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "ASCII";
                readonly type: "string";
                readonly json: "ascii";
            }, {
                readonly go: "CustomTable";
                readonly type: "string";
                readonly json: "customTable";
            }, {
                readonly go: "LegacyCustomTable";
                readonly type: "string";
                readonly json: "custom_table";
            }, {
                readonly go: "CustomTables";
                readonly type: "[]string";
                readonly json: "customTables";
            }, {
                readonly go: "LegacyCustomSets";
                readonly type: "[]string";
                readonly json: "custom_tables";
            }, {
                readonly go: "PaddingMin";
                readonly type: "uint32";
                readonly json: "paddingMin";
            }, {
                readonly go: "LegacyPaddingMin";
                readonly type: "uint32";
                readonly json: "padding_min";
            }, {
                readonly go: "PaddingMax";
                readonly type: "uint32";
                readonly json: "paddingMax";
            }, {
                readonly go: "LegacyPaddingMax";
                readonly type: "uint32";
                readonly json: "padding_max";
            }];
            readonly SystemPolicy: readonly [{
                readonly go: "StatsInboundUplink";
                readonly type: "bool";
                readonly json: "statsInboundUplink";
            }, {
                readonly go: "StatsInboundDownlink";
                readonly type: "bool";
                readonly json: "statsInboundDownlink";
            }, {
                readonly go: "StatsOutboundUplink";
                readonly type: "bool";
                readonly json: "statsOutboundUplink";
            }, {
                readonly go: "StatsOutboundDownlink";
                readonly type: "bool";
                readonly json: "statsOutboundDownlink";
            }];
            readonly TCPConfig: readonly [{
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly TCPItem: readonly [{
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly TLSCertConfig: readonly [{
                readonly go: "CertFile";
                readonly type: "string";
                readonly json: "certificateFile";
            }, {
                readonly go: "CertStr";
                readonly type: "[]string";
                readonly json: "certificate";
            }, {
                readonly go: "KeyFile";
                readonly type: "string";
                readonly json: "keyFile";
            }, {
                readonly go: "KeyStr";
                readonly type: "[]string";
                readonly json: "key";
            }, {
                readonly go: "Usage";
                readonly type: "string";
                readonly json: "usage";
            }, {
                readonly go: "OcspStapling";
                readonly type: "uint64";
                readonly json: "ocspStapling";
            }, {
                readonly go: "OneTimeLoading";
                readonly type: "bool";
                readonly json: "oneTimeLoading";
            }, {
                readonly go: "BuildChain";
                readonly type: "bool";
                readonly json: "buildChain";
            }];
            readonly TLSConfig: readonly [{
                readonly go: "AllowInsecure";
                readonly type: "bool";
                readonly json: "allowInsecure";
            }, {
                readonly go: "Certs";
                readonly type: "[]*TLSCertConfig";
                readonly json: "certificates";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "ALPN";
                readonly type: "*StringList";
                readonly json: "alpn";
            }, {
                readonly go: "EnableSessionResumption";
                readonly type: "bool";
                readonly json: "enableSessionResumption";
            }, {
                readonly go: "DisableSystemRoot";
                readonly type: "bool";
                readonly json: "disableSystemRoot";
            }, {
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "minVersion";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "maxVersion";
            }, {
                readonly go: "CipherSuites";
                readonly type: "string";
                readonly json: "cipherSuites";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "RejectUnknownSNI";
                readonly type: "bool";
                readonly json: "rejectUnknownSni";
            }, {
                readonly go: "CurvePreferences";
                readonly type: "*StringList";
                readonly json: "curvePreferences";
            }, {
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "PinnedPeerCertSha256";
                readonly type: "string";
                readonly json: "pinnedPeerCertSha256";
            }, {
                readonly go: "VerifyPeerCertByName";
                readonly type: "string";
                readonly json: "verifyPeerCertByName";
            }, {
                readonly go: "ECHServerKeys";
                readonly type: "string";
                readonly json: "echServerKeys";
            }, {
                readonly go: "ECHConfigList";
                readonly type: "string";
                readonly json: "echConfigList";
            }, {
                readonly go: "ECHSocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "echSockopt";
            }];
            readonly TrojanClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Servers";
                readonly type: "[]*TrojanServerTarget";
                readonly json: "servers";
            }];
            readonly TrojanInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly TrojanServerConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*TrojanInboundFallback";
                readonly json: "fallbacks";
            }];
            readonly TrojanServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TrojanUserConfig: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TunConfig: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "MTU";
                readonly type: "uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Gateway";
                readonly type: "[]string";
                readonly json: "gateway";
            }, {
                readonly go: "DNS";
                readonly type: "[]string";
                readonly json: "dns";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "AutoSystemRoutingTable";
                readonly type: "[]string";
                readonly json: "autoSystemRoutingTable";
            }, {
                readonly go: "AutoOutboundsInterface";
                readonly type: "*string";
                readonly json: "autoOutboundsInterface";
            }];
            readonly UdpHop: readonly [{
                readonly go: "PortList";
                readonly type: "PortList";
                readonly json: "ports";
            }, {
                readonly go: "Interval";
                readonly type: "Int32Range";
                readonly json: "interval";
            }];
            readonly UDPItem: readonly [{
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly User: readonly [{
                readonly go: "EmailString";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "LevelByte";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VersionConfig: readonly [{
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "min";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "max";
            }];
            readonly VLessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Decryption";
                readonly type: "string";
                readonly json: "decryption";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*VLessInboundFallback";
                readonly json: "fallbacks";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }];
            readonly VLessInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly VLessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Id";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Seed";
                readonly type: "string";
                readonly json: "seed";
            }, {
                readonly go: "Encryption";
                readonly type: "string";
                readonly json: "encryption";
            }, {
                readonly go: "Reverse";
                readonly type: "*VLessReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "Testpre";
                readonly type: "uint32";
                readonly json: "testpre";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }, {
                readonly go: "Vnext";
                readonly type: "[]*VLessOutboundVnext";
                readonly json: "vnext";
            }];
            readonly VLessOutboundVnext: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly VLessReverseConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly VMessAccount: readonly [{
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }];
            readonly VMessDefaultConfig: readonly [{
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VMessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Defaults";
                readonly type: "*VMessDefaultConfig";
                readonly json: "default";
            }];
            readonly VMessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }, {
                readonly go: "Receivers";
                readonly type: "[]*VMessOutboundTarget";
                readonly json: "vnext";
            }];
            readonly VMessOutboundTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly WebhookRuleConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "Deduplication";
                readonly type: "uint32";
                readonly json: "deduplication";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly WebSocketConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "HeartbeatPeriod";
                readonly type: "uint32";
                readonly json: "heartbeatPeriod";
            }];
            readonly WireGuardConfig: readonly [{
                readonly go: "NoKernelTun";
                readonly type: "bool";
                readonly json: "noKernelTun";
            }, {
                readonly go: "SecretKey";
                readonly type: "string";
                readonly json: "secretKey";
            }, {
                readonly go: "Address";
                readonly type: "[]string";
                readonly json: "address";
            }, {
                readonly go: "Peers";
                readonly type: "[]*WireGuardPeerConfig";
                readonly json: "peers";
            }, {
                readonly go: "MTU";
                readonly type: "int32";
                readonly json: "mtu";
            }, {
                readonly go: "Reserved";
                readonly type: "[]byte";
                readonly json: "reserved";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }];
            readonly WireGuardPeerConfig: readonly [{
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "PreSharedKey";
                readonly type: "string";
                readonly json: "preSharedKey";
            }, {
                readonly go: "Endpoint";
                readonly type: "string";
                readonly json: "endpoint";
            }, {
                readonly go: "KeepAlive";
                readonly type: "uint32";
                readonly json: "keepAlive";
            }, {
                readonly go: "AllowedIPs";
                readonly type: "[]string";
                readonly json: "allowedIPs";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly Xdns: readonly [{
                readonly go: "Domain";
                readonly type: "json.RawMessage";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "[]string";
                readonly json: "domains";
            }, {
                readonly go: "Resolvers";
                readonly type: "[]string";
                readonly json: "resolvers";
            }];
            readonly Xicmp: readonly [{
                readonly go: "DGRAM";
                readonly type: "bool";
                readonly json: "dgram";
            }, {
                readonly go: "IPs";
                readonly type: "[]string";
                readonly json: "ips";
            }];
            readonly XMC: readonly [{
                readonly go: "Hostname";
                readonly type: "string";
                readonly json: "hostname";
            }, {
                readonly go: "Usernames";
                readonly type: "[]string";
                readonly json: "usernames";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly XmuxConfig: readonly [{
                readonly go: "MaxConcurrency";
                readonly type: "Int32Range";
                readonly json: "maxConcurrency";
            }, {
                readonly go: "MaxConnections";
                readonly type: "Int32Range";
                readonly json: "maxConnections";
            }, {
                readonly go: "CMaxReuseTimes";
                readonly type: "Int32Range";
                readonly json: "cMaxReuseTimes";
            }, {
                readonly go: "HMaxRequestTimes";
                readonly type: "Int32Range";
                readonly json: "hMaxRequestTimes";
            }, {
                readonly go: "HMaxReusableSecs";
                readonly type: "Int32Range";
                readonly json: "hMaxReusableSecs";
            }, {
                readonly go: "HKeepAlivePeriod";
                readonly type: "int64";
                readonly json: "hKeepAlivePeriod";
            }];
        };
    }, {
        readonly tag: "v26.7.28";
        readonly version: "26.7.28";
        readonly commit: "5ca6f4b7d4dc20a881d4330e498892697627ec0c";
        readonly removedFeatures: readonly [{
            readonly feature: "noise = { ... }";
            readonly replacement: "noises = [ { ... } ]";
            readonly source: "infra/conf/freedom.go";
            readonly keys: readonly ["freedom noise"];
        }, {
            readonly feature: "domain";
            readonly replacement: "domains(server) & resolvers(client)";
            readonly source: "infra/conf/transport_finalmask.go";
            readonly keys: readonly ["finalmask xdns domain"];
        }, {
            readonly feature: "HTTP transport (without header padding, etc.)";
            readonly replacement: "XHTTP stream-one H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["http-transport"];
        }, {
            readonly feature: "Legacy XTLS";
            readonly replacement: "xtls-rprx-vision with TLS or REALITY";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["xtls"];
        }, {
            readonly feature: "QUIC transport (without web service, etc.)";
            readonly replacement: "XHTTP stream-one H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["quic"];
        }, {
            readonly feature: "mkcp header & seed";
            readonly replacement: "finalmask/udp header-* & mkcp-original & mkcp-aes128gcm";
            readonly source: "infra/conf/transport_method.go";
            readonly keys: readonly ["mkcp header/seed"];
        }, {
            readonly feature: "\"allowInsecure\"";
            readonly replacement: "\"pinnedPeerCertSha256\"(pcs) and \"verifyPeerCertByName\"(vcn)";
            readonly source: "infra/conf/transport_security.go";
            readonly keys: readonly ["allowInsecure"];
        }, {
            readonly feature: "Flow for Trojan";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan flow"];
        }, {
            readonly feature: "\"legacy reverse\"";
            readonly replacement: "\"VLESS Reverse Proxy\"";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly [];
        }, {
            readonly feature: "Global transport config";
            readonly replacement: "streamSettings in inbounds and outbounds";
            readonly source: "infra/conf/xray.go";
            readonly keys: readonly ["global transport"];
        }];
        readonly deprecatedFeatures: readonly [{
            readonly feature: "\"nonIPQuery\" and \"blockTypes\"";
            readonly replacement: "\"rules\"";
            readonly source: "infra/conf/dns_proxy.go";
            readonly keys: readonly ["dns legacy nonIPQuery blockTypes"];
        }, {
            readonly feature: "Shadowsocks (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/shadowsocks.go";
            readonly keys: readonly ["shadowsocks"];
        }, {
            readonly feature: "gRPC transport (with unnecessary costs, etc.)";
            readonly replacement: "XHTTP stream-up H2";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["grpc"];
        }, {
            readonly feature: "HTTPUpgrade transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["httpupgrade"];
        }, {
            readonly feature: "WebSocket transport (with ALPN http/1.1, etc.)";
            readonly replacement: "XHTTP H2 & H3";
            readonly source: "infra/conf/transport_internet.go";
            readonly keys: readonly ["websocket", "ws"];
        }, {
            readonly feature: "\"host\" in \"headers\"";
            readonly replacement: "independent \"host\"";
            readonly source: "infra/conf/transport_method.go";
            readonly keys: readonly ["xhttp headers host"];
        }, {
            readonly feature: "Trojan (with no Flow, etc.)";
            readonly replacement: "VLESS with Flow & Seed";
            readonly source: "infra/conf/trojan.go";
            readonly keys: readonly ["trojan"];
        }, {
            readonly feature: "VMess (with no Forward Secrecy, etc.)";
            readonly replacement: "VLESS Encryption";
            readonly source: "infra/conf/vmess.go";
            readonly keys: readonly ["vmess"];
        }];
        readonly topLevelKeys: readonly ["api", "burstObservatory", "dns", "env", "fakeDns", "geodata", "inbounds", "log", "metrics", "observatory", "outbounds", "policy", "reverse", "routing", "stats", "transport", "version"];
        readonly inboundProtocols: readonly [{
            readonly protocol: "dokodemo-door";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPServerConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaServerConfig";
        }, {
            readonly protocol: "mixed";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksServerConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksServerConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanServerConfig";
        }, {
            readonly protocol: "tun";
            readonly config: "TunConfig";
        }, {
            readonly protocol: "tunnel";
            readonly config: "DokodemoConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessInboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessInboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly outboundProtocols: readonly [{
            readonly protocol: "blackhole";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "block";
            readonly config: "BlackholeConfig";
        }, {
            readonly protocol: "direct";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "dns";
            readonly config: "DNSOutboundConfig";
        }, {
            readonly protocol: "freedom";
            readonly config: "FreedomConfig";
        }, {
            readonly protocol: "http";
            readonly config: "HTTPClientConfig";
        }, {
            readonly protocol: "hysteria";
            readonly config: "HysteriaClientConfig";
        }, {
            readonly protocol: "loopback";
            readonly config: "LoopbackConfig";
        }, {
            readonly protocol: "shadowsocks";
            readonly config: "ShadowsocksClientConfig";
        }, {
            readonly protocol: "socks";
            readonly config: "SocksClientConfig";
        }, {
            readonly protocol: "trojan";
            readonly config: "TrojanClientConfig";
        }, {
            readonly protocol: "vless";
            readonly config: "VLessOutboundConfig";
        }, {
            readonly protocol: "vmess";
            readonly config: "VMessOutboundConfig";
        }, {
            readonly protocol: "wireguard";
            readonly config: "WireGuardConfig";
        }];
        readonly streamFields: readonly [{
            readonly go: "Address";
            readonly type: "*Address";
            readonly json: "address";
        }, {
            readonly go: "Port";
            readonly type: "uint16";
            readonly json: "port";
        }, {
            readonly go: "Method";
            readonly type: "*TransportProtocol";
            readonly json: "method";
        }, {
            readonly go: "Network";
            readonly type: "*TransportProtocol";
            readonly json: "network";
        }, {
            readonly go: "Security";
            readonly type: "string";
            readonly json: "security";
        }, {
            readonly go: "FinalMask";
            readonly type: "*FinalMask";
            readonly json: "finalmask";
        }, {
            readonly go: "TLSSettings";
            readonly type: "*TLSConfig";
            readonly json: "tlsSettings";
        }, {
            readonly go: "REALITYSettings";
            readonly type: "*REALITYConfig";
            readonly json: "realitySettings";
        }, {
            readonly go: "RAWSettings";
            readonly type: "*TCPConfig";
            readonly json: "rawSettings";
        }, {
            readonly go: "TCPSettings";
            readonly type: "*TCPConfig";
            readonly json: "tcpSettings";
        }, {
            readonly go: "XHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "xhttpSettings";
        }, {
            readonly go: "SplitHTTPSettings";
            readonly type: "*SplitHTTPConfig";
            readonly json: "splithttpSettings";
        }, {
            readonly go: "KCPSettings";
            readonly type: "*KCPConfig";
            readonly json: "kcpSettings";
        }, {
            readonly go: "GRPCSettings";
            readonly type: "*GRPCConfig";
            readonly json: "grpcSettings";
        }, {
            readonly go: "WSSettings";
            readonly type: "*WebSocketConfig";
            readonly json: "wsSettings";
        }, {
            readonly go: "HTTPUPGRADESettings";
            readonly type: "*HttpUpgradeConfig";
            readonly json: "httpupgradeSettings";
        }, {
            readonly go: "HysteriaSettings";
            readonly type: "*HysteriaConfig";
            readonly json: "hysteriaSettings";
        }, {
            readonly go: "SocketSettings";
            readonly type: "*SocketConfig";
            readonly json: "sockopt";
        }];
        readonly transportAliases: {
            readonly grpc: "grpc";
            readonly httpupgrade: "httpupgrade";
            readonly hysteria: "hysteria";
            readonly kcp: "mkcp";
            readonly mkcp: "mkcp";
            readonly raw: "tcp";
            readonly splithttp: "splithttp";
            readonly tcp: "tcp";
            readonly websocket: "websocket";
            readonly ws: "websocket";
            readonly xhttp: "splithttp";
        };
        readonly securityTypes: readonly ["none", "reality", "tls", "xtls"];
        readonly fingerprints: readonly ["360", "android", "chrome", "edge", "firefox", "hello360_11_0", "hello360_7_5", "hello360_auto", "helloandroid_11_okhttp", "hellochrome_100", "hellochrome_100_psk", "hellochrome_102", "hellochrome_106_shuffle", "hellochrome_112_psk_shuf", "hellochrome_114_padding_psk_shuf", "hellochrome_115_pq", "hellochrome_115_pq_psk", "hellochrome_120", "hellochrome_120_pq", "hellochrome_131", "hellochrome_133", "hellochrome_58", "hellochrome_62", "hellochrome_70", "hellochrome_72", "hellochrome_83", "hellochrome_87", "hellochrome_96", "hellochrome_auto", "helloedge_106", "helloedge_85", "helloedge_auto", "hellofirefox_102", "hellofirefox_105", "hellofirefox_120", "hellofirefox_148", "hellofirefox_55", "hellofirefox_56", "hellofirefox_63", "hellofirefox_65", "hellofirefox_99", "hellofirefox_auto", "hellogolang", "helloios_11_1", "helloios_12_1", "helloios_13", "helloios_14", "helloios_auto", "helloqq_11_1", "helloqq_auto", "hellorandomized", "hellorandomizedalpn", "hellorandomizednoalpn", "hellosafari_16_0", "hellosafari_26_3", "hellosafari_auto", "ios", "qq", "random", "randomized", "randomizednoalpn", "safari", "unsafe"];
        readonly alpn: readonly ["h3", "h2", "http/1.1"];
        readonly jsonLoaders: {
            readonly "infra/conf/transport_finalmask.go:tcpmaskLoader": readonly [{
                readonly protocol: "fragment";
                readonly config: "FragmentMask";
            }, {
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomTCP";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }, {
                readonly protocol: "xmc";
                readonly config: "XMC";
            }];
            readonly "infra/conf/transport_finalmask.go:udpmaskLoader": readonly [{
                readonly protocol: "header-custom";
                readonly config: "HeaderCustomUDP";
            }, {
                readonly protocol: "mkcp-legacy";
                readonly config: "MkcpLegacy";
            }, {
                readonly protocol: "noise";
                readonly config: "NoiseMask";
            }, {
                readonly protocol: "realm";
                readonly config: "Realm";
            }, {
                readonly protocol: "salamander";
                readonly config: "Salamander";
            }, {
                readonly protocol: "sudoku";
                readonly config: "Sudoku";
            }, {
                readonly protocol: "xdns";
                readonly config: "Xdns";
            }, {
                readonly protocol: "xicmp";
                readonly config: "Xicmp";
            }];
            readonly "infra/conf/transport_method.go:tcpHeaderLoader": readonly [{
                readonly protocol: "http";
                readonly config: "Authenticator";
            }, {
                readonly protocol: "none";
                readonly config: "NoOpConnectionAuthenticator";
            }];
            readonly "infra/conf/xray.go:inboundConfigLoader": readonly [{
                readonly protocol: "dokodemo-door";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPServerConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaServerConfig";
            }, {
                readonly protocol: "mixed";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksServerConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksServerConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanServerConfig";
            }, {
                readonly protocol: "tun";
                readonly config: "TunConfig";
            }, {
                readonly protocol: "tunnel";
                readonly config: "DokodemoConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessInboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessInboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
            readonly "infra/conf/xray.go:outboundConfigLoader": readonly [{
                readonly protocol: "blackhole";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "block";
                readonly config: "BlackholeConfig";
            }, {
                readonly protocol: "direct";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "dns";
                readonly config: "DNSOutboundConfig";
            }, {
                readonly protocol: "freedom";
                readonly config: "FreedomConfig";
            }, {
                readonly protocol: "http";
                readonly config: "HTTPClientConfig";
            }, {
                readonly protocol: "hysteria";
                readonly config: "HysteriaClientConfig";
            }, {
                readonly protocol: "loopback";
                readonly config: "LoopbackConfig";
            }, {
                readonly protocol: "shadowsocks";
                readonly config: "ShadowsocksClientConfig";
            }, {
                readonly protocol: "socks";
                readonly config: "SocksClientConfig";
            }, {
                readonly protocol: "trojan";
                readonly config: "TrojanClientConfig";
            }, {
                readonly protocol: "vless";
                readonly config: "VLessOutboundConfig";
            }, {
                readonly protocol: "vmess";
                readonly config: "VMessOutboundConfig";
            }, {
                readonly protocol: "wireguard";
                readonly config: "WireGuardConfig";
            }];
        };
        readonly structs: {
            readonly APIConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }, {
                readonly go: "Services";
                readonly type: "[]string";
                readonly json: "services";
            }];
            readonly Authenticator: readonly [{
                readonly go: "Request";
                readonly type: "AuthenticatorRequest";
                readonly json: "request";
            }, {
                readonly go: "Response";
                readonly type: "AuthenticatorResponse";
                readonly json: "response";
            }];
            readonly AuthenticatorRequest: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Method";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Path";
                readonly type: "StringList";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly AuthenticatorResponse: readonly [{
                readonly go: "Version";
                readonly type: "string";
                readonly json: "version";
            }, {
                readonly go: "Status";
                readonly type: "string";
                readonly json: "status";
            }, {
                readonly go: "Reason";
                readonly type: "string";
                readonly json: "reason";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]*StringList";
                readonly json: "headers";
            }];
            readonly BalancingRule: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Selectors";
                readonly type: "StringList";
                readonly json: "selector";
            }, {
                readonly go: "Strategy";
                readonly type: "StrategyConfig";
                readonly json: "strategy";
            }, {
                readonly go: "FallbackTag";
                readonly type: "string";
                readonly json: "fallbackTag";
            }];
            readonly BlackholeConfig: readonly [{
                readonly go: "Response";
                readonly type: "json.RawMessage";
                readonly json: "response";
            }];
            readonly BridgeConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly BurstObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "HealthCheck";
                readonly type: "*healthCheckSettings";
                readonly json: "pingConfig";
            }];
            readonly Config: readonly [{
                readonly go: "Transport";
                readonly type: "map[string]json.RawMessage";
                readonly json: "transport";
            }, {
                readonly go: "Env";
                readonly type: "EnvConfig";
                readonly json: "env";
            }, {
                readonly go: "LogConfig";
                readonly type: "*LogConfig";
                readonly json: "log";
            }, {
                readonly go: "RouterConfig";
                readonly type: "*RouterConfig";
                readonly json: "routing";
            }, {
                readonly go: "DNSConfig";
                readonly type: "*DNSConfig";
                readonly json: "dns";
            }, {
                readonly go: "InboundConfigs";
                readonly type: "[]InboundDetourConfig";
                readonly json: "inbounds";
            }, {
                readonly go: "OutboundConfigs";
                readonly type: "[]OutboundDetourConfig";
                readonly json: "outbounds";
            }, {
                readonly go: "Policy";
                readonly type: "*PolicyConfig";
                readonly json: "policy";
            }, {
                readonly go: "API";
                readonly type: "*APIConfig";
                readonly json: "api";
            }, {
                readonly go: "Metrics";
                readonly type: "*MetricsConfig";
                readonly json: "metrics";
            }, {
                readonly go: "Stats";
                readonly type: "*StatsConfig";
                readonly json: "stats";
            }, {
                readonly go: "Reverse";
                readonly type: "*ReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "FakeDNS";
                readonly type: "*FakeDNSConfig";
                readonly json: "fakeDns";
            }, {
                readonly go: "Observatory";
                readonly type: "*ObservatoryConfig";
                readonly json: "observatory";
            }, {
                readonly go: "BurstObservatory";
                readonly type: "*BurstObservatoryConfig";
                readonly json: "burstObservatory";
            }, {
                readonly go: "Version";
                readonly type: "*VersionConfig";
                readonly json: "version";
            }, {
                readonly go: "Geodata";
                readonly type: "*GeodataConfig";
                readonly json: "geodata";
            }];
            readonly CustomSockoptConfig: readonly [{
                readonly go: "Syetem";
                readonly type: "string";
                readonly json: "system";
            }, {
                readonly go: "Network";
                readonly type: "string";
                readonly json: "network";
            }, {
                readonly go: "Level";
                readonly type: "string";
                readonly json: "level";
            }, {
                readonly go: "Opt";
                readonly type: "string";
                readonly json: "opt";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }];
            readonly CustomTransform: readonly [{
                readonly go: "Op";
                readonly type: "string";
                readonly json: "op";
            }, {
                readonly go: "Args";
                readonly type: "[]CustomTransformArg";
                readonly json: "args";
            }];
            readonly CustomTransformArg: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Bytes";
                readonly type: "json.RawMessage";
                readonly json: "bytes";
            }, {
                readonly go: "U64";
                readonly type: "*uint64";
                readonly json: "u64";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Metadata";
                readonly type: "string";
                readonly json: "metadata";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }];
            readonly DNSConfig: readonly [{
                readonly go: "Servers";
                readonly type: "[]*NameServerConfig";
                readonly json: "servers";
            }, {
                readonly go: "Hosts";
                readonly type: "*HostsWrapper";
                readonly json: "hosts";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "DisableCache";
                readonly type: "bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "DisableFallback";
                readonly type: "bool";
                readonly json: "disableFallback";
            }, {
                readonly go: "DisableFallbackIfMatch";
                readonly type: "bool";
                readonly json: "disableFallbackIfMatch";
            }, {
                readonly go: "EnableParallelQuery";
                readonly type: "bool";
                readonly json: "enableParallelQuery";
            }, {
                readonly go: "UseSystemHosts";
                readonly type: "bool";
                readonly json: "useSystemHosts";
            }];
            readonly DNSOutboundConfig: readonly [{
                readonly go: "RewriteNetwork";
                readonly type: "Network";
                readonly json: "rewriteNetwork";
            }, {
                readonly go: "RewriteAddress";
                readonly type: "*Address";
                readonly json: "rewriteAddress";
            }, {
                readonly go: "RewritePort";
                readonly type: "uint16";
                readonly json: "rewritePort";
            }, {
                readonly go: "Network";
                readonly type: "Network";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Rules";
                readonly type: "[]*DNSOutboundRuleConfig";
                readonly json: "rules";
            }, {
                readonly go: "NonIPQuery";
                readonly type: "*string";
                readonly json: "nonIPQuery";
            }, {
                readonly go: "BlockTypes";
                readonly type: "*[]int32";
                readonly json: "blockTypes";
            }];
            readonly DNSOutboundRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "QType";
                readonly type: "*PortList";
                readonly json: "qType";
            }, {
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "RCode";
                readonly type: "uint32";
                readonly json: "rCode";
            }];
            readonly DokodemoConfig: readonly [{
                readonly go: "AllowedNetwork";
                readonly type: "*NetworkList";
                readonly json: "allowedNetwork";
            }, {
                readonly go: "RewriteAddress";
                readonly type: "*Address";
                readonly json: "rewriteAddress";
            }, {
                readonly go: "RewritePort";
                readonly type: "uint16";
                readonly json: "rewritePort";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "PortMap";
                readonly type: "map[string]string";
                readonly json: "portMap";
            }, {
                readonly go: "FollowRedirect";
                readonly type: "bool";
                readonly json: "followRedirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly FakeDNSPoolElementConfig: readonly [{
                readonly go: "IPPool";
                readonly type: "string";
                readonly json: "ipPool";
            }, {
                readonly go: "LRUSize";
                readonly type: "int64";
                readonly json: "poolSize";
            }];
            readonly FakeDNSPostProcessingStage: readonly [];
            readonly FinalMask: readonly [{
                readonly go: "Tcp";
                readonly type: "[]Mask";
                readonly json: "tcp";
            }, {
                readonly go: "Udp";
                readonly type: "[]Mask";
                readonly json: "udp";
            }, {
                readonly go: "QuicParams";
                readonly type: "*QuicParamsConfig";
                readonly json: "quicParams";
            }];
            readonly Fragment: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "*Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Interval";
                readonly type: "*Int32Range";
                readonly json: "interval";
            }, {
                readonly go: "MaxSplit";
                readonly type: "*Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FragmentMask: readonly [{
                readonly go: "Packets";
                readonly type: "string";
                readonly json: "packets";
            }, {
                readonly go: "Length";
                readonly type: "Int32Range";
                readonly json: "length";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Lengths";
                readonly type: "[]Int32Range";
                readonly json: "lengths";
            }, {
                readonly go: "Delays";
                readonly type: "[]Int32Range";
                readonly json: "delays";
            }, {
                readonly go: "MaxSplit";
                readonly type: "Int32Range";
                readonly json: "maxSplit";
            }];
            readonly FreedomConfig: readonly [{
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Redirect";
                readonly type: "string";
                readonly json: "redirect";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "Fragment";
                readonly type: "*Fragment";
                readonly json: "fragment";
            }, {
                readonly go: "Noise";
                readonly type: "*Noise";
                readonly json: "noise";
            }, {
                readonly go: "Noises";
                readonly type: "[]*Noise";
                readonly json: "noises";
            }, {
                readonly go: "ProxyProtocol";
                readonly type: "uint32";
                readonly json: "proxyProtocol";
            }, {
                readonly go: "IPsBlocked";
                readonly type: "*StringList";
                readonly json: "ipsBlocked";
            }, {
                readonly go: "FinalRules";
                readonly type: "[]*FreedomFinalRuleConfig";
                readonly json: "finalRules";
            }];
            readonly FreedomFinalRuleConfig: readonly [{
                readonly go: "Action";
                readonly type: "string";
                readonly json: "action";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "BlockDelay";
                readonly type: "*Int32Range";
                readonly json: "blockDelay";
            }];
            readonly GeodataAssetConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "File";
                readonly type: "string";
                readonly json: "file";
            }];
            readonly GeodataConfig: readonly [{
                readonly go: "Cron";
                readonly type: "*string";
                readonly json: "cron";
            }, {
                readonly go: "Outbound";
                readonly type: "string";
                readonly json: "outbound";
            }, {
                readonly go: "Assets";
                readonly type: "[]*GeodataAssetConfig";
                readonly json: "assets";
            }];
            readonly GRPCConfig: readonly [{
                readonly go: "Authority";
                readonly type: "string";
                readonly json: "authority";
            }, {
                readonly go: "ServiceName";
                readonly type: "string";
                readonly json: "serviceName";
            }, {
                readonly go: "MultiMode";
                readonly type: "bool";
                readonly json: "multiMode";
            }, {
                readonly go: "IdleTimeout";
                readonly type: "int32";
                readonly json: "idle_timeout";
            }, {
                readonly go: "HealthCheckTimeout";
                readonly type: "int32";
                readonly json: "health_check_timeout";
            }, {
                readonly go: "PermitWithoutStream";
                readonly type: "bool";
                readonly json: "permit_without_stream";
            }, {
                readonly go: "InitialWindowsSize";
                readonly type: "int32";
                readonly json: "initial_windows_size";
            }, {
                readonly go: "UserAgent";
                readonly type: "string";
                readonly json: "user_agent";
            }];
            readonly HappyEyeballsConfig: readonly [{
                readonly go: "PrioritizeIPv6";
                readonly type: "bool";
                readonly json: "prioritizeIPv6";
            }, {
                readonly go: "TryDelayMs";
                readonly type: "uint64";
                readonly json: "tryDelayMs";
            }, {
                readonly go: "Interleave";
                readonly type: "uint32";
                readonly json: "interleave";
            }, {
                readonly go: "MaxConcurrentTry";
                readonly type: "uint32";
                readonly json: "maxConcurrentTry";
            }];
            readonly HeaderCustomTCP: readonly [{
                readonly go: "Clients";
                readonly type: "[][]TCPItem";
                readonly json: "clients";
            }, {
                readonly go: "Servers";
                readonly type: "[][]TCPItem";
                readonly json: "servers";
            }, {
                readonly go: "Errors";
                readonly type: "[][]TCPItem";
                readonly json: "errors";
            }];
            readonly HeaderCustomUDP: readonly [{
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Client";
                readonly type: "[]UDPItem";
                readonly json: "client";
            }, {
                readonly go: "Server";
                readonly type: "[]UDPItem";
                readonly json: "server";
            }];
            readonly healthCheckSettings: readonly [{
                readonly go: "Destination";
                readonly type: "string";
                readonly json: "destination";
            }, {
                readonly go: "Connectivity";
                readonly type: "string";
                readonly json: "connectivity";
            }, {
                readonly go: "Interval";
                readonly type: "duration.Duration";
                readonly json: "interval";
            }, {
                readonly go: "SamplingCount";
                readonly type: "int";
                readonly json: "sampling";
            }, {
                readonly go: "Timeout";
                readonly type: "duration.Duration";
                readonly json: "timeout";
            }, {
                readonly go: "HttpMethod";
                readonly type: "string";
                readonly json: "httpMethod";
            }];
            readonly HTTPAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly HTTPClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*HTTPRemoteConfig";
                readonly json: "servers";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly HTTPRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly HTTPResponse: readonly [];
            readonly HTTPServerConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]*HTTPAccount";
                readonly json: "users";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*HTTPAccount";
                readonly json: "accounts";
            }, {
                readonly go: "Transparent";
                readonly type: "bool";
                readonly json: "allowTransparent";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly HttpUpgradeConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly HysteriaClientConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly HysteriaConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Congestion";
                readonly type: "*string";
                readonly json: "congestion";
            }, {
                readonly go: "Up";
                readonly type: "*Bandwidth";
                readonly json: "up";
            }, {
                readonly go: "Down";
                readonly type: "*Bandwidth";
                readonly json: "down";
            }, {
                readonly go: "UdpHop";
                readonly type: "*UdpHop";
                readonly json: "udphop";
            }, {
                readonly go: "UdpIdleTimeout";
                readonly type: "int64";
                readonly json: "udpIdleTimeout";
            }, {
                readonly go: "Masquerade";
                readonly type: "Masquerade";
                readonly json: "masquerade";
            }];
            readonly HysteriaServerConfig: readonly [{
                readonly go: "Version";
                readonly type: "int32";
                readonly json: "version";
            }, {
                readonly go: "Users";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*HysteriaUserConfig";
                readonly json: "clients";
            }];
            readonly HysteriaUserConfig: readonly [{
                readonly go: "Auth";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly InboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "PortList";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "ListenOn";
                readonly type: "*Address";
                readonly json: "listen";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "SniffingConfig";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly KCPConfig: readonly [{
                readonly go: "Mtu";
                readonly type: "*uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Tti";
                readonly type: "*uint32";
                readonly json: "tti";
            }, {
                readonly go: "UpCap";
                readonly type: "*uint32";
                readonly json: "uplinkCapacity";
            }, {
                readonly go: "DownCap";
                readonly type: "*uint32";
                readonly json: "downlinkCapacity";
            }, {
                readonly go: "CwndMultiplier";
                readonly type: "*uint32";
                readonly json: "cwndMultiplier";
            }, {
                readonly go: "MaxSendingWindow";
                readonly type: "*uint32";
                readonly json: "maxSendingWindow";
            }, {
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "Seed";
                readonly type: "*string";
                readonly json: "seed";
            }];
            readonly LogConfig: readonly [{
                readonly go: "AccessLog";
                readonly type: "string";
                readonly json: "access";
            }, {
                readonly go: "ErrorLog";
                readonly type: "string";
                readonly json: "error";
            }, {
                readonly go: "LogLevel";
                readonly type: "string";
                readonly json: "loglevel";
            }, {
                readonly go: "DNSLog";
                readonly type: "bool";
                readonly json: "dnsLog";
            }, {
                readonly go: "MaskAddress";
                readonly type: "string";
                readonly json: "maskAddress";
            }];
            readonly LoopbackConfig: readonly [{
                readonly go: "InboundTag";
                readonly type: "string";
                readonly json: "inboundTag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly Mask: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly Masquerade: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dir";
                readonly type: "string";
                readonly json: "dir";
            }, {
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "RewriteHost";
                readonly type: "bool";
                readonly json: "rewriteHost";
            }, {
                readonly go: "Insecure";
                readonly type: "bool";
                readonly json: "insecure";
            }, {
                readonly go: "Content";
                readonly type: "string";
                readonly json: "content";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "StatusCode";
                readonly type: "int32";
                readonly json: "statusCode";
            }];
            readonly MetricsConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Listen";
                readonly type: "string";
                readonly json: "listen";
            }];
            readonly MkcpLegacy: readonly [{
                readonly go: "Header";
                readonly type: "string";
                readonly json: "header";
            }, {
                readonly go: "Value";
                readonly type: "string";
                readonly json: "value";
            }];
            readonly MuxConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "Concurrency";
                readonly type: "int16";
                readonly json: "concurrency";
            }, {
                readonly go: "XudpConcurrency";
                readonly type: "int16";
                readonly json: "xudpConcurrency";
            }, {
                readonly go: "XudpProxyUDP443";
                readonly type: "string";
                readonly json: "xudpProxyUDP443";
            }];
            readonly NameServerConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "ClientIP";
                readonly type: "*Address";
                readonly json: "clientIp";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "SkipFallback";
                readonly type: "bool";
                readonly json: "skipFallback";
            }, {
                readonly go: "Domains";
                readonly type: "StringList";
                readonly json: "domains";
            }, {
                readonly go: "ExpectedIPs";
                readonly type: "StringList";
                readonly json: "expectedIPs";
            }, {
                readonly go: "ExpectIPs";
                readonly type: "StringList";
                readonly json: "expectIPs";
            }, {
                readonly go: "QueryStrategy";
                readonly type: "string";
                readonly json: "queryStrategy";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TimeoutMs";
                readonly type: "uint64";
                readonly json: "timeoutMs";
            }, {
                readonly go: "DisableCache";
                readonly type: "*bool";
                readonly json: "disableCache";
            }, {
                readonly go: "ServeStale";
                readonly type: "*bool";
                readonly json: "serveStale";
            }, {
                readonly go: "ServeExpiredTTL";
                readonly type: "*uint32";
                readonly json: "serveExpiredTTL";
            }, {
                readonly go: "FinalQuery";
                readonly type: "bool";
                readonly json: "finalQuery";
            }, {
                readonly go: "UnexpectedIPs";
                readonly type: "StringList";
                readonly json: "unexpectedIPs";
            }];
            readonly Noise: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "string";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "*Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "ApplyTo";
                readonly type: "string";
                readonly json: "applyTo";
            }];
            readonly NoiseItem: readonly [{
                readonly go: "Rand";
                readonly type: "Int32Range";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }, {
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }];
            readonly NoiseMask: readonly [{
                readonly go: "Reset";
                readonly type: "Int32Range";
                readonly json: "reset";
            }, {
                readonly go: "Noise";
                readonly type: "[]NoiseItem";
                readonly json: "noise";
            }];
            readonly NoneResponse: readonly [];
            readonly NoOpConnectionAuthenticator: readonly [];
            readonly ObservatoryConfig: readonly [{
                readonly go: "SubjectSelector";
                readonly type: "[]string";
                readonly json: "subjectSelector";
            }, {
                readonly go: "ProbeURL";
                readonly type: "string";
                readonly json: "probeURL";
            }, {
                readonly go: "ProbeInterval";
                readonly type: "duration.Duration";
                readonly json: "probeInterval";
            }, {
                readonly go: "EnableConcurrency";
                readonly type: "bool";
                readonly json: "enableConcurrency";
            }];
            readonly OutboundDetourConfig: readonly [{
                readonly go: "Protocol";
                readonly type: "string";
                readonly json: "protocol";
            }, {
                readonly go: "SendThrough";
                readonly type: "*string";
                readonly json: "sendThrough";
            }, {
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }, {
                readonly go: "StreamSetting";
                readonly type: "*StreamConfig";
                readonly json: "streamSettings";
            }, {
                readonly go: "ProxySettings";
                readonly type: "*ProxyConfig";
                readonly json: "proxySettings";
            }, {
                readonly go: "MuxSettings";
                readonly type: "*MuxConfig";
                readonly json: "mux";
            }, {
                readonly go: "TargetStrategy";
                readonly type: "string";
                readonly json: "targetStrategy";
            }];
            readonly Policy: readonly [{
                readonly go: "Handshake";
                readonly type: "*uint32";
                readonly json: "handshake";
            }, {
                readonly go: "ConnectionIdle";
                readonly type: "*uint32";
                readonly json: "connIdle";
            }, {
                readonly go: "UplinkOnly";
                readonly type: "*uint32";
                readonly json: "uplinkOnly";
            }, {
                readonly go: "DownlinkOnly";
                readonly type: "*uint32";
                readonly json: "downlinkOnly";
            }, {
                readonly go: "StatsUserUplink";
                readonly type: "bool";
                readonly json: "statsUserUplink";
            }, {
                readonly go: "StatsUserDownlink";
                readonly type: "bool";
                readonly json: "statsUserDownlink";
            }, {
                readonly go: "StatsUserOnline";
                readonly type: "bool";
                readonly json: "statsUserOnline";
            }, {
                readonly go: "BufferSize";
                readonly type: "*int32";
                readonly json: "bufferSize";
            }];
            readonly PolicyConfig: readonly [{
                readonly go: "Levels";
                readonly type: "map[uint32]*Policy";
                readonly json: "levels";
            }, {
                readonly go: "System";
                readonly type: "*SystemPolicy";
                readonly json: "system";
            }];
            readonly PortalConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Domain";
                readonly type: "string";
                readonly json: "domain";
            }];
            readonly ProxyConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "TransportLayerProxy";
                readonly type: "bool";
                readonly json: "transportLayer";
            }];
            readonly QuicParamsConfig: readonly [{
                readonly go: "Congestion";
                readonly type: "string";
                readonly json: "congestion";
            }, {
                readonly go: "Debug";
                readonly type: "bool";
                readonly json: "debug";
            }, {
                readonly go: "BbrProfile";
                readonly type: "string";
                readonly json: "bbrProfile";
            }, {
                readonly go: "BrutalUp";
                readonly type: "Bandwidth";
                readonly json: "brutalUp";
            }, {
                readonly go: "BrutalDown";
                readonly type: "Bandwidth";
                readonly json: "brutalDown";
            }, {
                readonly go: "UdpHop";
                readonly type: "UdpHop";
                readonly json: "udpHop";
            }, {
                readonly go: "InitStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "initStreamReceiveWindow";
            }, {
                readonly go: "MaxStreamReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxStreamReceiveWindow";
            }, {
                readonly go: "InitConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "initConnectionReceiveWindow";
            }, {
                readonly go: "MaxConnectionReceiveWindow";
                readonly type: "uint64";
                readonly json: "maxConnectionReceiveWindow";
            }, {
                readonly go: "MaxIdleTimeout";
                readonly type: "int64";
                readonly json: "maxIdleTimeout";
            }, {
                readonly go: "KeepAlivePeriod";
                readonly type: "int64";
                readonly json: "keepAlivePeriod";
            }, {
                readonly go: "DisablePathMTUDiscovery";
                readonly type: "bool";
                readonly json: "disablePathMTUDiscovery";
            }, {
                readonly go: "MaxIncomingStreams";
                readonly type: "int64";
                readonly json: "maxIncomingStreams";
            }];
            readonly RawFieldRule: readonly [{
                readonly go: "Domain";
                readonly type: "*StringList";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "*StringList";
                readonly json: "domains";
            }, {
                readonly go: "IP";
                readonly type: "*StringList";
                readonly json: "ip";
            }, {
                readonly go: "Port";
                readonly type: "*PortList";
                readonly json: "port";
            }, {
                readonly go: "Network";
                readonly type: "*NetworkList";
                readonly json: "network";
            }, {
                readonly go: "SourceIP";
                readonly type: "*StringList";
                readonly json: "sourceIP";
            }, {
                readonly go: "Source";
                readonly type: "*StringList";
                readonly json: "source";
            }, {
                readonly go: "SourcePort";
                readonly type: "*PortList";
                readonly json: "sourcePort";
            }, {
                readonly go: "User";
                readonly type: "*StringList";
                readonly json: "user";
            }, {
                readonly go: "VlessRoute";
                readonly type: "*PortList";
                readonly json: "vlessRoute";
            }, {
                readonly go: "InboundTag";
                readonly type: "*StringList";
                readonly json: "inboundTag";
            }, {
                readonly go: "Protocols";
                readonly type: "*StringList";
                readonly json: "protocol";
            }, {
                readonly go: "Attributes";
                readonly type: "map[string]string";
                readonly json: "attrs";
            }, {
                readonly go: "LocalIP";
                readonly type: "*StringList";
                readonly json: "localIP";
            }, {
                readonly go: "LocalPort";
                readonly type: "*PortList";
                readonly json: "localPort";
            }, {
                readonly go: "Process";
                readonly type: "*StringList";
                readonly json: "process";
            }, {
                readonly go: "Webhook";
                readonly type: "*WebhookRuleConfig";
                readonly json: "webhook";
            }];
            readonly REALITYConfig: readonly [{
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "Show";
                readonly type: "bool";
                readonly json: "show";
            }, {
                readonly go: "Target";
                readonly type: "json.RawMessage";
                readonly json: "target";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }, {
                readonly go: "ServerNames";
                readonly type: "[]string";
                readonly json: "serverNames";
            }, {
                readonly go: "PrivateKey";
                readonly type: "string";
                readonly json: "privateKey";
            }, {
                readonly go: "MinClientVer";
                readonly type: "string";
                readonly json: "minClientVer";
            }, {
                readonly go: "MaxClientVer";
                readonly type: "string";
                readonly json: "maxClientVer";
            }, {
                readonly go: "MaxTimeDiff";
                readonly type: "uint64";
                readonly json: "maxTimeDiff";
            }, {
                readonly go: "ShortIds";
                readonly type: "[]string";
                readonly json: "shortIds";
            }, {
                readonly go: "Mldsa65Seed";
                readonly type: "string";
                readonly json: "mldsa65Seed";
            }, {
                readonly go: "LimitFallbackUpload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackUpload";
            }, {
                readonly go: "LimitFallbackDownload";
                readonly type: "LimitFallback";
                readonly json: "limitFallbackDownload";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "ShortId";
                readonly type: "string";
                readonly json: "shortId";
            }, {
                readonly go: "Mldsa65Verify";
                readonly type: "string";
                readonly json: "mldsa65Verify";
            }, {
                readonly go: "SpiderX";
                readonly type: "string";
                readonly json: "spiderX";
            }];
            readonly Realm: readonly [{
                readonly go: "Url";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "StunServers";
                readonly type: "[]string";
                readonly json: "stunServers";
            }, {
                readonly go: "TlsConfig";
                readonly type: "*TLSConfig";
                readonly json: "tlsConfig";
            }];
            readonly ReverseConfig: readonly [{
                readonly go: "Bridges";
                readonly type: "[]BridgeConfig";
                readonly json: "bridges";
            }, {
                readonly go: "Portals";
                readonly type: "[]PortalConfig";
                readonly json: "portals";
            }];
            readonly RouterConfig: readonly [{
                readonly go: "RuleList";
                readonly type: "[]json.RawMessage";
                readonly json: "rules";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "*string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "Balancers";
                readonly type: "[]*BalancingRule";
                readonly json: "balancers";
            }];
            readonly RouterRule: readonly [{
                readonly go: "RuleTag";
                readonly type: "string";
                readonly json: "ruleTag";
            }, {
                readonly go: "OutboundTag";
                readonly type: "string";
                readonly json: "outboundTag";
            }, {
                readonly go: "BalancerTag";
                readonly type: "string";
                readonly json: "balancerTag";
            }];
            readonly Salamander: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "PacketSize";
                readonly type: "Int32Range";
                readonly json: "packetSize";
            }];
            readonly ShadowsocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Servers";
                readonly type: "[]*ShadowsocksServerTarget";
                readonly json: "servers";
            }];
            readonly ShadowsocksServerConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Users";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*ShadowsocksUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "NetworkList";
                readonly type: "*NetworkList";
                readonly json: "network";
            }];
            readonly ShadowsocksServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly ShadowsocksUserConfig: readonly [{
                readonly go: "Cipher";
                readonly type: "string";
                readonly json: "method";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }];
            readonly SniffingConfig: readonly [{
                readonly go: "Enabled";
                readonly type: "bool";
                readonly json: "enabled";
            }, {
                readonly go: "DestOverride";
                readonly type: "StringList";
                readonly json: "destOverride";
            }, {
                readonly go: "DomainsExcluded";
                readonly type: "StringList";
                readonly json: "domainsExcluded";
            }, {
                readonly go: "IPsExcluded";
                readonly type: "StringList";
                readonly json: "ipsExcluded";
            }, {
                readonly go: "MetadataOnly";
                readonly type: "bool";
                readonly json: "metadataOnly";
            }, {
                readonly go: "RouteOnly";
                readonly type: "bool";
                readonly json: "routeOnly";
            }];
            readonly SocketConfig: readonly [{
                readonly go: "Mark";
                readonly type: "int32";
                readonly json: "mark";
            }, {
                readonly go: "TFO";
                readonly type: "interface{}";
                readonly json: "tcpFastOpen";
            }, {
                readonly go: "TProxy";
                readonly type: "string";
                readonly json: "tproxy";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }, {
                readonly go: "DialerProxy";
                readonly type: "string";
                readonly json: "dialerProxy";
            }, {
                readonly go: "TCPKeepAliveInterval";
                readonly type: "int32";
                readonly json: "tcpKeepAliveInterval";
            }, {
                readonly go: "TCPKeepAliveIdle";
                readonly type: "int32";
                readonly json: "tcpKeepAliveIdle";
            }, {
                readonly go: "TCPCongestion";
                readonly type: "string";
                readonly json: "tcpCongestion";
            }, {
                readonly go: "TCPWindowClamp";
                readonly type: "int32";
                readonly json: "tcpWindowClamp";
            }, {
                readonly go: "TCPMaxSeg";
                readonly type: "int32";
                readonly json: "tcpMaxSeg";
            }, {
                readonly go: "Penetrate";
                readonly type: "bool";
                readonly json: "penetrate";
            }, {
                readonly go: "TCPUserTimeout";
                readonly type: "int32";
                readonly json: "tcpUserTimeout";
            }, {
                readonly go: "V6only";
                readonly type: "bool";
                readonly json: "v6only";
            }, {
                readonly go: "Interface";
                readonly type: "string";
                readonly json: "interface";
            }, {
                readonly go: "TcpMptcp";
                readonly type: "bool";
                readonly json: "tcpMptcp";
            }, {
                readonly go: "CustomSockopt";
                readonly type: "[]*CustomSockoptConfig";
                readonly json: "customSockopt";
            }, {
                readonly go: "AddressPortStrategy";
                readonly type: "string";
                readonly json: "addressPortStrategy";
            }, {
                readonly go: "HappyEyeballsSettings";
                readonly type: "*HappyEyeballsConfig";
                readonly json: "happyEyeballs";
            }, {
                readonly go: "TrustedXForwardedFor";
                readonly type: "[]string";
                readonly json: "trustedXForwardedFor";
            }];
            readonly SocksAccount: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }];
            readonly SocksClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Username";
                readonly type: "string";
                readonly json: "user";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "pass";
            }, {
                readonly go: "Servers";
                readonly type: "[]*SocksRemoteConfig";
                readonly json: "servers";
            }];
            readonly SocksRemoteConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly SocksServerConfig: readonly [{
                readonly go: "AuthMethod";
                readonly type: "string";
                readonly json: "auth";
            }, {
                readonly go: "Users";
                readonly type: "[]*SocksAccount";
                readonly json: "users";
            }, {
                readonly go: "Accounts";
                readonly type: "[]*SocksAccount";
                readonly json: "accounts";
            }, {
                readonly go: "UDP";
                readonly type: "bool";
                readonly json: "udp";
            }, {
                readonly go: "Host";
                readonly type: "*Address";
                readonly json: "ip";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }];
            readonly SplitHTTPConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Mode";
                readonly type: "string";
                readonly json: "mode";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "XPaddingBytes";
                readonly type: "Int32Range";
                readonly json: "xPaddingBytes";
            }, {
                readonly go: "XPaddingObfsMode";
                readonly type: "bool";
                readonly json: "xPaddingObfsMode";
            }, {
                readonly go: "XPaddingKey";
                readonly type: "string";
                readonly json: "xPaddingKey";
            }, {
                readonly go: "XPaddingHeader";
                readonly type: "string";
                readonly json: "xPaddingHeader";
            }, {
                readonly go: "XPaddingPlacement";
                readonly type: "string";
                readonly json: "xPaddingPlacement";
            }, {
                readonly go: "XPaddingMethod";
                readonly type: "string";
                readonly json: "xPaddingMethod";
            }, {
                readonly go: "UplinkHTTPMethod";
                readonly type: "string";
                readonly json: "uplinkHTTPMethod";
            }, {
                readonly go: "SessionIDPlacement";
                readonly type: "string";
                readonly json: "sessionIDPlacement";
            }, {
                readonly go: "SessionIDKey";
                readonly type: "string";
                readonly json: "sessionIDKey";
            }, {
                readonly go: "SessionIDTable";
                readonly type: "string";
                readonly json: "sessionIDTable";
            }, {
                readonly go: "SessionIDLength";
                readonly type: "Int32Range";
                readonly json: "sessionIDLength";
            }, {
                readonly go: "SeqPlacement";
                readonly type: "string";
                readonly json: "seqPlacement";
            }, {
                readonly go: "SeqKey";
                readonly type: "string";
                readonly json: "seqKey";
            }, {
                readonly go: "UplinkDataPlacement";
                readonly type: "string";
                readonly json: "uplinkDataPlacement";
            }, {
                readonly go: "UplinkDataKey";
                readonly type: "string";
                readonly json: "uplinkDataKey";
            }, {
                readonly go: "UplinkChunkSize";
                readonly type: "Int32Range";
                readonly json: "uplinkChunkSize";
            }, {
                readonly go: "NoGRPCHeader";
                readonly type: "bool";
                readonly json: "noGRPCHeader";
            }, {
                readonly go: "NoSSEHeader";
                readonly type: "bool";
                readonly json: "noSSEHeader";
            }, {
                readonly go: "ScMaxEachPostBytes";
                readonly type: "Int32Range";
                readonly json: "scMaxEachPostBytes";
            }, {
                readonly go: "ScMinPostsIntervalMs";
                readonly type: "Int32Range";
                readonly json: "scMinPostsIntervalMs";
            }, {
                readonly go: "ScMaxBufferedPosts";
                readonly type: "int64";
                readonly json: "scMaxBufferedPosts";
            }, {
                readonly go: "ScStreamUpServerSecs";
                readonly type: "Int32Range";
                readonly json: "scStreamUpServerSecs";
            }, {
                readonly go: "ServerMaxHeaderBytes";
                readonly type: "int32";
                readonly json: "serverMaxHeaderBytes";
            }, {
                readonly go: "Xmux";
                readonly type: "XmuxConfig";
                readonly json: "xmux";
            }, {
                readonly go: "DownloadSettings";
                readonly type: "*StreamConfig";
                readonly json: "downloadSettings";
            }, {
                readonly go: "Extra";
                readonly type: "json.RawMessage";
                readonly json: "extra";
            }];
            readonly StatsConfig: readonly [];
            readonly StrategyConfig: readonly [{
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Settings";
                readonly type: "*json.RawMessage";
                readonly json: "settings";
            }];
            readonly strategyEmptyConfig: readonly [];
            readonly strategyLeastLoadConfig: readonly [{
                readonly go: "Costs";
                readonly type: "[]*router.StrategyWeight";
                readonly json: "costs";
            }, {
                readonly go: "Baselines";
                readonly type: "[]duration.Duration";
                readonly json: "baselines";
            }, {
                readonly go: "Expected";
                readonly type: "int32";
                readonly json: "expected";
            }, {
                readonly go: "MaxRTT";
                readonly type: "duration.Duration";
                readonly json: "maxRTT";
            }, {
                readonly go: "Tolerance";
                readonly type: "float64";
                readonly json: "tolerance";
            }];
            readonly StreamConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Method";
                readonly type: "*TransportProtocol";
                readonly json: "method";
            }, {
                readonly go: "Network";
                readonly type: "*TransportProtocol";
                readonly json: "network";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "FinalMask";
                readonly type: "*FinalMask";
                readonly json: "finalmask";
            }, {
                readonly go: "TLSSettings";
                readonly type: "*TLSConfig";
                readonly json: "tlsSettings";
            }, {
                readonly go: "REALITYSettings";
                readonly type: "*REALITYConfig";
                readonly json: "realitySettings";
            }, {
                readonly go: "RAWSettings";
                readonly type: "*TCPConfig";
                readonly json: "rawSettings";
            }, {
                readonly go: "TCPSettings";
                readonly type: "*TCPConfig";
                readonly json: "tcpSettings";
            }, {
                readonly go: "XHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "xhttpSettings";
            }, {
                readonly go: "SplitHTTPSettings";
                readonly type: "*SplitHTTPConfig";
                readonly json: "splithttpSettings";
            }, {
                readonly go: "KCPSettings";
                readonly type: "*KCPConfig";
                readonly json: "kcpSettings";
            }, {
                readonly go: "GRPCSettings";
                readonly type: "*GRPCConfig";
                readonly json: "grpcSettings";
            }, {
                readonly go: "WSSettings";
                readonly type: "*WebSocketConfig";
                readonly json: "wsSettings";
            }, {
                readonly go: "HTTPUPGRADESettings";
                readonly type: "*HttpUpgradeConfig";
                readonly json: "httpupgradeSettings";
            }, {
                readonly go: "HysteriaSettings";
                readonly type: "*HysteriaConfig";
                readonly json: "hysteriaSettings";
            }, {
                readonly go: "SocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "sockopt";
            }];
            readonly Sudoku: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "ASCII";
                readonly type: "string";
                readonly json: "ascii";
            }, {
                readonly go: "CustomTable";
                readonly type: "string";
                readonly json: "customTable";
            }, {
                readonly go: "LegacyCustomTable";
                readonly type: "string";
                readonly json: "custom_table";
            }, {
                readonly go: "CustomTables";
                readonly type: "[]string";
                readonly json: "customTables";
            }, {
                readonly go: "LegacyCustomSets";
                readonly type: "[]string";
                readonly json: "custom_tables";
            }, {
                readonly go: "PaddingMin";
                readonly type: "uint32";
                readonly json: "paddingMin";
            }, {
                readonly go: "LegacyPaddingMin";
                readonly type: "uint32";
                readonly json: "padding_min";
            }, {
                readonly go: "PaddingMax";
                readonly type: "uint32";
                readonly json: "paddingMax";
            }, {
                readonly go: "LegacyPaddingMax";
                readonly type: "uint32";
                readonly json: "padding_max";
            }];
            readonly SystemPolicy: readonly [{
                readonly go: "StatsInboundUplink";
                readonly type: "bool";
                readonly json: "statsInboundUplink";
            }, {
                readonly go: "StatsInboundDownlink";
                readonly type: "bool";
                readonly json: "statsInboundDownlink";
            }, {
                readonly go: "StatsOutboundUplink";
                readonly type: "bool";
                readonly json: "statsOutboundUplink";
            }, {
                readonly go: "StatsOutboundDownlink";
                readonly type: "bool";
                readonly json: "statsOutboundDownlink";
            }];
            readonly TCPConfig: readonly [{
                readonly go: "HeaderConfig";
                readonly type: "json.RawMessage";
                readonly json: "header";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }];
            readonly TCPItem: readonly [{
                readonly go: "Delay";
                readonly type: "Int32Range";
                readonly json: "delay";
            }, {
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly TLSCertConfig: readonly [{
                readonly go: "CertFile";
                readonly type: "string";
                readonly json: "certificateFile";
            }, {
                readonly go: "CertStr";
                readonly type: "[]string";
                readonly json: "certificate";
            }, {
                readonly go: "KeyFile";
                readonly type: "string";
                readonly json: "keyFile";
            }, {
                readonly go: "KeyStr";
                readonly type: "[]string";
                readonly json: "key";
            }, {
                readonly go: "Usage";
                readonly type: "string";
                readonly json: "usage";
            }, {
                readonly go: "OcspStapling";
                readonly type: "uint64";
                readonly json: "ocspStapling";
            }, {
                readonly go: "OneTimeLoading";
                readonly type: "bool";
                readonly json: "oneTimeLoading";
            }, {
                readonly go: "BuildChain";
                readonly type: "bool";
                readonly json: "buildChain";
            }];
            readonly TLSConfig: readonly [{
                readonly go: "AllowInsecure";
                readonly type: "bool";
                readonly json: "allowInsecure";
            }, {
                readonly go: "Certs";
                readonly type: "[]*TLSCertConfig";
                readonly json: "certificates";
            }, {
                readonly go: "ServerName";
                readonly type: "string";
                readonly json: "serverName";
            }, {
                readonly go: "ALPN";
                readonly type: "*StringList";
                readonly json: "alpn";
            }, {
                readonly go: "EnableSessionResumption";
                readonly type: "bool";
                readonly json: "enableSessionResumption";
            }, {
                readonly go: "DisableSystemRoot";
                readonly type: "bool";
                readonly json: "disableSystemRoot";
            }, {
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "minVersion";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "maxVersion";
            }, {
                readonly go: "CipherSuites";
                readonly type: "string";
                readonly json: "cipherSuites";
            }, {
                readonly go: "Fingerprint";
                readonly type: "string";
                readonly json: "fingerprint";
            }, {
                readonly go: "RejectUnknownSNI";
                readonly type: "bool";
                readonly json: "rejectUnknownSni";
            }, {
                readonly go: "CurvePreferences";
                readonly type: "*StringList";
                readonly json: "curvePreferences";
            }, {
                readonly go: "MasterKeyLog";
                readonly type: "string";
                readonly json: "masterKeyLog";
            }, {
                readonly go: "PinnedPeerCertSha256";
                readonly type: "string";
                readonly json: "pinnedPeerCertSha256";
            }, {
                readonly go: "VerifyPeerCertByName";
                readonly type: "string";
                readonly json: "verifyPeerCertByName";
            }, {
                readonly go: "ECHServerKeys";
                readonly type: "string";
                readonly json: "echServerKeys";
            }, {
                readonly go: "ECHConfigList";
                readonly type: "string";
                readonly json: "echConfigList";
            }, {
                readonly go: "ECHSocketSettings";
                readonly type: "*SocketConfig";
                readonly json: "echSockopt";
            }];
            readonly TrojanClientConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Servers";
                readonly type: "[]*TrojanServerTarget";
                readonly json: "servers";
            }];
            readonly TrojanInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly TrojanServerConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]*TrojanUserConfig";
                readonly json: "clients";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*TrojanInboundFallback";
                readonly json: "fallbacks";
            }];
            readonly TrojanServerTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TrojanUserConfig: readonly [{
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }, {
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }];
            readonly TunConfig: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Desc";
                readonly type: "string";
                readonly json: "desc";
            }, {
                readonly go: "MTU";
                readonly type: "uint32";
                readonly json: "mtu";
            }, {
                readonly go: "Gateway";
                readonly type: "[]string";
                readonly json: "gateway";
            }, {
                readonly go: "DNS";
                readonly type: "[]string";
                readonly json: "dns";
            }, {
                readonly go: "UserLevel";
                readonly type: "uint32";
                readonly json: "userLevel";
            }, {
                readonly go: "AutoSystemRoutingTable";
                readonly type: "[]string";
                readonly json: "autoSystemRoutingTable";
            }, {
                readonly go: "AutoOutboundsInterface";
                readonly type: "*string";
                readonly json: "autoOutboundsInterface";
            }];
            readonly UdpHop: readonly [{
                readonly go: "PortList";
                readonly type: "PortList";
                readonly json: "ports";
            }, {
                readonly go: "Interval";
                readonly type: "Int32Range";
                readonly json: "interval";
            }];
            readonly UDPItem: readonly [{
                readonly go: "Rand";
                readonly type: "int32";
                readonly json: "rand";
            }, {
                readonly go: "RandRange";
                readonly type: "*Int32Range";
                readonly json: "randRange";
            }, {
                readonly go: "Capture";
                readonly type: "string";
                readonly json: "capture";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Reuse";
                readonly type: "string";
                readonly json: "reuse";
            }, {
                readonly go: "Transform";
                readonly type: "*CustomTransform";
                readonly json: "transform";
            }, {
                readonly go: "Packet";
                readonly type: "json.RawMessage";
                readonly json: "packet";
            }];
            readonly User: readonly [{
                readonly go: "EmailString";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "LevelByte";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VersionConfig: readonly [{
                readonly go: "MinVersion";
                readonly type: "string";
                readonly json: "min";
            }, {
                readonly go: "MaxVersion";
                readonly type: "string";
                readonly json: "max";
            }];
            readonly VLessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Decryption";
                readonly type: "string";
                readonly json: "decryption";
            }, {
                readonly go: "Fallbacks";
                readonly type: "[]*VLessInboundFallback";
                readonly json: "fallbacks";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }];
            readonly VLessInboundFallback: readonly [{
                readonly go: "Name";
                readonly type: "string";
                readonly json: "name";
            }, {
                readonly go: "Alpn";
                readonly type: "string";
                readonly json: "alpn";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Type";
                readonly type: "string";
                readonly json: "type";
            }, {
                readonly go: "Dest";
                readonly type: "json.RawMessage";
                readonly json: "dest";
            }, {
                readonly go: "Xver";
                readonly type: "uint64";
                readonly json: "xver";
            }];
            readonly VLessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "Id";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Flow";
                readonly type: "string";
                readonly json: "flow";
            }, {
                readonly go: "Seed";
                readonly type: "string";
                readonly json: "seed";
            }, {
                readonly go: "Encryption";
                readonly type: "string";
                readonly json: "encryption";
            }, {
                readonly go: "Reverse";
                readonly type: "*VLessReverseConfig";
                readonly json: "reverse";
            }, {
                readonly go: "Testpre";
                readonly type: "uint32";
                readonly json: "testpre";
            }, {
                readonly go: "Testseed";
                readonly type: "[]uint32";
                readonly json: "testseed";
            }, {
                readonly go: "Vnext";
                readonly type: "[]*VLessOutboundVnext";
                readonly json: "vnext";
            }];
            readonly VLessOutboundVnext: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly VLessReverseConfig: readonly [{
                readonly go: "Tag";
                readonly type: "string";
                readonly json: "tag";
            }, {
                readonly go: "Sniffing";
                readonly type: "*SniffingConfig";
                readonly json: "sniffing";
            }];
            readonly VMessAccount: readonly [{
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }];
            readonly VMessDefaultConfig: readonly [{
                readonly go: "Level";
                readonly type: "byte";
                readonly json: "level";
            }];
            readonly VMessInboundConfig: readonly [{
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }, {
                readonly go: "Clients";
                readonly type: "[]json.RawMessage";
                readonly json: "clients";
            }, {
                readonly go: "Defaults";
                readonly type: "*VMessDefaultConfig";
                readonly json: "default";
            }];
            readonly VMessOutboundConfig: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }, {
                readonly go: "ID";
                readonly type: "string";
                readonly json: "id";
            }, {
                readonly go: "Security";
                readonly type: "string";
                readonly json: "security";
            }, {
                readonly go: "Experiments";
                readonly type: "string";
                readonly json: "experiments";
            }, {
                readonly go: "Receivers";
                readonly type: "[]*VMessOutboundTarget";
                readonly json: "vnext";
            }];
            readonly VMessOutboundTarget: readonly [{
                readonly go: "Address";
                readonly type: "*Address";
                readonly json: "address";
            }, {
                readonly go: "Port";
                readonly type: "uint16";
                readonly json: "port";
            }, {
                readonly go: "Users";
                readonly type: "[]json.RawMessage";
                readonly json: "users";
            }];
            readonly WebhookRuleConfig: readonly [{
                readonly go: "URL";
                readonly type: "string";
                readonly json: "url";
            }, {
                readonly go: "Deduplication";
                readonly type: "uint32";
                readonly json: "deduplication";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }];
            readonly WebSocketConfig: readonly [{
                readonly go: "Host";
                readonly type: "string";
                readonly json: "host";
            }, {
                readonly go: "Path";
                readonly type: "string";
                readonly json: "path";
            }, {
                readonly go: "Headers";
                readonly type: "map[string]string";
                readonly json: "headers";
            }, {
                readonly go: "AcceptProxyProtocol";
                readonly type: "bool";
                readonly json: "acceptProxyProtocol";
            }, {
                readonly go: "HeartbeatPeriod";
                readonly type: "uint32";
                readonly json: "heartbeatPeriod";
            }];
            readonly WireGuardConfig: readonly [{
                readonly go: "NoKernelTun";
                readonly type: "bool";
                readonly json: "noKernelTun";
            }, {
                readonly go: "SecretKey";
                readonly type: "string";
                readonly json: "secretKey";
            }, {
                readonly go: "Address";
                readonly type: "[]string";
                readonly json: "address";
            }, {
                readonly go: "Peers";
                readonly type: "[]*WireGuardPeerConfig";
                readonly json: "peers";
            }, {
                readonly go: "MTU";
                readonly type: "int32";
                readonly json: "mtu";
            }, {
                readonly go: "Reserved";
                readonly type: "[]byte";
                readonly json: "reserved";
            }, {
                readonly go: "DomainStrategy";
                readonly type: "string";
                readonly json: "domainStrategy";
            }];
            readonly WireGuardPeerConfig: readonly [{
                readonly go: "PublicKey";
                readonly type: "string";
                readonly json: "publicKey";
            }, {
                readonly go: "PreSharedKey";
                readonly type: "string";
                readonly json: "preSharedKey";
            }, {
                readonly go: "Endpoint";
                readonly type: "string";
                readonly json: "endpoint";
            }, {
                readonly go: "KeepAlive";
                readonly type: "uint32";
                readonly json: "keepAlive";
            }, {
                readonly go: "AllowedIPs";
                readonly type: "[]string";
                readonly json: "allowedIPs";
            }, {
                readonly go: "Level";
                readonly type: "uint32";
                readonly json: "level";
            }, {
                readonly go: "Email";
                readonly type: "string";
                readonly json: "email";
            }];
            readonly Xdns: readonly [{
                readonly go: "Domain";
                readonly type: "json.RawMessage";
                readonly json: "domain";
            }, {
                readonly go: "Domains";
                readonly type: "[]string";
                readonly json: "domains";
            }, {
                readonly go: "Resolvers";
                readonly type: "[]string";
                readonly json: "resolvers";
            }];
            readonly Xicmp: readonly [{
                readonly go: "DGRAM";
                readonly type: "bool";
                readonly json: "dgram";
            }, {
                readonly go: "IPs";
                readonly type: "[]string";
                readonly json: "ips";
            }];
            readonly XMC: readonly [{
                readonly go: "Hostname";
                readonly type: "string";
                readonly json: "hostname";
            }, {
                readonly go: "Profiles";
                readonly type: "[]XMCProfile";
                readonly json: "profiles";
            }, {
                readonly go: "Password";
                readonly type: "string";
                readonly json: "password";
            }];
            readonly XMCProfile: readonly [{
                readonly go: "Username";
                readonly type: "string";
                readonly json: "username";
            }, {
                readonly go: "UUID";
                readonly type: "string";
                readonly json: "uuid";
            }, {
                readonly go: "TexturesValue";
                readonly type: "string";
                readonly json: "texturesValue";
            }, {
                readonly go: "TexturesSignature";
                readonly type: "string";
                readonly json: "texturesSignature";
            }];
            readonly XmuxConfig: readonly [{
                readonly go: "MaxConcurrency";
                readonly type: "Int32Range";
                readonly json: "maxConcurrency";
            }, {
                readonly go: "MaxConnections";
                readonly type: "Int32Range";
                readonly json: "maxConnections";
            }, {
                readonly go: "CMaxReuseTimes";
                readonly type: "Int32Range";
                readonly json: "cMaxReuseTimes";
            }, {
                readonly go: "HMaxRequestTimes";
                readonly type: "Int32Range";
                readonly json: "hMaxRequestTimes";
            }, {
                readonly go: "HMaxReusableSecs";
                readonly type: "Int32Range";
                readonly json: "hMaxReusableSecs";
            }, {
                readonly go: "HKeepAlivePeriod";
                readonly type: "int64";
                readonly json: "hKeepAlivePeriod";
            }];
        };
    }];
};
export type XrayParityManifest = typeof xrayParityManifest;
export type XrayParityRelease = XrayParityManifest["releases"][number];
//# sourceMappingURL=parity-manifest.d.ts.map