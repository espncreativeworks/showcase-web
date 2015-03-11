'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .filter('fullDescription', function () {
    return function (input, opts) {
      var _input = angular.extend({ brief: { md: '', html: '' }, extended: { md: '', html: '' } }, angular.copy(input))
        , key = 'html';

      if (opts && opts.plaintext){
        key = 'md';
      }

      // console.log(input);

      _input.brief = _input.brief[key].trim() || '';
      _input.extended = _input.extended[key].trim() || '';
      return _input.brief + ' ' + _input.extended;
    };
  });
