'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        abstract: true,
        templateUrl: 'app/projects/projects.html'
      });
  });