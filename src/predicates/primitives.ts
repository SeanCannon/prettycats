import { curry, isBoolean as _isBoolean, isFunction as _isFunction, isNil as _isNil, isPromise as _isPromise, isRegExp as _isRegExp, isError as _isError } from 'fpure'

export const isBoolean = _isBoolean
export const isFunction = _isFunction
export const isNil = _isNil
export const isPromise = _isPromise
export const isRegExp = _isRegExp
export const isError = _isError

export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined'
}

export function isNull(value: unknown): value is null {
  return value === null
}

export function isDefined(value: unknown): boolean {
  return value != null
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint'
}

export function isPrimitive(value: unknown): boolean {
  if (value === null) return true
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'symbol':
    case 'bigint':
    case 'undefined':
      return true
    default:
      return false
  }
}

export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map
}

export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set
}

export function isWeakMap(value: unknown): value is WeakMap<object, unknown> {
  return value instanceof WeakMap
}

export function isWeakSet(value: unknown): value is WeakSet<object> {
  return value instanceof WeakSet
}

export const isInstanceOf = curry(
  <T>(ctor: new (...args: unknown[]) => T, value: unknown): value is T =>
    value instanceof ctor,
)

export const isTypeOf = curry(
  (typeName: string, value: unknown): boolean =>
    typeof value === typeName,
)
