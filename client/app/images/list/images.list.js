'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('images.list', {
        url: '',
        templateUrl: 'app/images/list/images.list.html',
        controller: 'ImagesListCtrl'
      });
  });