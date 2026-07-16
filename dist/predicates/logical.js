"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOneOf = exports.isNonePass = exports.isAnyPass = exports.isAllPass = void 0;
exports.isNot = isNot;
const fpure_1 = require("fpure");
function isNot(pred) {
    return (value) => !pred(value);
}
exports.isAllPass = (0, fpure_1.curry)((predicates, value) => predicates.every(p => p(value)));
exports.isAnyPass = (0, fpure_1.curry)((predicates, value) => predicates.some(p => p(value)));
exports.isNonePass = (0, fpure_1.curry)((predicates, value) => predicates.every(p => !p(value)));
exports.isOneOf = (0, fpure_1.curry)((selection, value) => selection.indexOf(value) !== -1);
//# sourceMappingURL=logical.js.map