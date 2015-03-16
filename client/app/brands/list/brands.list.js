'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('brands.list', {
        url: '',
        templateUrl: 'app/brands/list/brands.list.html',
        controller: 'BrandsListCtrl'
      });
  })