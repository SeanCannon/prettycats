'use strict';

var R = require('ramda'),
    __ = require('./_private.js');

module.exports = {
  isArray: R.is(Array),
  isArrayOfLength: __.ofLength(Array, 'identical'),
  isArrayOfLengthAtLeast: __.ofLength(Array, 'gte'),
  isArrayOfLengthAtMost: __.ofLength(Array, 'lte'),
  isArrayLongerThan: __.ofLength(Array, 'gt'),
  isArrayShorterThan: __.ofLength(Array, 'lt'),
  isArrayContaining: R.contains(R.__),
  isEmptyArray: R.allPass([R.is(Array), R.isEmpty])
};