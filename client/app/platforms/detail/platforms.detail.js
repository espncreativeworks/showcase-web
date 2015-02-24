'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('platforms.detail', {
        url: '/:id',
        templateUrl: 'app/platforms/detail/platforms.detail.html',
        controller: 'PlatformsDetailCtrl'
      });
  });