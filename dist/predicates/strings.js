"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isISBN = exports.isStrongPassword = exports.isJson = exports.isJSON = exports.isUuid = exports.isUUID = exports.isMySqlTimestamp = exports.isTimestamp = exports.isNumericString = exports.isEmail = exports.stringIsOneOf = exports.isStringMatching = exports.isStringContaining = exports.isStringOfLengthBetweenInclusive = exports.isStringOfLengthBetween = exports.isStringShorterThan = exports.isStringLongerThan = exports.isStringOfLengthAtMost = exports.isStringOfLengthAtLeast = exports.isStringOfLength = void 0;
exports.isString = isString;
exports.isEmptyString = isEmptyString;
exports.isNonEmptyString = isNonEmptyString;
exports.isBlankString = isBlankString;
exports.isNotBlankString = isNotBlankString;
exports.isLowerCase = isLowerCase;
exports.isUpperCase = isUpperCase;
exports.isAlpha = isAlpha;
exports.isAlphaNumeric = isAlphaNumeric;
exports.isASCII = isASCII;
exports.isBase64 = isBase64;
exports.isHexadecimal = isHexadecimal;
exports.isHexColor = isHexColor;
exports.isURL = isURL;
exports.isIP = isIP;
exports.isIPv4 = isIPv4;
exports.isIPv6 = isIPv6;
exports.isPort = isPort;
exports.isSlug = isSlug;
exports.isSemVer = isSemVer;
exports.isMongoId = isMongoId;
exports.isJWT = isJWT;
exports.isCamelCase = isCamelCase;
exports.isSnakeCase = isSnakeCase;
exports.isKebabCase = isKebabCase;
exports.isPascalCase = isPascalCase;
exports.isTitleCase = isTitleCase;
exports.isMACAddress = isMACAddress;
exports.isFQDN = isFQDN;
exports.isLatLong = isLatLong;
exports.isMimeType = isMimeType;
exports.isBase32 = isBase32;
exports.isDataURI = isDataURI;
exports.isMD5 = isMD5;
exports.isSHA1 = isSHA1;
exports.isSHA256 = isSHA256;
exports.isISRC = isISRC;
exports.isEAN = isEAN;
exports.isUPC = isUPC;
exports.isEthereumAddress = isEthereumAddress;
exports.isISODateString = isISODateString;
exports.isCreditCard = isCreditCard;
const fpure_1 = require("fpure");
const TIMESTAMP_RE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
const MYSQL_TIMESTAMP_RE = /^([1-2][0-9]{3})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
const UUID_RE = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
function isString(value) {
    return typeof value === 'string';
}
exports.isStringOfLength = (0, fpure_1.curry)((n, value) => typeof value === 'string' && value.length === n);
exports.isStringOfLengthAtLeast = (0, fpure_1.curry)((n, value) => typeof value === 'string' && value.length >= n);
exports.isStringOfLengthAtMost = (0, fpure_1.curry)((n, value) => typeof value === 'string' && value.length <= n);
exports.isStringLongerThan = (0, fpure_1.curry)((n, value) => typeof value === 'string' && value.length > n);
exports.isStringShorterThan = (0, fpure_1.curry)((n, value) => typeof value === 'string' && value.length < n);
exports.isStringOfLengthBetween = (0, fpure_1.curry)((min, max, value) => typeof value === 'string' && value.length > min && value.length < max);
exports.isStringOfLengthBetweenInclusive = (0, fpure_1.curry)((min, max, value) => typeof value === 'string' && value.length >= min && value.length <= max);
exports.isStringContaining = (0, fpure_1.curry)((substring, value) => typeof value === 'string' && value.indexOf(substring) !== -1);
exports.isStringMatching = (0, fpure_1.curry)((pattern, value) => typeof value === 'string' && pattern.test(value));
exports.stringIsOneOf = (0, fpure_1.curry)((selection, value) => typeof value === 'string' && selection.indexOf(value) !== -1);
const isEmail = (value) => typeof value === 'string' && /\S+@\S+/.test(value);
exports.isEmail = isEmail;
const isNumericString = (value) => typeof value === 'string' && !isNaN(parseInt(value, 10));
exports.isNumericString = isNumericString;
const isTimestamp = (value) => typeof value === 'string' && TIMESTAMP_RE.test(value);
exports.isTimestamp = isTimestamp;
const isMySqlTimestamp = (value) => typeof value === 'string' && MYSQL_TIMESTAMP_RE.test(value);
exports.isMySqlTimestamp = isMySqlTimestamp;
const isUUID = (value) => typeof value === 'string' && UUID_RE.test(value);
exports.isUUID = isUUID;
exports.isUuid = exports.isUUID;
const isJSON = (value) => {
    if (typeof value !== 'string')
        return false;
    try {
        JSON.parse(value);
        return true;
    }
    catch (_a) {
        return false;
    }
};
exports.isJSON = isJSON;
exports.isJson = exports.isJSON;
function isEmptyString(value) {
    return value === '';
}
function isNonEmptyString(value) {
    return typeof value === 'string' && value.length > 0;
}
function isBlankString(value) {
    return typeof value === 'string' && value.trim().length === 0;
}
function isNotBlankString(value) {
    return typeof value === 'string' && value.trim().length > 0;
}
function isLowerCase(value) {
    return typeof value === 'string' && value === value.toLowerCase();
}
function isUpperCase(value) {
    return typeof value === 'string' && value === value.toUpperCase();
}
function isAlpha(value) {
    return typeof value === 'string' && /^[A-Z]+$/i.test(value);
}
function isAlphaNumeric(value) {
    return typeof value === 'string' && /^[A-Z0-9]+$/i.test(value);
}
function isASCII(value) {
    return typeof value === 'string' && /^[\x00-\x7F]*$/.test(value);
}
function isBase64(value) {
    return typeof value === 'string' && /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(value);
}
function isHexadecimal(value) {
    return typeof value === 'string' && /^[0-9A-F]+$/i.test(value);
}
function isHexColor(value) {
    return typeof value === 'string' && /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(value);
}
function isURL(value) {
    return typeof value === 'string' && /^https?:\/\/.+/.test(value);
}
const IPV4_RE = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const IPV6_RE = /^(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,5}(?::[0-9A-Fa-f]{1,4}){1,2}|(?:[0-9A-Fa-f]{1,4}:){1,4}(?::[0-9A-Fa-f]{1,4}){1,3}|(?:[0-9A-Fa-f]{1,4}:){1,3}(?::[0-9A-Fa-f]{1,4}){1,4}|(?:[0-9A-Fa-f]{1,4}:){1,2}(?::[0-9A-Fa-f]{1,4}){1,5}|[0-9A-Fa-f]{1,4}:(?::[0-9A-Fa-f]{1,4}){1,6}|:(?:(?::[0-9A-Fa-f]{1,4}){1,7}|:)|fe80:(?::[0-9A-Fa-f]{0,4}){0,4}%[0-9A-Za-z]+|::(?:ffff(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[0-9A-Fa-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/;
function isIP(value) {
    return isIPv4(value) || isIPv6(value);
}
function isIPv4(value) {
    return typeof value === 'string' && IPV4_RE.test(value);
}
function isIPv6(value) {
    return typeof value === 'string' && IPV6_RE.test(value);
}
function isPort(value) {
    if (typeof value !== 'string')
        return false;
    const n = parseInt(value, 10);
    return !isNaN(n) && n >= 0 && n <= 65535;
}
function isSlug(value) {
    return typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
const SEMVER_RE = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function isSemVer(value) {
    return typeof value === 'string' && SEMVER_RE.test(value);
}
function isMongoId(value) {
    return typeof value === 'string' && /^[0-9A-F]{24}$/i.test(value);
}
function isJWT(value) {
    return typeof value === 'string' && /^[A-Z0-9_-]+\.[A-Z0-9_-]+\.[A-Z0-9_-]+$/i.test(value);
}
function isCamelCase(value) {
    return typeof value === 'string' && /^[a-z][A-Za-z0-9]*$/.test(value);
}
function isSnakeCase(value) {
    return typeof value === 'string' && /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/.test(value);
}
function isKebabCase(value) {
    return typeof value === 'string' && /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(value);
}
function isPascalCase(value) {
    return typeof value === 'string' && /^[A-Z][a-zA-Z0-9]*$/.test(value);
}
function isTitleCase(value) {
    return typeof value === 'string' && /^[A-Z][a-z]*( [A-Z][a-z]*)*$/.test(value);
}
const MAC_RE = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/i;
function isMACAddress(value) {
    return typeof value === 'string' && MAC_RE.test(value);
}
function isFQDN(value) {
    return typeof value === 'string' && /^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,})?$/.test(value);
}
exports.isStrongPassword = (0, fpure_1.curry)((options, value) => {
    if (typeof value !== 'string')
        return false;
    const { minLength = 8, minLowercase = 1, minUppercase = 1, minNumbers = 1, minSymbols = 1, } = options;
    if (value.length < minLength)
        return false;
    if ((value.match(/[a-z]/g) || []).length < minLowercase)
        return false;
    if ((value.match(/[A-Z]/g) || []).length < minUppercase)
        return false;
    if ((value.match(/[0-9]/g) || []).length < minNumbers)
        return false;
    if ((value.match(/[^a-zA-Z0-9]/g) || []).length < minSymbols)
        return false;
    return true;
});
function isLatLong(value) {
    return typeof value === 'string' && /^-?\d+(?:\.\d+)?,\s*-?\d+(?:\.\d+)?$/.test(value);
}
function isMimeType(value) {
    return typeof value === 'string' && /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*\/[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(value);
}
exports.isISBN = (0, fpure_1.curry)((version, value) => {
    if (typeof value !== 'string')
        return false;
    const digits = value.replace(/[-\s]/g, '');
    if (version === 10) {
        if (!/^\d{9}[\dX]$/.test(digits))
            return false;
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += (10 - i) * parseInt(digits[i], 10);
        }
        sum += digits[9] === 'X' ? 10 : parseInt(digits[9], 10);
        return sum % 11 === 0;
    }
    if (!/^\d{13}$/.test(digits))
        return false;
    let sum = 0;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(digits[i], 10) * (i % 2 === 0 ? 1 : 3);
    }
    return sum % 10 === 0;
});
function isBase32(value) {
    return typeof value === 'string' && /^[A-Z2-7]+=*$/.test(value);
}
function isDataURI(value) {
    return typeof value === 'string' && /^data:[a-zA-Z0-9]+\/[a-zA-Z0-9]+(;base64)?,.+$/.test(value);
}
function isMD5(value) {
    return typeof value === 'string' && /^[0-9A-F]{32}$/i.test(value);
}
function isSHA1(value) {
    return typeof value === 'string' && /^[0-9A-F]{40}$/i.test(value);
}
function isSHA256(value) {
    return typeof value === 'string' && /^[0-9A-F]{64}$/i.test(value);
}
function isISRC(value) {
    return typeof value === 'string' && /^[A-Z]{2}-?\w{3}-?\d{2}-?\d{5}$/.test(value);
}
function isEAN(value) {
    if (typeof value !== 'string')
        return false;
    const digits = value.replace(/[\s-]/g, '');
    if (!/^\d{8}$/.test(digits) && !/^\d{13}$/.test(digits))
        return false;
    const isEAN8 = digits.length === 8;
    let sum = 0;
    for (let i = 0; i < digits.length - 1; i++) {
        sum += parseInt(digits[i], 10) * (i % 2 === (isEAN8 ? 0 : 1) ? 3 : 1);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit === parseInt(digits[digits.length - 1], 10);
}
function isUPC(value) {
    if (typeof value !== 'string')
        return false;
    const digits = value.replace(/[\s-]/g, '');
    if (!/^\d{12}$/.test(digits))
        return false;
    let sum = 0;
    for (let i = 0; i < 11; i++) {
        sum += parseInt(digits[i], 10) * (i % 2 === 0 ? 3 : 1);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit === parseInt(digits[11], 10);
}
function isEthereumAddress(value) {
    return typeof value === 'string' && /^0x[0-9A-F]{40}$/i.test(value);
}
function isISODateString(value) {
    return typeof value === 'string' && /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:[+-][0-2]\d:[0-5]\d|Z)?$/.test(value);
}
function luhnCheck(cardNumber) {
    let sum = 0;
    let alternate = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        const digit = parseInt(cardNumber[i], 10);
        if (isNaN(digit))
            return false;
        if (alternate) {
            const doubled = digit * 2;
            sum += doubled > 9 ? doubled - 9 : doubled;
        }
        else {
            sum += digit;
        }
        alternate = !alternate;
    }
    return sum % 10 === 0;
}
function isCreditCard(value) {
    if (typeof value !== 'string')
        return false;
    const digits = value.replace(/[\s-]/g, '');
    return /^\d{13,19}$/.test(digits) && luhnCheck(digits);
}
//# sourceMappingURL=strings.js.map