'use strict';

var R  = require('ramda'),
    __ = require('./_private.js');

var isString                = R.is(String),
    isStringOfLength        = __.ofLength(String, 'identical'),
    isStringOfLengthAtLeast = __.ofLength(String, 'gte'),
    isStringOfLengthAtMost  = __.ofLength(String, 'lte'),
    isStringLongerThan      = __.ofLength(String, 'gt'),
    isStringShorterThan     = __.ofLength(String, 'lt');

var isStringContaining = R.curry(function(substr, str) {
  return R.compose(R.not, R.equals(-1), R.indexOf(substr))(str);
});

var isStringMatching = R.curry(function(pattern, str) {
  return R.test(pattern, str);
});

var stringIsOneOf = R.curry(function(selectionArr ,str) {
  return R.allPass([R.is(String), R.contains(R.__, selectionArr)], str);
});

var isEmail = R.test(/\S+@\S+/);

module.exports = {
  isString                : isString,
  isStringOfLength        : isStringOfLength,
  isStringOfLengthAtLeast : isStringOfLengthAtLeast,
  isStringOfLengthAtMost  : isStringOfLengthAtMost,
  isStringLongerThan      : isStringLongerThan,
  isStringShorterThan     : isStringShorterThan,
  isStringContaining      : isStringContaining,
  isStringMatching        : isStringMatching,
  stringIsOneOf           : stringIsOneOf,
  isEmail                 : isEmail
};
