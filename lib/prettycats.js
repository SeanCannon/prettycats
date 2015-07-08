'use strict';

var R = require('ramda');

module.exports = R.mergeAll([
  require('./predicates/arrays'),
  require('./predicates/numbers'),
  require('./predicates/strings')
]);
