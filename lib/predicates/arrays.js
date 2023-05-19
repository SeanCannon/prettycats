'use strict';

const R  = require('ramda'),
      __ = require('./_private.js');

module.exports = {
  isArray                : R.is(Array),
  isArrayOfLength        : __.ofLength(Array, 'equals'),
  isArrayOfLengthAtLeast : __.ofLength(Array, 'gte'),
  isArrayOfLengthAtMost  : __.ofLength(Array, 'lte'),
  isArrayLongerThan      : __.ofLength(Array, 'gt'),
  isArrayShorterThan     : __.ofLength(Array, 'lt'),
  isArrayContaining      : R.includes(R.__),
  isEmptyArray           : R.allPass([R.is(Array), R.isEmpty])
};
