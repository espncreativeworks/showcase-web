'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PlatformsListCtrl', function ($scope, Platform) {
    $scope.platforms = Platform.query();
  });
