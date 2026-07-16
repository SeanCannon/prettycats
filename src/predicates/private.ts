export function not(b: boolean): boolean {
  return !b
}

export function isEmpty<T>(x: T[]): boolean {
  return x.length === 0
}
