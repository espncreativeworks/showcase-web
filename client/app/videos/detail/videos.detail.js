'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videos.detail', {
        url: '/:id',
        templateUrl: 'app/videos/detail/videos.detail.html',
        controller: 'VideosDetailCtrl'
      });
  });