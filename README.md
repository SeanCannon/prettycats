# prettycats
Common curried predicates for validating subjects.

[![Build Status](https://travis-ci.org/SeanCannon/prettycats.svg?branch=master)](https://travis-ci.org/SeanCannon/prettycats) [![Coverage Status](https://coveralls.io/repos/SeanCannon/prettycats/badge.svg?branch=master&service=github)](https://coveralls.io/github/SeanCannon/prettycats?branch=master) [![npm version](http://img.shields.io/npm/v/prettycats.svg)](https://npmjs.org/package/prettycats) [![Dependency Status](https://david-dm.org/SeanCannon/prettycats.svg)](https://david-dm.org/SeanCannon/prettycats)

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

const prr = require('prettycats'),
      R   = require('ramda'),
      V   = require('nested-validate');

const userType = {
  username : prr.isStringOfLengthAtMost(15),
  email    : prr.isEmail,
  age      : prr.isNumberBetween(13, 100)
};

const user = {
  username : 'dayman',
  email    : 'charlie@kittenmittons.com',
  age      : 31
};


// Use for simple type checking
if (prr.objectSatisfies(userType, user)) {
  // cool
}

// Or use with a validator
const validateUserOrThrow = V.isObjectOf(userType);

validateUserOrThrow(userType, user);

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
### isStringOfLengthBetween
Number → Number → String → Boolean
```
expect(prr.isStringOfLengthBetween(5, 9, 'foobar')).toBe(true);
expect(prr.isStringOfLengthBetween(5, 9, 'foo')).toBe(false);
expect(prr.isStringOfLengthBetween(5, 9, 'foobarbazbat')).toBe(false);
expect(prr.isStringOfLengthBetween(3, 5, 123)).toBe(false);
```

---
### isStringOfLengthBetweenInclusive
Number → Number → String → Boolean
```
expect(prr.isStringOfLengthBetweenInclusive(5, 9, 'foobar')).toBe(true);
expect(prr.isStringOfLengthBetweenInclusive(5, 9, 'fooba')).toBe(true);
expect(prr.isStringOfLengthBetweenInclusive(5, 9, 'foobarbaz')).toBe(true);
expect(prr.isStringOfLengthBetweenInclusive(5, 9, 'foo')).toBe(false);
expect(prr.isStringOfLengthBetweenInclusive(5, 9, 'foobarbazbat')).toBe(false);
expect(prr.isStringOfLengthBetweenInclusive(3, 5, 123)).toBe(false);
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

---
### isJSON
String → Boolean
```
expect(prr.isJSON('foo')).toBe(false);
expect(prr.isJSON('{foo:"bar"}')).toBe(false);
expect(prr.isJSON('{}')).toBe(true);
expect(prr.isJSON('{"foo":"bar"}')).toBe(true);
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
### isNumericBoolean
Number → Boolean
```
expect(prr.isNumericBoolean(0)).toBe(true);
expect(prr.isNumericBoolean(1)).toBe(true);
expect(prr.isNumericBoolean(3)).toBe(false);
expect(prr.isNumericBoolean('1')).toBe(false);
```

---
### numberIsOneOf
Number → Array → Boolean
```
expect(prr.numberIsOneOf([123, 456, 789], 123)).toBe(true);
expect(prr.numberIsOneOf([12, 34, 56], 123)).toBe(false);
expect(prr.numberIsOneOf([123, 456, 789], '123')).toBe(false);
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
### isArrayLongerThan
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


## Objects

### isObject
Object → Boolean
```
expect(prr.isObject({ foo : 'bar' })).toBe(true);
expect(prr.isObject(123)).toBe(false);
```

---
### isObjectContaining
String → Object → Boolean
```
expect(prr.isObjectContaining('foo', { foo : 'bar', baz : 'bat' })).toBe(true);
expect(prr.isObjectContaining('foo', { baz : 'bat', buz : 'biz' })).toBe(false);
expect(prr.isObjectContaining('foo', 123)).toBe(false);
```

---
### isObjectAbsent
String → Object → Boolean
```
expect(prr.isObjectAbsent('foo', { baz : 'bat', buz : 'biz' })).toBe(true);
expect(prr.isObjectAbsent('foo', { foo : 'bar', buz : 'biz' })).toBe(false);
expect(prr.isObjectAbsent('foo', 123)).toBe(false);
```

---
### isObjectMatching
Object → Object → Boolean
```
expect(prr.isObjectMatching({ foo : 'bar' }, { foo : 'bar' })).toBe(true);
expect(prr.isObjectMatching({ foo : 'bar' }, { baz : 'bat' })).toBe(false);
expect(prr.isObjectMatching({ foo : 'bar' }, 'foo')).toBe(false);
expect(prr.isObjectMatching('foo', { foo : 'bar' })).toBe(false);
```

---
### isObjectExtending
Object → Object → Boolean
```
expect(prr.isObjectExtending({ foo : 'bar' }, { foo : 'bar', baz : 'bat' })).toBe(true);
expect(prr.isObjectExtending({ foo : 'bar' }, { foo : 'bar' })).toBe(true);
expect(prr.isObjectExtending({ foo : 'bar' }, 'foo')).toBe(false);
expect(prr.isObjectExtending('foo', { foo : 'bar' })).toBe(false);
```

---
### isObjectSatisfying
Object → Object → Boolean
```
const schema = {
  foo : v => typeof v === 'string',
  bar : v => typeof v === 'number'
};
    
expect(prr.isObjectSatisfying(schema, { foo : 'hello', bar : 123 })).toBe(true);
expect(prr.isObjectSatisfying(schema, { foo : 'hello' })).toBe(false);
expect(prr.isObjectSatisfying({ foo : 'bar' }, { baz : 'bat' })).toBe(false);
expect(prr.isObjectSatisfying({ foo : 'bar' }, 'foo')).toBe(false);
expect(prr.isObjectSatisfying('foo', { foo : 'bar' })).toBe(false);
```

---
## TODO
* Change the litter box
