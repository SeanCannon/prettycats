'use strict';

const R  = require('ramda'),
      __ = require('./_private.js');

const isString                = R.is(String),
      isStringOfLength        = __.ofLength(String, 'identical'),
      isStringOfLengthAtLeast = __.ofLength(String, 'gte'),
      isStringOfLengthAtMost  = __.ofLength(String, 'lte'),
      isStringLongerThan      = __.ofLength(String, 'gt'),
      isStringShorterThan     = __.ofLength(String, 'lt');

const isStringContaining = R.curry((subStr, str) => {
  return R.compose(R.not, R.equals(-1), R.indexOf(subStr))(str);
});

const isStringMatching = R.curry((pattern, str) => {
  return R.test(pattern, str);
});

const stringIsOneOf = R.curry((selectionArr, str) => {
  return R.allPass([R.is(String), R.contains(R.__, selectionArr)])(str);
});

const isStringOfLengthBetween = R.curry((min, max, str) => {
  return R.both(isStringLongerThan(min), isStringShorterThan(max))(str);
});

const isStringOfLengthBetweenInclusive = R.curry((min, max, str) => {
  return R.both(isStringOfLengthAtLeast(min), isStringOfLengthAtMost(max))(str);
});

const isEmail = R.test(/\S+@\S+/);

const isJSON = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return R.is(String, str);
};

module.exports = {
  isString,
  isStringOfLength,
  isStringOfLengthAtLeast,
  isStringOfLengthAtMost,
  isStringLongerThan,
  isStringShorterThan,
  isStringOfLengthBetween,
  isStringOfLengthBetweenInclusive,
  isStringContaining,
  isStringMatching,
  stringIsOneOf,
  isEmail,
  isJSON
};
