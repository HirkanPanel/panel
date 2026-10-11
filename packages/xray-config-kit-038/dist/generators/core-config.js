import { generateKeyPair, scalarMultBase } from "@stablelib/x25519";
import { MlKem768 } from "mlkem";
export const SHADOWSOCKS_ENCRYPTION_METHODS = [
    { value: "chacha20-poly1305", label: "chacha20-poly1305", length: 16 },
    { value: "chacha20-ietf-poly1305", label: "chacha20-ietf-poly1305", length: 16 },
    { value: "xchacha20-poly1305", label: "xchacha20-poly1305", length: 16 },
    { value: "xchacha20-ietf-poly1305", label: "xchacha20-ietf-poly1305", length: 16 },
    { value: "2022-blake3-chacha20-poly1305", label: "2022-blake3-chacha20-poly1305", length: 32 },
    { value: "2022-blake3-aes-128-gcm", label: "2022-blake3-aes-128-gcm", length: 16 },
    { value: "2022-blake3-aes-256-gcm", label: "2022-blake3-aes-256-gcm", length: 32 },
    { value: "aes-128-gcm", label: "aes-128-gcm", length: 16 },
    { value: "aes-256-gcm", label: "aes-256-gcm", length: 16 },
    { value: "none", label: "none", length: 16 },
    { value: "plain", label: "plain", length: 16 }
];
const SHADOWSOCKS_PASSWORD_GENERATION_METHODS = [
    "2022-blake3-aes-128-gcm",
    "2022-blake3-aes-256-gcm"
];
export const DEFAULT_VLESS_HANDSHAKE = "mlkem768x25519plus";
export const DEFAULT_VLESS_ENCRYPTION = "native";
export const DEFAULT_VLESS_PADDING = "100-111-1111.75-0-111.50-0-3333";
export const DEFAULT_VLESS_SERVER_TICKET = "600s";
export const VLESS_HANDSHAKE_OPTIONS = [
    { value: DEFAULT_VLESS_HANDSHAKE, label: "mlkem768x25519plus", translationKey: "coreConfigModal.vlessHandshakeOptionMlkem768x25519plus" }
];
export const VLESS_RESUME_OPTIONS = [
    { value: "0rtt", label: "0rtt", translationKey: "coreConfigModal.vlessResumeOption0rtt" },
    { value: "1rtt", label: "1rtt", translationKey: "coreConfigModal.vlessResumeOption1rtt" }
];
export const DEFAULT_VLESS_RESUME = VLESS_RESUME_OPTIONS[0].value;
export const VLESS_ENCRYPTION_METHODS = [
    { value: "native", label: "native", translationKey: "coreConfigModal.vlessEncryptionOptionNative" },
    { value: "xorpub", label: "xorpub", translationKey: "coreConfigModal.vlessEncryptionOptionXorpub" },
    { value: "random", label: "random", translationKey: "coreConfigModal.vlessEncryptionOptionRandom" }
];
const BASE64_CHUNK_SIZE = 0x8000;
const MLDSA65_SEED_LENGTH = 32;
let mlDsa65Promise = null;
export const createDefaultVlessOptions = () => ({
    handshakeMethod: DEFAULT_VLESS_HANDSHAKE,
    encryptionMethod: DEFAULT_VLESS_ENCRYPTION,
    serverTicket: DEFAULT_VLESS_SERVER_TICKET,
    clientTicket: DEFAULT_VLESS_RESUME,
    serverPadding: DEFAULT_VLESS_PADDING,
    clientPadding: DEFAULT_VLESS_PADDING,
    includeServerPadding: false,
    includeClientPadding: false
});
export const defaultXrayConfig = JSON.stringify({
    policy: {
        levels: {
            "0": {
                statsUserOnline: true
            }
        }
    },
    log: {
        loglevel: "info"
    },
    inbounds: [
        {
            tag: "Shadowsocks TCP",
            listen: "0.0.0.0",
            port: 1080,
            protocol: "shadowsocks",
            settings: {
                clients: [],
                network: "tcp,udp"
            }
        }
    ],
    outbounds: [
        {
            protocol: "freedom",
            tag: "DIRECT"
        },
        {
            protocol: "blackhole",
            tag: "BLOCK"
        }
    ],
    routing: {
        rules: [
            {
                ip: ["geoip:private"],
                outboundTag: "BLOCK",
                type: "field"
            }
        ]
    }
}, null, 2);
function cryptoGetRandomValues(bytes) {
    const cryptoSource = globalThis.crypto;
    if (!cryptoSource?.getRandomValues)
        throw new Error("Secure random generation is not available.");
    cryptoSource.getRandomValues(bytes);
    return bytes;
}
function bytesToBase64(bytes) {
    let binary = "";
    const length = bytes.length;
    for (let index = 0; index < length; index += BASE64_CHUNK_SIZE) {
        const chunk = bytes.subarray(index, index + BASE64_CHUNK_SIZE);
        binary += String.fromCharCode(...chunk);
    }
    return btoa(binary);
}
function base64ToBytes(value) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
}
function base64UrlEncode(bytes) {
    return bytesToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "").replace(/\n/g, "");
}
function base64UrlDecode(value) {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padLength = normalized.length % 4;
    const padded = padLength === 0 ? normalized : normalized + "=".repeat(4 - padLength);
    return base64ToBytes(padded);
}
function browserOnlyMldsa65Runtime() {
    if (typeof window === "undefined") {
        throw new Error("ML-DSA-65 generation requires a browser environment");
    }
}
async function loadMlDsa65() {
    if (!mlDsa65Promise) {
        mlDsa65Promise = import("@noble/post-quantum/ml-dsa.js").then((mod) => mod.ml_dsa65);
    }
    return mlDsa65Promise;
}
function ensureMldsa65Seed(seed) {
    if (seed) {
        const decoded = base64UrlDecode(seed);
        if (decoded.length !== MLDSA65_SEED_LENGTH) {
            throw new Error(`Seed must be ${MLDSA65_SEED_LENGTH} bytes`);
        }
        return { bytes: decoded, encoded: seed };
    }
    const generated = cryptoGetRandomValues(new Uint8Array(MLDSA65_SEED_LENGTH));
    return { bytes: generated, encoded: base64UrlEncode(generated) };
}
export function createWireGuardCoreConfigJson(keyPair) {
    return JSON.stringify({
        interface_name: "wg0",
        private_key: keyPair.privateKey,
        listen_port: 51820,
        address: ["10.0.0.1/8"]
    }, null, 2);
}
export function createDefaultXrayCoreConfigJson() {
    return defaultXrayConfig;
}
export function generateRealityKeyPair() {
    const keyPair = generateKeyPair();
    return {
        privateKey: base64UrlEncode(keyPair.secretKey),
        publicKey: base64UrlEncode(keyPair.publicKey)
    };
}
export const generatePrivateAndPublicKey = generateRealityKeyPair;
export function generateShortId() {
    const randomBytes = cryptoGetRandomValues(new Uint8Array(8));
    return Array.from(randomBytes)
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}
export function generateShadowsocksPassword(value) {
    const canGenerate = SHADOWSOCKS_PASSWORD_GENERATION_METHODS.some((candidate) => candidate === value);
    if (!canGenerate)
        return undefined;
    const method = SHADOWSOCKS_ENCRYPTION_METHODS.find((candidate) => candidate.value === value);
    if (!method)
        return undefined;
    const randomBytes = cryptoGetRandomValues(new Uint8Array(method.length));
    return {
        password: bytesToBase64(randomBytes),
        encryptionMethod: method.label
    };
}
export async function generateMldsa65(seed) {
    browserOnlyMldsa65Runtime();
    const implementation = await loadMlDsa65();
    const { bytes: seedBytes, encoded } = ensureMldsa65Seed(seed);
    const { publicKey } = implementation.keygen(seedBytes);
    return {
        seed: encoded,
        verify: base64UrlEncode(publicKey)
    };
}
export async function generateVlessEncryption(vlessOptions = createDefaultVlessOptions()) {
    const x25519KeyPair = generateKeyPair();
    const x25519ServerKey = base64UrlEncode(x25519KeyPair.secretKey);
    const x25519ClientKey = base64UrlEncode(x25519KeyPair.publicKey);
    const mlkem768Seed = cryptoGetRandomValues(new Uint8Array(64));
    const mlkem768 = new MlKem768();
    const [mlkem768Client] = await mlkem768.deriveKeyPair(mlkem768Seed);
    const mlkem768ServerKey = base64UrlEncode(mlkem768Seed);
    const mlkem768ClientKey = base64UrlEncode(mlkem768Client);
    const sanitizeSegments = (value) => value
        .split(".")
        .map((segment) => segment.trim())
        .filter((segment) => segment.length > 0);
    const normalizeOption = (value, fallback) => {
        if (!value)
            return fallback;
        const trimmed = value.trim();
        return trimmed.length > 0 ? trimmed : fallback;
    };
    const handshakeMethod = normalizeOption(vlessOptions.handshakeMethod, DEFAULT_VLESS_HANDSHAKE);
    const encryptionMethod = normalizeOption(vlessOptions.encryptionMethod, DEFAULT_VLESS_ENCRYPTION);
    const buildConfig = ({ ticketValue, paddingValue, includePadding, authParam, fallbackTicket }) => {
        const segments = [handshakeMethod, encryptionMethod, normalizeOption(ticketValue, fallbackTicket)];
        if (includePadding) {
            const paddingSegments = sanitizeSegments(normalizeOption(paddingValue, DEFAULT_VLESS_PADDING));
            segments.push(...paddingSegments);
        }
        segments.push(authParam);
        return segments.join(".");
    };
    const x25519Decryption = buildConfig({
        ticketValue: vlessOptions.serverTicket,
        paddingValue: vlessOptions.serverPadding,
        includePadding: vlessOptions.includeServerPadding,
        authParam: x25519ServerKey,
        fallbackTicket: DEFAULT_VLESS_SERVER_TICKET
    });
    const x25519Encryption = buildConfig({
        ticketValue: vlessOptions.clientTicket,
        paddingValue: vlessOptions.clientPadding,
        includePadding: vlessOptions.includeClientPadding,
        authParam: x25519ClientKey,
        fallbackTicket: DEFAULT_VLESS_RESUME
    });
    const mlkem768Decryption = buildConfig({
        ticketValue: vlessOptions.serverTicket,
        paddingValue: vlessOptions.serverPadding,
        includePadding: vlessOptions.includeServerPadding,
        authParam: mlkem768ServerKey,
        fallbackTicket: DEFAULT_VLESS_SERVER_TICKET
    });
    const mlkem768Encryption = buildConfig({
        ticketValue: vlessOptions.clientTicket,
        paddingValue: vlessOptions.clientPadding,
        includePadding: vlessOptions.includeClientPadding,
        authParam: mlkem768ClientKey,
        fallbackTicket: DEFAULT_VLESS_RESUME
    });
    return {
        x25519: {
            decryption: x25519Decryption,
            encryption: x25519Encryption
        },
        mlkem768: {
            decryption: mlkem768Decryption,
            encryption: mlkem768Encryption
        },
        options: vlessOptions
    };
}
export const generateVLESSEncryption = generateVlessEncryption;
export function generateWireGuardKeyPair() {
    const keyPair = generateKeyPair();
    return {
        privateKey: bytesToBase64(keyPair.secretKey),
        publicKey: bytesToBase64(keyPair.publicKey)
    };
}
export function getWireGuardPublicKey(privateKey) {
    const trimmedKey = privateKey.trim();
    if (!trimmedKey)
        return "";
    try {
        const privateKeyBytes = base64ToBytes(trimmedKey);
        if (privateKeyBytes.length !== 32)
            return "";
        return bytesToBase64(scalarMultBase(privateKeyBytes));
    }
    catch {
        return "";
    }
}
export function generateCoreConfigTemplate(nextBackendType) {
    if (nextBackendType === "wg") {
        const wireGuardKeyPair = generateWireGuardKeyPair();
        return {
            config: createWireGuardCoreConfigJson(wireGuardKeyPair),
            wireGuardKeyPair
        };
    }
    return {
        config: defaultXrayConfig
    };
}
//# sourceMappingURL=core-config.js.map