'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('fullpageSlide', ['Modernizr', function (Modernizr) {
    return {
      templateUrl: 'components/fullpage/slide/slide.html',
      restrict: 'EA',
      replace: true,
      transclude: true,
      link: function (scope, element, attrs) {
        if (!Modernizr.touch){
          scope.$emit('fullpage-slide:added');
        }
      }
    };
  }]);