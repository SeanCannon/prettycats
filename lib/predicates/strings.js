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

const isNumericString = str => isString(str) && !isNaN(parseInt(str, 10));

const isTimestamp = R.test(/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/);

const isMySqlTimestamp = R.test(/^([1-2][0-9]{3})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/);

const isUuid = R.test(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi);

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
  isNumericString,
  isTimestamp,
  isMySqlTimestamp,
  isEmail,
  isJSON,
  isUuid
};
