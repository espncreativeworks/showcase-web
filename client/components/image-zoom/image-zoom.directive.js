'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('imageZoom', ['jQuery', function ($) {
    return {
      restrict: 'A',
      transclude: true,
      scope: {
        id: '=',
        version: '='
      },
      link: function (scope, element, attrs) {

        $(element).on('zoomload', 'img', function (){
          $(element).zoom({
            magnify: 1.8,
            touch: false
          });
        });
        
        scope.$on('$destroy', function (){
          $(element).trigger('zoom.destroy');
        });
      }
    };
  }]);