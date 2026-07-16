export function isTruthy(value: unknown): boolean {
  return !!value
}

export function isFalsy(value: unknown): boolean {
  return !value
}

export function isTrue(value: unknown): value is true {
  return value === true
}

export function isFalse(value: unknown): value is false {
  return value === false
}
