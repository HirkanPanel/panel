export function makeIssue(input) {
    return input;
}
export function hasErrors(issues) {
    return issues.some((issue) => issue.severity === "error");
}
/**
 * JSON-pointer-style path for issues. Uses **1-based** indices for `inbounds` and `outbounds` array
 * positions (first row is `/inbounds/1/...`) so messages match how users count rows; nested arrays
 * keep standard 0-based indices (e.g. `serverNames/1` = second SNI entry).
 */
export function pathForZod(path) {
    if (path.length === 0)
        return "/";
    const segments = path
        .filter((part) => typeof part === "string" || typeof part === "number")
        .map(String);
    for (let i = 0; i < segments.length - 1; i++) {
        if (segments[i] === "inbounds" || segments[i] === "outbounds") {
            const next = segments[i + 1];
            if (typeof next === "string" && /^\d+$/.test(next)) {
                segments[i + 1] = String(Number(next) + 1);
            }
        }
    }
    return `/${segments.join("/")}`;
}
//# sourceMappingURL=issues.js.map