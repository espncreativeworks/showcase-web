'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('brands', {
        url: '/brands',
        abstract: true,
        templateUrl: 'app/brands/brands.html'
      });
  });