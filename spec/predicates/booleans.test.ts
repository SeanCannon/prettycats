import { describe, it, expect } from 'vitest'
import { isTruthy, isFalsy, isTrue, isFalse } from '../../src/predicates/booleans'

describe('boolean predicates', () => {
  describe('isTruthy', () => {
    it('passes when given a truthy value', () => {
      expect(isTruthy(true)).toBe(true)
      expect(isTruthy(1)).toBe(true)
      expect(isTruthy('foo')).toBe(true)
      expect(isTruthy({})).toBe(true)
      expect(isTruthy([])).toBe(true)
    })
    it('fails when given a falsy value', () => {
      expect(isTruthy(false)).toBe(false)
      expect(isTruthy(0)).toBe(false)
      expect(isTruthy('')).toBe(false)
      expect(isTruthy(null)).toBe(false)
      expect(isTruthy(undefined)).toBe(false)
      expect(isTruthy(NaN)).toBe(false)
    })
  })

  describe('isFalsy', () => {
    it('passes when given a falsy value', () => {
      expect(isFalsy(false)).toBe(true)
      expect(isFalsy(0)).toBe(true)
      expect(isFalsy('')).toBe(true)
      expect(isFalsy(null)).toBe(true)
      expect(isFalsy(undefined)).toBe(true)
      expect(isFalsy(NaN)).toBe(true)
    })
    it('fails when given a truthy value', () => {
      expect(isFalsy(true)).toBe(false)
      expect(isFalsy(1)).toBe(false)
      expect(isFalsy('foo')).toBe(false)
      expect(isFalsy({})).toBe(false)
      expect(isFalsy([])).toBe(false)
    })
  })

  describe('isTrue', () => {
    it('passes when given the boolean value true', () => {
      expect(isTrue(true)).toBe(true)
    })
    it('fails when given any other value', () => {
      expect(isTrue(false)).toBe(false)
      expect(isTrue(1)).toBe(false)
      expect(isTrue('true')).toBe(false)
      expect(isTrue(null)).toBe(false)
    })
  })

  describe('isFalse', () => {
    it('passes when given the boolean value false', () => {
      expect(isFalse(false)).toBe(true)
    })
    it('fails when given any other value', () => {
      expect(isFalse(true)).toBe(false)
      expect(isFalse(0)).toBe(false)
      expect(isFalse('false')).toBe(false)
      expect(isFalse(null)).toBe(false)
    })
  })
})
