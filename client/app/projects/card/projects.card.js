'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects.card', {
        url: '/card',
        templateUrl: 'app/projects/card/projects.card.html',
        controller: 'ProjectsCardCtrl'
      });
  });