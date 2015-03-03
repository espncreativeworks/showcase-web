'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('backgroundImage', ['jQuery', function ($) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var opts = {}
          , url = attrs.backgroundImage;

        opts.backgroundSize = 'cover';
        opts.backgroundPosition = '50% 50%';
        opts.backgroundRepeat = 'no-repeat';
        opts.backgroundImage = 'url(' + url + ')';

        $(element).css(opts);
      }
    };
  }]);