'use strict';

var R = require('ramda');

var ofLength = R.curry(function (proto, comparitor, length, x) {
  return R.allPass([R.is(proto), R.compose(R[comparitor](R.__, length), R.length)])(x);
});

var modTwoEq = function modTwoEq(v) {
  return R.compose(R.equals(v), R.mathMod(R.__, 2));
};

module.exports = {
  ofLength: ofLength,
  modTwoEq: modTwoEq
};