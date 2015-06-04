'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sports', {
        url: '/sports',
        abstract: true,
        templateUrl: 'app/sports/sports.html'
      });
  });