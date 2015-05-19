'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('imageZoom', ['jQuery', function ($) {
    return {
      restrict: 'A',
      transclude: true,
      link: function (scope, element, attrs) {

        $(element).on('zoomload', 'img', function (){
          $(element).zoom({
            magnify: 1.8,
            touch: false
          });
        });
        
        scope.$on('$destroy', function (){
          $(element).off('zoomload');
          $(element).trigger('zoom.destroy');
        });
      }
    };
  }]);