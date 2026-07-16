"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayContainingAny = exports.isArrayContainingAll = exports.isSupersetOf = exports.isSubsetOf = exports.isArrayOfType = exports.isArrayOfLengthBetweenInclusive = exports.isArrayOfLengthBetween = exports.isArrayEmpty = exports.isEmptyArray = exports.isArrayContaining = exports.isArrayShorterThan = exports.isArrayLongerThan = exports.isArrayOfLengthAtMost = exports.isArrayOfLengthAtLeast = exports.isArrayOfLength = void 0;
exports.isArray = isArray;
exports.isNonEmptyArray = isNonEmptyArray;
exports.isArrayOfStrings = isArrayOfStrings;
exports.isArrayOfNumbers = isArrayOfNumbers;
exports.isUniqueArray = isUniqueArray;
exports.isSortedArray = isSortedArray;
exports.isArrayContainingDuplicates = isArrayContainingDuplicates;
exports.isHomogeneousArray = isHomogeneousArray;
const fpure_1 = require("fpure");
const private_1 = require("./private");
function isArray(value) {
    return Array.isArray(value);
}
exports.isArrayOfLength = (0, fpure_1.curry)((n, value) => Array.isArray(value) && value.length === n);
exports.isArrayOfLengthAtLeast = (0, fpure_1.curry)((n, value) => Array.isArray(value) && value.length >= n);
exports.isArrayOfLengthAtMost = (0, fpure_1.curry)((n, value) => Array.isArray(value) && value.length <= n);
exports.isArrayLongerThan = (0, fpure_1.curry)((n, value) => Array.isArray(value) && value.length > n);
exports.isArrayShorterThan = (0, fpure_1.curry)((n, value) => Array.isArray(value) && value.length < n);
exports.isArrayContaining = (0, fpure_1.curry)((item, value) => Array.isArray(value) && value.indexOf(item) !== -1);
const isEmptyArray = (value) => Array.isArray(value) && (0, private_1.isEmpty)(value);
exports.isEmptyArray = isEmptyArray;
exports.isArrayEmpty = exports.isEmptyArray;
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}
exports.isArrayOfLengthBetween = (0, fpure_1.curry)((min, max, value) => Array.isArray(value) && value.length > min && value.length < max);
exports.isArrayOfLengthBetweenInclusive = (0, fpure_1.curry)((min, max, value) => Array.isArray(value) && value.length >= min && value.length <= max);
function isArrayOfStrings(value) {
    return Array.isArray(value) && value.every(v => typeof v === 'string');
}
function isArrayOfNumbers(value) {
    return Array.isArray(value) && value.every(v => typeof v === 'number');
}
exports.isArrayOfType = (0, fpure_1.curry)((pred, value) => Array.isArray(value) && value.every(v => pred(v)));
function isUniqueArray(value) {
    return Array.isArray(value) && new Set(value).size === value.length;
}
function isSortedArray(value) {
    if (!Array.isArray(value))
        return false;
    for (let i = 1; i < value.length; i++) {
        if (value[i - 1] > value[i])
            return false;
    }
    return true;
}
exports.isSubsetOf = (0, fpure_1.curry)((superset, value) => Array.isArray(value) && Array.isArray(superset) && value.every(v => superset.indexOf(v) !== -1));
exports.isSupersetOf = (0, fpure_1.curry)((subset, value) => Array.isArray(value) && Array.isArray(subset) && subset.every(v => value.indexOf(v) !== -1));
exports.isArrayContainingAll = (0, fpure_1.curry)((items, value) => Array.isArray(value) && items.every(i => value.indexOf(i) !== -1));
exports.isArrayContainingAny = (0, fpure_1.curry)((items, value) => Array.isArray(value) && items.some(i => value.indexOf(i) !== -1));
function isArrayContainingDuplicates(value) {
    return Array.isArray(value) && new Set(value).size !== value.length;
}
function isHomogeneousArray(value) {
    if (!Array.isArray(value) || value.length === 0)
        return false;
    const firstType = typeof value[0];
    return value.every(v => typeof v === firstType);
}
//# sourceMappingURL=arrays.js.map