import { describe, it, expect } from 'vitest'
import {
  isDate,
  isValidDate,
  isDateInPast,
  isDateInFuture,
  isDateToday,
  isDateYesterday,
  isDateTomorrow,
  isWeekend,
  isWeekday,
  isLeapYear,
  isDateInRange,
  isSameDate,
  isAfterDate,
  isBeforeDate,
  isDateInMonth,
  isDateInYear,
} from '../../src/predicates/dates'

describe('date predicates', () => {
  describe('isDate', () => {
    it('passes when given a Date instance', () => {
      expect(isDate(new Date())).toBe(true)
    })
    it('fails when given a non-Date value', () => {
      expect(isDate('2024-01-01')).toBe(false)
      expect(isDate(123)).toBe(false)
      expect(isDate(null)).toBe(false)
    })
  })

  describe('isValidDate', () => {
    it('passes when given a valid Date instance', () => {
      expect(isValidDate(new Date())).toBe(true)
      expect(isValidDate(new Date('2024-01-01'))).toBe(true)
    })
    it('fails when given an invalid Date instance', () => {
      expect(isValidDate(new Date('invalid'))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isValidDate('2024-01-01')).toBe(false)
    })
  })

  describe('isDateInPast', () => {
    it('passes when given a date in the past', () => {
      expect(isDateInPast(new Date('2000-01-01'))).toBe(true)
    })
    it('fails when given a date in the future', () => {
      expect(isDateInPast(new Date('2099-01-01'))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isDateInPast('2024-01-01')).toBe(false)
    })
  })

  describe('isDateInFuture', () => {
    it('passes when given a date in the future', () => {
      expect(isDateInFuture(new Date('2099-01-01'))).toBe(true)
    })
    it('fails when given a date in the past', () => {
      expect(isDateInFuture(new Date('2000-01-01'))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isDateInFuture('2024-01-01')).toBe(false)
    })
  })

  describe('isDateToday', () => {
    it('passes when given today\'s date', () => {
      expect(isDateToday(new Date())).toBe(true)
    })
    it('fails when given yesterday\'s date', () => {
      expect(isDateToday(new Date(Date.now() - 86400000))).toBe(false)
    })
  })

  describe('isDateYesterday', () => {
    it('passes when given yesterday\'s date', () => {
      expect(isDateYesterday(new Date(Date.now() - 86400000))).toBe(true)
    })
    it('fails when given today\'s date', () => {
      expect(isDateYesterday(new Date())).toBe(false)
    })
  })

  describe('isDateTomorrow', () => {
    it('passes when given tomorrow\'s date', () => {
      expect(isDateTomorrow(new Date(Date.now() + 86400000))).toBe(true)
    })
    it('fails when given today\'s date', () => {
      expect(isDateTomorrow(new Date())).toBe(false)
    })
  })

  describe('isWeekend', () => {
    it('passes when given a Saturday', () => {
      expect(isWeekend(new Date(2024, 6, 13))).toBe(true)
    })
    it('passes when given a Sunday', () => {
      expect(isWeekend(new Date(2024, 6, 14))).toBe(true)
    })
    it('fails when given a weekday', () => {
      expect(isWeekend(new Date(2024, 6, 15))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isWeekend('2024-07-13')).toBe(false)
    })
  })

  describe('isWeekday', () => {
    it('passes when given a Monday', () => {
      expect(isWeekday(new Date(2024, 6, 15))).toBe(true)
    })
    it('passes when given a Friday', () => {
      expect(isWeekday(new Date(2024, 6, 19))).toBe(true)
    })
    it('fails when given a weekend', () => {
      expect(isWeekday(new Date(2024, 6, 13))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isWeekday('2024-07-15')).toBe(false)
    })
  })

  describe('isLeapYear', () => {
    it('passes when given a leap year date', () => {
      expect(isLeapYear(new Date(2024, 0, 1))).toBe(true)
      expect(isLeapYear(new Date(2000, 0, 1))).toBe(true)
    })
    it('fails when given a non-leap year date', () => {
      expect(isLeapYear(new Date(2023, 0, 1))).toBe(false)
      expect(isLeapYear(new Date(1900, 0, 1))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isLeapYear('2024-01-01')).toBe(false)
    })
  })

  describe('isDateInRange', () => {
    it('passes when given a date within the range', () => {
      expect(isDateInRange(new Date('2024-01-01'), new Date('2024-12-31'), new Date('2024-06-15'))).toBe(true)
    })
    it('passes when given a date at the start of the range', () => {
      expect(isDateInRange(new Date('2024-01-01'), new Date('2024-12-31'), new Date('2024-01-01'))).toBe(true)
    })
    it('passes when given a date at the end of the range', () => {
      expect(isDateInRange(new Date('2024-01-01'), new Date('2024-12-31'), new Date('2024-12-31'))).toBe(true)
    })
    it('fails when given a date before the range', () => {
      expect(isDateInRange(new Date('2024-01-01'), new Date('2024-12-31'), new Date('2023-12-31'))).toBe(false)
    })
    it('fails when given a date after the range', () => {
      expect(isDateInRange(new Date('2024-01-01'), new Date('2024-12-31'), new Date('2025-01-01'))).toBe(false)
    })
  })

  describe('isSameDate', () => {
    it('passes when given two dates on the same day', () => {
      expect(isSameDate(new Date('2024-01-01'), new Date('2024-01-01'))).toBe(true)
    })
    it('fails when given two dates on different days', () => {
      expect(isSameDate(new Date('2024-01-01'), new Date('2024-01-02'))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isSameDate('2024-01-01', new Date())).toBe(false)
    })
  })

  describe('isAfterDate', () => {
    it('passes when given a date after the reference', () => {
      expect(isAfterDate(new Date('2024-01-01'), new Date('2024-06-15'))).toBe(true)
    })
    it('fails when given a date before the reference', () => {
      expect(isAfterDate(new Date('2024-06-15'), new Date('2024-01-01'))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isAfterDate(new Date(), '2024-01-01')).toBe(false)
    })
  })

  describe('isBeforeDate', () => {
    it('passes when given a date before the reference', () => {
      expect(isBeforeDate(new Date('2024-06-15'), new Date('2024-01-01'))).toBe(true)
    })
    it('fails when given a date after the reference', () => {
      expect(isBeforeDate(new Date('2024-01-01'), new Date('2024-06-15'))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isBeforeDate(new Date(), '2024-01-01')).toBe(false)
    })
  })

  describe('isDateInMonth', () => {
    it('passes when given a date in the specified month', () => {
      expect(isDateInMonth(0, new Date('2024-01-15'))).toBe(true)
    })
    it('fails when given a date in a different month', () => {
      expect(isDateInMonth(1, new Date('2024-01-15'))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isDateInMonth(0, '2024-01-15')).toBe(false)
    })
  })

  describe('isDateInYear', () => {
    it('passes when given a date in the specified year', () => {
      expect(isDateInYear(2024, new Date('2024-06-15'))).toBe(true)
    })
    it('fails when given a date in a different year', () => {
      expect(isDateInYear(2023, new Date('2024-06-15'))).toBe(false)
    })
    it('fails when given a non-Date value', () => {
      expect(isDateInYear(2024, '2024-06-15')).toBe(false)
    })
  })
})
