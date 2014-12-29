var assert = require('assert');
var mac = require('..');

describe('mac-regex', function() {

  describe('exact: true', function() {
    it('should find a XX-XX-XX-XX-XX-XX mac when it exists', function() {
      assert.equal(mac({ exact: true }).test('aa-bb-cc-dd-ee-ff'), true);
    });

    it('should find a XX:XX:XX:XX:XX:XX mac when it exists', function() {
      assert.equal(mac({ exact: true }).test('aa:bb:cc:dd:ee:ff'), true);
    });

    it('should find a XX:XX:XX:XX:XX:XX mac when it exists regardless of case', function() {
      assert.equal(mac({ exact: true }).test('aa:bB:cc:dd:ee:ff'), true);
    });

    it('should find a XX:XX:XX:XX:XX:XX mac when it exists with all digits', function() {
      assert.equal(mac({ exact: true }).test('11-22-33-44-55-66'), true);
    });

    it('should handle a wide array of macs', function() {
      var validMacs = ['11:22:aa:44:55:33', '11-aa-bb-33-55-11'];
      validMacs.forEach(function(validMac) {
        assert.equal(mac({ exact: true }).test(validMac), true);
      });
    });

    it('should not find a mac when it does not exist', function() {
      var invalidMacs = ['', 'aa', 'aabbccddeeff', '1234', '*&^(&^'];
      invalidMacs.forEach(function(invalidMac) {
        assert.equal(mac({ exact: true }).test(invalidMac), false);
      });
    });
  });

  describe('exact: false', function() {
    it('should find a XX-XX-XX-XX-XX-XX mac when it exists', function() {
      assert.equal(mac().exec('    aa-bb-cc-dd-ee-ff (*&&')[0], 'aa-bb-cc-dd-ee-ff');
    });

    it('should find a XX:XX:XX:XX:XX:XX mac when it exists', function() {
      assert.equal(mac().exec('other stuff aa:bb:cc:dd:ee:ff   ')[0], 'aa:bb:cc:dd:ee:ff');
    });

    it('should find a XX:XX:XX:XX:XX:XX mac when it exists regardless of case', function() {
      assert.equal(mac().exec('aa:bB:cc:dd:ee:ff filler')[0], 'aa:bB:cc:dd:ee:ff');
    });

    it('should find a XX:XX:XX:XX:XX:XX mac when it exists with all digits', function() {
      assert.equal(mac().exec('11-22-33-44-55-66 more filler')[0], '11-22-33-44-55-66');
    });

    it('should handle multiple macs', function() {
      var validMacs = ['11:22:aa:44:55:33 11:22:aa:44:55:33', '11-aa-bb-33-55-11 11-aa-bb-33-55-11'];
      validMacs.forEach(function(validMacStr) {
        assert.equal(validMacStr.match(mac()).length, 2);
      });
    });

    it('should not find a mac when it does not exist', function() {
      var invalidMacs = ['', 'aa', 'aabbccddeeff', '1234', '*&^(&^'];
      invalidMacs.forEach(function(invalidMacStr) {
        assert.equal(invalidMacStr.match(mac()), null);
      });
    });
  });
});
