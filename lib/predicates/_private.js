'use strict';

const R = require('ramda');

const ofLength = R.curry((proto, comparitor, length, x) => {
  return R.allPass([R.is(proto), R.compose(R[comparitor](R.__, length), R.length)])(x);
});

const modTwoEq = (v) => {
  return R.compose(R.equals(v), R.mathMod(R.__, 2));
};

module.exports = {
  ofLength,
  modTwoEq
};
