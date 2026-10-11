export function ok(value, warnings = []) {
    return { ok: true, value, warnings };
}
export function err(errors, warnings = []) {
    return { ok: false, errors, warnings };
}
export function issuesToResult(value, issues) {
    const errors = issues.filter((issue) => issue.severity === "error");
    const warnings = issues.filter((issue) => issue.severity !== "error");
    return errors.length > 0 ? err(errors, warnings) : ok(value, warnings);
}
//# sourceMappingURL=result.js.map