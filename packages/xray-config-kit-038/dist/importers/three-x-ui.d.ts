import { type Result } from "../core/result.js";
import type { ImportOptions, Inbound, JsonObject, JsonValue } from "../core/types.js";
export type ThreeXUiDbInboundImport = {
    readonly inbound: Inbound;
    readonly clientStats?: JsonValue;
};
export type ThreeXUiDbInboundRecord = {
    readonly id?: number | string;
    readonly listen?: string;
    readonly port?: number | string;
    readonly protocol?: string;
    readonly settings?: string | JsonObject;
    readonly streamSettings?: string | JsonObject;
    readonly tag?: string;
    readonly sniffing?: string | JsonObject;
    readonly clientStats?: string | JsonValue;
};
export declare function parseThreeXUiDbInboundRecord(input: unknown, options?: ImportOptions): Result<ThreeXUiDbInboundImport>;
//# sourceMappingURL=three-x-ui.d.ts.map