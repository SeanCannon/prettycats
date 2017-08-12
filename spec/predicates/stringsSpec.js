'use strict';

const strings = require('../../lib/predicates/strings');

describe('string predicates', () => {

  describe('isString', () => {
    it('passes when given a subject of type String', () => {
      expect(strings.isString('foo')).toBe(true);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.isString(123)).toBe(false);
    });
  });

  describe('isStringOfLength', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(strings.isStringOfLength(5, 'foo')).toBe(false);
    });
    it('passes when given a subject of type String with expected length', () => {
      expect(strings.isStringOfLength(3, 'foo')).toBe(true);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.isStringOfLength(3, 123)).toBe(false);
    });
  });

  describe('isStringOfLengthAtLeast', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(strings.isStringOfLengthAtLeast(5, 'foo')).toBe(false);
    });
    it('passes when given a subject of type String with the minimum expected length', () => {
      expect(strings.isStringOfLengthAtLeast(3, 'foo')).toBe(true);
    });
    it('passes when given a subject of type String with greater than the minimum expected length', () => {
      expect(strings.isStringOfLengthAtLeast(3, 'fooo')).toBe(true);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.isStringOfLengthAtLeast(3, 123)).toBe(false);
    });
  });

  describe('isStringOfLengthAtMost', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(strings.isStringOfLengthAtMost(5, 'fooooo')).toBe(false);
    });
    it('passes when given a subject of type String with the maximum expected length', () => {
      expect(strings.isStringOfLengthAtMost(3, 'foo')).toBe(true);
    });
    it('passes when given a subject of type String with less than the maximum expected length', () => {
      expect(strings.isStringOfLengthAtMost(5, 'fooo')).toBe(true);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.isStringOfLengthAtMost(3, 123)).toBe(false);
    });
  });

  describe('isStringLongerThan', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(strings.isStringLongerThan(5, 'foo')).toBe(false);
    });
    it('fails when given a subject of type String with the cutoff length', () => {
      expect(strings.isStringLongerThan(3, 'foo')).toBe(false);
    });
    it('passes when given a subject of type String with greater than the minimum expected length', () => {
      expect(strings.isStringLongerThan(3, 'fooo')).toBe(true);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.isStringLongerThan(3, 123)).toBe(false);
    });
  });

  describe('isStringShorterThan', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(strings.isStringShorterThan(3, 'fooo')).toBe(false);
    });
    it('fails when given a subject of type String with the cutoff length', () => {
      expect(strings.isStringShorterThan(3, 'foo')).toBe(false);
    });
    it('passes when given a subject of type String with less than the minimum expected length', () => {
      expect(strings.isStringShorterThan(5, 'fooo')).toBe(true);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.isStringShorterThan(3, 123)).toBe(false);
    });
  });


  describe('isStringOfLengthBetween', () => {
    it('passes when given a subject of type String with expected length', () => {
      expect(strings.isStringOfLengthBetween(5, 9, 'foobar')).toBe(true);
    });
    it('fails when given a subject of type String shorter than minimum required length', () => {
      expect(strings.isStringOfLengthBetween(5, 9, 'foo')).toBe(false);
    });
    it('fails when given a subject of type String longer than maximum required length', () => {
      expect(strings.isStringOfLengthBetween(5, 9, 'foobarbazbat')).toBe(false);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.isStringOfLengthBetween(3, 5, 123)).toBe(false);
    });
  });

  describe('isStringOfLengthBetweenInclusive', () => {
    it('passes when given a subject of type String with expected length', () => {
      expect(strings.isStringOfLengthBetweenInclusive(5, 9, 'foobar')).toBe(true);
      expect(strings.isStringOfLengthBetweenInclusive(5, 9, 'fooba')).toBe(true);
      expect(strings.isStringOfLengthBetweenInclusive(5, 9, 'foobarbaz')).toBe(true);
    });
    it('fails when given a subject of type String shorter than minimum required length', () => {
      expect(strings.isStringOfLengthBetweenInclusive(5, 9, 'foo')).toBe(false);
    });
    it('fails when given a subject of type String longer than maximum required length', () => {
      expect(strings.isStringOfLengthBetweenInclusive(5, 9, 'foobarbazbat')).toBe(false);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.isStringOfLengthBetweenInclusive(3, 5, 123)).toBe(false);
    });
  });

  describe('isStringContaining', () => {
    it('passes when given a subject of type String containing an expected substring', () => {
      expect(strings.isStringContaining('bar', 'foobarfoo')).toBe(true);
    });
    it('fails when given a subject of type String not containing an expected substring', () => {
      expect(strings.isStringContaining('bar', 'foobazfoo')).toBe(false);
    });
  });

  describe('isStringMatching', () => {
    it('passes when given a subject of type String matching an expected pattern', () => {
      expect(strings.isStringMatching(/bar/, 'foobarfoo')).toBe(true);
    });
    it('fails when given a subject of type String not matching an expected pattern', () => {
      expect(strings.isStringMatching(/bar/, 'foobazfoo')).toBe(false);
    });
  });

  describe('stringIsOneOf', () => {
    it('passes when given a subject of type String that also exists in the selection array', () => {
      expect(strings.stringIsOneOf(['foo', 'bar', 'baz'], 'foo')).toBe(true);
    });
    it('fails when given a subject of type String that does not appear in the selection array', () => {
      expect(strings.stringIsOneOf(['foo', 'bar', 'baz'], 'buz')).toBe(false);
    });
    it('fails when given a subject not of type String', () => {
      expect(strings.stringIsOneOf(['foo', 'bar', 'baz'], 123)).toBe(false);
    });
  });

  describe('isEmail', () => {
    it('passes when given a common email address', () => {
      expect(strings.isEmail('foo@bar.com')).toBe(true);
    });
    it('passes when given an unorthodox email address', () => {
      expect(strings.isEmail('123@localhost:1337')).toBe(true);
    });
    it('fails when given an invalid email address', () => {
      expect(strings.isEmail('foobar.com')).toBe(false);
    });
  });

  describe('isNumericString', () => {
    it('passes when given a stringified number', () => {
      expect(strings.isNumericString('123')).toBe(true);
    });
    it('fails when given an actual number', () => {
      expect(strings.isNumericString(123)).toBe(false);
    });
    it('fails when given a type other than string', () => {
      expect(strings.isNumericString({ foo : 'bar' })).toBe(false);
    });
    it('fails when given a string representing something other than a number', () => {
      expect(strings.isNumericString('asd123asd')).toBe(false);
    });
  });

  describe('isJSON', () => {
    it('passes when given correctly formatted JSON', () => {
      expect(strings.isJSON('{}')).toBe(true);
      expect(strings.isJSON('{"foo":"bar"}')).toBe(true);
    });
    it('fails when given a value not of type String', () => {
      expect(strings.isJSON(123)).toBe(false);
    });
    it('fails when given an invalid JSON string', () => {
      expect(strings.isJSON('{foo:"bar"}')).toBe(false);
    });
  });
});

