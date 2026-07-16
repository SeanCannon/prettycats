import { describe, it, expect } from 'vitest'
import { isString, isNumber } from 'fpure'
import { isNot, isAllPass, isAnyPass, isNonePass, isOneOf } from '../../src/predicates/logical'

describe('logical predicates', () => {
  describe('isNot', () => {
    it('negates a predicate', () => {
      const isNotString = isNot(isString)
      expect(isNotString('foo')).toBe(false)
      expect(isNotString(123)).toBe(true)
    })
  })

  describe('isAllPass', () => {
    it('passes when all predicates pass', () => {
      const isPositiveNumber = (v: unknown) => isNumber(v) && v > 0
      const isEven = (v: unknown) => isNumber(v) && v % 2 === 0
      expect(isAllPass([isPositiveNumber, isEven], 4)).toBe(true)
    })
    it('fails when any predicate fails', () => {
      const isPositiveNumber = (v: unknown) => isNumber(v) && v > 0
      const isEven = (v: unknown) => isNumber(v) && v % 2 === 0
      expect(isAllPass([isPositiveNumber, isEven], 3)).toBe(false)
    })
    it('passes when given an empty predicate array', () => {
      expect(isAllPass([], 'anything')).toBe(true)
    })
  })

  describe('isAnyPass', () => {
    it('passes when at least one predicate passes', () => {
      expect(isAnyPass([isString, isNumber], 'foo')).toBe(true)
      expect(isAnyPass([isString, isNumber], 123)).toBe(true)
    })
    it('fails when no predicates pass', () => {
      expect(isAnyPass([isString, isNumber], true)).toBe(false)
    })
    it('fails when given an empty predicate array', () => {
      expect(isAnyPass([], 'anything')).toBe(false)
    })
  })

  describe('isNonePass', () => {
    it('passes when no predicates pass', () => {
      expect(isNonePass([isString, isNumber], true)).toBe(true)
    })
    it('fails when any predicate passes', () => {
      expect(isNonePass([isString], 'foo')).toBe(false)
    })
    it('passes when given an empty predicate array', () => {
      expect(isNonePass([], 'anything')).toBe(true)
    })
  })

  describe('isOneOf', () => {
    it('passes when the value is in the selection', () => {
      expect(isOneOf(['foo', 'bar', 'baz'], 'foo')).toBe(true)
    })
    it('fails when the value is not in the selection', () => {
      expect(isOneOf(['foo', 'bar', 'baz'], 'buz')).toBe(false)
    })
    it('works with numbers', () => {
      expect(isOneOf([1, 2, 3], 2)).toBe(true)
      expect(isOneOf([1, 2, 3], 4)).toBe(false)
    })
  })
})
