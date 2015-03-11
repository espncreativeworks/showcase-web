'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videos.modal', {
        templateUrl: 'app/videos/modal/videos.modal.html',
        controller: 'VideosModalCtrl'
      });
  });