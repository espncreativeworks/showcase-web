'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videos', {
        url: '/videos',
        abstract: true,
        templateUrl: 'app/videos/videos.html'
      });
  });