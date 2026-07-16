import { describe, it, expect } from 'vitest'
import {
  isString,
  isStringOfLength,
  isStringOfLengthAtLeast,
  isStringOfLengthAtMost,
  isStringLongerThan,
  isStringShorterThan,
  isStringOfLengthBetween,
  isStringOfLengthBetweenInclusive,
  isStringContaining,
  isStringMatching,
  stringIsOneOf,
  isEmail,
  isNumericString,
  isTimestamp,
  isMySqlTimestamp,
  isJSON,
  isUUID,
  isUuid,
  isEmptyString,
  isNonEmptyString,
  isBlankString,
  isNotBlankString,
  isLowerCase,
  isUpperCase,
  isAlpha,
  isAlphaNumeric,
  isASCII,
  isBase64,
  isHexadecimal,
  isHexColor,
  isURL,
  isIP,
  isIPv4,
  isIPv6,
  isPort,
  isSlug,
  isSemVer,
  isMongoId,
  isJWT,
  isCamelCase,
  isSnakeCase,
  isKebabCase,
  isPascalCase,
  isTitleCase,
  isMACAddress,
  isFQDN,
  isStrongPassword,
  isLatLong,
  isMimeType,
  isISBN,
  isBase32,
  isDataURI,
  isMD5,
  isSHA1,
  isSHA256,
  isISRC,
  isEAN,
  isUPC,
  isEthereumAddress,
  isISODateString,
  isCreditCard,
} from '../../src/predicates/strings'

describe('string predicates', () => {
  describe('isString', () => {
    it('passes when given a subject of type String', () => {
      expect(isString('foo')).toBe(true)
    })
    it('fails when given a subject not of type String', () => {
      expect(isString(123)).toBe(false)
    })
  })

  describe('isStringOfLength', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(isStringOfLength(5, 'foo')).toBe(false)
    })
    it('passes when given a subject of type String with expected length', () => {
      expect(isStringOfLength(3, 'foo')).toBe(true)
    })
    it('fails when given a subject not of type String', () => {
      expect(isStringOfLength(3, 123)).toBe(false)
    })
  })

  describe('isStringOfLengthAtLeast', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(isStringOfLengthAtLeast(5, 'foo')).toBe(false)
    })
    it('passes when given a subject of type String with the minimum expected length', () => {
      expect(isStringOfLengthAtLeast(3, 'foo')).toBe(true)
    })
    it('passes when given a subject of type String with greater than the minimum expected length', () => {
      expect(isStringOfLengthAtLeast(3, 'fooo')).toBe(true)
    })
    it('fails when given a subject not of type String', () => {
      expect(isStringOfLengthAtLeast(3, 123)).toBe(false)
    })
  })

  describe('isStringOfLengthAtMost', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(isStringOfLengthAtMost(5, 'fooooo')).toBe(false)
    })
    it('passes when given a subject of type String with the maximum expected length', () => {
      expect(isStringOfLengthAtMost(3, 'foo')).toBe(true)
    })
    it('passes when given a subject of type String with less than the maximum expected length', () => {
      expect(isStringOfLengthAtMost(5, 'fooo')).toBe(true)
    })
    it('fails when given a subject not of type String', () => {
      expect(isStringOfLengthAtMost(3, 123)).toBe(false)
    })
  })

  describe('isStringLongerThan', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(isStringLongerThan(5, 'foo')).toBe(false)
    })
    it('fails when given a subject of type String with the cutoff length', () => {
      expect(isStringLongerThan(3, 'foo')).toBe(false)
    })
    it('passes when given a subject of type String with greater than the minimum expected length', () => {
      expect(isStringLongerThan(3, 'fooo')).toBe(true)
    })
    it('fails when given a subject not of type String', () => {
      expect(isStringLongerThan(3, 123)).toBe(false)
    })
  })

  describe('isStringShorterThan', () => {
    it('fails when given a subject of type String with unexpected length', () => {
      expect(isStringShorterThan(3, 'fooo')).toBe(false)
    })
    it('fails when given a subject of type String with the cutoff length', () => {
      expect(isStringShorterThan(3, 'foo')).toBe(false)
    })
    it('passes when given a subject of type String with less than the minimum expected length', () => {
      expect(isStringShorterThan(5, 'fooo')).toBe(true)
    })
    it('fails when given a subject not of type String', () => {
      expect(isStringShorterThan(3, 123)).toBe(false)
    })
  })

  describe('isStringOfLengthBetween', () => {
    it('passes when given a subject of type String with expected length', () => {
      expect(isStringOfLengthBetween(5, 9, 'foobar')).toBe(true)
    })
    it('fails when given a subject of type String shorter than minimum required length', () => {
      expect(isStringOfLengthBetween(5, 9, 'foo')).toBe(false)
    })
    it('fails when given a subject of type String longer than maximum required length', () => {
      expect(isStringOfLengthBetween(5, 9, 'foobarbazbat')).toBe(false)
    })
    it('fails when given a subject not of type String', () => {
      expect(isStringOfLengthBetween(3, 5, 123)).toBe(false)
    })
  })

  describe('isStringOfLengthBetweenInclusive', () => {
    it('passes when given a subject of type String with expected length', () => {
      expect(isStringOfLengthBetweenInclusive(5, 9, 'foobar')).toBe(true)
      expect(isStringOfLengthBetweenInclusive(5, 9, 'fooba')).toBe(true)
      expect(isStringOfLengthBetweenInclusive(5, 9, 'foobarbaz')).toBe(true)
    })
    it('fails when given a subject of type String shorter than minimum required length', () => {
      expect(isStringOfLengthBetweenInclusive(5, 9, 'foo')).toBe(false)
    })
    it('fails when given a subject of type String longer than maximum required length', () => {
      expect(isStringOfLengthBetweenInclusive(5, 9, 'foobarbazbat')).toBe(false)
    })
    it('fails when given a subject not of type String', () => {
      expect(isStringOfLengthBetweenInclusive(3, 5, 123)).toBe(false)
    })
  })

  describe('isStringContaining', () => {
    it('passes when given a subject of type String containing an expected substring', () => {
      expect(isStringContaining('bar', 'foobarfoo')).toBe(true)
    })
    it('fails when given a subject of type String not containing an expected substring', () => {
      expect(isStringContaining('bar', 'foobazfoo')).toBe(false)
    })
  })

  describe('isStringMatching', () => {
    it('passes when given a subject of type String matching an expected pattern', () => {
      expect(isStringMatching(/bar/, 'foobarfoo')).toBe(true)
    })
    it('fails when given a subject of type String not matching an expected pattern', () => {
      expect(isStringMatching(/bar/, 'foobazfoo')).toBe(false)
    })
  })

  describe('stringIsOneOf', () => {
    it('passes when given a subject of type String that also exists in the selection array', () => {
      expect(stringIsOneOf(['foo', 'bar', 'baz'], 'foo')).toBe(true)
    })
    it('fails when given a subject of type String that does not appear in the selection array', () => {
      expect(stringIsOneOf(['foo', 'bar', 'baz'], 'buz')).toBe(false)
    })
    it('fails when given a subject not of type String', () => {
      expect(stringIsOneOf(['foo', 'bar', 'baz'], 123)).toBe(false)
    })
  })

  describe('isEmail', () => {
    it('passes when given a common email address', () => {
      expect(isEmail('foo@bar.com')).toBe(true)
    })
    it('passes when given an unorthodox email address', () => {
      expect(isEmail('123@localhost:1337')).toBe(true)
    })
    it('fails when given an invalid email address', () => {
      expect(isEmail('foobar.com')).toBe(false)
    })
  })

  describe('isNumericString', () => {
    it('passes when given a stringified number', () => {
      expect(isNumericString('123')).toBe(true)
    })
    it('fails when given an actual number', () => {
      expect(isNumericString(123)).toBe(false)
    })
    it('fails when given a type other than string', () => {
      expect(isNumericString({ foo: 'bar' })).toBe(false)
    })
    it('fails when given a string representing something other than a number', () => {
      expect(isNumericString('asd123asd')).toBe(false)
    })
  })

  describe('isTimestamp', () => {
    it('passes when given supported variations of a timestamp', () => {
      expect(isTimestamp('2017-08-24T19:20:30.457Z')).toBe(true)
      expect(isTimestamp('2017-08-24T19:20:30.45+01:00')).toBe(true)
      expect(isTimestamp('2017-08-24T19:20:30-05:00')).toBe(true)
      expect(isTimestamp('2017-08-24T19:20:30Z')).toBe(true)
    })
    it('fails when given unsupported variations of datetime strings', () => {
      expect(isTimestamp('Thu Aug 24 2017 19:20:30 GMT-0700 (PDT)')).toBe(false)
      expect(isTimestamp('Thu Aug 24 2017')).toBe(false)
    })
    it('fails when given a type other than string', () => {
      expect(isTimestamp({ foo: 'bar' })).toBe(false)
      expect(isTimestamp(2017)).toBe(false)
    })
  })

  describe('isMySqlTimestamp', () => {
    it('passes when given supported variations of a MySQL timestamp', () => {
      expect(isMySqlTimestamp('2012-06-22 05:40:06')).toBe(true)
      expect(isMySqlTimestamp('2021-11-03 11:15:59')).toBe(true)
    })
    it('fails when given unsupported variations of datetime strings', () => {
      expect(isMySqlTimestamp('Thu Aug 24 2017')).toBe(false)
      expect(isMySqlTimestamp('Thu Aug 24 2017 19:20:30 GMT-0700 (PDT)')).toBe(false)
    })
    it('fails when given a type other than string', () => {
      expect(isMySqlTimestamp({ foo: 'bar' })).toBe(false)
      expect(isMySqlTimestamp(2017)).toBe(false)
    })
  })

  describe('isJSON', () => {
    it('passes when given correctly formatted JSON', () => {
      expect(isJSON('{}')).toBe(true)
      expect(isJSON('{"foo":"bar"}')).toBe(true)
    })
    it('fails when given a value not of type String', () => {
      expect(isJSON(123)).toBe(false)
    })
    it('fails when given an invalid JSON string', () => {
      expect(isJSON('{foo:"bar"}')).toBe(false)
    })
  })

  describe('isUUID', () => {
    it('passes when given a correctly formatted UUID', () => {
      expect(isUUID('cd17c371-9468-4baa-963b-f3e0bf05e70e')).toBe(true)
    })
    it('fails when given a value not of type String', () => {
      expect(isUUID(123)).toBe(false)
    })
    it('fails when given an invalid UUID string', () => {
      expect(isUUID('cd17c371-9468-963b-f3e0bf05e70e')).toBe(false)
    })
  })

  describe('isUuid', () => {
    it('passes when given a correctly formatted UUID', () => {
      expect(isUuid('cd17c371-9468-4baa-963b-f3e0bf05e70e')).toBe(true)
    })
    it('fails when given a value not of type String', () => {
      expect(isUuid(123)).toBe(false)
    })
    it('fails when given an invalid UUID string', () => {
      expect(isUuid('cd17c371-9468-963b-f3e0bf05e70e')).toBe(false)
    })
  })

  describe('isEmptyString', () => {
    it('passes when given an empty string', () => {
      expect(isEmptyString('')).toBe(true)
    })
    it('fails when given a non-empty string', () => {
      expect(isEmptyString('foo')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isEmptyString(123)).toBe(false)
    })
  })

  describe('isNonEmptyString', () => {
    it('passes when given a non-empty string', () => {
      expect(isNonEmptyString('foo')).toBe(true)
    })
    it('fails when given an empty string', () => {
      expect(isNonEmptyString('')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isNonEmptyString(123)).toBe(false)
    })
  })

  describe('isBlankString', () => {
    it('passes when given a blank string', () => {
      expect(isBlankString('')).toBe(true)
      expect(isBlankString('   ')).toBe(true)
    })
    it('fails when given a non-blank string', () => {
      expect(isBlankString('foo')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isBlankString(123)).toBe(false)
    })
  })

  describe('isNotBlankString', () => {
    it('passes when given a non-blank string', () => {
      expect(isNotBlankString('foo')).toBe(true)
    })
    it('fails when given a blank string', () => {
      expect(isNotBlankString('')).toBe(false)
      expect(isNotBlankString('   ')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isNotBlankString(123)).toBe(false)
    })
  })

  describe('isLowerCase', () => {
    it('passes when given a lowercase string', () => {
      expect(isLowerCase('hello')).toBe(true)
      expect(isLowerCase('hello123')).toBe(true)
    })
    it('fails when given a non-lowercase string', () => {
      expect(isLowerCase('Hello')).toBe(false)
      expect(isLowerCase('HELLO')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isLowerCase(123)).toBe(false)
    })
  })

  describe('isUpperCase', () => {
    it('passes when given an uppercase string', () => {
      expect(isUpperCase('HELLO')).toBe(true)
      expect(isUpperCase('HELLO123')).toBe(true)
    })
    it('fails when given a non-uppercase string', () => {
      expect(isUpperCase('Hello')).toBe(false)
      expect(isUpperCase('hello')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isUpperCase(123)).toBe(false)
    })
  })

  describe('isAlpha', () => {
    it('passes when given an alphabetic string', () => {
      expect(isAlpha('hello')).toBe(true)
      expect(isAlpha('HELLO')).toBe(true)
      expect(isAlpha('HelloWorld')).toBe(true)
    })
    it('fails when given a non-alphabetic string', () => {
      expect(isAlpha('hello123')).toBe(false)
      expect(isAlpha('hello world')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isAlpha(123)).toBe(false)
    })
  })

  describe('isAlphaNumeric', () => {
    it('passes when given an alphanumeric string', () => {
      expect(isAlphaNumeric('hello123')).toBe(true)
      expect(isAlphaNumeric('ABC123')).toBe(true)
    })
    it('fails when given a non-alphanumeric string', () => {
      expect(isAlphaNumeric('hello world')).toBe(false)
      expect(isAlphaNumeric('hello!')).toBe(false)
    })
  })

  describe('isASCII', () => {
    it('passes when given an ASCII string', () => {
      expect(isASCII('hello')).toBe(true)
      expect(isASCII('hello123!@#')).toBe(true)
    })
    it('fails when given a non-ASCII string', () => {
      expect(isASCII('héllo')).toBe(false)
    })
  })

  describe('isBase64', () => {
    it('passes when given a base64 string', () => {
      expect(isBase64('SGVsbG8=')).toBe(true)
      expect(isBase64('SGVsbG8gV29ybGQ=')).toBe(true)
    })
    it('fails when given a non-base64 string', () => {
      expect(isBase64('Hello!')).toBe(false)
    })
  })

  describe('isHexadecimal', () => {
    it('passes when given a hex string', () => {
      expect(isHexadecimal('DEADBEEF')).toBe(true)
      expect(isHexadecimal('deadbeef')).toBe(true)
      expect(isHexadecimal('123abc')).toBe(true)
    })
    it('fails when given a non-hex string', () => {
      expect(isHexadecimal('xyz')).toBe(false)
    })
  })

  describe('isHexColor', () => {
    it('passes when given a hex color', () => {
      expect(isHexColor('#fff')).toBe(true)
      expect(isHexColor('#ffffff')).toBe(true)
      expect(isHexColor('#00000000')).toBe(true)
    })
    it('fails when given a non-hex-color string', () => {
      expect(isHexColor('ffffff')).toBe(false)
      expect(isHexColor('#xyz')).toBe(false)
    })
  })

  describe('isURL', () => {
    it('passes when given a URL', () => {
      expect(isURL('http://example.com')).toBe(true)
      expect(isURL('https://example.com/path')).toBe(true)
    })
    it('fails when given a non-URL string', () => {
      expect(isURL('not-a-url')).toBe(false)
      expect(isURL('ftp://example.com')).toBe(false)
    })
  })

  describe('isIP', () => {
    it('passes when given an IP address', () => {
      expect(isIP('192.168.1.1')).toBe(true)
      expect(isIP('::1')).toBe(true)
    })
    it('fails when given a non-IP string', () => {
      expect(isIP('not-an-ip')).toBe(false)
      expect(isIP(123)).toBe(false)
    })
  })

  describe('isIPv4', () => {
    it('passes when given an IPv4 address', () => {
      expect(isIPv4('192.168.1.1')).toBe(true)
      expect(isIPv4('127.0.0.1')).toBe(true)
      expect(isIPv4('0.0.0.0')).toBe(true)
      expect(isIPv4('255.255.255.255')).toBe(true)
    })
    it('fails when given an invalid IPv4 address', () => {
      expect(isIPv4('256.1.1.1')).toBe(false)
      expect(isIPv4('not-an-ip')).toBe(false)
    })
  })

  describe('isIPv6', () => {
    it('passes when given an IPv6 address', () => {
      expect(isIPv6('::1')).toBe(true)
      expect(isIPv6('2001:db8::1')).toBe(true)
      expect(isIPv6('fe80::1')).toBe(true)
    })
    it('fails when given a non-IPv6 string', () => {
      expect(isIPv6('not-an-ip')).toBe(false)
    })
  })

  describe('isPort', () => {
    it('passes when given a valid port string', () => {
      expect(isPort('80')).toBe(true)
      expect(isPort('65535')).toBe(true)
      expect(isPort('0')).toBe(true)
    })
    it('fails when given an invalid port string', () => {
      expect(isPort('65536')).toBe(false)
      expect(isPort('-1')).toBe(false)
      expect(isPort('not-a-port')).toBe(false)
    })
  })

  describe('isSlug', () => {
    it('passes when given a slug', () => {
      expect(isSlug('hello-world')).toBe(true)
      expect(isSlug('foo')).toBe(true)
    })
    it('fails when given a non-slug string', () => {
      expect(isSlug('Hello World')).toBe(false)
      expect(isSlug('hello_world')).toBe(false)
    })
  })

  describe('isSemVer', () => {
    it('passes when given a valid semver', () => {
      expect(isSemVer('1.2.3')).toBe(true)
      expect(isSemVer('0.1.0')).toBe(true)
      expect(isSemVer('1.0.0-alpha')).toBe(true)
    })
    it('fails when given an invalid semver', () => {
      expect(isSemVer('1.2')).toBe(false)
      expect(isSemVer('1.2.3.4')).toBe(false)
    })
  })

  describe('isMongoId', () => {
    it('passes when given a valid MongoID', () => {
      expect(isMongoId('507f1f77bcf86cd799439011')).toBe(true)
    })
    it('fails when given an invalid MongoID', () => {
      expect(isMongoId('xyz')).toBe(false)
      expect(isMongoId('507f1f77bcf86cd79943901')).toBe(false)
    })
  })

  describe('isJWT', () => {
    it('passes when given a valid JWT', () => {
      expect(isJWT('eyJhbGciOiJIUzI1NiJ9.eyJ0ZXN0IjoidGVzdCJ9.QSDhMhUJNvHgFJfC_SMqWw')).toBe(true)
    })
    it('fails when given an invalid JWT', () => {
      expect(isJWT('not-a-jwt')).toBe(false)
    })
  })

  describe('isCamelCase', () => {
    it('passes when given a camelCase string', () => {
      expect(isCamelCase('helloWorld')).toBe(true)
      expect(isCamelCase('foo')).toBe(true)
    })
    it('fails when given a non-camelCase string', () => {
      expect(isCamelCase('HelloWorld')).toBe(false)
      expect(isCamelCase('hello_world')).toBe(false)
    })
  })

  describe('isSnakeCase', () => {
    it('passes when given a snake_case string', () => {
      expect(isSnakeCase('hello_world')).toBe(true)
      expect(isSnakeCase('foo')).toBe(true)
    })
    it('fails when given a non-snake_case string', () => {
      expect(isSnakeCase('helloWorld')).toBe(false)
      expect(isSnakeCase('HelloWorld')).toBe(false)
    })
  })

  describe('isKebabCase', () => {
    it('passes when given a kebab-case string', () => {
      expect(isKebabCase('hello-world')).toBe(true)
      expect(isKebabCase('foo')).toBe(true)
    })
    it('fails when given a non-kebab-case string', () => {
      expect(isKebabCase('helloWorld')).toBe(false)
      expect(isKebabCase('hello_world')).toBe(false)
    })
  })

  describe('isPascalCase', () => {
    it('passes when given a PascalCase string', () => {
      expect(isPascalCase('HelloWorld')).toBe(true)
      expect(isPascalCase('Foo')).toBe(true)
    })
    it('fails when given a non-PascalCase string', () => {
      expect(isPascalCase('helloWorld')).toBe(false)
      expect(isPascalCase('hello_world')).toBe(false)
    })
  })

  describe('isTitleCase', () => {
    it('passes when given a Title Case string', () => {
      expect(isTitleCase('Hello World')).toBe(true)
      expect(isTitleCase('Foo Bar Baz')).toBe(true)
    })
    it('fails when given a non-Title Case string', () => {
      expect(isTitleCase('hello world')).toBe(false)
      expect(isTitleCase('Hello world')).toBe(false)
    })
  })

  describe('isMACAddress', () => {
    it('passes when given a MAC address', () => {
      expect(isMACAddress('00:1A:2B:3C:4D:5E')).toBe(true)
      expect(isMACAddress('00-1A-2B-3C-4D-5E')).toBe(true)
    })
    it('fails when given an invalid MAC address', () => {
      expect(isMACAddress('00:1A:2B:3C:4D:5G')).toBe(false)
      expect(isMACAddress('not-a-mac')).toBe(false)
    })
  })

  describe('isFQDN', () => {
    it('passes when given a valid FQDN', () => {
      expect(isFQDN('example.com')).toBe(true)
      expect(isFQDN('sub.example.com')).toBe(true)
    })
    it('fails when given an invalid FQDN', () => {
      expect(isFQDN('not_a_domain')).toBe(false)
    })
  })

  describe('isStrongPassword', () => {
    it('passes when given a strong password', () => {
      expect(isStrongPassword({}, 'Abcdef1!')).toBe(true)
    })
    it('fails when given a weak password', () => {
      expect(isStrongPassword({}, 'weak')).toBe(false)
      expect(isStrongPassword({ minLength: 1, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }, 'abcdef')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isStrongPassword({}, 123)).toBe(false)
    })
  })

  describe('isLatLong', () => {
    it('passes when given a valid lat/long', () => {
      expect(isLatLong('40.7128,-74.0060')).toBe(true)
      expect(isLatLong('0,0')).toBe(true)
    })
    it('fails when given an invalid lat/long', () => {
      expect(isLatLong('not-coords')).toBe(false)
    })
  })

  describe('isMimeType', () => {
    it('passes when given a valid MIME type', () => {
      expect(isMimeType('text/plain')).toBe(true)
      expect(isMimeType('application/json')).toBe(true)
    })
    it('fails when given an invalid MIME type', () => {
      expect(isMimeType('text')).toBe(false)
    })
  })

  describe('isISBN', () => {
    it('passes when given a valid ISBN-10', () => {
      expect(isISBN(10, '0-306-40615-2')).toBe(true)
    })
    it('passes when given a valid ISBN-13', () => {
      expect(isISBN(13, '978-0-306-40615-7')).toBe(true)
    })
    it('fails when given an invalid ISBN', () => {
      expect(isISBN(10, '1234567890')).toBe(false)
      expect(isISBN(13, '1234567890123')).toBe(false)
    })
  })

  describe('isBase32', () => {
    it('passes when given a base32 string', () => {
      expect(isBase32('JBSWY3DP')).toBe(true)
    })
    it('fails when given a non-base32 string', () => {
      expect(isBase32('Hello!')).toBe(false)
    })
  })

  describe('isDataURI', () => {
    it('passes when given a data URI', () => {
      expect(isDataURI('data:text/plain;base64,SGVsbG8=')).toBe(true)
      expect(isDataURI('data:text/plain,Hello')).toBe(true)
    })
    it('fails when given a non-data-URI', () => {
      expect(isDataURI('http://example.com')).toBe(false)
    })
  })

  describe('isMD5', () => {
    it('passes when given an MD5 hash', () => {
      expect(isMD5('5d41402abc4b2a76b9719d911017c592')).toBe(true)
    })
    it('fails when given a non-MD5 string', () => {
      expect(isMD5('xyz')).toBe(false)
    })
  })

  describe('isSHA1', () => {
    it('passes when given a SHA1 hash', () => {
      expect(isSHA1('a9993e364706816aba3e25717850c26c9cd0d89d')).toBe(true)
    })
    it('fails when given a non-SHA1 string', () => {
      expect(isSHA1('xyz')).toBe(false)
    })
  })

  describe('isSHA256', () => {
    it('passes when given a SHA256 hash', () => {
      expect(isSHA256('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad')).toBe(true)
    })
    it('fails when given a non-SHA256 string', () => {
      expect(isSHA256('xyz')).toBe(false)
    })
  })

  describe('isISRC', () => {
    it('passes when given a valid ISRC', () => {
      expect(isISRC('USPR32200012')).toBe(true)
    })
    it('fails when given an invalid ISRC', () => {
      expect(isISRC('not-an-isrc')).toBe(false)
    })
  })

  describe('isEAN', () => {
    it('passes when given a valid EAN-13', () => {
      expect(isEAN('5901234123457')).toBe(true)
    })
    it('fails when given an invalid EAN', () => {
      expect(isEAN('1234567890123')).toBe(false)
    })
  })

  describe('isUPC', () => {
    it('passes when given a valid UPC', () => {
      expect(isUPC('012345678905')).toBe(true)
    })
    it('fails when given an invalid UPC', () => {
      expect(isUPC('012345678901')).toBe(false)
    })
  })

  describe('isEthereumAddress', () => {
    it('passes when given a valid Ethereum address', () => {
      expect(isEthereumAddress('0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18')).toBe(true)
    })
    it('fails when given an invalid Ethereum address', () => {
      expect(isEthereumAddress('0xshort')).toBe(false)
      expect(isEthereumAddress('not-an-address')).toBe(false)
    })
  })

  describe('isISODateString', () => {
    it('passes when given a valid ISO date string', () => {
      expect(isISODateString('2024-01-15T10:30:00Z')).toBe(true)
      expect(isISODateString('2024-01-15T10:30:00.000Z')).toBe(true)
    })
    it('fails when given an invalid ISO date string', () => {
      expect(isISODateString('2024/01/15')).toBe(false)
    })
  })

  describe('isCreditCard', () => {
    it('passes when given a valid credit card number', () => {
      // Visa test number
      expect(isCreditCard('4111111111111111')).toBe(true)
    })
    it('fails when given an invalid credit card number', () => {
      expect(isCreditCard('1234567890123456')).toBe(false)
    })
    it('fails when given a non-string value', () => {
      expect(isCreditCard(4111111111111111)).toBe(false)
    })
  })
})
