import { isJsonObject } from "../core/json.js";
import { makeIssue } from "../core/issues.js";
import { err, ok } from "../core/result.js";
import { importXrayConfig } from "./index.js";
function compact(input) {
    const output = {};
    for (const [key, value] of Object.entries(input)) {
        if (value !== undefined)
            output[key] = value;
    }
    return output;
}
function parseJsonValue(value, path, issues) {
    if (value === undefined || value === null || value === "")
        return undefined;
    if (typeof value === "string") {
        try {
            return JSON.parse(value);
        }
        catch (error) {
            issues.push(makeIssue({
                code: "XCK_3XUI_INVALID_JSON_FIELD",
                severity: "error",
                category: "import",
                path,
                message: `3x-ui DB field ${path} is not valid JSON.`,
                suggestion: error instanceof Error ? error.message : undefined
            }));
            return undefined;
        }
    }
    if (typeof value === "boolean" ||
        typeof value === "number" ||
        isJsonObject(value) ||
        Array.isArray(value)) {
        return value;
    }
    issues.push(makeIssue({
        code: "XCK_3XUI_UNSUPPORTED_FIELD_TYPE",
        severity: "error",
        category: "import",
        path,
        message: `3x-ui DB field ${path} has an unsupported value type.`
    }));
    return undefined;
}
function parseJsonObjectField(value, path, issues) {
    const parsed = parseJsonValue(value, path, issues);
    if (parsed === undefined)
        return {};
    if (isJsonObject(parsed))
        return parsed;
    issues.push(makeIssue({
        code: "XCK_3XUI_FIELD_NOT_OBJECT",
        severity: "error",
        category: "import",
        path,
        message: `3x-ui DB field ${path} must parse to a JSON object.`
    }));
    return {};
}
function text(value) {
    return typeof value === "string" ? value : undefined;
}
function numberValue(value) {
    if (typeof value === "number" && Number.isInteger(value))
        return value;
    if (typeof value === "string" && /^\d+$/.test(value))
        return Number(value);
    return undefined;
}
export function parseThreeXUiDbInboundRecord(input, options = {}) {
    if (!isJsonObject(input)) {
        return err([
            makeIssue({
                code: "XCK_3XUI_RECORD_NOT_OBJECT",
                severity: "error",
                category: "import",
                path: "/",
                message: "3x-ui DB inbound import requires an object record."
            })
        ]);
    }
    const issues = [];
    const settings = parseJsonObjectField(input.settings, "/settings", issues);
    const streamSettings = parseJsonObjectField(input.streamSettings, "/streamSettings", issues);
    const sniffing = parseJsonObjectField(input.sniffing, "/sniffing", issues);
    const clientStats = parseJsonValue(input.clientStats, "/clientStats", issues);
    const rawInbound = compact({
        tag: text(input.tag) ?? (input.id === undefined ? undefined : `inbound-${String(input.id)}`),
        listen: text(input.listen),
        port: numberValue(input.port),
        protocol: text(input.protocol),
        settings,
        streamSettings,
        sniffing
    });
    const errors = issues.filter((issue) => issue.severity === "error");
    if (errors.length > 0) {
        return err(errors, issues.filter((issue) => issue.severity !== "error"));
    }
    const imported = importXrayConfig({ inbounds: [rawInbound] }, options);
    const inbound = imported.profile.inbounds[0];
    if (!inbound) {
        return err([
            makeIssue({
                code: "XCK_3XUI_EMPTY_IMPORT",
                severity: "error",
                category: "import",
                path: "/",
                message: "3x-ui DB inbound record did not produce an inbound."
            })
        ], imported.issues);
    }
    return ok({ inbound, clientStats }, imported.issues);
}
//# sourceMappingURL=three-x-ui.js.map