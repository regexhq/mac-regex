# MAC Regex

[![Build Status](https://travis-ci.org/johnotander/mac-regex.svg?branch=master)](https://travis-ci.org/johnotander/mac-regex)

A regular expression for matching MAC addresses.

## Installation

```
npm i --save mac-regex
```

## Usage

```javascript
var mac = require('mac-regex');

// Exact string option
mac({ exact: true }).test('aa-bb-cc-dd-ee-ff')     // => true
mac({ exact: true }).test('aa:bb:cc:dd:ee:ff')     // => true
mac({ exact: true }).test('aa:bb:cc:dd:ee:ff   ')  // => false
mac({ exact: true }).test('kljhsdf')               // => false

// Global option (default)
mac().test('aa:bb:cc:dd:ee:ff   ')  // => true
mac().test('kljhsdf')               // => false

'11:22:aa:44:55:33 11:22:aa:44:55:33'.match(mac())
// => ['11:22:aa:44:55:33', '11:22:aa:44:55:33']
```

## Acknowledgements

* Regex from <http://stackoverflow.com/a/4260512/1378668>.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
