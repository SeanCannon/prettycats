import { curry, test, isString as _isString } from 'fpure'
import { both } from './logical'

export const isString = _isString

const TIMESTAMP_RE =
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/

const MYSQL_TIMESTAMP_RE =
  /^([1-2][0-9]{3})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/

const UUID_RE =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/

const EMAIL_RE = /\S+@\S+/
const ALPHA_RE = /^[A-Z]+$/i
const ALPHA_NUMERIC_RE = /^[A-Z0-9]+$/i
const ASCII_RE = /^[\x00-\x7F]*$/
const BASE64_RE = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i
const HEX_RE = /^[0-9A-F]+$/i
const HEX_COLOR_RE = /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i
const URL_RE = /^https?:\/\/.+/

const IPV4_RE = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

const IPV6_RE = /^(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,5}(?::[0-9A-Fa-f]{1,4}){1,2}|(?:[0-9A-Fa-f]{1,4}:){1,4}(?::[0-9A-Fa-f]{1,4}){1,3}|(?:[0-9A-Fa-f]{1,4}:){1,3}(?::[0-9A-Fa-f]{1,4}){1,4}|(?:[0-9A-Fa-f]{1,4}:){1,2}(?::[0-9A-Fa-f]{1,4}){1,5}|[0-9A-Fa-f]{1,4}:(?::[0-9A-Fa-f]{1,4}){1,6}|:(?:(?::[0-9A-Fa-f]{1,4}){1,7}|:)|fe80:(?::[0-9A-Fa-f]{0,4}){0,4}%[0-9A-Za-z]+|::(?:ffff(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[0-9A-Fa-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const SEMVER_RE = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
const MONGO_ID_RE = /^[0-9A-F]{24}$/i
const JWT_RE = /^[A-Z0-9_-]+\.[A-Z0-9_-]+\.[A-Z0-9_-]+$/i
const CAMEL_CASE_RE = /^[a-z][A-Za-z0-9]*$/
const SNAKE_CASE_RE = /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/
const KEBAB_CASE_RE = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/
const PASCAL_CASE_RE = /^[A-Z][a-zA-Z0-9]*$/
const TITLE_CASE_RE = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/
const MAC_RE = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/i
const FQDN_RE = /^(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,})?$/
const LAT_LONG_RE = /^-?\d+(?:\.\d+)?,\s*-?\d+(?:\.\d+)?$/
const MIME_TYPE_RE = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*\/[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
const BASE32_RE = /^[A-Z2-7]+=*$/
const DATA_URI_RE = /^data:[a-zA-Z0-9]+\/[a-zA-Z0-9]+(;base64)?,.+$/
const MD5_RE = /^[0-9A-F]{32}$/i
const SHA1_RE = /^[0-9A-F]{40}$/i
const SHA256_RE = /^[0-9A-F]{64}$/i
const ISRC_RE = /^[A-Z]{2}-?\w{3}-?\d{2}-?\d{5}$/
const ETH_ADDR_RE = /^0x[0-9A-F]{40}$/i
const ISO_DATE_RE = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:[+-][0-2]\d:[0-5]\d|Z)?$/

export const isStringOfLength = curry(
  (n: number, value: unknown): value is string =>
    _isString(value) && value.length === n,
)

export const isStringOfLengthAtLeast = curry(
  (n: number, value: unknown): value is string =>
    _isString(value) && value.length >= n,
)

export const isStringOfLengthAtMost = curry(
  (n: number, value: unknown): value is string =>
    _isString(value) && value.length <= n,
)

export const isStringLongerThan = curry(
  (n: number, value: unknown): value is string =>
    _isString(value) && value.length > n,
)

export const isStringShorterThan = curry(
  (n: number, value: unknown): value is string =>
    _isString(value) && value.length < n,
)

export const isStringOfLengthBetween = curry(
  (min: number, max: number, value: unknown): value is string =>
    _isString(value) && value.length > min && value.length < max,
)

export const isStringOfLengthBetweenInclusive = curry(
  (min: number, max: number, value: unknown): value is string =>
    _isString(value) && value.length >= min && value.length <= max,
)

export const isStringContaining = curry(
  (substring: string, value: unknown): value is string =>
    _isString(value) && value.indexOf(substring) !== -1,
)

export const isStringMatching = curry(
  (pattern: RegExp, value: unknown): value is string =>
    _isString(value) && test(pattern, value),
)

export const stringIsOneOf = curry(
  (selection: string[], value: unknown): value is string =>
    _isString(value) && selection.indexOf(value) !== -1,
)

export const isEmail = both(_isString, test(EMAIL_RE))

export const isNumericString = (value: unknown): value is string =>
  _isString(value) && !isNaN(parseInt(value, 10))

export const isTimestamp = both(_isString, test(TIMESTAMP_RE))

export const isMySqlTimestamp = both(_isString, test(MYSQL_TIMESTAMP_RE))

export const isUUID = both(_isString, test(UUID_RE))
export const isUuid = isUUID

export const isJSON = (value: unknown): value is string => {
  if (!_isString(value)) return false
  try {
    JSON.parse(value)
    return true
  } catch {
    return false
  }
}
export const isJson = isJSON

export function isEmptyString(value: unknown): value is string {
  return value === ''
}

export function isNonEmptyString(value: unknown): value is string {
  return _isString(value) && value.length > 0
}

export function isBlankString(value: unknown): value is string {
  return _isString(value) && value.trim().length === 0
}

export function isNotBlankString(value: unknown): value is string {
  return _isString(value) && value.trim().length > 0
}

export function isLowerCase(value: unknown): value is string {
  return _isString(value) && value === value.toLowerCase()
}

export function isUpperCase(value: unknown): value is string {
  return _isString(value) && value === value.toUpperCase()
}

export const isAlpha = both(_isString, test(ALPHA_RE))

export const isAlphaNumeric = both(_isString, test(ALPHA_NUMERIC_RE))

export const isASCII = both(_isString, test(ASCII_RE))
export const isAscii = isASCII;

export const isBase64 = both(_isString, test(BASE64_RE))

export const isHexadecimal = both(_isString, test(HEX_RE))

export const isHexColor = both(_isString, test(HEX_COLOR_RE))

export const isURL = both(_isString, test(URL_RE))
export const isUrl = isURL;

export function isIP(value: unknown): value is string {
  return isIPv4(value) || isIPv6(value)
}

export const isIPv4 = both(_isString, test(IPV4_RE))

export const isIPv6 = both(_isString, test(IPV6_RE))

export function isPort(value: unknown): value is string {
  if (!_isString(value)) return false
  const n = parseInt(value, 10)
  return !isNaN(n) && n >= 0 && n <= 65535
}

export const isSlug = both(_isString, test(SLUG_RE))

export const isSemVer = both(_isString, test(SEMVER_RE))

export const isMongoId = both(_isString, test(MONGO_ID_RE))

export const isJWT = both(_isString, test(JWT_RE))
export const isJwt = isJWT;

export const isCamelCase = both(_isString, test(CAMEL_CASE_RE))

export const isSnakeCase = both(_isString, test(SNAKE_CASE_RE))

export const isKebabCase = both(_isString, test(KEBAB_CASE_RE))

export const isPascalCase = both(_isString, test(PASCAL_CASE_RE))

export const isTitleCase = both(_isString, test(TITLE_CASE_RE))

export const isMACAddress = both(_isString, test(MAC_RE))

export const isFQDN = both(_isString, test(FQDN_RE))
export const isFqdn = isFQDN;

export const isStrongPassword = curry(
  (options: { minLength?: number; minLowercase?: number; minUppercase?: number; minNumbers?: number; minSymbols?: number }, value: unknown): value is string => {
    if (!_isString(value)) return false
    const {
      minLength = 8,
      minLowercase = 1,
      minUppercase = 1,
      minNumbers = 1,
      minSymbols = 1,
    } = options
    if (value.length < minLength) return false
    if ((value.match(/[a-z]/g) || []).length < minLowercase) return false
    if ((value.match(/[A-Z]/g) || []).length < minUppercase) return false
    if ((value.match(/[0-9]/g) || []).length < minNumbers) return false
    if ((value.match(/[^a-zA-Z0-9]/g) || []).length < minSymbols) return false
    return true
  },
)

export const isLatLong = both(_isString, test(LAT_LONG_RE))

export const isMimeType = both(_isString, test(MIME_TYPE_RE))

export const isISBN = curry(
  (version: 10 | 13, value: unknown): value is string => {
    if (!_isString(value)) return false
    const digits = value.replace(/[-\s]/g, '')
    if (version === 10) {
      if (!/^\d{9}[\dX]$/.test(digits)) return false
      let sum = 0
      for (let i = 0; i < 9; i++) {
        sum += (10 - i) * parseInt(digits[i], 10)
      }
      sum += digits[9] === 'X' ? 10 : parseInt(digits[9], 10)
      return sum % 11 === 0
    }
    if (!/^\d{13}$/.test(digits)) return false
    let sum = 0
    for (let i = 0; i < 13; i++) {
      sum += parseInt(digits[i], 10) * (i % 2 === 0 ? 1 : 3)
    }
    return sum % 10 === 0
  },
)
const isIsbn = isISBN;

export const isBase32 = both(_isString, test(BASE32_RE))

export const isDataURI = both(_isString, test(DATA_URI_RE))
export const isDataUri = isDataURI;

export const isMD5 = both(_isString, test(MD5_RE))
export const isMd5 = isMD5;

export const isSHA1 = both(_isString, test(SHA1_RE))
export const isSha1 = isSHA1;

export const isSHA256 = both(_isString, test(SHA256_RE))
export const isSha256 = isSHA256;

export const isISRC = both(_isString, test(ISRC_RE))
export const isIsrc = isISRC;

export function isEAN(value: unknown): value is string {
  if (!_isString(value)) return false
  const digits = value.replace(/[\s-]/g, '')
  if (!/^\d{8}$/.test(digits) && !/^\d{13}$/.test(digits)) return false
  const isEAN8 = digits.length === 8
  let sum = 0
  for (let i = 0; i < digits.length - 1; i++) {
    sum += parseInt(digits[i], 10) * (i % 2 === (isEAN8 ? 0 : 1) ? 3 : 1)
  }
  const checkDigit = (10 - (sum % 10)) % 10
  return checkDigit === parseInt(digits[digits.length - 1], 10)
}
export const isEan = isEAN;

export function isUPC(value: unknown): value is string {
  if (!_isString(value)) return false
  const digits = value.replace(/[\s-]/g, '')
  if (!/^\d{12}$/.test(digits)) return false
  let sum = 0
  for (let i = 0; i < 11; i++) {
    sum += parseInt(digits[i], 10) * (i % 2 === 0 ? 3 : 1)
  }
  const checkDigit = (10 - (sum % 10)) % 10
  return checkDigit === parseInt(digits[11], 10)
}
export const isUpc = isUPC;

export const isEthereumAddress = both(_isString, test(ETH_ADDR_RE))

export const isISODateString = both(_isString, test(ISO_DATE_RE))
export const isIsoDateString = isISODateString;

function luhnCheck(cardNumber: string): boolean {
  let sum = 0
  let alternate = false
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    const digit = parseInt(cardNumber[i], 10)
    if (isNaN(digit)) return false
    if (alternate) {
      const doubled = digit * 2
      sum += doubled > 9 ? doubled - 9 : doubled
    } else {
      sum += digit
    }
    alternate = !alternate
  }
  return sum % 10 === 0
}

export function isCreditCard(value: unknown): value is string {
  if (!_isString(value)) return false
  const digits = value.replace(/[\s-]/g, '')
  return /^\d{13,19}$/.test(digits) && luhnCheck(digits)
}
