'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('scrollDown', ['jQuery', function ($) {
    return {
      templateUrl: 'components/scroll-down/scroll-down.html',
      replace: true,
      restrict: 'EA',
      link: function (scope, element, attrs) {

      }
    };
  }]);