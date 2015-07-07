'use strict';

var numbers = require('../../lib/predicates/numbers');

describe('number predicates', function() {

  describe('isNumber', function() {
    it('should pass when given a subject of type Number', function() {
      expect(numbers.isNumber(123)).toBe(true);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isNumber('123')).toBe(false);
    });
  });

  describe('isPositiveNumber', function() {
    it('should pass when given a subject of type Number that is greater than zero', function() {
      expect(numbers.isPositiveNumber(123)).toBe(true);
    });
    it('should fail when given a subject of type Number that is less than zero', function() {
      expect(numbers.isPositiveNumber(-123)).toBe(false);
    });
    it('should fail when given 0 as a subject', function() {
      expect(numbers.isPositiveNumber(0)).toBe(false);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isPositiveNumber('123')).toBe(false);
    });
  });

  describe('isNegativeNumber', function() {
    it('should fail when given a subject of type Number that is greater than zero', function() {
      expect(numbers.isNegativeNumber(123)).toBe(false);
    });
    it('should pass when given a subject of type Number that is less than zero', function() {
      expect(numbers.isNegativeNumber(-123)).toBe(true);
    });
    it('should fail when given 0 as a subject', function() {
      expect(numbers.isNegativeNumber(0)).toBe(false);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isNegativeNumber('123')).toBe(false);
    });
  });

  describe('isAtLeastZero', function() {
    it('should pass when given a subject of type Number that is greater than zero', function() {
      expect(numbers.isAtLeastZero(123)).toBe(true);
    });
    it('should fail when given a subject of type Number that is less than zero', function() {
      expect(numbers.isAtLeastZero(-123)).toBe(false);
    });
    it('should pas when given 0 as a subject', function() {
      expect(numbers.isAtLeastZero(0)).toBe(true);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isAtLeastZero('123')).toBe(false);
    });
  });

  describe('isAtMostZero', function() {
    it('should fail when given a subject of type Number that is greater than zero', function() {
      expect(numbers.isAtMostZero(123)).toBe(false);
    });
    it('should pass when given a subject of type Number that is less than zero', function() {
      expect(numbers.isAtMostZero(-123)).toBe(true);
    });
    it('should pas when given 0 as a subject', function() {
      expect(numbers.isAtMostZero(0)).toBe(true);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isAtMostZero('123')).toBe(false);
    });
  });

  describe('isCalendarMonth', function() {
    it('should pass when given a subject of type Number with 1-based index of January', function() {
      expect(numbers.isCalendarMonth(1)).toBe(true);
    });
    it('should pass when given a subject of type Number with 1-based index of December', function() {
      expect(numbers.isCalendarMonth(12)).toBe(true);
    });
    it('should fail when given a subject of type Number with 1-based index of less than January', function() {
      expect(numbers.isCalendarMonth(0)).toBe(false);
    });
    it('should fail when given a subject of type Number with 1-based index of greater than December', function() {
      expect(numbers.isCalendarMonth(13)).toBe(false);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isCalendarMonth('6')).toBe(false);
    });
  });

  describe('isCalendarMonthZeroBased', function() {
    it('should pass when given a subject of type Number with 0-based index of January', function() {
      expect(numbers.isCalendarMonthZeroBased(0)).toBe(true);
    });
    it('should pass when given a subject of type Number with 0-based index of December', function() {
      expect(numbers.isCalendarMonthZeroBased(11)).toBe(true);
    });
    it('should fail when given a subject of type Number with 0-based index of less than January', function() {
      expect(numbers.isCalendarMonthZeroBased(-1)).toBe(false);
    });
    it('should fail when given a subject of type Number with 0-based index of greater than December', function() {
      expect(numbers.isCalendarMonthZeroBased(12)).toBe(false);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isCalendarMonthZeroBased('123')).toBe(false);
    });
  });

  describe('isBetween', function() {
    it('should pass when given a subject of type Number that falls between expected min and max', function() {
      expect(numbers.isBetween(5, 10, 7)).toBe(true);
    });
    it('should fail when given a subject of type Number that is less than the range minimum', function() {
      expect(numbers.isBetween(5, 10, 3)).toBe(false);
    });
    it('should fail when given a subject of type Number that is greater than the range maximum', function() {
      expect(numbers.isBetween(5, 10, 12)).toBe(false);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isBetween(5, 10, '7')).toBe(false);
    });
  });

  describe('isBetweenInclusive', function() {
    it('should pass when given a subject of type Number that falls between expected min and max', function() {
      expect(numbers.isBetweenInclusive(5, 10, 7)).toBe(true);
    });
    it('should fail when given a subject of type Number that is less than the range minimum', function() {
      expect(numbers.isBetweenInclusive(5, 10, 3)).toBe(false);
    });
    it('should fail when given a subject of type Number that is greater than the range maximum', function() {
      expect(numbers.isBetweenInclusive(5, 10, 12)).toBe(false);
    });
    it('should pass when given a subject of type Number that is equal to the range minimum', function() {
      expect(numbers.isBetweenInclusive(5, 10, 5)).toBe(true);
    });
    it('should pass when given a subject of type Number that is equal to the range maximum', function() {
      expect(numbers.isBetweenInclusive(5, 10, 10)).toBe(true);
    });
    it('should fail when given a subject not of type Number', function() {
      expect(numbers.isBetweenInclusive(5, 10, '7')).toBe(false);
    });
  });

  describe('isEven', function() {
    it('should pass when given a subject of type Number that is positive and even', function() {
      expect(numbers.isEven(8)).toBe(true);
    });
    it('should pass when given a subject of type Number that is negative and even', function() {
      expect(numbers.isEven(-8)).toBe(true);
    });
    it('should fail when given a subject of type Number that is odd', function() {
      expect(numbers.isEven(5)).toBe(false);
    });
  });

  describe('isOdd', function() {
    it('should pass when given a subject of type Number that is positive and odd', function() {
      expect(numbers.isOdd(7)).toBe(true);
    });
    it('should pass when given a subject of type Number that is negative and odd', function() {
      expect(numbers.isOdd(-7)).toBe(true);
    });
    it('should fail when given a subject of type Number that is even', function() {
      expect(numbers.isOdd(8)).toBe(false);
    });
  });

});
