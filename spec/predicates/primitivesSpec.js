'use strict';

const strings = require('../../lib/predicates/primitives');

describe('boolean predicates', () => {

  describe('isBoolean', () => {
    it('passes when given a subject of type Boolean', () => {
      expect(strings.isBoolean(false)).toBe(true);
    });
    it('fails when given a subject not of type Boolean', () => {
      expect(strings.isBoolean(123)).toBe(false);
    });
  });
});

