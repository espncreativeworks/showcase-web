'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('errors', {
        url: '/errors/:code?path&message',
        templateUrl: 'app/errors/errors.html',
        controller: 'ErrorsCtrl'
      });
  });