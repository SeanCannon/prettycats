"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTruthy = isTruthy;
exports.isFalsy = isFalsy;
exports.isTrue = isTrue;
exports.isFalse = isFalse;
function isTruthy(value) {
    return !!value;
}
function isFalsy(value) {
    return !value;
}
function isTrue(value) {
    return value === true;
}
function isFalse(value) {
    return value === false;
}
//# sourceMappingURL=booleans.js.map