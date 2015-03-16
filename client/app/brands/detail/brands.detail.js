'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('brands.detail', {
        url: '/:id',
        templateUrl: 'app/brands/detail/brands.detail.html',
        controller: 'BrandsDetailCtrl'
      });
  });