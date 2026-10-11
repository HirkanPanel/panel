import type { JsonObject, JsonValue, RawPatch } from "./types.js";
export declare function isJsonObject(value: unknown): value is JsonObject;
export declare function cloneJson<T extends JsonValue>(value: T): T;
export declare function stableStringify(value: JsonValue): string;
export declare function sortJson(value: JsonValue): JsonValue;
export declare function applyRawPatch<T extends JsonValue>(input: T, patch: RawPatch): T;
export declare function mergeTopLevel(base: JsonObject, topLevel: Record<string, JsonValue> | undefined): JsonObject;
//# sourceMappingURL=json.d.ts.map