'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sports.detail', {
        url: '/:id',
        templateUrl: 'app/sports/detail/sports.detail.html',
        controller: 'SportsDetailCtrl'
      });
  });