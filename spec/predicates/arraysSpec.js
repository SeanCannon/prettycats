'use strict';

const arrays = require('../../lib/predicates/arrays');

describe('array predicates', () => {

  describe('isArray', () => {
    it('passes when given a subject of type Array', () => {
      expect(arrays.isArray(['foo'])).toBe(true);
    });
    it('fails when given a subject not of type Array', () => {
      expect(arrays.isArray(123)).toBe(false);
    });
  });

  describe('isEmptyArray', () => {
    it('passes when given an empty subject that is of type Array', () => {
      expect(arrays.isEmptyArray([])).toBe(true);
    });
    it('fails when given a non-empty subject that is of type Array', () => {
      expect(arrays.isEmptyArray(['foo'])).toBe(false);
    });
    it('fails when given a subject that is not of type Array', () => {
      expect(arrays.isEmptyArray('foo')).toBe(false);
    });
  });

  describe('isArrayOfLength', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(arrays.isArrayOfLength(5, [1,2,3])).toBe(false);
    });
    it('passes when given a subject of type Array with expected length', () => {
      expect(arrays.isArrayOfLength(3, [1,2,3])).toBe(true);
    });
    it('fails when given a subject not of type Array', () => {
      expect(arrays.isArrayOfLength(3, 123)).toBe(false);
    });
  });

  describe('isArrayOfLengthAtLeast', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(arrays.isArrayOfLengthAtLeast(5, [1,2,3])).toBe(false);
    });
    it('passes when given a subject of type Array with the minimum expected length', () => {
      expect(arrays.isArrayOfLengthAtLeast(3, [1,2,3])).toBe(true);
    });
    it('passes when given a subject of type Array with greater than the minimum expected length', () => {
      expect(arrays.isArrayOfLengthAtLeast(3, [1,2,3,4])).toBe(true);
    });
    it('fails when given a subject not of type Array', () => {
      expect(arrays.isArrayOfLengthAtLeast(3, 123)).toBe(false);
    });
  });

  describe('isArrayOfLengthAtMost', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(arrays.isArrayOfLengthAtMost(3, [1,2,3,4])).toBe(false);
    });
    it('passes when given a subject of type Array with the maximum expected length', () => {
      expect(arrays.isArrayOfLengthAtMost(3, [1,2,3])).toBe(true);
    });
    it('passes when given a subject of type Array with less than the maximum expected length', () => {
      expect(arrays.isArrayOfLengthAtMost(5, [1,2,3,4])).toBe(true);
    });
    it('fails when given a subject not of type Array', () => {
      expect(arrays.isArrayOfLengthAtMost(3, 123)).toBe(false);
    });
  });

  describe('isArrayLongerThan', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(arrays.isArrayLongerThan(5, [1,2,3])).toBe(false);
    });
    it('fails when given a subject of type Array with the cutoff length', () => {
      expect(arrays.isArrayLongerThan(3, [1,2,3])).toBe(false);
    });
    it('passes when given a subject of type Array with greater than the minimum expected length', () => {
      expect(arrays.isArrayLongerThan(3, [1,2,3,4])).toBe(true);
    });
    it('fails when given a subject not of type Array', () => {
      expect(arrays.isArrayLongerThan(3, 123)).toBe(false);
    });
  });

  describe('isArrayShorterThan', () => {
    it('fails when given a subject of type Array with unexpected length', () => {
      expect(arrays.isArrayShorterThan(3, [1,2,3,4])).toBe(false);
    });
    it('fails when given a subject of type Array with the cutoff length', () => {
      expect(arrays.isArrayShorterThan(3, [1,2,3])).toBe(false);
    });
    it('passes when given a subject of type Array with less than the minimum expected length', () => {
      expect(arrays.isArrayShorterThan(5, [1,2,3,4])).toBe(true);
    });
    it('fails when given a subject not of type Array', () => {
      expect(arrays.isArrayShorterThan(3, 123)).toBe(false);
    });
  });

  describe('isArrayContaining', () => {
    it('passes when given a subject of type Array containing an expected substring', () => {
      expect(arrays.isArrayContaining('bar', ['foo','bar','baz'])).toBe(true);
    });
    it('fails when given a subject of type Array not containing an expected substring', () => {
      expect(arrays.isArrayContaining('bar', ['foo','baz','buz'])).toBe(false);
    });
  });

});

