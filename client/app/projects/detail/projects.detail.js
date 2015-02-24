'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects.detail', {
        url: '/:id',
        templateUrl: 'app/projects/detail/projects.detail.html',
        controller: 'ProjectsDetailCtrl'
      });
  });