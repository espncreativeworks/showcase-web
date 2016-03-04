'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('peopleCard', function () {
    return {
      templateUrl: 'app/people/card/people.card.directive.html',
      restrict: 'EA',
      scope: {
        person: '=',
        cols: '='
      },
      replace: true,
      link: function () {
        
      }
    };
  });