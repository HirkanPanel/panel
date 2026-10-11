import { z } from "zod";
export declare const xrayStreamSettingsSchema: z.ZodObject<{
    network: z.ZodOptional<z.ZodString>;
    security: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
    network: z.ZodOptional<z.ZodString>;
    security: z.ZodOptional<z.ZodString>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
    network: z.ZodOptional<z.ZodString>;
    security: z.ZodOptional<z.ZodString>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>;
export declare const xrayInboundSchema: z.ZodObject<{
    tag: z.ZodOptional<z.ZodString>;
    listen: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    protocol: z.ZodString;
    settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    streamSettings: z.ZodOptional<z.ZodObject<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
}, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
    tag: z.ZodOptional<z.ZodString>;
    listen: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    protocol: z.ZodString;
    settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    streamSettings: z.ZodOptional<z.ZodObject<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
    tag: z.ZodOptional<z.ZodString>;
    listen: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    protocol: z.ZodString;
    settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    streamSettings: z.ZodOptional<z.ZodObject<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>;
export declare const xrayOutboundSchema: z.ZodObject<{
    tag: z.ZodOptional<z.ZodString>;
    protocol: z.ZodString;
    settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    streamSettings: z.ZodOptional<z.ZodObject<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
}, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
    tag: z.ZodOptional<z.ZodString>;
    protocol: z.ZodString;
    settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    streamSettings: z.ZodOptional<z.ZodObject<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
    tag: z.ZodOptional<z.ZodString>;
    protocol: z.ZodString;
    settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    streamSettings: z.ZodOptional<z.ZodObject<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        network: z.ZodOptional<z.ZodString>;
        security: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>;
export declare const xrayRoutingSchema: z.ZodObject<{
    domainStrategy: z.ZodOptional<z.ZodString>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
}, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
    domainStrategy: z.ZodOptional<z.ZodString>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
    domainStrategy: z.ZodOptional<z.ZodString>;
    rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>;
export declare const xrayDnsSchema: z.ZodObject<{
    servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
    hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
    queryStrategy: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
    servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
    hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
    queryStrategy: z.ZodOptional<z.ZodString>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
    servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
    hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
    queryStrategy: z.ZodOptional<z.ZodString>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>;
export declare const xrayConfigSchema: z.ZodObject<{
    log: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    dns: z.ZodOptional<z.ZodObject<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    routing: z.ZodOptional<z.ZodObject<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    inbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    outbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    policy: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    api: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    stats: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    metrics: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    fakeDns: z.ZodOptional<z.ZodType<unknown, z.ZodTypeDef, unknown>>;
    observatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    burstObservatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    geodata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
    log: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    dns: z.ZodOptional<z.ZodObject<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    routing: z.ZodOptional<z.ZodObject<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    inbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    outbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    policy: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    api: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    stats: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    metrics: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    fakeDns: z.ZodOptional<z.ZodType<unknown, z.ZodTypeDef, unknown>>;
    observatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    burstObservatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    geodata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
    log: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    dns: z.ZodOptional<z.ZodObject<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    routing: z.ZodOptional<z.ZodObject<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    inbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    outbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    policy: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    api: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    stats: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    metrics: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    fakeDns: z.ZodOptional<z.ZodType<unknown, z.ZodTypeDef, unknown>>;
    observatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    burstObservatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    geodata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>;
export declare const strictXrayConfigSchema: z.ZodEffects<z.ZodObject<{
    log: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    dns: z.ZodOptional<z.ZodObject<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    routing: z.ZodOptional<z.ZodObject<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    inbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    outbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    policy: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    api: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    stats: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    metrics: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    fakeDns: z.ZodOptional<z.ZodType<unknown, z.ZodTypeDef, unknown>>;
    observatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    burstObservatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    geodata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
    log: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    dns: z.ZodOptional<z.ZodObject<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    routing: z.ZodOptional<z.ZodObject<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    inbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    outbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    policy: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    api: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    stats: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    metrics: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    fakeDns: z.ZodOptional<z.ZodType<unknown, z.ZodTypeDef, unknown>>;
    observatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    burstObservatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    geodata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
    log: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    dns: z.ZodOptional<z.ZodObject<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    routing: z.ZodOptional<z.ZodObject<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    inbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    outbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    policy: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    api: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    stats: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    metrics: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    fakeDns: z.ZodOptional<z.ZodType<unknown, z.ZodTypeDef, unknown>>;
    observatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    burstObservatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    geodata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, z.objectOutputType<{
    log: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    dns: z.ZodOptional<z.ZodObject<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    routing: z.ZodOptional<z.ZodObject<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    inbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    outbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    policy: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    api: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    stats: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    metrics: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    fakeDns: z.ZodOptional<z.ZodType<unknown, z.ZodTypeDef, unknown>>;
    observatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    burstObservatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    geodata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
    log: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    dns: z.ZodOptional<z.ZodObject<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        servers: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>]>, "many">>;
        hosts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodType<unknown, z.ZodTypeDef, unknown>]>>>;
        queryStrategy: z.ZodOptional<z.ZodString>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    routing: z.ZodOptional<z.ZodObject<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        domainStrategy: z.ZodOptional<z.ZodString>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>, "many">>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    inbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        listen: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
        sniffing: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    outbounds: z.ZodOptional<z.ZodArray<z.ZodObject<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
        tag: z.ZodOptional<z.ZodString>;
        protocol: z.ZodString;
        settings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
        streamSettings: z.ZodOptional<z.ZodObject<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodType<unknown, z.ZodTypeDef, unknown>, z.objectOutputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">, z.objectInputType<{
            network: z.ZodOptional<z.ZodString>;
            security: z.ZodOptional<z.ZodString>;
        }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>>;
    }, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>, "many">>;
    policy: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    api: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    stats: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    metrics: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    fakeDns: z.ZodOptional<z.ZodType<unknown, z.ZodTypeDef, unknown>>;
    observatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    burstObservatory: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    geodata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodType<unknown, z.ZodTypeDef, unknown>, {}, {}>>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, z.ZodType<unknown, z.ZodTypeDef, unknown>, "passthrough">>;
export type XrayConfigSchema = typeof xrayConfigSchema;
export type StrictXrayConfigSchema = typeof strictXrayConfigSchema;
//# sourceMappingURL=xray-json.d.ts.map