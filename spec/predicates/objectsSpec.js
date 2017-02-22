'use strict';

const objects = require('../../lib/predicates/objects');

describe('object predicates', () => {

  describe('isObject', () => {
    it('passes when given a subject of type Object', () => {
      expect(objects.isObject({ foo : 'bar' })).toBe(true);
    });
    it('fails when given a subject not of type String', () => {
      expect(objects.isObject(123)).toBe(false);
    });
  });

  describe('isObjectContaining', () => {
    it('passes when given a subject of type Object containing the expected property', () => {
      expect(objects.isObjectContaining('foo', { foo : 'bar', baz : 'bat' })).toBe(true);
    });
    it('fails when given a subject of type Object missing the expected property', () => {
      expect(objects.isObjectContaining('foo', { baz : 'bat', buz : 'biz' })).toBe(false);
    });
    it('fails when given a subject not of type Object', () => {
      expect(objects.isObjectContaining('foo', 123)).toBe(false);
    });
  });

  describe('isObjectAbsent', () => {
    it('passes when given a subject of type Object missing the expected property', () => {
      expect(objects.isObjectAbsent('foo', { baz : 'bat', buz : 'biz' })).toBe(true);
    });
    it('fails when given a subject of type Object containing the expected property', () => {
      expect(objects.isObjectAbsent('foo', { foo : 'bar', buz : 'biz' })).toBe(false);
    });
    it('fails when given a subject not of type Object', () => {
      expect(objects.isObjectAbsent('foo', 123)).toBe(false);
    });
  });

  describe('isObjectMatching', () => {
    it('passes when given a two identical objects', () => {
      expect(objects.isObjectMatching({ foo : 'bar' }, { foo : 'bar' })).toBe(true);
    });
    it('fails when given two unique objects', () => {
      expect(objects.isObjectMatching({ foo : 'bar' }, { baz : 'bat' })).toBe(false);
    });
    it('fails when given a subject not of type Object', () => {
      expect(objects.isObjectMatching({ foo : 'bar' }, 'foo')).toBe(false);
      expect(objects.isObjectMatching('foo', { foo : 'bar' })).toBe(false);
    });
  });

  describe('isObjectExtending', () => {
    it('passes when given an object and also an object containing the signature of the first object', () => {
      expect(objects.isObjectExtending({ foo : 'bar' }, { foo : 'bar', baz : 'bat' })).toBe(true);
    });
    it('passes when given two identical objects', () => {
      expect(objects.isObjectExtending({ foo : 'bar' }, { foo : 'bar' })).toBe(true);
    });
    it('fails when given two unique objects', () => {
      expect(objects.isObjectExtending({ foo : 'bar' }, { baz : 'bat' })).toBe(false);
    });
    it('fails when given a subject not of type Object', () => {
      expect(objects.isObjectExtending({ foo : 'bar' }, 'foo')).toBe(false);
      expect(objects.isObjectExtending('foo', { foo : 'bar' })).toBe(false);
    });
  });

  describe('isObjectSatisfying', () => {
    const schema = {
      foo : v => typeof v === 'string',
      bar : v => typeof v === 'number'
    };
    it('passes when given a schema and an object that satisfies all the predicates on the schema', () => {
      expect(objects.isObjectSatisfying(schema, { foo : 'hello', bar : 123 })).toBe(true);
    });
    it('fails when given a schema and an object that satisfies does not have all the properties on the schema', () => {
      expect(objects.isObjectSatisfying(schema, { foo : 'hello' })).toBe(false);
    });
    it('fails when given two unique objects', () => {
      expect(objects.isObjectSatisfying({ foo : 'bar' }, { baz : 'bat' })).toBe(false);
    });
    it('fails when given a subject not of type Object', () => {
      expect(objects.isObjectSatisfying({ foo : 'bar' }, 'foo')).toBe(false);
      expect(objects.isObjectSatisfying('foo', { foo : 'bar' })).toBe(false);
    });
  });

});

