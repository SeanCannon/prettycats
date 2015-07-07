# prettycats
Common curried predicates for validating subjects.

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
  username : prr.str.isStringOfLengthAtMost(15),
  email    : Validator.required(prr.str.isEmail),
  age      : R.allPass([prr.num.isBetween(13, 100)])
});

```

## Strings

### isString
String → Boolean
```
expect(prr.str.isString('foo')).toBe(true);
expect(prr.str.isString(123)).toBe(false);
```

---
### isStringOfLength
Number → String → Boolean
```
expect(prr.str.isStringOfLength(5, 'foo')).toBe(false);
expect(prr.str.isStringOfLength(3, 'foo')).toBe(true);
expect(prr.str.isStringOfLength(3, 123)).toBe(false);
```

---
### isStringOfLengthAtLeast
Number → String → Boolean
```
expect(prr.str.isStringOfLengthAtLeast(5, 'foo')).toBe(false);
expect(prr.str.isStringOfLengthAtLeast(3, 'foo')).toBe(true);
expect(prr.str.isStringOfLengthAtLeast(3, 'fooo')).toBe(true);
expect(prr.str.isStringOfLengthAtLeast(3, 123)).toBe(false);
```

---
### isStringOfLengthAtMost
Number → String → Boolean
```
expect(prr.str.isStringOfLengthAtMost(5, 'fooooo')).toBe(false);
expect(prr.str.isStringOfLengthAtMost(3, 'foo')).toBe(true);
expect(prr.str.isStringOfLengthAtMost(5, 'fooo')).toBe(true);
expect(prr.str.isStringOfLengthAtMost(3, 123)).toBe(false);
```

---
### isStringLongerThan
Number → String → Boolean
```
expect(prr.str.isStringLongerThan(5, 'foo')).toBe(false);
expect(prr.str.isStringLongerThan(3, 'foo')).toBe(false);
expect(prr.str.isStringLongerThan(3, 'fooo')).toBe(true);
expect(prr.str.isStringLongerThan(3, 123)).toBe(false);
```

---
### isStringShorterThan
Number → String → Boolean
```
expect(prr.str.isStringShorterThan(3, 'fooo')).toBe(false);
expect(prr.str.isStringShorterThan(3, 'foo')).toBe(false);
expect(prr.str.isStringShorterThan(5, 'fooo')).toBe(true);
expect(prr.str.isStringShorterThan(3, 123)).toBe(false);
```

---
### isStringContaining
String → String → Boolean
```
expect(prr.str.isStringContaining('bar', 'foobarfoo')).toBe(true);
expect(prr.str.isStringContaining('bar', 'foobazfoo')).toBe(false);
```

---
### isStringMatching
RegExp → String → Boolean
```
expect(prr.str.isStringMatching(/bar/, 'foobarfoo')).toBe(true);
expect(prr.str.isStringMatching(/bar/, 'foobazfoo')).toBe(false);
```

---
### isEmail
String → Boolean
```
expect(prr.str.isEmail('foo@bar.com')).toBe(true);
expect(prr.str.isEmail('123@localhost:1337')).toBe(true);
expect(prr.str.isEmail('foobar.com')).toBe(false);
```

## Numbers

### isNumber
Number → Boolean
```
expect(prr.num.isNumber(123)).toBe(true);
expect(prr.num.isNumber('123')).toBe(false);
```

---
### isPositiveNumber
Number → Boolean
```
expect(prr.num.isPositiveNumber(123)).toBe(true);
expect(prr.num.isPositiveNumber(-123)).toBe(false);
expect(prr.num.isPositiveNumber(0)).toBe(false);
expect(prr.num.isPositiveNumber('123')).toBe(false);
```

---
### isNegativeNumber
Number → Boolean
```
expect(prr.num.isNegativeNumber(123)).toBe(false);
expect(prr.num.isNegativeNumber(-123)).toBe(true);
expect(prr.num.isNegativeNumber(0)).toBe(false);
expect(prr.num.isNegativeNumber('123')).toBe(false);
```

---
### isAtLeastZero
Number → Boolean
```
expect(prr.num.isAtLeastZero(123)).toBe(true);
expect(prr.num.isAtLeastZero(-123)).toBe(false);
expect(prr.num.isAtLeastZero(0)).toBe(true);
expect(prr.num.isAtLeastZero('123')).toBe(false);
```

---
### isAtMostZero
Number → Boolean
```
expect(prr.num.isAtMostZero(123)).toBe(false);
expect(prr.num.isAtMostZero(-123)).toBe(true);
expect(prr.num.isAtMostZero(0)).toBe(true);
expect(prr.num.isAtMostZero('123')).toBe(false);
```

---
### isCalendarMonth
Number → Boolean
```
expect(prr.num.isCalendarMonth(1)).toBe(true);
expect(prr.num.isCalendarMonth(12)).toBe(true);
expect(prr.num.isCalendarMonth(0)).toBe(false);
expect(prr.num.isCalendarMonth(13)).toBe(false);
expect(prr.num.isCalendarMonth('6')).toBe(false);
```

---
### isCalendarMonthZeroBased
Number → Boolean
```
expect(prr.num.isCalendarMonthZeroBased(0)).toBe(true);
expect(prr.num.isCalendarMonthZeroBased(11)).toBe(true);
expect(prr.num.isCalendarMonthZeroBased(-1)).toBe(false);
expect(prr.num.isCalendarMonthZeroBased(12)).toBe(false);
expect(prr.num.isCalendarMonthZeroBased('123')).toBe(false);
```

---
### isBetween
Number → Number → Number → Boolean
```
expect(prr.num.isBetween(5, 10, 7)).toBe(true);
expect(prr.num.isBetween(5, 10, 3)).toBe(false);
expect(prr.num.isBetween(5, 10, 12)).toBe(false);
expect(prr.num.isBetween(5, 10, '7')).toBe(false);
```

---
### isBetweenInclusive
Number → Number → Number → Boolean
```
expect(prr.num.isBetweenInclusive(5, 10, 7)).toBe(true);
expect(prr.num.isBetweenInclusive(5, 10, 3)).toBe(false);
expect(prr.num.isBetweenInclusive(5, 10, 12)).toBe(false);
expect(prr.num.isBetweenInclusive(5, 10, 5)).toBe(true);
expect(prr.num.isBetweenInclusive(5, 10, 10)).toBe(true);
expect(prr.num.isBetweenInclusive(5, 10, '7')).toBe(false);
```

---
### isEven
Number → Boolean
```
expect(prr.num.isEven(8)).toBe(true);
expect(prr.num.isEven(-8)).toBe(true);
expect(prr.num.isEven(5)).toBe(false);
```

---
### isOdd
Number → Boolean
```
expect(prr.num.isOdd(7)).toBe(true);
expect(prr.num.isOdd(-7)).toBe(true);
expect(prr.num.isOdd(8)).toBe(false);
```

## Arrays

### isArray
Array → Boolean
```
expect(prr.arr.isArray(['foo'])).toBe(true);
expect(prr.arr.isArray(123)).toBe(false);
```

---
### isEmptyArray
Array → Boolean
```
expect(prr.arr.isEmptyArray([])).toBe(true);
expect(prr.arr.isEmptyArray(['foo'])).toBe(false);
expect(prr.arr.isEmptyArray('foo')).toBe(false);
```

---
### isArrayOfLength
Number → Array → Boolean
```
expect(prr.arr.isArrayOfLength(5, [1,2,3])).toBe(false);
expect(prr.arr.isArrayOfLength(3, [1,2,3])).toBe(true);
expect(prr.arr.isArrayOfLength(3, 123)).toBe(false);
```

---
### isArrayOfLengthAtLeast
Number → Array → Boolean
```
expect(prr.arr.isArrayOfLengthAtLeast(5, [1,2,3])).toBe(false);
expect(prr.arr.isArrayOfLengthAtLeast(3, [1,2,3])).toBe(true);
expect(prr.arr.isArrayOfLengthAtLeast(3, [1,2,3,4])).toBe(true);
expect(prr.arr.isArrayOfLengthAtLeast(3, 123)).toBe(false);
```

---
### isArrayOfLengthAtMost
Number → Array → Boolean
```
expect(prr.arr.isArrayOfLengthAtMost(3, [1,2,3,4])).toBe(false);
expect(prr.arr.isArrayOfLengthAtMost(3, [1,2,3])).toBe(true);
expect(prr.arr.isArrayOfLengthAtMost(5, [1,2,3,4])).toBe(true);
expect(prr.arr.isArrayOfLengthAtMost(3, 123)).toBe(false);
```

---
### isArraylongerThan
Number → Array → Boolean
```
expect(prr.arr.isArrayLongerThan(5, [1,2,3])).toBe(false);
expect(prr.arr.isArrayLongerThan(3, [1,2,3])).toBe(false);
expect(prr.arr.isArrayLongerThan(3, [1,2,3,4])).toBe(true);
expect(prr.arr.isArrayLongerThan(3, 123)).toBe(false);
```

---
### isprr.arrhorterThan
Number → Array → Boolean
```
expect(prr.arr.isprr.arrhorterThan(3, [1,2,3,4])).toBe(false);
expect(prr.arr.isprr.arrhorterThan(3, [1,2,3])).toBe(false);
expect(prr.arr.isprr.arrhorterThan(5, [1,2,3,4])).toBe(true);
expect(prr.arr.isprr.arrhorterThan(3, 123)).toBe(false);
```

---
### isArrayContaining
String → Array → Boolean
```
expect(prr.arr.isArrayContaining('bar', ['foo','bar','baz'])).toBe(true);
expect(prr.arr.isArrayContaining('bar', ['foo','baz','buz'])).toBe(false);
```

## TODO
* Add object pretty cats
* Add more cats
