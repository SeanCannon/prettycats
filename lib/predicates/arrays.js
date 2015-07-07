'use strict';

var R  = require('ramda'),
    __ = require('./_private.js');

var isArray                = R.is(Array),
    isArrayOfLength        = __.ofLength(Array, 'eq'),
    isArrayOfLengthAtLeast = __.ofLength(Array, 'gte'),
    isArrayOfLengthAtMost  = __.ofLength(Array, 'lte'),
    isArrayLongerThan      = __.ofLength(Array, 'gt'),
    isArrayShorterThan     = __.ofLength(Array, 'lt');

var isArrayContaining = R.contains(R.__);

var isEmptyArray = R.allPass([R.is(Array), R.isEmpty]);

module.exports = {
  isArray                : isArray,
  isEmptyArray           : isEmptyArray,
  isArrayOfLength        : isArrayOfLength,
  isArrayOfLengthAtLeast : isArrayOfLengthAtLeast,
  isArrayOfLengthAtMost  : isArrayOfLengthAtMost,
  isArrayLongerThan      : isArrayLongerThan,
  isArrayShorterThan     : isArrayShorterThan,
  isArrayContaining      : isArrayContaining
};
