'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('IndustriesListCtrl', function ($scope, Industry) {
    $scope.industries = Industry.query();
  });
