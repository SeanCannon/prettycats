'use strict';

var arrays = require('../../lib/predicates/arrays');

describe('array predicates', function() {

  describe('isArray', function() {
    it('should pass when given a subject of type Array', function() {
      expect(arrays.isArray(['foo'])).toBe(true);
    });
    it('should fail when given a subject not of type Array', function() {
      expect(arrays.isArray(123)).toBe(false);
    });
  });

  describe('isEmptyArray', function() {
    it('should pass when given an empty subject that is of type Array', function() {
      expect(arrays.isEmptyArray([])).toBe(true);
    });
    it('should fail when given a non-empty subject that is of type Array', function() {
      expect(arrays.isEmptyArray(['foo'])).toBe(false);
    });
    it('should fail when given a subject that is not of type Array', function() {
      expect(arrays.isEmptyArray('foo')).toBe(false);
    });
  });

  describe('isArrayOfLength', function() {
    it('should fail when given a subject of type Array with unexpected length', function() {
      expect(arrays.isArrayOfLength(5, [1,2,3])).toBe(false);
    });
    it('should pass when given a subject of type Array with expected length', function() {
      expect(arrays.isArrayOfLength(3, [1,2,3])).toBe(true);
    });
    it('should fail when given a subject not of type Array', function() {
      expect(arrays.isArrayOfLength(3, 123)).toBe(false);
    });
  });

  describe('isArrayOfLengthAtLeast', function() {
    it('should fail when given a subject of type Array with unexpected length', function() {
      expect(arrays.isArrayOfLengthAtLeast(5, [1,2,3])).toBe(false);
    });
    it('should pass when given a subject of type Array with the minimum expected length', function() {
      expect(arrays.isArrayOfLengthAtLeast(3, [1,2,3])).toBe(true);
    });
    it('should pass when given a subject of type Array with greater than the minimum expected length', function() {
      expect(arrays.isArrayOfLengthAtLeast(3, [1,2,3,4])).toBe(true);
    });
    it('should fail when given a subject not of type Array', function() {
      expect(arrays.isArrayOfLengthAtLeast(3, 123)).toBe(false);
    });
  });

  describe('isArrayOfLengthAtMost', function() {
    it('should fail when given a subject of type Array with unexpected length', function() {
      expect(arrays.isArrayOfLengthAtMost(3, [1,2,3,4])).toBe(false);
    });
    it('should pass when given a subject of type Array with the maximum expected length', function() {
      expect(arrays.isArrayOfLengthAtMost(3, [1,2,3])).toBe(true);
    });
    it('should pass when given a subject of type Array with less than the maximum expected length', function() {
      expect(arrays.isArrayOfLengthAtMost(5, [1,2,3,4])).toBe(true);
    });
    it('should fail when given a subject not of type Array', function() {
      expect(arrays.isArrayOfLengthAtMost(3, 123)).toBe(false);
    });
  });

  describe('isArrayLongerThan', function() {
    it('should fail when given a subject of type Array with unexpected length', function() {
      expect(arrays.isArrayLongerThan(5, [1,2,3])).toBe(false);
    });
    it('should fail when given a subject of type Array with the cutoff length', function() {
      expect(arrays.isArrayLongerThan(3, [1,2,3])).toBe(false);
    });
    it('should pass when given a subject of type Array with greater than the minimum expected length', function() {
      expect(arrays.isArrayLongerThan(3, [1,2,3,4])).toBe(true);
    });
    it('should fail when given a subject not of type Array', function() {
      expect(arrays.isArrayLongerThan(3, 123)).toBe(false);
    });
  });

  describe('isArrayShorterThan', function() {
    it('should fail when given a subject of type Array with unexpected length', function() {
      expect(arrays.isArrayShorterThan(3, [1,2,3,4])).toBe(false);
    });
    it('should fail when given a subject of type Array with the cutoff length', function() {
      expect(arrays.isArrayShorterThan(3, [1,2,3])).toBe(false);
    });
    it('should pass when given a subject of type Array with less than the minimum expected length', function() {
      expect(arrays.isArrayShorterThan(5, [1,2,3,4])).toBe(true);
    });
    it('should fail when given a subject not of type Array', function() {
      expect(arrays.isArrayShorterThan(3, 123)).toBe(false);
    });
  });

  describe('isArrayContaining', function() {
    it('should pass when given a subject of type Array containing an expected substring', function() {
      expect(arrays.isArrayContaining('bar', ['foo','bar','baz'])).toBe(true);
    });
    it('should fail when given a subject of type Array not containing an expected substring', function() {
      expect(arrays.isArrayContaining('bar', ['foo','baz','buz'])).toBe(false);
    });
  });

});

