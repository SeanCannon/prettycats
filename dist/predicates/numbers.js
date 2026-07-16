"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMultipleOf = exports.isNumericBoolean = exports.isOddNumber = exports.isEvenNumber = exports.isCalendarMonthZeroBased = exports.isCalendarMonth = exports.isAtMostZero = exports.isAtLeastZero = exports.isNegativeNumber = exports.isPositiveNumber = exports.numberIsOneOf = exports.isNumberBetweenInclusive = exports.isNumberBetween = void 0;
exports.isNumber = isNumber;
exports.isNumeric = isNumeric;
exports.isInteger = isInteger;
exports.isFloat = isFloat;
exports.isFiniteNumber = isFiniteNumber;
exports.isNaNValue = isNaNValue;
exports.isSafeInteger = isSafeInteger;
exports.isZero = isZero;
exports.isPositiveZero = isPositiveZero;
exports.isNegativeZero = isNegativeZero;
exports.isNonPositive = isNonPositive;
exports.isNonNegative = isNonNegative;
exports.isPercent = isPercent;
exports.isPortNumber = isPortNumber;
exports.isHTTPStatusCode = isHTTPStatusCode;
exports.isUnitInterval = isUnitInterval;
exports.isIndex = isIndex;
exports.isArrayIndex = isArrayIndex;
exports.isPrime = isPrime;
exports.isPowerOfTwo = isPowerOfTwo;
const fpure_1 = require("fpure");
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumberBetween = (0, fpure_1.curry)((low, high, value) => typeof value === 'number' && value > low && value < high);
exports.isNumberBetweenInclusive = (0, fpure_1.curry)((low, high, value) => typeof value === 'number' && value >= low && value <= high);
exports.numberIsOneOf = (0, fpure_1.curry)((selection, value) => typeof value === 'number' && selection.indexOf(value) !== -1);
const isPositiveNumber = (value) => typeof value === 'number' && value > 0;
exports.isPositiveNumber = isPositiveNumber;
const isNegativeNumber = (value) => typeof value === 'number' && value < 0;
exports.isNegativeNumber = isNegativeNumber;
const isAtLeastZero = (value) => typeof value === 'number' && value >= 0;
exports.isAtLeastZero = isAtLeastZero;
const isAtMostZero = (value) => typeof value === 'number' && value <= 0;
exports.isAtMostZero = isAtMostZero;
const isCalendarMonth = (value) => typeof value === 'number' && value >= 1 && value <= 12;
exports.isCalendarMonth = isCalendarMonth;
const isCalendarMonthZeroBased = (value) => typeof value === 'number' && value >= 0 && value <= 11;
exports.isCalendarMonthZeroBased = isCalendarMonthZeroBased;
const isEvenNumber = (value) => typeof value === 'number' && value % 2 === 0;
exports.isEvenNumber = isEvenNumber;
const isOddNumber = (value) => typeof value === 'number' && value % 2 !== 0;
exports.isOddNumber = isOddNumber;
function isNumeric(value) {
    return !isNaN(parseInt(String(value), 10));
}
const isNumericBoolean = (value) => typeof value === 'number' && (value === 0 || value === 1);
exports.isNumericBoolean = isNumericBoolean;
function isInteger(value) {
    return Number.isInteger(value);
}
function isFloat(value) {
    return typeof value === 'number' && !Number.isInteger(value);
}
function isFiniteNumber(value) {
    return Number.isFinite(value);
}
function isNaNValue(value) {
    return Number.isNaN(value);
}
function isSafeInteger(value) {
    return Number.isSafeInteger(value);
}
exports.isMultipleOf = (0, fpure_1.curry)((divisor, value) => typeof value === 'number' && divisor !== 0 && value % divisor === 0);
function isZero(value) {
    return value === 0;
}
function isPositiveZero(value) {
    return Object.is(value, 0);
}
function isNegativeZero(value) {
    return Object.is(value, -0);
}
function isNonPositive(value) {
    return typeof value === 'number' && value <= 0;
}
function isNonNegative(value) {
    return typeof value === 'number' && value >= 0;
}
function isPercent(value) {
    return typeof value === 'number' && value >= 0 && value <= 100;
}
function isPortNumber(value) {
    return typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 65535;
}
function isHTTPStatusCode(value) {
    return typeof value === 'number' && Number.isInteger(value) && value >= 100 && value <= 599;
}
function isUnitInterval(value) {
    return typeof value === 'number' && value >= 0 && value <= 1;
}
function isIndex(value) {
    return typeof value === 'number' && Number.isInteger(value) && value >= 0;
}
function isArrayIndex(value) {
    return typeof value === 'number' && Number.isInteger(value) && value >= 0 && value < 2 ** 32 - 1;
}
function isPrime(value) {
    if (typeof value !== 'number' || !Number.isInteger(value))
        return false;
    const n = value;
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    if (n % 2 === 0 || n % 3 === 0)
        return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0)
            return false;
    }
    return true;
}
function isPowerOfTwo(value) {
    return typeof value === 'number' && value > 0 && (value & (value - 1)) === 0;
}
//# sourceMappingURL=numbers.js.map