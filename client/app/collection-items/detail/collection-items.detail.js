'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collection-items.detail', {
        url: '/:id',
        templateUrl: 'app/collection-items/detail/collection-items.detail.html',
        controller: 'CollectionItemsDetailCtrl'
      });
  });