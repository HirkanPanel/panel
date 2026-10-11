import { createDefaultTelemtCoreDraft, generateTelemtCoreConfigJsonFromDraft, validateTelemtCoreConfig } from "@hirkan/telemt-config-kit";
import { parseConfigInput } from "./json.js";
function mapTelemtIssue(issue) {
    return {
        code: issue.code,
        path: issue.path,
        message: issue.message,
        severity: "error"
    };
}
function createDefaultConfigJson() {
    const draft = createDefaultTelemtCoreDraft();
    return {
        kind: "mtproto",
        configJson: generateTelemtCoreConfigJsonFromDraft(draft)
    };
}
function validateConfig(input) {
    const parsed = parseConfigInput(input);
    if (!parsed.ok)
        return parsed;
    const result = validateTelemtCoreConfig(parsed.config);
    if (result.ok) {
        return {
            ok: true,
            config: result.config,
            issues: []
        };
    }
    return {
        ok: false,
        issues: result.issues.map(mapTelemtIssue)
    };
}
export const telemtKit = {
    kind: "mtproto",
    label: "MTProto",
    browserSafe: true,
    capabilities: {
        coreConfigTemplate: true,
        rawConfigValidation: true,
        keyGeneration: true,
        formDrafts: true,
        clientLinks: true
    },
    createDefaultConfigJson,
    validateConfig
};
//# sourceMappingURL=telemt-kit.js.map