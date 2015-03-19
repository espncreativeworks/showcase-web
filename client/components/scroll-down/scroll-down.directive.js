'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('scrollDown', [function () {
    return {
      templateUrl: 'components/scroll-down/scroll-down.html',
      replace: true,
      restrict: 'EA',
      link: function () {

      }
    };
  }]);