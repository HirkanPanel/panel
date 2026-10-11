import type { Issue, IssueCategory, IssueSeverity } from "./types.js";
export declare function makeIssue(input: {
    readonly code: string;
    readonly severity: IssueSeverity;
    readonly category: IssueCategory;
    readonly path: string;
    readonly message: string;
    readonly suggestion?: string;
    readonly adapterId?: string;
}): Issue;
export declare function hasErrors(issues: readonly Issue[]): boolean;
/**
 * JSON-pointer-style path for issues. Uses **1-based** indices for `inbounds` and `outbounds` array
 * positions (first row is `/inbounds/1/...`) so messages match how users count rows; nested arrays
 * keep standard 0-based indices (e.g. `serverNames/1` = second SNI entry).
 */
export declare function pathForZod(path: readonly (string | number)[]): string;
//# sourceMappingURL=issues.d.ts.map