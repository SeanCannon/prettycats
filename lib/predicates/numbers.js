'use strict';

var R  = require('ramda'),
    __ = require('./_private.js');

var _modTwoEq = function(v) {
  return R.compose(R.equals(v), R.mathMod(R.__, 2));
};

var isBetween = R.curry(function(min, max, n) {
  return R.contains(R.__, R.range(min, max))(n)
});

var isBetweenInclusive = R.curry(function(min, max, n) {
  return R.contains(R.__, R.range(min - 1, max + 1))(n)
});

var isNumber                 = R.is(Number),
    isPositiveNumber         = R.allPass([isNumber, R.gt(R.__, 0)]),
    isAtLeastZero            = R.allPass([isNumber, R.gte(R.__, 0)]),
    isNegativeNumber         = R.allPass([isNumber, R.lt(R.__, 0)]),
    isAtMostZero             = R.allPass([isNumber, R.lte(R.__, 0)]),
    isCalendarMonth          = isBetween(1, 13),
    isCalendarMonthZeroBased = isBetween(0, 12),
    isEven                   = _modTwoEq(0),
    isOdd                    = _modTwoEq(1);

module.exports = {
  isNumber                 : isNumber,
  isPositiveNumber         : isPositiveNumber,
  isNegativeNumber         : isNegativeNumber,
  isAtLeastZero            : isAtLeastZero,
  isAtMostZero             : isAtMostZero,
  isCalendarMonth          : isCalendarMonth,
  isCalendarMonthZeroBased : isCalendarMonthZeroBased,
  isBetween                : isBetween,
  isBetweenInclusive       : isBetweenInclusive,
  isEven                   : isEven,
  isOdd                    : isOdd
};
