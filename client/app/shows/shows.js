'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shows', {
        url: '/shows',
        abstract: true,
        templateUrl: 'app/shows/shows.html'
      });
  });