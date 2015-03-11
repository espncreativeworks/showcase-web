'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videos.list', {
        url: '',
        templateUrl: 'app/videos/list/videos.list.html',
        controller: 'VideosListCtrl'
      });
  });