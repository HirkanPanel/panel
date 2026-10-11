export function isJsonObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function cloneJson(value) {
    return JSON.parse(JSON.stringify(value));
}
export function stableStringify(value) {
    return JSON.stringify(sortJson(value), null, 2);
}
export function sortJson(value) {
    if (Array.isArray(value))
        return value.map(sortJson);
    if (!isJsonObject(value))
        return value;
    const sorted = {};
    for (const key of Object.keys(value).sort()) {
        const child = value[key];
        if (child !== undefined)
            sorted[key] = sortJson(child);
    }
    return sorted;
}
function decodePointer(pointer) {
    if (!pointer.startsWith("/")) {
        throw new Error(`Invalid JSON pointer "${pointer}"`);
    }
    return pointer
        .slice(1)
        .split("/")
        .map((part) => part.replace(/~1/g, "/").replace(/~0/g, "~"));
}
function mutableContainer(value) {
    if (Array.isArray(value))
        return value;
    if (isJsonObject(value))
        return value;
    throw new Error("Patch target is not an object or array");
}
export function applyRawPatch(input, patch) {
    const target = cloneJson(input);
    const parts = decodePointer(patch.path);
    let cursor = target;
    for (let index = 0; index < parts.length - 1; index += 1) {
        const part = parts[index];
        if (part === undefined)
            throw new Error(`Invalid JSON pointer "${patch.path}"`);
        const container = mutableContainer(cursor);
        const next = Array.isArray(container) ? container[Number(part)] : container[part];
        if (next === undefined)
            throw new Error(`Patch path does not exist: ${patch.path}`);
        cursor = next;
    }
    const leaf = parts.at(-1);
    if (leaf === undefined || leaf === "")
        throw new Error(`Invalid JSON pointer "${patch.path}"`);
    const container = mutableContainer(cursor);
    if (Array.isArray(container)) {
        const idx = leaf === "-" ? container.length : Number(leaf);
        if (!Number.isInteger(idx) || idx < 0 || idx > container.length) {
            throw new Error(`Invalid array patch index in ${patch.path}`);
        }
        if (patch.op === "remove") {
            if (idx >= container.length)
                throw new Error(`Patch path does not exist: ${patch.path}`);
            container.splice(idx, 1);
        }
        else if (patch.op === "add") {
            if (patch.value === undefined)
                throw new Error(`Patch "${patch.op}" requires a value`);
            container.splice(idx, 0, patch.value);
        }
        else {
            if (idx >= container.length)
                throw new Error(`Patch path does not exist: ${patch.path}`);
            if (patch.value === undefined)
                throw new Error(`Patch "${patch.op}" requires a value`);
            container[idx] = patch.value;
        }
        return target;
    }
    if (patch.op === "remove") {
        delete container[leaf];
    }
    else {
        if (patch.value === undefined)
            throw new Error(`Patch "${patch.op}" requires a value`);
        container[leaf] = patch.value;
    }
    return target;
}
export function mergeTopLevel(base, topLevel) {
    if (!topLevel)
        return base;
    return { ...topLevel, ...base };
}
//# sourceMappingURL=json.js.map