var assert = require('assert');
var mac = require('..');

describe('mac-regex', function() {

  it('should find a XX-XX-XX-XX-XX-XX mac when it exists', function() {
    assert.equal(mac().test('aa-bb-cc-dd-ee-ff'), true);
  });

  it('should find a XX:XX:XX:XX:XX:XX mac when it exists', function() {
    assert.equal(mac().test('aa:bb:cc:dd:ee:ff'), true);
  });

  it('should find a XX:XX:XX:XX:XX:XX mac when it exists regardless of case', function() {
    assert.equal(mac().test('aa:bB:cc:dd:ee:ff'), true);
  });

  it('should find a XX:XX:XX:XX:XX:XX mac when it exists with all digits', function() {
    assert.equal(mac().test('11-22-33-44-55-66'), true);
  });

  it('should handle a wide array of macs', function() {
    var validMacs = ['11:22:aa:44:55:33', '11-aa-bb-33-55-11'];
    validMacs.forEach(function(validMac) {
      assert.equal(mac().test(validMac), true);
    });
  });

  it('should not find a mac when it does not exist', function() {
    var invalidMacs = ['', 'aa', 'aabbccddeeff', '1234', '*&^(&^'];
    invalidMacs.forEach(function(invalidMac) {
      assert.equal(mac().test(invalidMac), false);
    });
  });
});
