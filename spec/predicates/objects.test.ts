import { describe, it, expect } from 'vitest'
import { isString as isStr, isNumber as isNum } from 'fpure'
import {
  isObject,
  isObjectContaining,
  isObjectAbsent,
  isObjectMatching,
  isObjectExtending,
  isObjectSatisfying,
  isEmptyObject,
  isNonEmptyObject,
  isPlainObject,
  isFrozenObject,
  isSealedObject,
  isExtensibleObject,
  isObjectWithKeys,
  isObjectContainingAll,
  isObjectContainingAny,
} from '../../src/predicates/objects'

describe('object predicates', () => {
  describe('isObject', () => {
    it('passes when given a subject of type Object', () => {
      expect(isObject({ foo: 'bar' })).toBe(true)
    })
    it('fails when given a subject not of type Object', () => {
      expect(isObject(123)).toBe(false)
    })
  })

  describe('isObjectContaining', () => {
    it('passes when given a subject of type Object containing the expected property', () => {
      expect(isObjectContaining('foo', { foo: 'bar', baz: 'bat' })).toBe(true)
    })
    it('fails when given a subject of type Object missing the expected property', () => {
      expect(isObjectContaining('foo', { baz: 'bat', buz: 'biz' })).toBe(false)
    })
    it('fails when given a subject not of type Object', () => {
      expect(isObjectContaining('foo', 123)).toBe(false)
    })
  })

  describe('isObjectAbsent', () => {
    it('passes when given a subject of type Object missing the expected property', () => {
      expect(isObjectAbsent('foo', { baz: 'bat', buz: 'biz' })).toBe(true)
    })
    it('fails when given a subject of type Object containing the expected property', () => {
      expect(isObjectAbsent('foo', { foo: 'bar', buz: 'biz' })).toBe(false)
    })
    it('fails when given a subject not of type Object', () => {
      expect(isObjectAbsent('foo', 123)).toBe(false)
    })
  })

  describe('isObjectMatching', () => {
    it('passes when given two identical objects', () => {
      expect(isObjectMatching({ foo: 'bar' }, { foo: 'bar' })).toBe(true)
    })
    it('fails when given two unique objects', () => {
      expect(isObjectMatching({ foo: 'bar' }, { baz: 'bat' })).toBe(false)
    })
    it('fails when given a subject not of type Object', () => {
      expect(isObjectMatching({ foo: 'bar' }, 'foo')).toBe(false)
      expect(isObjectMatching('foo', { foo: 'bar' })).toBe(false)
    })
  })

  describe('isObjectExtending', () => {
    it('passes when given an object and also an object containing the signature of the first object', () => {
      expect(isObjectExtending({ foo: 'bar' }, { foo: 'bar', baz: 'bat' })).toBe(true)
    })
    it('passes when given two identical objects', () => {
      expect(isObjectExtending({ foo: 'bar' }, { foo: 'bar' })).toBe(true)
    })
    it('fails when given two unique objects', () => {
      expect(isObjectExtending({ foo: 'bar' }, { baz: 'bat' })).toBe(false)
    })
    it('fails when given a subject not of type Object', () => {
      expect(isObjectExtending({ foo: 'bar' }, 'foo')).toBe(false)
      expect(isObjectExtending('foo', { foo: 'bar' })).toBe(false)
    })
  })

  describe('isObjectSatisfying', () => {
    const schema = {
      foo: isStr,
      bar: isNum,
    }
    it('passes when given a schema and an object that satisfies all the predicates on the schema', () => {
      expect(isObjectSatisfying(schema, { foo: 'hello', bar: 123 })).toBe(true)
    })
    it('fails when given a schema and an object that does not have all the properties on the schema', () => {
      expect(isObjectSatisfying(schema, { foo: 'hello' })).toBe(false)
    })
    it('fails when given two unique objects', () => {
      expect(isObjectSatisfying({ foo: 'bar' }, { baz: 'bat' })).toBe(false)
    })
    it('fails when given a subject not of type Object', () => {
      expect(isObjectSatisfying({ foo: 'bar' }, 'foo')).toBe(false)
      expect(isObjectSatisfying('foo', { foo: 'bar' })).toBe(false)
    })
  })

  describe('isEmptyObject', () => {
    it('passes when given an empty object', () => {
      expect(isEmptyObject({})).toBe(true)
    })
    it('fails when given a non-empty object', () => {
      expect(isEmptyObject({ foo: 'bar' })).toBe(false)
    })
    it('fails when given a non-object', () => {
      expect(isEmptyObject('foo')).toBe(false)
    })
  })

  describe('isNonEmptyObject', () => {
    it('passes when given a non-empty object', () => {
      expect(isNonEmptyObject({ foo: 'bar' })).toBe(true)
    })
    it('fails when given an empty object', () => {
      expect(isNonEmptyObject({})).toBe(false)
    })
  })

  describe('isPlainObject', () => {
    it('passes when given a plain object', () => {
      expect(isPlainObject({})).toBe(true)
      expect(isPlainObject({ foo: 'bar' })).toBe(true)
    })
    it('fails when given a non-plain object', () => {
      expect(isPlainObject([])).toBe(false)
      expect(isPlainObject(new Date())).toBe(false)
    })
  })

  describe('isFrozenObject', () => {
    it('passes when given a frozen object', () => {
      expect(isFrozenObject(Object.freeze({}))).toBe(true)
    })
    it('fails when given a non-frozen object', () => {
      expect(isFrozenObject({})).toBe(false)
    })
  })

  describe('isSealedObject', () => {
    it('passes when given a sealed object', () => {
      expect(isSealedObject(Object.seal({}))).toBe(true)
    })
    it('fails when given a non-sealed object', () => {
      expect(isSealedObject({})).toBe(false)
    })
  })

  describe('isExtensibleObject', () => {
    it('passes when given an extensible object', () => {
      expect(isExtensibleObject({})).toBe(true)
    })
    it('fails when given a non-extensible object', () => {
      expect(isExtensibleObject(Object.freeze({}))).toBe(false)
      expect(isExtensibleObject(Object.seal({}))).toBe(false)
      expect(isExtensibleObject(Object.preventExtensions({}))).toBe(false)
    })
  })

  describe('isObjectWithKeys', () => {
    it('passes when given an object with exactly the specified keys', () => {
      expect(isObjectWithKeys(['foo', 'bar'], { foo: 1, bar: 2 })).toBe(true)
    })
    it('fails when given an object with missing keys', () => {
      expect(isObjectWithKeys(['foo', 'bar'], { foo: 1 })).toBe(false)
    })
    it('fails when given an object with extra keys', () => {
      expect(isObjectWithKeys(['foo'], { foo: 1, bar: 2 })).toBe(false)
    })
  })

  describe('isObjectContainingAll', () => {
    it('passes when given an object containing all specified keys', () => {
      expect(isObjectContainingAll(['foo', 'bar'], { foo: 1, bar: 2, baz: 3 })).toBe(true)
    })
    it('fails when given an object missing a key', () => {
      expect(isObjectContainingAll(['foo', 'bar'], { foo: 1 })).toBe(false)
    })
  })

  describe('isObjectContainingAny', () => {
    it('passes when given an object containing any of the specified keys', () => {
      expect(isObjectContainingAny(['foo', 'bar'], { foo: 1 })).toBe(true)
      expect(isObjectContainingAny(['foo', 'bar'], { bar: 2 })).toBe(true)
    })
    it('fails when given an object with none of the keys', () => {
      expect(isObjectContainingAny(['foo', 'bar'], { baz: 3 })).toBe(false)
    })
  })
})
