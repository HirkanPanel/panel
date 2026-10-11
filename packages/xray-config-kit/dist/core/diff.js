import { isJsonObject } from "./json.js";
function sameJson(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
function joinPath(base, key) {
    const encoded = String(key).replace(/~/g, "~0").replace(/\//g, "~1");
    return base === "/" ? `/${encoded}` : `${base}/${encoded}`;
}
function walk(before, after, path, output) {
    if (sameJson(before, after))
        return;
    if (before === undefined) {
        output.push({ op: "added", path, after });
        return;
    }
    if (after === undefined) {
        output.push({ op: "removed", path, before });
        return;
    }
    if (Array.isArray(before) && Array.isArray(after)) {
        const max = Math.max(before.length, after.length);
        for (let index = 0; index < max; index += 1) {
            walk(before[index], after[index], joinPath(path, index), output);
        }
        return;
    }
    if (isJsonObject(before) && isJsonObject(after)) {
        const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
        for (const key of [...keys].sort()) {
            walk(before[key], after[key], joinPath(path, key), output);
        }
        return;
    }
    output.push({ op: "changed", path, before, after });
}
export function diffConfigs(before, after) {
    const output = [];
    walk(before, after, "/", output);
    return output;
}
//# sourceMappingURL=diff.js.map