'use strict';

module.exports = function(options) {
  options = options || {};
  var regexBase = '([0-9a-f]{2}[:-]){5}([0-9a-f]{2})';

  return options.exact ? new RegExp('^' + regexBase + '$', 'i') :
                         new RegExp(regexBase, 'ig');
}
