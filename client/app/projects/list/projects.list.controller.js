'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsListCtrl', ['$rootScope', '$scope', 'Page', 'Project', 'ProjectFilters', function ($rootScope, $scope, Page, Project, ProjectFilters) {
    Page.meta.title = 'Projects';
    Page.body.class = $rootScope.$state.includes('projects') ? 'project-list' : Page.body.class;
    $scope.projects = Project.query();
    $scope.filters = ProjectFilters;
  }]);
