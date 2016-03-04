'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shows.detail', {
        url: '/:id',
        templateUrl: 'app/shows/detail/shows.detail.html',
        controller: 'ShowsDetailCtrl'
      });
  });