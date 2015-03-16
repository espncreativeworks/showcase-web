'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('BrandsDetailCtrl', function ($scope, $stateParams, Brand) {
    $scope.brand = Brand.get({ id: $stateParams.id });
  });
