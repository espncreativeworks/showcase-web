'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('platforms.list', {
        url: '',
        templateUrl: 'app/platforms/list/platforms.list.html',
        controller: 'PlatformsListCtrl'
      });
  });