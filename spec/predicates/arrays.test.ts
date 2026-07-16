import { describe, it, expect } from 'vitest'
import { isString, isNumber } from 'fpure'
import {
  isArray,
  isEmptyArray,
  isArrayOfLength,
  isArrayOfLengthAtLeast,
  isArrayOfLengthAtMost,
  isArrayLongerThan,
  isArrayShorterThan,
  isArrayContaining,
  isArrayEmpty,
  isNonEmptyArray,
  isArrayOfLengthBetween,
  isArrayOfLengthBetweenInclusive,
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfType,
  isUniqueArray,
  isSortedArray,
  isSubsetOf,
  isSupersetOf,
  isArrayContainingAll,
  isArrayContainingAny,
  isArrayContainingDuplicates,
  isHomogeneousArray,
} from '../../src/predicates/arrays'

describe('array predicates', () => {
  describe('isArray', () => {
    it('passes when given a subject of type Array', () => {
      expect(isArray(['foo'])).toBe(true)
    })
    it('fails when given a subject not of type Array', () => {
      expect(isArray(123)).toBe(false)
    })
  })

  describe('isEmptyArray', () => {
    it('passes when given an empty subject that is of type Array', () => {
      expect(isEmptyArray([])).toBe(true)
    })
    it('fails when given a non-empty subject that is of type Array', () => {
      expect(isEmptyArray(['foo'])).toBe(false)
    })
    it('fails when given a subject that is not of type Array', () => {
      expect(isEmptyArray('foo')).toBe(false)
    })
  })

  describe('isArrayOfLength', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(isArrayOfLength(5, [1, 2, 3])).toBe(false)
    })
    it('passes when given a subject of type Array with expected length', () => {
      expect(isArrayOfLength(3, [1, 2, 3])).toBe(true)
    })
    it('fails when given a subject not of type Array', () => {
      expect(isArrayOfLength(3, 123)).toBe(false)
    })
  })

  describe('isArrayOfLengthAtLeast', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(isArrayOfLengthAtLeast(5, [1, 2, 3])).toBe(false)
    })
    it('passes when given a subject of type Array with the minimum expected length', () => {
      expect(isArrayOfLengthAtLeast(3, [1, 2, 3])).toBe(true)
    })
    it('passes when given a subject of type Array with greater than the minimum expected length', () => {
      expect(isArrayOfLengthAtLeast(3, [1, 2, 3, 4])).toBe(true)
    })
    it('fails when given a subject not of type Array', () => {
      expect(isArrayOfLengthAtLeast(3, 123)).toBe(false)
    })
  })

  describe('isArrayOfLengthAtMost', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(isArrayOfLengthAtMost(3, [1, 2, 3, 4])).toBe(false)
    })
    it('passes when given a subject of type Array with the maximum expected length', () => {
      expect(isArrayOfLengthAtMost(3, [1, 2, 3])).toBe(true)
    })
    it('passes when given a subject of type Array with less than the maximum expected length', () => {
      expect(isArrayOfLengthAtMost(5, [1, 2, 3, 4])).toBe(true)
    })
    it('fails when given a subject not of type Array', () => {
      expect(isArrayOfLengthAtMost(3, 123)).toBe(false)
    })
  })

  describe('isArrayLongerThan', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(isArrayLongerThan(5, [1, 2, 3])).toBe(false)
    })
    it('fails when given a subject of type Array with the cutoff length', () => {
      expect(isArrayLongerThan(3, [1, 2, 3])).toBe(false)
    })
    it('passes when given a subject of type Array with greater than the minimum expected length', () => {
      expect(isArrayLongerThan(3, [1, 2, 3, 4])).toBe(true)
    })
    it('fails when given a subject not of type Array', () => {
      expect(isArrayLongerThan(3, 123)).toBe(false)
    })
  })

  describe('isArrayShorterThan', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(isArrayShorterThan(3, [1, 2, 3, 4])).toBe(false)
    })
    it('fails when given a subject of type Array with the cutoff length', () => {
      expect(isArrayShorterThan(3, [1, 2, 3])).toBe(false)
    })
    it('passes when given a subject of type Array with less than the minimum expected length', () => {
      expect(isArrayShorterThan(5, [1, 2, 3, 4])).toBe(true)
    })
    it('fails when given a subject not of type Array', () => {
      expect(isArrayShorterThan(3, 123)).toBe(false)
    })
  })

  describe('isArrayContaining', () => {
    it('passes when given a subject of type Array containing an expected item', () => {
      expect(isArrayContaining('bar', ['foo', 'bar', 'baz'])).toBe(true)
    })
    it('fails when given a subject of type Array not containing an expected item', () => {
      expect(isArrayContaining('bar', ['foo', 'baz', 'buz'])).toBe(false)
    })
  })

  describe('isArrayEmpty', () => {
    it('passes when given an empty array', () => {
      expect(isArrayEmpty([])).toBe(true)
    })
    it('fails when given a non-empty array', () => {
      expect(isArrayEmpty(['foo'])).toBe(false)
    })
  })

  describe('isNonEmptyArray', () => {
    it('passes when given a non-empty array', () => {
      expect(isNonEmptyArray([1])).toBe(true)
    })
    it('fails when given an empty array', () => {
      expect(isNonEmptyArray([])).toBe(false)
    })
    it('fails when given a non-array', () => {
      expect(isNonEmptyArray('foo')).toBe(false)
    })
  })

  describe('isArrayOfLengthBetween', () => {
    it('passes when length is between min and max', () => {
      expect(isArrayOfLengthBetween(1, 4, [1, 2, 3])).toBe(true)
    })
    it('fails when length is at min or max', () => {
      expect(isArrayOfLengthBetween(1, 4, [1])).toBe(false)
      expect(isArrayOfLengthBetween(1, 4, [1, 2, 3, 4])).toBe(false)
    })
  })

  describe('isArrayOfLengthBetweenInclusive', () => {
    it('passes when length is between min and max inclusive', () => {
      expect(isArrayOfLengthBetweenInclusive(1, 4, [1])).toBe(true)
      expect(isArrayOfLengthBetweenInclusive(1, 4, [1, 2, 3, 4])).toBe(true)
    })
    it('fails when length is outside the range', () => {
      expect(isArrayOfLengthBetweenInclusive(1, 4, [])).toBe(false)
      expect(isArrayOfLengthBetweenInclusive(1, 4, [1, 2, 3, 4, 5])).toBe(false)
    })
  })

  describe('isArrayOfStrings', () => {
    it('passes when given an array of strings', () => {
      expect(isArrayOfStrings(['foo', 'bar'])).toBe(true)
    })
    it('fails when given an array with non-strings', () => {
      expect(isArrayOfStrings(['foo', 123])).toBe(false)
    })
    it('fails when given a non-array', () => {
      expect(isArrayOfStrings('foo')).toBe(false)
    })
  })

  describe('isArrayOfNumbers', () => {
    it('passes when given an array of numbers', () => {
      expect(isArrayOfNumbers([1, 2, 3])).toBe(true)
    })
    it('fails when given an array with non-numbers', () => {
      expect(isArrayOfNumbers([1, '2'])).toBe(false)
    })
  })

  describe('isArrayOfType', () => {
    it('passes when all items satisfy the predicate', () => {
      expect(isArrayOfType(isString, ['foo', 'bar'])).toBe(true)
    })
    it('fails when any item does not satisfy the predicate', () => {
      expect(isArrayOfType(isString, ['foo', 123])).toBe(false)
    })
  })

  describe('isUniqueArray', () => {
    it('passes when all elements are unique', () => {
      expect(isUniqueArray([1, 2, 3])).toBe(true)
    })
    it('fails when there are duplicates', () => {
      expect(isUniqueArray([1, 2, 2])).toBe(false)
    })
  })

  describe('isSortedArray', () => {
    it('passes when the array is sorted in ascending order', () => {
      expect(isSortedArray([1, 2, 3])).toBe(true)
    })
    it('fails when the array is not sorted', () => {
      expect(isSortedArray([3, 1, 2])).toBe(false)
    })
    it('passes when the array is empty', () => {
      expect(isSortedArray([])).toBe(true)
    })
  })

  describe('isSubsetOf', () => {
    it('passes when the value is a subset of the superset', () => {
      expect(isSubsetOf([1, 2, 3, 4], [1, 2])).toBe(true)
    })
    it('fails when the value is not a subset', () => {
      expect(isSubsetOf([1, 2, 3], [1, 4])).toBe(false)
    })
  })

  describe('isSupersetOf', () => {
    it('passes when the value is a superset of the subset', () => {
      expect(isSupersetOf([1, 2], [1, 2, 3, 4])).toBe(true)
    })
    it('fails when the value is not a superset', () => {
      expect(isSupersetOf([1, 2], [1])).toBe(false)
    })
  })

  describe('isArrayContainingAll', () => {
    it('passes when the array contains all specified items', () => {
      expect(isArrayContainingAll([1, 2], [1, 2, 3])).toBe(true)
    })
    it('fails when the array does not contain all items', () => {
      expect(isArrayContainingAll([1, 2], [1])).toBe(false)
    })
  })

  describe('isArrayContainingAny', () => {
    it('passes when the array contains any of the specified items', () => {
      expect(isArrayContainingAny([1, 2], [3, 1])).toBe(true)
    })
    it('fails when the array contains none of the items', () => {
      expect(isArrayContainingAny([1, 2], [3, 4])).toBe(false)
    })
  })

  describe('isArrayContainingDuplicates', () => {
    it('passes when the array contains duplicates', () => {
      expect(isArrayContainingDuplicates([1, 2, 2])).toBe(true)
    })
    it('fails when all elements are unique', () => {
      expect(isArrayContainingDuplicates([1, 2, 3])).toBe(false)
    })
  })

  describe('isHomogeneousArray', () => {
    it('passes when all elements have the same type', () => {
      expect(isHomogeneousArray([1, 2, 3])).toBe(true)
      expect(isHomogeneousArray(['a', 'b', 'c'])).toBe(true)
    })
    it('fails when elements have mixed types', () => {
      expect(isHomogeneousArray([1, 'a'])).toBe(false)
    })
    it('fails when the array is empty', () => {
      expect(isHomogeneousArray([])).toBe(false)
    })
  })
})
