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
});