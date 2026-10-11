import type { Issue } from "./types.js";
export type Result<T, E = Issue> = {
    readonly ok: true;
    readonly value: T;
    readonly warnings: Issue[];
} | {
    readonly ok: false;
    readonly errors: E[];
    readonly warnings: Issue[];
};
export declare function ok<T>(value: T, warnings?: Issue[]): Result<T>;
export declare function err<E = Issue>(errors: E[], warnings?: Issue[]): Result<never, E>;
export declare function issuesToResult<T>(value: T, issues: readonly Issue[]): Result<T>;
//# sourceMappingURL=result.d.ts.map