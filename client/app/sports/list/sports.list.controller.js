'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('SportsListCtrl', function ($scope, Sport) {
    $scope.sports = Sport.query();
  });
