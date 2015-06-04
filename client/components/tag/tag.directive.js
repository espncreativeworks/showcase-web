'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('tag', function () {
    return {
      templateUrl: 'components/tag/tag.html',
      restrict: 'EA',
      scope: {
        text: '=',
        removable: '=',
        onremove: '&',
        href: '='
      },
      replace: true,
      link: function () {

      }
    };
  });