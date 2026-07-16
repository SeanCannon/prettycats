"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTypeOf = exports.isInstanceOf = void 0;
exports.isBoolean = isBoolean;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isNil = isNil;
exports.isDefined = isDefined;
exports.isFunction = isFunction;
exports.isSymbol = isSymbol;
exports.isBigInt = isBigInt;
exports.isPrimitive = isPrimitive;
exports.isPromise = isPromise;
exports.isRegExp = isRegExp;
exports.isError = isError;
exports.isMap = isMap;
exports.isSet = isSet;
exports.isWeakMap = isWeakMap;
exports.isWeakSet = isWeakSet;
const fpure_1 = require("fpure");
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isUndefined(value) {
    return typeof value === 'undefined';
}
function isNull(value) {
    return value === null;
}
function isNil(value) {
    return value == null;
}
function isDefined(value) {
    return value != null;
}
function isFunction(value) {
    return typeof value === 'function';
}
function isSymbol(value) {
    return typeof value === 'symbol';
}
function isBigInt(value) {
    return typeof value === 'bigint';
}
function isPrimitive(value) {
    if (value === null)
        return true;
    switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'symbol':
        case 'bigint':
        case 'undefined':
            return true;
        default:
            return false;
    }
}
function isPromise(value) {
    return value instanceof Promise;
}
function isRegExp(value) {
    return value instanceof RegExp;
}
function isError(value) {
    return value instanceof Error;
}
function isMap(value) {
    return value instanceof Map;
}
function isSet(value) {
    return value instanceof Set;
}
function isWeakMap(value) {
    return value instanceof WeakMap;
}
function isWeakSet(value) {
    return value instanceof WeakSet;
}
exports.isInstanceOf = (0, fpure_1.curry)((ctor, value) => value instanceof ctor);
exports.isTypeOf = (0, fpure_1.curry)((typeName, value) => typeof value === typeName);
//# sourceMappingURL=primitives.js.map