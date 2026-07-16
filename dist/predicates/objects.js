"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectContainingAny = exports.isObjectContainingAll = exports.isObjectWithKeys = exports.isObjectSatisfying = exports.isObjectExtending = exports.isObjectMatching = exports.isObjectAbsent = exports.isObjectContaining = void 0;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isNonEmptyObject = isNonEmptyObject;
exports.isPlainObject = isPlainObject;
exports.isFrozenObject = isFrozenObject;
exports.isSealedObject = isSealedObject;
exports.isExtensibleObject = isExtensibleObject;
const fpure_1 = require("fpure");
function guardObject(fn) {
    return ((...args) => {
        try {
            return fn(...args);
        }
        catch (_a) {
            return false;
        }
    });
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
exports.isObjectContaining = (0, fpure_1.curry)((key, value) => isObject(value) && Object.prototype.hasOwnProperty.call(value, key));
exports.isObjectAbsent = (0, fpure_1.curry)((key, value) => isObject(value) && !Object.prototype.hasOwnProperty.call(value, key));
exports.isObjectMatching = guardObject((0, fpure_1.curry)((a, b) => {
    if (!isObject(a) || !isObject(b))
        return false;
    return (0, fpure_1.equals)(a, b);
}));
exports.isObjectExtending = guardObject((0, fpure_1.curry)((schema, value) => {
    if (!isObject(schema) || !isObject(value))
        return false;
    return (0, fpure_1.whereEq)(schema, value);
}));
exports.isObjectSatisfying = guardObject((0, fpure_1.curry)((schema, value) => {
    if (!isObject(schema) || !isObject(value))
        return false;
    return (0, fpure_1.where)(schema, value);
}));
function isEmptyObject(value) {
    return isObject(value) && Object.keys(value).length === 0;
}
function isNonEmptyObject(value) {
    return isObject(value) && Object.keys(value).length > 0;
}
function isPlainObject(value) {
    return value !== null && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype;
}
function isFrozenObject(value) {
    return isObject(value) && Object.isFrozen(value);
}
function isSealedObject(value) {
    return isObject(value) && Object.isSealed(value);
}
function isExtensibleObject(value) {
    return isObject(value) && Object.isExtensible(value);
}
exports.isObjectWithKeys = (0, fpure_1.curry)((keys, value) => isObject(value) && Object.keys(value).length === keys.length && keys.every(k => Object.prototype.hasOwnProperty.call(value, k)));
exports.isObjectContainingAll = (0, fpure_1.curry)((keys, value) => isObject(value) && keys.every(k => Object.prototype.hasOwnProperty.call(value, k)));
exports.isObjectContainingAny = (0, fpure_1.curry)((keys, value) => isObject(value) && keys.some(k => Object.prototype.hasOwnProperty.call(value, k)));
//# sourceMappingURL=objects.js.map