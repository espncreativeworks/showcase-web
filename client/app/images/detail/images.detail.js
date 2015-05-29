'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('images.detail', {
        url: '/:id',
        templateUrl: 'app/images/detail/images.detail.html',
        controller: 'ImagesDetailCtrl'
      });
  });