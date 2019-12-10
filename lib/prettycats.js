'use strict';

const R = require('ramda');


module.exports = R.mergeAll([
  require('./predicates/arrays'),
  require('./predicates/numbers'),
  require('./predicates/strings'),
  require('./predicates/objects'),
  require('./predicates/primitives')
]);
