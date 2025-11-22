export function sortedRules(name) {
    const sortRules = name;
    const keys = Object.keys(sortRules).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
    );
    const rebuilt = {};
    for (const k of keys) rebuilt[k] = sortRules[k];
    Object.keys(sortRules).forEach((k) => delete sortRules[k]);
    return Object.assign(sortRules, rebuilt);
}