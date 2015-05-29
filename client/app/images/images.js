'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('images', {
        url: '/images',
        abstract: true,
        templateUrl: 'app/images/images.html'
      });
  });