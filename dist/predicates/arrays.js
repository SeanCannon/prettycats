'use strict';

var R = require('ramda'),
    __ = require('./_private.js');

module.exports = {
  isArray: R.is(Array),
  isArrayOfLength: __.ofLength(Array, 'equals'),
  isArrayOfLengthAtLeast: __.ofLength(Array, 'gte'),
  isArrayOfLengthAtMost: __.ofLength(Array, 'lte'),
  isArrayLongerThan: __.ofLength(Array, 'gt'),
  isArrayShorterThan: __.ofLength(Array, 'lt'),
  isArrayContaining: R.includes(R.__),
  isEmptyArray: R.allPass([R.is(Array), R.isEmpty])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wcmVkaWNhdGVzL2FycmF5cy5qcyJdLCJuYW1lcyI6WyJSIiwicmVxdWlyZSIsIl9fIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzQXJyYXkiLCJpcyIsIkFycmF5IiwiaXNBcnJheU9mTGVuZ3RoIiwib2ZMZW5ndGgiLCJpc0FycmF5T2ZMZW5ndGhBdExlYXN0IiwiaXNBcnJheU9mTGVuZ3RoQXRNb3N0IiwiaXNBcnJheUxvbmdlclRoYW4iLCJpc0FycmF5U2hvcnRlclRoYW4iLCJpc0FycmF5Q29udGFpbmluZyIsImluY2x1ZGVzIiwiaXNFbXB0eUFycmF5IiwiYWxsUGFzcyIsImlzRW1wdHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLENBQUMsR0FBSUMsT0FBTyxDQUFDLE9BQUQsQ0FBbEI7QUFBQSxJQUNNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBRGxCOztBQUdBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsRUFBQUEsT0FBTyxFQUFrQkwsQ0FBQyxDQUFDTSxFQUFGLENBQUtDLEtBQUwsQ0FEVjtBQUVmQyxFQUFBQSxlQUFlLEVBQVVOLEVBQUUsQ0FBQ08sUUFBSCxDQUFZRixLQUFaLEVBQW1CLFFBQW5CLENBRlY7QUFHZkcsRUFBQUEsc0JBQXNCLEVBQUdSLEVBQUUsQ0FBQ08sUUFBSCxDQUFZRixLQUFaLEVBQW1CLEtBQW5CLENBSFY7QUFJZkksRUFBQUEscUJBQXFCLEVBQUlULEVBQUUsQ0FBQ08sUUFBSCxDQUFZRixLQUFaLEVBQW1CLEtBQW5CLENBSlY7QUFLZkssRUFBQUEsaUJBQWlCLEVBQVFWLEVBQUUsQ0FBQ08sUUFBSCxDQUFZRixLQUFaLEVBQW1CLElBQW5CLENBTFY7QUFNZk0sRUFBQUEsa0JBQWtCLEVBQU9YLEVBQUUsQ0FBQ08sUUFBSCxDQUFZRixLQUFaLEVBQW1CLElBQW5CLENBTlY7QUFPZk8sRUFBQUEsaUJBQWlCLEVBQVFkLENBQUMsQ0FBQ2UsUUFBRixDQUFXZixDQUFDLENBQUNFLEVBQWIsQ0FQVjtBQVFmYyxFQUFBQSxZQUFZLEVBQWFoQixDQUFDLENBQUNpQixPQUFGLENBQVUsQ0FBQ2pCLENBQUMsQ0FBQ00sRUFBRixDQUFLQyxLQUFMLENBQUQsRUFBY1AsQ0FBQyxDQUFDa0IsT0FBaEIsQ0FBVjtBQVJWLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSICA9IHJlcXVpcmUoJ3JhbWRhJyksXG4gICAgICBfXyA9IHJlcXVpcmUoJy4vX3ByaXZhdGUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXkgICAgICAgICAgICAgICAgOiBSLmlzKEFycmF5KSxcbiAgaXNBcnJheU9mTGVuZ3RoICAgICAgICA6IF9fLm9mTGVuZ3RoKEFycmF5LCAnZXF1YWxzJyksXG4gIGlzQXJyYXlPZkxlbmd0aEF0TGVhc3QgOiBfXy5vZkxlbmd0aChBcnJheSwgJ2d0ZScpLFxuICBpc0FycmF5T2ZMZW5ndGhBdE1vc3QgIDogX18ub2ZMZW5ndGgoQXJyYXksICdsdGUnKSxcbiAgaXNBcnJheUxvbmdlclRoYW4gICAgICA6IF9fLm9mTGVuZ3RoKEFycmF5LCAnZ3QnKSxcbiAgaXNBcnJheVNob3J0ZXJUaGFuICAgICA6IF9fLm9mTGVuZ3RoKEFycmF5LCAnbHQnKSxcbiAgaXNBcnJheUNvbnRhaW5pbmcgICAgICA6IFIuaW5jbHVkZXMoUi5fXyksXG4gIGlzRW1wdHlBcnJheSAgICAgICAgICAgOiBSLmFsbFBhc3MoW1IuaXMoQXJyYXkpLCBSLmlzRW1wdHldKVxufTtcbiJdfQ==