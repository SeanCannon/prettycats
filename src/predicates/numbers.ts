import { curry, isNumber as _isNumber } from 'fpure'

export const isNumber = _isNumber

export const isNumberBetween = curry(
  (low: number, high: number, value: unknown): value is number =>
    _isNumber(value) && value > low && value < high,
)

export const isNumberBetweenInclusive = curry(
  (low: number, high: number, value: unknown): value is number =>
    _isNumber(value) && value >= low && value <= high,
)

export const numberIsOneOf = curry(
  (selection: number[], value: unknown): value is number =>
    _isNumber(value) && selection.indexOf(value) !== -1,
)

export const isPositiveNumber = (value: unknown): value is number =>
  _isNumber(value) && value > 0

export const isNegativeNumber = (value: unknown): value is number =>
  _isNumber(value) && value < 0

export const isAtLeastZero = (value: unknown): value is number =>
  _isNumber(value) && value >= 0

export const isAtMostZero = (value: unknown): value is number =>
  _isNumber(value) && value <= 0

export const isCalendarMonth = (value: unknown): value is number =>
  _isNumber(value) && value >= 1 && value <= 12

export const isCalendarMonthZeroBased = (value: unknown): value is number =>
  _isNumber(value) && value >= 0 && value <= 11

export const isEvenNumber = (value: unknown): value is number =>
  _isNumber(value) && value % 2 === 0

export const isOddNumber = (value: unknown): value is number =>
  _isNumber(value) && value % 2 !== 0

export function isNumeric(value: unknown): boolean {
  return !isNaN(parseInt(String(value), 10))
}

export const isNumericBoolean = (value: unknown): value is number =>
  _isNumber(value) && (value === 0 || value === 1)

export function isInteger(value: unknown): value is number {
  return Number.isInteger(value)
}

export function isFloat(value: unknown): value is number {
  return _isNumber(value) && !Number.isInteger(value)
}

export function isFiniteNumber(value: unknown): value is number {
  return Number.isFinite(value)
}

export function isNaNValue(value: unknown): value is number {
  return Number.isNaN(value)
}

export function isSafeInteger(value: unknown): value is number {
  return Number.isSafeInteger(value)
}

export const isMultipleOf = curry(
  (divisor: number, value: unknown): value is number =>
    _isNumber(value) && divisor !== 0 && value % divisor === 0,
)

export function isZero(value: unknown): value is number {
  return value === 0
}

export function isPositiveZero(value: unknown): value is number {
  return Object.is(value, 0)
}

export function isNegativeZero(value: unknown): value is number {
  return Object.is(value, -0)
}

export function isNonPositive(value: unknown): value is number {
  return _isNumber(value) && value <= 0
}

export function isNonNegative(value: unknown): value is number {
  return _isNumber(value) && value >= 0
}

export function isPercent(value: unknown): value is number {
  return _isNumber(value) && value >= 0 && value <= 100
}

export function isPortNumber(value: unknown): value is number {
  return _isNumber(value) && Number.isInteger(value) && value >= 0 && value <= 65535
}

export function isHTTPStatusCode(value: unknown): value is number {
  return _isNumber(value) && Number.isInteger(value) && value >= 100 && value <= 599
}

export function isUnitInterval(value: unknown): value is number {
  return _isNumber(value) && value >= 0 && value <= 1
}

export function isIndex(value: unknown): value is number {
  return _isNumber(value) && Number.isInteger(value) && value >= 0
}

export function isArrayIndex(value: unknown): value is number {
  return _isNumber(value) && Number.isInteger(value) && value >= 0 && value < 2 ** 32 - 1
}

export function isPrime(value: unknown): value is number {
  if (!_isNumber(value) || !Number.isInteger(value)) return false
  const n = value
  if (n <= 1) return false
  if (n <= 3) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}

export function isPowerOfTwo(value: unknown): value is number {
  return _isNumber(value) && value > 0 && (value & (value - 1)) === 0
}
