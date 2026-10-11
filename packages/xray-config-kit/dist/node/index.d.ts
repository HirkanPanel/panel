import type { JsonObject, XrayConfig } from "../core/types.js";
export type XrayBinaryTestOptions = {
    readonly binaryPath?: string;
    readonly timeoutMs?: number;
    readonly keepTempFile?: boolean;
};
export type XrayBinaryTestResult = {
    readonly ok: boolean;
    readonly binaryPath: string;
    readonly exitCode: number | null;
    readonly stdout: string;
    readonly stderr: string;
    readonly configPath: string;
};
export declare function findXrayBinary(candidates?: readonly string[]): Promise<string | undefined>;
export declare function getXrayVersion(binaryPath?: string): Promise<string | undefined>;
export declare function testXrayConfig(config: XrayConfig | JsonObject, options?: XrayBinaryTestOptions): Promise<XrayBinaryTestResult>;
//# sourceMappingURL=index.d.ts.map