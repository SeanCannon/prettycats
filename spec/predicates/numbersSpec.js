'use strict';

const numbers = require('../../lib/predicates/numbers');

describe('number predicates', () => {

  describe('isNumber', () => {
    it('passes when given a subject of type Number', () => {
      expect(numbers.isNumber(123)).toBe(true);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isNumber('123')).toBe(false);
    });
  });

  describe('isPositiveNumber', () => {
    it('passes when given a subject of type Number that is greater than zero', () => {
      expect(numbers.isPositiveNumber(123)).toBe(true);
    });
    it('fails when given a subject of type Number that is less than zero', () => {
      expect(numbers.isPositiveNumber(-123)).toBe(false);
    });
    it('fails when given 0 as a subject', () => {
      expect(numbers.isPositiveNumber(0)).toBe(false);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isPositiveNumber('123')).toBe(false);
    });
  });

  describe('isNegativeNumber', () => {
    it('fails when given a subject of type Number that is greater than zero', () => {
      expect(numbers.isNegativeNumber(123)).toBe(false);
    });
    it('passes when given a subject of type Number that is less than zero', () => {
      expect(numbers.isNegativeNumber(-123)).toBe(true);
    });
    it('fails when given 0 as a subject', () => {
      expect(numbers.isNegativeNumber(0)).toBe(false);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isNegativeNumber('123')).toBe(false);
    });
  });

  describe('isAtLeastZero', () => {
    it('passes when given a subject of type Number that is greater than zero', () => {
      expect(numbers.isAtLeastZero(123)).toBe(true);
    });
    it('fails when given a subject of type Number that is less than zero', () => {
      expect(numbers.isAtLeastZero(-123)).toBe(false);
    });
    it('should pas when given 0 as a subject', () => {
      expect(numbers.isAtLeastZero(0)).toBe(true);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isAtLeastZero('123')).toBe(false);
    });
  });

  describe('isAtMostZero', () => {
    it('fails when given a subject of type Number that is greater than zero', () => {
      expect(numbers.isAtMostZero(123)).toBe(false);
    });
    it('passes when given a subject of type Number that is less than zero', () => {
      expect(numbers.isAtMostZero(-123)).toBe(true);
    });
    it('should pas when given 0 as a subject', () => {
      expect(numbers.isAtMostZero(0)).toBe(true);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isAtMostZero('123')).toBe(false);
    });
  });

  describe('isCalendarMonth', () => {
    it('passes when given a subject of type Number with 1-based index of January', () => {
      expect(numbers.isCalendarMonth(1)).toBe(true);
    });
    it('passes when given a subject of type Number with 1-based index of December', () => {
      expect(numbers.isCalendarMonth(12)).toBe(true);
    });
    it('fails when given a subject of type Number with 1-based index of less than January', () => {
      expect(numbers.isCalendarMonth(0)).toBe(false);
    });
    it('fails when given a subject of type Number with 1-based index of greater than December', () => {
      expect(numbers.isCalendarMonth(13)).toBe(false);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isCalendarMonth('6')).toBe(false);
    });
  });

  describe('isCalendarMonthZeroBased', () => {
    it('passes when given a subject of type Number with 0-based index of January', () => {
      expect(numbers.isCalendarMonthZeroBased(0)).toBe(true);
    });
    it('passes when given a subject of type Number with 0-based index of December', () => {
      expect(numbers.isCalendarMonthZeroBased(11)).toBe(true);
    });
    it('fails when given a subject of type Number with 0-based index of less than January', () => {
      expect(numbers.isCalendarMonthZeroBased(-1)).toBe(false);
    });
    it('fails when given a subject of type Number with 0-based index of greater than December', () => {
      expect(numbers.isCalendarMonthZeroBased(12)).toBe(false);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isCalendarMonthZeroBased('123')).toBe(false);
    });
  });

  describe('isNumberBetween', () => {
    it('passes when given a subject of type Number that falls between expected min and max', () => {
      expect(numbers.isNumberBetween(5, 10, 7)).toBe(true);
    });
    it('fails when given a subject of type Number that is less than the range minimum', () => {
      expect(numbers.isNumberBetween(5, 10, 3)).toBe(false);
    });
    it('fails when given a subject of type Number that is greater than the range maximum', () => {
      expect(numbers.isNumberBetween(5, 10, 12)).toBe(false);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isNumberBetween(5, 10, '7')).toBe(false);
    });
  });

  describe('isNumberBetweenInclusive', () => {
    it('passes when given a subject of type Number that falls between expected min and max', () => {
      expect(numbers.isNumberBetweenInclusive(5, 10, 7)).toBe(true);
    });
    it('fails when given a subject of type Number that is less than the range minimum', () => {
      expect(numbers.isNumberBetweenInclusive(5, 10, 3)).toBe(false);
    });
    it('fails when given a subject of type Number that is greater than the range maximum', () => {
      expect(numbers.isNumberBetweenInclusive(5, 10, 12)).toBe(false);
    });
    it('passes when given a subject of type Number that is equal to the range minimum', () => {
      expect(numbers.isNumberBetweenInclusive(5, 10, 5)).toBe(true);
    });
    it('passes when given a subject of type Number that is equal to the range maximum', () => {
      expect(numbers.isNumberBetweenInclusive(5, 10, 10)).toBe(true);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isNumberBetweenInclusive(5, 10, '7')).toBe(false);
    });
  });

  describe('isEvenNumber', () => {
    it('passes when given a subject of type Number that is positive and even', () => {
      expect(numbers.isEvenNumber(8)).toBe(true);
    });
    it('passes when given a subject of type Number that is negative and even', () => {
      expect(numbers.isEvenNumber(-8)).toBe(true);
    });
    it('fails when given a subject of type Number that is odd', () => {
      expect(numbers.isEvenNumber(5)).toBe(false);
    });
  });

  describe('isOddNumber', () => {
    it('passes when given a subject of type Number that is positive and odd', () => {
      expect(numbers.isOddNumber(7)).toBe(true);
    });
    it('passes when given a subject of type Number that is negative and odd', () => {
      expect(numbers.isOddNumber(-7)).toBe(true);
    });
    it('fails when given a subject of type Number that is even', () => {
      expect(numbers.isOddNumber(8)).toBe(false);
    });
  });

  describe('numberIsOneOf', () => {
    it('passes when given a subject of type Number that also exists in the selection array', () => {
      expect(numbers.numberIsOneOf([123, 456, 789], 123)).toBe(true);
    });
    it('fails when given a subject of type Number that does not appear in the selection array', () => {
      expect(numbers.numberIsOneOf([12, 34, 56], 123)).toBe(false);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.numberIsOneOf([123, 456, 789], '123')).toBe(false);
    });
  });

  describe('isNumericBoolean', () => {
    it('passes when given 0', () => {
      expect(numbers.isNumericBoolean(0)).toBe(true);
    });
    it('passes when given 1', () => {
      expect(numbers.isNumericBoolean(1)).toBe(true);
    });
    it('fails when given a subject of type Number that is not 0 or 1', () => {
      expect(numbers.isNumericBoolean(3)).toBe(false);
    });
    it('fails when given a subject not of type Number', () => {
      expect(numbers.isNumericBoolean('1')).toBe(false);
    });
  });
});
