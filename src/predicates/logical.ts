import { curry } from 'fpure'

export function isNot<T extends (value: unknown) => boolean>(pred: T): (value: unknown) => boolean {
  return (value: unknown): boolean => !pred(value)
}

export const isAllPass = curry(
  (predicates: Array<(value: unknown) => boolean>, value: unknown): boolean =>
    predicates.every(p => p(value)),
)

export const isAnyPass = curry(
  (predicates: Array<(value: unknown) => boolean>, value: unknown): boolean =>
    predicates.some(p => p(value)),
)

export const isNonePass = curry(
  (predicates: Array<(value: unknown) => boolean>, value: unknown): boolean =>
    predicates.every(p => !p(value)),
)

export const isOneOf = curry(
  (selection: unknown[], value: unknown): boolean =>
    selection.indexOf(value) !== -1,
)

export function both<T>(
  f: (v: unknown) => v is T,
  g: (v: T) => boolean,
): (v: unknown) => v is T {
  return (v: unknown): v is T => f(v) && g(v)
}
