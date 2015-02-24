'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects.list', {
        url: '',
        templateUrl: 'app/projects/list/projects.list.html',
        controller: 'ProjectsListCtrl'
      });
  });