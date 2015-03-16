'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('BrandsListCtrl', function ($scope, Brand) {
    $scope.brands = Brand.query();
  });
