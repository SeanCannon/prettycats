'use strict';

var R = require('ramda');

module.exports = {
  isObject: R.is(Object),
  isObjectContaining: R.has,
  isObjectAbsent: R.curry(function (k, o) {
    return R.is(Object, o) && !R.has(k, o);
  }),
  isObjectMatching: R.tryCatch(R.equals, R.F),
  isObjectExtending: R.tryCatch(R.whereEq, R.F),
  isObjectSatisfying: R.tryCatch(R.where, R.F)
};