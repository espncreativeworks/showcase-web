'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collection-items', {
        url: '/collection-items',
        abstract: true,
        templateUrl: 'app/collection-items/collection-items.html'
      });
  });