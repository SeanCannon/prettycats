import { describe, it, expect } from 'vitest'
import {
  isNumber,
  isPositiveNumber,
  isNegativeNumber,
  isAtLeastZero,
  isAtMostZero,
  isCalendarMonth,
  isCalendarMonthZeroBased,
  isNumberBetween,
  isNumberBetweenInclusive,
  isEvenNumber,
  isOddNumber,
  numberIsOneOf,
  isNumeric,
  isNumericBoolean,
  isInteger,
  isFloat,
  isFiniteNumber,
  isNaNValue,
  isSafeInteger,
  isMultipleOf,
  isZero,
  isPositiveZero,
  isNegativeZero,
  isNonPositive,
  isNonNegative,
  isPercent,
  isPortNumber,
  isHTTPStatusCode,
  isUnitInterval,
  isIndex,
  isArrayIndex,
  isPrime,
  isPowerOfTwo,
} from '../../src/predicates/numbers'

describe('number predicates', () => {
  describe('isNumber', () => {
    it('passes when given a subject of type Number', () => {
      expect(isNumber(123)).toBe(true)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isNumber('123')).toBe(false)
    })
  })

  describe('isPositiveNumber', () => {
    it('passes when given a subject of type Number that is greater than zero', () => {
      expect(isPositiveNumber(123)).toBe(true)
    })
    it('fails when given a subject of type Number that is less than zero', () => {
      expect(isPositiveNumber(-123)).toBe(false)
    })
    it('fails when given 0 as a subject', () => {
      expect(isPositiveNumber(0)).toBe(false)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isPositiveNumber('123')).toBe(false)
    })
  })

  describe('isNegativeNumber', () => {
    it('fails when given a subject of type Number that is greater than zero', () => {
      expect(isNegativeNumber(123)).toBe(false)
    })
    it('passes when given a subject of type Number that is less than zero', () => {
      expect(isNegativeNumber(-123)).toBe(true)
    })
    it('fails when given 0 as a subject', () => {
      expect(isNegativeNumber(0)).toBe(false)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isNegativeNumber('123')).toBe(false)
    })
  })

  describe('isAtLeastZero', () => {
    it('passes when given a subject of type Number that is greater than zero', () => {
      expect(isAtLeastZero(123)).toBe(true)
    })
    it('fails when given a subject of type Number that is less than zero', () => {
      expect(isAtLeastZero(-123)).toBe(false)
    })
    it('passes when given 0 as a subject', () => {
      expect(isAtLeastZero(0)).toBe(true)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isAtLeastZero('123')).toBe(false)
    })
  })

  describe('isAtMostZero', () => {
    it('fails when given a subject of type Number that is greater than zero', () => {
      expect(isAtMostZero(123)).toBe(false)
    })
    it('passes when given a subject of type Number that is less than zero', () => {
      expect(isAtMostZero(-123)).toBe(true)
    })
    it('passes when given 0 as a subject', () => {
      expect(isAtMostZero(0)).toBe(true)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isAtMostZero('123')).toBe(false)
    })
  })

  describe('isCalendarMonth', () => {
    it('passes when given a subject of type Number with 1-based index of January', () => {
      expect(isCalendarMonth(1)).toBe(true)
    })
    it('passes when given a subject of type Number with 1-based index of December', () => {
      expect(isCalendarMonth(12)).toBe(true)
    })
    it('fails when given a subject of type Number with 1-based index of less than January', () => {
      expect(isCalendarMonth(0)).toBe(false)
    })
    it('fails when given a subject of type Number with 1-based index of greater than December', () => {
      expect(isCalendarMonth(13)).toBe(false)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isCalendarMonth('6')).toBe(false)
    })
  })

  describe('isCalendarMonthZeroBased', () => {
    it('passes when given a subject of type Number with 0-based index of January', () => {
      expect(isCalendarMonthZeroBased(0)).toBe(true)
    })
    it('passes when given a subject of type Number with 0-based index of December', () => {
      expect(isCalendarMonthZeroBased(11)).toBe(true)
    })
    it('fails when given a subject of type Number with 0-based index of less than January', () => {
      expect(isCalendarMonthZeroBased(-1)).toBe(false)
    })
    it('fails when given a subject of type Number with 0-based index of greater than December', () => {
      expect(isCalendarMonthZeroBased(12)).toBe(false)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isCalendarMonthZeroBased('123')).toBe(false)
    })
  })

  describe('isNumberBetween', () => {
    it('passes when given a subject of type Number that falls between expected min and max', () => {
      expect(isNumberBetween(5, 10, 7)).toBe(true)
    })
    it('fails when given a subject of type Number that is less than the range minimum', () => {
      expect(isNumberBetween(5, 10, 3)).toBe(false)
    })
    it('fails when given a subject of type Number that is greater than the range maximum', () => {
      expect(isNumberBetween(5, 10, 12)).toBe(false)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isNumberBetween(5, 10, '7')).toBe(false)
    })
  })

  describe('isNumberBetweenInclusive', () => {
    it('passes when given a subject of type Number that falls between expected min and max', () => {
      expect(isNumberBetweenInclusive(5, 10, 7)).toBe(true)
    })
    it('fails when given a subject of type Number that is less than the range minimum', () => {
      expect(isNumberBetweenInclusive(5, 10, 3)).toBe(false)
    })
    it('fails when given a subject of type Number that is greater than the range maximum', () => {
      expect(isNumberBetweenInclusive(5, 10, 12)).toBe(false)
    })
    it('passes when given a subject of type Number that is equal to the range minimum', () => {
      expect(isNumberBetweenInclusive(5, 10, 5)).toBe(true)
    })
    it('passes when given a subject of type Number that is equal to the range maximum', () => {
      expect(isNumberBetweenInclusive(5, 10, 10)).toBe(true)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isNumberBetweenInclusive(5, 10, '7')).toBe(false)
    })
  })

  describe('isEvenNumber', () => {
    it('passes when given a subject of type Number that is positive and even', () => {
      expect(isEvenNumber(8)).toBe(true)
    })
    it('passes when given a subject of type Number that is negative and even', () => {
      expect(isEvenNumber(-8)).toBe(true)
    })
    it('fails when given a subject of type Number that is odd', () => {
      expect(isEvenNumber(5)).toBe(false)
    })
  })

  describe('isOddNumber', () => {
    it('passes when given a subject of type Number that is positive and odd', () => {
      expect(isOddNumber(7)).toBe(true)
    })
    it('passes when given a subject of type Number that is negative and odd', () => {
      expect(isOddNumber(-7)).toBe(true)
    })
    it('fails when given a subject of type Number that is even', () => {
      expect(isOddNumber(8)).toBe(false)
    })
  })

  describe('numberIsOneOf', () => {
    it('passes when given a subject of type Number that also exists in the selection array', () => {
      expect(numberIsOneOf([123, 456, 789], 123)).toBe(true)
    })
    it('fails when given a subject of type Number that does not appear in the selection array', () => {
      expect(numberIsOneOf([12, 34, 56], 123)).toBe(false)
    })
    it('fails when given a subject not of type Number', () => {
      expect(numberIsOneOf([123, 456, 789], '123')).toBe(false)
    })
  })

  describe('isNumeric', () => {
    it('passes when given a stringified number', () => {
      expect(isNumeric('123')).toBe(true)
    })
    it('passes when given an actual number', () => {
      expect(isNumeric(123)).toBe(true)
    })
    it('fails when given a non-numeric value', () => {
      expect(isNumeric({ foo: 'bar' })).toBe(false)
      expect(isNumeric('asd123asd')).toBe(false)
    })
  })

  describe('isNumericBoolean', () => {
    it('passes when given 0', () => {
      expect(isNumericBoolean(0)).toBe(true)
    })
    it('passes when given 1', () => {
      expect(isNumericBoolean(1)).toBe(true)
    })
    it('fails when given a subject of type Number that is not 0 or 1', () => {
      expect(isNumericBoolean(3)).toBe(false)
    })
    it('fails when given a subject not of type Number', () => {
      expect(isNumericBoolean('1')).toBe(false)
    })
  })

  describe('isInteger', () => {
    it('passes when given an integer', () => {
      expect(isInteger(42)).toBe(true)
      expect(isInteger(-42)).toBe(true)
    })
    it('fails when given a non-integer', () => {
      expect(isInteger(3.14)).toBe(false)
      expect(isInteger('42')).toBe(false)
    })
  })

  describe('isFloat', () => {
    it('passes when given a float', () => {
      expect(isFloat(3.14)).toBe(true)
    })
    it('fails when given an integer or non-number', () => {
      expect(isFloat(42)).toBe(false)
      expect(isFloat('3.14')).toBe(false)
    })
  })

  describe('isFiniteNumber', () => {
    it('passes when given a finite number', () => {
      expect(isFiniteNumber(42)).toBe(true)
    })
    it('fails when given Infinity or NaN', () => {
      expect(isFiniteNumber(Infinity)).toBe(false)
      expect(isFiniteNumber(NaN)).toBe(false)
    })
  })

  describe('isNaNValue', () => {
    it('passes when given NaN', () => {
      expect(isNaNValue(NaN)).toBe(true)
    })
    it('fails when given a non-NaN value', () => {
      expect(isNaNValue(42)).toBe(false)
      expect(isNaNValue('NaN')).toBe(false)
    })
  })

  describe('isSafeInteger', () => {
    it('passes when given a safe integer', () => {
      expect(isSafeInteger(42)).toBe(true)
    })
    it('fails when given an unsafe integer', () => {
      expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
    })
  })

  describe('isMultipleOf', () => {
    it('passes when the value is a multiple of the divisor', () => {
      expect(isMultipleOf(3, 9)).toBe(true)
      expect(isMultipleOf(2, 4)).toBe(true)
    })
    it('fails when the value is not a multiple', () => {
      expect(isMultipleOf(3, 10)).toBe(false)
    })
    it('fails when given a non-number', () => {
      expect(isMultipleOf(3, '9')).toBe(false)
    })
  })

  describe('isZero', () => {
    it('passes when given 0', () => {
      expect(isZero(0)).toBe(true)
    })
    it('fails when given a non-zero value', () => {
      expect(isZero(1)).toBe(false)
      expect(isZero('0')).toBe(false)
    })
  })

  describe('isPositiveZero', () => {
    it('passes when given positive 0', () => {
      expect(isPositiveZero(0)).toBe(true)
    })
    it('fails when given negative zero', () => {
      expect(isPositiveZero(-0)).toBe(false)
    })
  })

  describe('isNegativeZero', () => {
    it('passes when given negative zero', () => {
      expect(isNegativeZero(-0)).toBe(true)
    })
    it('fails when given positive zero', () => {
      expect(isNegativeZero(0)).toBe(false)
    })
  })

  describe('isNonPositive', () => {
    it('passes when given zero or a negative number', () => {
      expect(isNonPositive(0)).toBe(true)
      expect(isNonPositive(-5)).toBe(true)
    })
    it('fails when given a positive number', () => {
      expect(isNonPositive(5)).toBe(false)
    })
  })

  describe('isNonNegative', () => {
    it('passes when given zero or a positive number', () => {
      expect(isNonNegative(0)).toBe(true)
      expect(isNonNegative(5)).toBe(true)
    })
    it('fails when given a negative number', () => {
      expect(isNonNegative(-5)).toBe(false)
    })
  })

  describe('isPercent', () => {
    it('passes when given a value between 0 and 100', () => {
      expect(isPercent(0)).toBe(true)
      expect(isPercent(50)).toBe(true)
      expect(isPercent(100)).toBe(true)
    })
    it('fails when given a value outside 0-100', () => {
      expect(isPercent(-1)).toBe(false)
      expect(isPercent(101)).toBe(false)
    })
  })

  describe('isPortNumber', () => {
    it('passes when given a valid port number', () => {
      expect(isPortNumber(80)).toBe(true)
      expect(isPortNumber(65535)).toBe(true)
      expect(isPortNumber(0)).toBe(true)
    })
    it('fails when given an invalid port number', () => {
      expect(isPortNumber(65536)).toBe(false)
      expect(isPortNumber(-1)).toBe(false)
    })
  })

  describe('isHTTPStatusCode', () => {
    it('passes when given a valid HTTP status code', () => {
      expect(isHTTPStatusCode(200)).toBe(true)
      expect(isHTTPStatusCode(404)).toBe(true)
      expect(isHTTPStatusCode(500)).toBe(true)
    })
    it('fails when given an invalid HTTP status code', () => {
      expect(isHTTPStatusCode(99)).toBe(false)
      expect(isHTTPStatusCode(600)).toBe(false)
    })
  })

  describe('isUnitInterval', () => {
    it('passes when given a value between 0 and 1', () => {
      expect(isUnitInterval(0)).toBe(true)
      expect(isUnitInterval(0.5)).toBe(true)
      expect(isUnitInterval(1)).toBe(true)
    })
    it('fails when given a value outside 0-1', () => {
      expect(isUnitInterval(-0.1)).toBe(false)
      expect(isUnitInterval(1.1)).toBe(false)
    })
  })

  describe('isIndex', () => {
    it('passes when given a non-negative integer', () => {
      expect(isIndex(0)).toBe(true)
      expect(isIndex(42)).toBe(true)
    })
    it('fails when given a negative number or non-integer', () => {
      expect(isIndex(-1)).toBe(false)
      expect(isIndex(3.14)).toBe(false)
    })
  })

  describe('isArrayIndex', () => {
    it('passes when given a valid array index', () => {
      expect(isArrayIndex(0)).toBe(true)
      expect(isArrayIndex(42)).toBe(true)
    })
    it('fails when given an invalid array index', () => {
      expect(isArrayIndex(-1)).toBe(false)
    })
  })

  describe('isPrime', () => {
    it('passes when given a prime number', () => {
      expect(isPrime(2)).toBe(true)
      expect(isPrime(3)).toBe(true)
      expect(isPrime(5)).toBe(true)
      expect(isPrime(7)).toBe(true)
      expect(isPrime(11)).toBe(true)
    })
    it('fails when given a non-prime number', () => {
      expect(isPrime(1)).toBe(false)
      expect(isPrime(4)).toBe(false)
      expect(isPrime(9)).toBe(false)
      expect(isPrime(15)).toBe(false)
    })
    it('fails when given a non-number', () => {
      expect(isPrime('7')).toBe(false)
    })
  })

  describe('isPowerOfTwo', () => {
    it('passes when given a power of two', () => {
      expect(isPowerOfTwo(1)).toBe(true)
      expect(isPowerOfTwo(2)).toBe(true)
      expect(isPowerOfTwo(4)).toBe(true)
      expect(isPowerOfTwo(1024)).toBe(true)
    })
    it('fails when given a non-power-of-two', () => {
      expect(isPowerOfTwo(0)).toBe(false)
      expect(isPowerOfTwo(3)).toBe(false)
      expect(isPowerOfTwo(6)).toBe(false)
    })
  })
})
