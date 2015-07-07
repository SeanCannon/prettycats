'use strict';

var strings = require('../../lib/predicates/strings');

describe('string predicates', function() {

  describe('isString', function() {
    it('should pass when given a subject of type String', function() {
      expect(strings.isString('foo')).toBe(true);
    });
    it('should fail when given a subject not of type String', function() {
      expect(strings.isString(123)).toBe(false);
    });
  });

  describe('isStringOfLength', function() {
    it('should fail when given a subject of type String with unexpected length', function() {
      expect(strings.isStringOfLength(5, 'foo')).toBe(false);
    });
    it('should pass when given a subject of type String with expected length', function() {
      expect(strings.isStringOfLength(3, 'foo')).toBe(true);
    });
    it('should fail when given a subject not of type String', function() {
      expect(strings.isStringOfLength(3, 123)).toBe(false);
    });
  });

  describe('isStringOfLengthAtLeast', function() {
    it('should fail when given a subject of type String with unexpected length', function() {
      expect(strings.isStringOfLengthAtLeast(5, 'foo')).toBe(false);
    });
    it('should pass when given a subject of type String with the minimum expected length', function() {
      expect(strings.isStringOfLengthAtLeast(3, 'foo')).toBe(true);
    });
    it('should pass when given a subject of type String with greater than the minimum expected length', function() {
      expect(strings.isStringOfLengthAtLeast(3, 'fooo')).toBe(true);
    });
    it('should fail when given a subject not of type String', function() {
      expect(strings.isStringOfLengthAtLeast(3, 123)).toBe(false);
    });
  });

  describe('isStringOfLengthAtMost', function() {
    it('should fail when given a subject of type String with unexpected length', function() {
      expect(strings.isStringOfLengthAtMost(5, 'fooooo')).toBe(false);
    });
    it('should pass when given a subject of type String with the maximum expected length', function() {
      expect(strings.isStringOfLengthAtMost(3, 'foo')).toBe(true);
    });
    it('should pass when given a subject of type String with less than the maximum expected length', function() {
      expect(strings.isStringOfLengthAtMost(5, 'fooo')).toBe(true);
    });
    it('should fail when given a subject not of type String', function() {
      expect(strings.isStringOfLengthAtMost(3, 123)).toBe(false);
    });
  });

  describe('isStringLongerThan', function() {
    it('should fail when given a subject of type String with unexpected length', function() {
      expect(strings.isStringLongerThan(5, 'foo')).toBe(false);
    });
    it('should fail when given a subject of type String with the cutoff length', function() {
      expect(strings.isStringLongerThan(3, 'foo')).toBe(false);
    });
    it('should pass when given a subject of type String with greater than the minimum expected length', function() {
      expect(strings.isStringLongerThan(3, 'fooo')).toBe(true);
    });
    it('should fail when given a subject not of type String', function() {
      expect(strings.isStringLongerThan(3, 123)).toBe(false);
    });
  });

  describe('isStringShorterThan', function() {
    it('should fail when given a subject of type String with unexpected length', function() {
      expect(strings.isStringShorterThan(3, 'fooo')).toBe(false);
    });
    it('should fail when given a subject of type String with the cutoff length', function() {
      expect(strings.isStringShorterThan(3, 'foo')).toBe(false);
    });
    it('should pass when given a subject of type String with less than the minimum expected length', function() {
      expect(strings.isStringShorterThan(5, 'fooo')).toBe(true);
    });
    it('should fail when given a subject not of type String', function() {
      expect(strings.isStringShorterThan(3, 123)).toBe(false);
    });
  });

  describe('isStringContaining', function() {
    it('should pass when given a subject of type String containing an expected substring', function() {
      expect(strings.isStringContaining('bar', 'foobarfoo')).toBe(true);
    });
    it('should fail when given a subject of type String not containing an expected substring', function() {
      expect(strings.isStringContaining('bar', 'foobazfoo')).toBe(false);
    });
  });

  describe('isStringMatching', function() {
    it('should pass when given a subject of type String matching an expected pattern', function() {
      expect(strings.isStringMatching(/bar/, 'foobarfoo')).toBe(true);
    });
    it('should fail when given a subject of type String not matching an expected pattern', function() {
      expect(strings.isStringMatching(/bar/, 'foobazfoo')).toBe(false);
    });
  });

  describe('isEmail', function() {
    it('should pass when given a common email address', function() {
      expect(strings.isEmail('foo@bar.com')).toBe(true);
    });
    it('should pass when given an unorthodox email address', function() {
      expect(strings.isEmail('123@localhost:1337')).toBe(true);
    });
    it('should fail when given an invalid email address', function() {
      expect(strings.isEmail('foobar.com')).toBe(false);
    });
  });

});

