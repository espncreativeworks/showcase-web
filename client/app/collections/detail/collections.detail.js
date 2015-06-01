'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collections.detail', {
        url: '/:id',
        templateUrl: 'app/collections/detail/collections.detail.html',
        controller: 'CollectionsDetailCtrl'
      })
      .state('me.collections.detail', {
        url: '/:collectionId',
        templateUrl: 'app/collections/detail/collections.detail.html',
        controller: 'CollectionsDetailCtrl'
      })
      .state('users.collections.detail', {
        url: '/:collectionId',
        templateUrl: 'app/collections/detail/collections.detail.html',
        controller: 'CollectionsDetailCtrl'
      });;
  });