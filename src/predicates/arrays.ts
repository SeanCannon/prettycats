import { curry, isString as _isString, isNumber as _isNumber } from 'fpure'
import { isEmpty } from './private'

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

export const isArrayOfLength = curry(
  (n: number, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.length === n,
)

export const isArrayOfLengthAtLeast = curry(
  (n: number, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.length >= n,
)

export const isArrayOfLengthAtMost = curry(
  (n: number, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.length <= n,
)

export const isArrayLongerThan = curry(
  (n: number, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.length > n,
)

export const isArrayShorterThan = curry(
  (n: number, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.length < n,
)

export const isArrayContaining = curry(
  (item: unknown, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.indexOf(item) !== -1,
)

export const isEmptyArray = (value: unknown): value is unknown[] =>
  Array.isArray(value) && isEmpty(value)

export const isArrayEmpty = isEmptyArray

export function isNonEmptyArray(value: unknown): value is unknown[] {
  return Array.isArray(value) && value.length > 0
}

export const isArrayOfLengthBetween = curry(
  (min: number, max: number, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.length > min && value.length < max,
)

export const isArrayOfLengthBetweenInclusive = curry(
  (min: number, max: number, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.length >= min && value.length <= max,
)

export function isArrayOfStrings(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(_isString)
}

export function isArrayOfNumbers(value: unknown): value is number[] {
  return Array.isArray(value) && value.every(_isNumber)
}

export const isArrayOfType = curry(
  (pred: (value: unknown) => boolean, value: unknown): value is unknown[] =>
    Array.isArray(value) && value.every(v => pred(v)),
)

export function isUniqueArray(value: unknown): value is unknown[] {
  return Array.isArray(value) && new Set(value).size === value.length
}

export function isSortedArray(value: unknown): value is unknown[] {
  if (!Array.isArray(value)) return false
  for (let i = 1; i < value.length; i++) {
    if (value[i - 1] > value[i]) return false
  }
  return true
}

export const isSubsetOf = curry(
  (superset: unknown[], value: unknown): value is unknown[] =>
    Array.isArray(value) && Array.isArray(superset) && value.every(v => superset.indexOf(v) !== -1),
)

export const isSupersetOf = curry(
  (subset: unknown[], value: unknown): value is unknown[] =>
    Array.isArray(value) && Array.isArray(subset) && subset.every(v => value.indexOf(v) !== -1),
)

export const isArrayContainingAll = curry(
  (items: unknown[], value: unknown): value is unknown[] =>
    Array.isArray(value) && items.every(i => value.indexOf(i) !== -1),
)

export const isArrayContainingAny = curry(
  (items: unknown[], value: unknown): value is unknown[] =>
    Array.isArray(value) && items.some(i => value.indexOf(i) !== -1),
)

export function isArrayContainingDuplicates(value: unknown): value is unknown[] {
  return Array.isArray(value) && new Set(value).size !== value.length
}

export function isHomogeneousArray(value: unknown): value is unknown[] {
  if (!Array.isArray(value) || value.length === 0) return false
  const firstType = typeof value[0]
  return value.every(v => typeof v === firstType)
}
