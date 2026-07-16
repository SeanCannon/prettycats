import { mergeAll } from 'fpure'

import * as stringPredicates from './predicates/strings'
import * as numberPredicates from './predicates/numbers'
import * as arrayPredicates from './predicates/arrays'
import * as objectPredicates from './predicates/objects'
import * as primitivePredicates from './predicates/primitives'
import * as booleanPredicates from './predicates/booleans'
import * as datePredicates from './predicates/dates'
import * as logicalPredicates from './predicates/logical'

type Merge<A, B, C, D, E, F, G, H> = A & B & C & D & E & F & G & H

const all: Merge<
  typeof stringPredicates,
  typeof numberPredicates,
  typeof arrayPredicates,
  typeof objectPredicates,
  typeof primitivePredicates,
  typeof booleanPredicates,
  typeof datePredicates,
  typeof logicalPredicates
> = mergeAll([
  stringPredicates,
  numberPredicates,
  arrayPredicates,
  objectPredicates,
  primitivePredicates,
  booleanPredicates,
  datePredicates,
  logicalPredicates,
]) as any

export default all
export * from './predicates/strings'
export * from './predicates/numbers'
export * from './predicates/arrays'
export * from './predicates/objects'
export * from './predicates/primitives'
export * from './predicates/booleans'
export * from './predicates/dates'
export * from './predicates/logical'
