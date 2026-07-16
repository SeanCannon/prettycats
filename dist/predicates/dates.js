"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDateInYear = exports.isDateInMonth = exports.isBeforeDate = exports.isAfterDate = exports.isSameDate = exports.isDateInRange = exports.isLeapYear = void 0;
exports.isDate = isDate;
exports.isValidDate = isValidDate;
exports.isDateInPast = isDateInPast;
exports.isDateInFuture = isDateInFuture;
exports.isDateToday = isDateToday;
exports.isDateYesterday = isDateYesterday;
exports.isDateTomorrow = isDateTomorrow;
exports.isWeekend = isWeekend;
exports.isWeekday = isWeekday;
const fpure_1 = require("fpure");
function isSameDateLocal(a, b) {
    return a.toDateString() === b.toDateString();
}
function isDate(value) {
    return value instanceof Date;
}
function isValidDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
function isDateInPast(value) {
    return isValidDate(value) && value.getTime() < Date.now();
}
function isDateInFuture(value) {
    return isValidDate(value) && value.getTime() > Date.now();
}
function isDateToday(value) {
    return isValidDate(value) && isSameDateLocal(value, new Date());
}
function isDateYesterday(value) {
    return isValidDate(value) && isSameDateLocal(value, new Date(Date.now() - 86400000));
}
function isDateTomorrow(value) {
    return isValidDate(value) && isSameDateLocal(value, new Date(Date.now() + 86400000));
}
function isWeekend(value) {
    return isValidDate(value) && (value.getDay() === 0 || value.getDay() === 6);
}
function isWeekday(value) {
    return isValidDate(value) && value.getDay() > 0 && value.getDay() < 6;
}
exports.isLeapYear = (0, fpure_1.curry)((value) => {
    if (!isValidDate(value))
        return false;
    const year = value.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
});
exports.isDateInRange = (0, fpure_1.curry)((start, end, value) => isValidDate(value) && value.getTime() >= start.getTime() && value.getTime() <= end.getTime());
exports.isSameDate = (0, fpure_1.curry)((a, b) => isValidDate(a) && isValidDate(b) && a.toDateString() === b.toDateString());
exports.isAfterDate = (0, fpure_1.curry)((reference, value) => isValidDate(value) && isValidDate(reference) && value.getTime() > reference.getTime());
exports.isBeforeDate = (0, fpure_1.curry)((reference, value) => isValidDate(value) && isValidDate(reference) && value.getTime() < reference.getTime());
exports.isDateInMonth = (0, fpure_1.curry)((month, value) => isValidDate(value) && value.getMonth() === month);
exports.isDateInYear = (0, fpure_1.curry)((year, value) => isValidDate(value) && value.getFullYear() === year);
//# sourceMappingURL=dates.js.map