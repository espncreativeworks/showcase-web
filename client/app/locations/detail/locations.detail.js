'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('locations.detail', {
        url: '/:id',
        templateUrl: 'app/locations/detail/locations.detail.html',
        controller: 'LocationsDetailCtrl'
      });
  });