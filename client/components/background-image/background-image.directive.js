'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('backgroundImage', ['jQuery', function ($) {
    return {
      restrict: 'A',
      scope: {
        url: '=backgroundImage'
      },
      link: function (scope, element, attrs) {
        var opts = {}
          , url = scope.url;

        opts.backgroundSize = 'cover';
        opts.backgroundPosition = '50% 50%';
        opts.backgroundRepeat = 'no-repeat';
        opts.backgroundImage = 'url(' + url + ')';

        scope.$watch('url', function (newVal){
          opts.backgroundImage = 'url(' + newVal + ')';
          $(element).css(opts);
        });
      }
    };
  }]);