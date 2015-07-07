'use strict';

var R = require('ramda');

var ofLength = R.curry(function(proto, comparitor, length, x) {
  return R.allPass([R.is(proto), R.compose(R[comparitor](R.__, length), R.length)], x);
});

module.exports = {
  ofLength : ofLength
};
