'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('locations', {
        url: '/locations',
        abstract: true,
        templateUrl: 'app/locations/locations.html'
      });
  });