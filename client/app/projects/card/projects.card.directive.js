'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('projectCard', function () {
    return {
      templateUrl: 'app/projects/card/projects.card.directive.html',
      restrict: 'EA',
      scope: {
        project: '=',
        cols: '='
      },
      replace: true,
      link: function () {

      }
    };
  });