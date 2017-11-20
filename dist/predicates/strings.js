'use strict';

var R = require('ramda'),
    __ = require('./_private.js');

var isString = R.is(String),
    isStringOfLength = __.ofLength(String, 'identical'),
    isStringOfLengthAtLeast = __.ofLength(String, 'gte'),
    isStringOfLengthAtMost = __.ofLength(String, 'lte'),
    isStringLongerThan = __.ofLength(String, 'gt'),
    isStringShorterThan = __.ofLength(String, 'lt');

var isStringContaining = R.curry(function (subStr, str) {
  return R.compose(R.not, R.equals(-1), R.indexOf(subStr))(str);
});

var isStringMatching = R.curry(function (pattern, str) {
  return R.test(pattern, str);
});

var stringIsOneOf = R.curry(function (selectionArr, str) {
  return R.allPass([R.is(String), R.contains(R.__, selectionArr)])(str);
});

var isStringOfLengthBetween = R.curry(function (min, max, str) {
  return R.both(isStringLongerThan(min), isStringShorterThan(max))(str);
});

var isStringOfLengthBetweenInclusive = R.curry(function (min, max, str) {
  return R.both(isStringOfLengthAtLeast(min), isStringOfLengthAtMost(max))(str);
});

var isEmail = R.test(/\S+@\S+/);

var isNumericString = function isNumericString(str) {
  return isString(str) && !isNaN(parseInt(str, 10));
};

var isTimestamp = R.test(/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/);

var isJSON = function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return R.is(String, str);
};

module.exports = {
  isString: isString,
  isStringOfLength: isStringOfLength,
  isStringOfLengthAtLeast: isStringOfLengthAtLeast,
  isStringOfLengthAtMost: isStringOfLengthAtMost,
  isStringLongerThan: isStringLongerThan,
  isStringShorterThan: isStringShorterThan,
  isStringOfLengthBetween: isStringOfLengthBetween,
  isStringOfLengthBetweenInclusive: isStringOfLengthBetweenInclusive,
  isStringContaining: isStringContaining,
  isStringMatching: isStringMatching,
  stringIsOneOf: stringIsOneOf,
  isNumericString: isNumericString,
  isTimestamp: isTimestamp,
  isEmail: isEmail,
  isJSON: isJSON
};