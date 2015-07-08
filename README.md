# prettycats
Common curried predicates for validating subjects.

[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

## Install

```
$ npm install prettycats --save
```

Run the specs

```
$ npm test
```

## Usage

```js

var prr = require('prettycats'),
    R   = require('ramda');

// Sample validator
var Validator = require('o-validator');

Validator.validateOrThrow({
  username : prr.isStringOfLengthAtMost(15),
  email    : Validator.required(prr.isEmail),
  age      : R.allPass([prr.isNumberBetween(13, 100)])
});

```

## Strings

### isString
String → Boolean
```
expect(prr.isString('foo')).toBe(true);
expect(prr.isString(123)).toBe(false);
```

---
### isStringOfLength
Number → String → Boolean
```
expect(prr.isStringOfLength(5, 'foo')).toBe(false);
expect(prr.isStringOfLength(3, 'foo')).toBe(true);
expect(prr.isStringOfLength(3, 123)).toBe(false);
```

---
### isStringOfLengthAtLeast
Number → String → Boolean
```
expect(prr.isStringOfLengthAtLeast(5, 'foo')).toBe(false);
expect(prr.isStringOfLengthAtLeast(3, 'foo')).toBe(true);
expect(prr.isStringOfLengthAtLeast(3, 'fooo')).toBe(true);
expect(prr.isStringOfLengthAtLeast(3, 123)).toBe(false);
```

---
### isStringOfLengthAtMost
Number → String → Boolean
```
expect(prr.isStringOfLengthAtMost(5, 'fooooo')).toBe(false);
expect(prr.isStringOfLengthAtMost(3, 'foo')).toBe(true);
expect(prr.isStringOfLengthAtMost(5, 'fooo')).toBe(true);
expect(prr.isStringOfLengthAtMost(3, 123)).toBe(false);
```

---
### isStringLongerThan
Number → String → Boolean
```
expect(prr.isStringLongerThan(5, 'foo')).toBe(false);
expect(prr.isStringLongerThan(3, 'foo')).toBe(false);
expect(prr.isStringLongerThan(3, 'fooo')).toBe(true);
expect(prr.isStringLongerThan(3, 123)).toBe(false);
```

---
### isStringShorterThan
Number → String → Boolean
```
expect(prr.isStringShorterThan(3, 'fooo')).toBe(false);
expect(prr.isStringShorterThan(3, 'foo')).toBe(false);
expect(prr.isStringShorterThan(5, 'fooo')).toBe(true);
expect(prr.isStringShorterThan(3, 123)).toBe(false);
```

---
### isStringContaining
String → String → Boolean
```
expect(prr.isStringContaining('bar', 'foobarfoo')).toBe(true);
expect(prr.isStringContaining('bar', 'foobazfoo')).toBe(false);
```

---
### isStringMatching
RegExp → String → Boolean
```
expect(prr.isStringMatching(/bar/, 'foobarfoo')).toBe(true);
expect(prr.isStringMatching(/bar/, 'foobazfoo')).toBe(false);
```

---
### stringIsOneOf
String → Array → Boolean
```
expect(prr.stringIsOneOf('foo', ['foo', 'bar', 'baz'])).toBe(true);
expect(prr.stringIsOneOf('buz', ['foo', 'bar', 'baz'])).toBe(false);
expect(prr.stringIsOneOf(123, ['foo', 'bar', 'baz'])).toBe(false);
```

---
### isEmail
String → Boolean
```
expect(prr.isEmail('foo@bar.com')).toBe(true);
expect(prr.isEmail('123@localhost:1337')).toBe(true);
expect(prr.isEmail('foobar.com')).toBe(false);
```

## Numbers

### isNumber
Number → Boolean
```
expect(prr.isNumber(123)).toBe(true);
expect(prr.isNumber('123')).toBe(false);
```

---
### isPositiveNumber
Number → Boolean
```
expect(prr.isPositiveNumber(123)).toBe(true);
expect(prr.isPositiveNumber(-123)).toBe(false);
expect(prr.isPositiveNumber(0)).toBe(false);
expect(prr.isPositiveNumber('123')).toBe(false);
```

---
### isNegativeNumber
Number → Boolean
```
expect(prr.isNegativeNumber(123)).toBe(false);
expect(prr.isNegativeNumber(-123)).toBe(true);
expect(prr.isNegativeNumber(0)).toBe(false);
expect(prr.isNegativeNumber('123')).toBe(false);
```

---
### isAtLeastZero
Number → Boolean
```
expect(prr.isAtLeastZero(123)).toBe(true);
expect(prr.isAtLeastZero(-123)).toBe(false);
expect(prr.isAtLeastZero(0)).toBe(true);
expect(prr.isAtLeastZero('123')).toBe(false);
```

---
### isAtMostZero
Number → Boolean
```
expect(prr.isAtMostZero(123)).toBe(false);
expect(prr.isAtMostZero(-123)).toBe(true);
expect(prr.isAtMostZero(0)).toBe(true);
expect(prr.isAtMostZero('123')).toBe(false);
```

---
### isCalendarMonth
Number → Boolean
```
expect(prr.isCalendarMonth(1)).toBe(true);
expect(prr.isCalendarMonth(12)).toBe(true);
expect(prr.isCalendarMonth(0)).toBe(false);
expect(prr.isCalendarMonth(13)).toBe(false);
expect(prr.isCalendarMonth('6')).toBe(false);
```

---
### isCalendarMonthZeroBased
Number → Boolean
```
expect(prr.isCalendarMonthZeroBased(0)).toBe(true);
expect(prr.isCalendarMonthZeroBased(11)).toBe(true);
expect(prr.isCalendarMonthZeroBased(-1)).toBe(false);
expect(prr.isCalendarMonthZeroBased(12)).toBe(false);
expect(prr.isCalendarMonthZeroBased('123')).toBe(false);
```

---
### isNumberBetween
Number → Number → Number → Boolean
```
expect(prr.isNumberBetween(5, 10, 7)).toBe(true);
expect(prr.isNumberBetween(5, 10, 3)).toBe(false);
expect(prr.isNumberBetween(5, 10, 12)).toBe(false);
expect(prr.isNumberBetween(5, 10, '7')).toBe(false);
```

---
### isNumberBetweenInclusive
Number → Number → Number → Boolean
```
expect(prr.isNumberBetweenInclusive(5, 10, 7)).toBe(true);
expect(prr.isNumberBetweenInclusive(5, 10, 3)).toBe(false);
expect(prr.isNumberBetweenInclusive(5, 10, 12)).toBe(false);
expect(prr.isNumberBetweenInclusive(5, 10, 5)).toBe(true);
expect(prr.isNumberBetweenInclusive(5, 10, 10)).toBe(true);
expect(prr.isNumberBetweenInclusive(5, 10, '7')).toBe(false);
```

---
### isEvenNumber
Number → Boolean
```
expect(prr.isEvenNumber(8)).toBe(true);
expect(prr.isEvenNumber(-8)).toBe(true);
expect(prr.isEvenNumber(5)).toBe(false);
```

---
### isOddNumber
Number → Boolean
```
expect(prr.isOddNumber(7)).toBe(true);
expect(prr.isOddNumber(-7)).toBe(true);
expect(prr.isOddNumber(8)).toBe(false);
```

---
### numberIsOneOf
Number → Array → Boolean
```
expect(prr.numberIsOneOf('foo', ['foo', 'bar', 'baz'])).toBe(true);
expect(prr.numberIsOneOf('buz', ['foo', 'bar', 'baz'])).toBe(false);
expect(prr.numberIsOneOf(123, ['foo', 'bar', 'baz'])).toBe(false);
```


## Arrays

### isArray
Array → Boolean
```
expect(prr.isArray(['foo'])).toBe(true);
expect(prr.isArray(123)).toBe(false);
```

---
### isEmptyArray
Array → Boolean
```
expect(prr.isEmptyArray([])).toBe(true);
expect(prr.isEmptyArray(['foo'])).toBe(false);
expect(prr.isEmptyArray('foo')).toBe(false);
```

---
### isArrayOfLength
Number → Array → Boolean
```
expect(prr.isArrayOfLength(5, [1,2,3])).toBe(false);
expect(prr.isArrayOfLength(3, [1,2,3])).toBe(true);
expect(prr.isArrayOfLength(3, 123)).toBe(false);
```

---
### isArrayOfLengthAtLeast
Number → Array → Boolean
```
expect(prr.isArrayOfLengthAtLeast(5, [1,2,3])).toBe(false);
expect(prr.isArrayOfLengthAtLeast(3, [1,2,3])).toBe(true);
expect(prr.isArrayOfLengthAtLeast(3, [1,2,3,4])).toBe(true);
expect(prr.isArrayOfLengthAtLeast(3, 123)).toBe(false);
```

---
### isArrayOfLengthAtMost
Number → Array → Boolean
```
expect(prr.isArrayOfLengthAtMost(3, [1,2,3,4])).toBe(false);
expect(prr.isArrayOfLengthAtMost(3, [1,2,3])).toBe(true);
expect(prr.isArrayOfLengthAtMost(5, [1,2,3,4])).toBe(true);
expect(prr.isArrayOfLengthAtMost(3, 123)).toBe(false);
```

---
### isArraylongerThan
Number → Array → Boolean
```
expect(prr.isArrayLongerThan(5, [1,2,3])).toBe(false);
expect(prr.isArrayLongerThan(3, [1,2,3])).toBe(false);
expect(prr.isArrayLongerThan(3, [1,2,3,4])).toBe(true);
expect(prr.isArrayLongerThan(3, 123)).toBe(false);
```

---
### isArrayShorterThan
Number → Array → Boolean
```
expect(prr.isArrayShorterThan(3, [1,2,3,4])).toBe(false);
expect(prr.isArrayShorterThan(3, [1,2,3])).toBe(false);
expect(prr.isArrayShorterThan(5, [1,2,3,4])).toBe(true);
expect(prr.isArrayShorterThan(3, 123)).toBe(false);
```

---
### isArrayContaining
String → Array → Boolean
```
expect(prr.isArrayContaining('bar', ['foo','bar','baz'])).toBe(true);
expect(prr.isArrayContaining('bar', ['foo','baz','buz'])).toBe(false);
```

## TODO
* Add object pretty cats
* Add more cats


[travis-image]: https://travis-ci.org/SeanCannon/prettycats.svg?branch=master
[travis-url]: https://travis-ci.org/SeanCannon/prettycats

[coveralls-image]: https://coveralls.io/repos/SeanCannon/prettycats/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/SeanCannon/prettycats?branch=master
