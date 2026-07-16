import { curry, where, whereEq, equals, F, isObject as _isObject } from 'fpure'

export const isObject = _isObject

function guardObject<T extends (...args: unknown[]) => boolean>(fn: T): T {
  return ((...args: unknown[]) => {
    try {
      return fn(...args)
    } catch {
      return false
    }
  }) as T
}

export const isObjectContaining = curry(
  (key: string, value: unknown): value is Record<string, unknown> =>
    _isObject(value) && Object.prototype.hasOwnProperty.call(value, key),
)

export const isObjectAbsent = curry(
  (key: string, value: unknown): value is Record<string, unknown> =>
    _isObject(value) && !Object.prototype.hasOwnProperty.call(value, key),
)

export const isObjectMatching = guardObject(
  curry((a: unknown, b: unknown): boolean => {
    if (!_isObject(a) || !_isObject(b)) return false
    return equals(a, b)
  }),
)

export const isObjectExtending = guardObject(
  curry((schema: Record<string, unknown>, value: unknown): boolean => {
    if (!_isObject(schema) || !_isObject(value)) return false
    return whereEq(schema, value as Record<string, unknown>)
  }),
)

export const isObjectSatisfying = guardObject(
  curry(
    <T extends Record<string, (value: unknown) => boolean>>(
      schema: T,
      value: unknown,
    ): value is Record<string, unknown> => {
      if (!_isObject(schema) || !_isObject(value)) return false
      return where(
        schema as unknown as { [K in keyof T]: (value: unknown) => boolean },
        value as Record<string, unknown>,
      )
    },
  ) as unknown as {
    <T extends Record<string, (value: unknown) => boolean>>(
      schema: T,
      value: unknown,
    ): value is Record<string, unknown>
    (schema: unknown, value: unknown): boolean
  },
)

export function isEmptyObject(value: unknown): value is Record<string, unknown> {
  return _isObject(value) && Object.keys(value).length === 0
}

export function isNonEmptyObject(value: unknown): value is Record<string, unknown> {
  return _isObject(value) && Object.keys(value).length > 0
}

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return _isObject(value) && Object.getPrototypeOf(value) === Object.prototype
}

export function isFrozenObject(value: unknown): value is Record<string, unknown> {
  return _isObject(value) && Object.isFrozen(value)
}

export function isSealedObject(value: unknown): value is Record<string, unknown> {
  return _isObject(value) && Object.isSealed(value)
}

export function isExtensibleObject(value: unknown): value is Record<string, unknown> {
  return _isObject(value) && Object.isExtensible(value)
}

export const isObjectWithKeys = curry(
  (keys: string[], value: unknown): value is Record<string, unknown> =>
    _isObject(value) && Object.keys(value).length === keys.length && keys.every(k => Object.prototype.hasOwnProperty.call(value, k)),
)

export const isObjectContainingAll = curry(
  (keys: string[], value: unknown): value is Record<string, unknown> =>
    _isObject(value) && keys.every(k => Object.prototype.hasOwnProperty.call(value, k)),
)

export const isObjectContainingAny = curry(
  (keys: string[], value: unknown): value is Record<string, unknown> =>
    _isObject(value) && keys.some(k => Object.prototype.hasOwnProperty.call(value, k)),
)
