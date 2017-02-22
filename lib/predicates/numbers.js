'use strict';

const R  = require('ramda'),
      __ = require('./_private.js');

const isNumberBetween = R.curry((min, max, n) => {
  return R.is(Number, n) && n > min && n < max;
});

const isNumberBetweenInclusive = R.curry((min, max, n) => {
  return R.is(Number, n) && n >= min && n <= max;
});

const numberIsOneOf = R.curry((selectionArr, num) => {
  return R.allPass([R.is(Number), R.contains(R.__, selectionArr)])(num);
});

const isNumber                 = R.is(Number),
      isPositiveNumber         = R.allPass([isNumber, R.gt(R.__, 0)]),
      isAtLeastZero            = R.allPass([isNumber, R.gte(R.__, 0)]),
      isNegativeNumber         = R.allPass([isNumber, R.lt(R.__, 0)]),
      isAtMostZero             = R.allPass([isNumber, R.lte(R.__, 0)]),
      isCalendarMonth          = isNumberBetweenInclusive(1, 12),
      isCalendarMonthZeroBased = isNumberBetweenInclusive(0, 11),
      isEvenNumber             = __.modTwoEq(0),
      isOddNumber              = __.modTwoEq(1),
      isNumericBoolean         = R.contains(R.__, [0, 1]);

module.exports = {
  isNumber,
  isNumberBetween,
  isNumberBetweenInclusive,
  isPositiveNumber,
  isNegativeNumber,
  isEvenNumber,
  isOddNumber,
  isAtLeastZero,
  isAtMostZero,
  isCalendarMonth,
  isCalendarMonthZeroBased,
  numberIsOneOf,
  isNumericBoolean
};
