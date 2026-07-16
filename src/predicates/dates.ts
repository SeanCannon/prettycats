import { curry } from 'fpure'

function isSameDateLocal(a: Date, b: Date): boolean {
  return a.toDateString() === b.toDateString()
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime())
}

export function isDateInPast(value: unknown): value is Date {
  return isValidDate(value) && value.getTime() < Date.now()
}

export function isDateInFuture(value: unknown): value is Date {
  return isValidDate(value) && value.getTime() > Date.now()
}

export function isDateToday(value: unknown): value is Date {
  return isValidDate(value) && isSameDateLocal(value, new Date())
}

export function isDateYesterday(value: unknown): value is Date {
  return isValidDate(value) && isSameDateLocal(value, new Date(Date.now() - 86400000))
}

export function isDateTomorrow(value: unknown): value is Date {
  return isValidDate(value) && isSameDateLocal(value, new Date(Date.now() + 86400000))
}

export function isWeekend(value: unknown): value is Date {
  return isValidDate(value) && (value.getDay() === 0 || value.getDay() === 6)
}

export function isWeekday(value: unknown): value is Date {
  return isValidDate(value) && value.getDay() > 0 && value.getDay() < 6
}

export const isLeapYear = curry((value: unknown): value is Date => {
  if (!isValidDate(value)) return false
  const year = value.getFullYear()
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
})

export const isDateInRange = curry(
  (start: Date, end: Date, value: unknown): value is Date =>
    isValidDate(value) && value.getTime() >= start.getTime() && value.getTime() <= end.getTime(),
)

export const isSameDate = curry(
  (a: unknown, b: unknown): boolean =>
    isValidDate(a) && isValidDate(b) && a.toDateString() === b.toDateString(),
)

export const isAfterDate = curry(
  (reference: unknown, value: unknown): value is Date =>
    isValidDate(value) && isValidDate(reference) && value.getTime() > reference.getTime(),
)

export const isBeforeDate = curry(
  (reference: unknown, value: unknown): value is Date =>
    isValidDate(value) && isValidDate(reference) && value.getTime() < reference.getTime(),
)

export const isDateInMonth = curry(
  (month: number, value: unknown): value is Date =>
    isValidDate(value) && value.getMonth() === month,
)

export const isDateInYear = curry(
  (year: number, value: unknown): value is Date =>
    isValidDate(value) && value.getFullYear() === year,
)
