'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('industries.detail', {
        url: '/:id',
        templateUrl: 'app/industries/detail/industries.detail.html',
        controller: 'IndustriesDetailCtrl'
      });
  });