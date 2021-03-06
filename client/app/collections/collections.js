'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collections', {
        url: '/collections',
        abstract: true,
        templateUrl: 'app/collections/collections.html'
      })
      .state('me.collections', {
        url: '/collections',
        abstract: true,
        templateUrl: 'app/collections/collections.html'
      })
      .state('users.collections', {
        url: '/:userId/collections',
        abstract: true,
        templateUrl: 'app/collections/collections.html'
      });
  });