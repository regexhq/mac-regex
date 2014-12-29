'use strict';

module.exports = function(options) {
  options = options || {};
  var regexBase = '([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})';

  return options.exact ? new RegExp('^' + regexBase + '$') :
                         new RegExp(regexBase, 'g');
}
