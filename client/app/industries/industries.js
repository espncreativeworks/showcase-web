'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('industries', {
        url: '/industries',
        abstract: true,
        templateUrl: 'app/industries/industries.html'
      });
  });