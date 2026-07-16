import { describe, it, expect } from 'vitest'
import {
  isBoolean,
  isUndefined,
  isNull,
  isNil,
  isDefined,
  isFunction,
  isSymbol,
  isBigInt,
  isPrimitive,
  isPromise,
  isRegExp,
  isError,
  isMap,
  isSet,
  isWeakMap,
  isWeakSet,
  isInstanceOf,
  isTypeOf,
} from '../../src/predicates/primitives'

describe('primitives predicates', () => {
  describe('isBoolean', () => {
    it('passes when given a subject of type Boolean', () => {
      expect(isBoolean(false)).toBe(true)
    })
    it('fails when given a subject not of type Boolean', () => {
      expect(isBoolean(123)).toBe(false)
    })
  })

  describe('isUndefined', () => {
    it('passes when given undefined', () => {
      expect(isUndefined(undefined)).toBe(true)
    })
    it('fails when given a defined value', () => {
      expect(isUndefined(null)).toBe(false)
      expect(isUndefined(0)).toBe(false)
      expect(isUndefined('')).toBe(false)
    })
  })

  describe('isNull', () => {
    it('passes when given null', () => {
      expect(isNull(null)).toBe(true)
    })
    it('fails when given a non-null value', () => {
      expect(isNull(undefined)).toBe(false)
      expect(isNull(0)).toBe(false)
    })
  })

  describe('isNil', () => {
    it('passes when given null or undefined', () => {
      expect(isNil(null)).toBe(true)
      expect(isNil(undefined)).toBe(true)
    })
    it('fails when given a defined value', () => {
      expect(isNil(0)).toBe(false)
      expect(isNil('')).toBe(false)
      expect(isNil(false)).toBe(false)
    })
  })

  describe('isDefined', () => {
    it('passes when given a defined value', () => {
      expect(isDefined(0)).toBe(true)
      expect(isDefined('')).toBe(true)
      expect(isDefined(false)).toBe(true)
    })
    it('fails when given null or undefined', () => {
      expect(isDefined(null)).toBe(false)
      expect(isDefined(undefined)).toBe(false)
    })
  })

  describe('isFunction', () => {
    it('passes when given a function', () => {
      expect(isFunction(() => {})).toBe(true)
      expect(isFunction(Math.sqrt)).toBe(true)
    })
    it('fails when given a non-function', () => {
      expect(isFunction('foo')).toBe(false)
      expect(isFunction(123)).toBe(false)
    })
  })

  describe('isSymbol', () => {
    it('passes when given a symbol', () => {
      expect(isSymbol(Symbol('test'))).toBe(true)
    })
    it('fails when given a non-symbol', () => {
      expect(isSymbol('symbol')).toBe(false)
      expect(isSymbol(123)).toBe(false)
    })
  })

  describe('isBigInt', () => {
    it('passes when given a bigint', () => {
      expect(isBigInt(BigInt(42))).toBe(true)
    })
    it('fails when given a non-bigint', () => {
      expect(isBigInt(42)).toBe(false)
      expect(isBigInt('42')).toBe(false)
    })
  })

  describe('isPrimitive', () => {
    it('passes when given a primitive value', () => {
      expect(isPrimitive('foo')).toBe(true)
      expect(isPrimitive(42)).toBe(true)
      expect(isPrimitive(true)).toBe(true)
      expect(isPrimitive(null)).toBe(true)
      expect(isPrimitive(undefined)).toBe(true)
      expect(isPrimitive(Symbol('test'))).toBe(true)
    })
    it('fails when given a non-primitive value', () => {
      expect(isPrimitive({})).toBe(false)
      expect(isPrimitive([])).toBe(false)
      expect(isPrimitive(() => {})).toBe(false)
    })
  })

  describe('isPromise', () => {
    it('passes when given a Promise', () => {
      expect(isPromise(Promise.resolve())).toBe(true)
    })
    it('passes when given a thenable', () => {
      expect(isPromise({ then: () => {} })).toBe(true)
    })
    it('fails when given a non-Promise', () => {
      expect(isPromise('foo')).toBe(false)
    })
  })

  describe('isRegExp', () => {
    it('passes when given a RegExp', () => {
      expect(isRegExp(/foo/)).toBe(true)
      expect(isRegExp(new RegExp('foo'))).toBe(true)
    })
    it('fails when given a non-RegExp', () => {
      expect(isRegExp('/foo/')).toBe(false)
      expect(isRegExp(123)).toBe(false)
    })
  })

  describe('isError', () => {
    it('passes when given an Error', () => {
      expect(isError(new Error())).toBe(true)
      expect(isError(new TypeError())).toBe(true)
    })
    it('fails when given a non-Error', () => {
      expect(isError({ message: 'error' })).toBe(false)
      expect(isError('error')).toBe(false)
    })
  })

  describe('isMap', () => {
    it('passes when given a Map', () => {
      expect(isMap(new Map())).toBe(true)
    })
    it('fails when given a non-Map', () => {
      expect(isMap({})).toBe(false)
      expect(isMap([])).toBe(false)
    })
  })

  describe('isSet', () => {
    it('passes when given a Set', () => {
      expect(isSet(new Set())).toBe(true)
    })
    it('fails when given a non-Set', () => {
      expect(isSet({})).toBe(false)
      expect(isSet([])).toBe(false)
    })
  })

  describe('isWeakMap', () => {
    it('passes when given a WeakMap', () => {
      expect(isWeakMap(new WeakMap())).toBe(true)
    })
    it('fails when given a non-WeakMap', () => {
      expect(isWeakMap({})).toBe(false)
    })
  })

  describe('isWeakSet', () => {
    it('passes when given a WeakSet', () => {
      expect(isWeakSet(new WeakSet())).toBe(true)
    })
    it('fails when given a non-WeakSet', () => {
      expect(isWeakSet({})).toBe(false)
    })
  })

  describe('isInstanceOf', () => {
    it('passes when the value is an instance of the constructor', () => {
      expect(isInstanceOf(Date, new Date())).toBe(true)
      expect(isInstanceOf(Array, [])).toBe(true)
    })
    it('fails when the value is not an instance of the constructor', () => {
      expect(isInstanceOf(Date, '2024-01-01')).toBe(false)
      expect(isInstanceOf(Array, {})).toBe(false)
    })
  })

  describe('isTypeOf', () => {
    it('passes when the typeof matches', () => {
      expect(isTypeOf('string', 'foo')).toBe(true)
      expect(isTypeOf('number', 123)).toBe(true)
    })
    it('fails when the typeof does not match', () => {
      expect(isTypeOf('string', 123)).toBe(false)
      expect(isTypeOf('number', 'foo')).toBe(false)
    })
  })
})
