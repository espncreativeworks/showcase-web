'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collections.detail', {
        url: '/:id',
        templateUrl: 'app/collections/detail/collections.detail.html',
        controller: 'CollectionsDetailCtrl'
      });
  });