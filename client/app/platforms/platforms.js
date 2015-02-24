'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('platforms', {
        url: '/platforms',
        abstract: true,
        templateUrl: 'app/platforms/platforms.html'
      });
  });