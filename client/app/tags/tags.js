'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tags', {
        url: '/tags/:type/:id',
        templateUrl: 'app/tags/tags.html',
        abstract: true
      });
  });