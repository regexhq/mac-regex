# MAC Regex

[![Build Status](https://travis-ci.org/johnotander/mac-regex.svg?branch=master)](https://travis-ci.org/johnotander/mac-regex)

A regular expression for matching MAC addresses.

In the near future this will be likely moved to <https://github.com/regexps>.

## Installation

```
npm i --save mac-regex
```

## Usage

```javascript
var mac = require('mac-regex');

mac().test('aa-bb-cc-dd-ee-ff') // => true
mac().test('aa:bb:cc:dd:ee:ff') // => true
mac().test('kljhsdf') // => false
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