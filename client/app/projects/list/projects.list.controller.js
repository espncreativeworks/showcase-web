'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsListCtrl', ['$scope', 'Page', 'Project', function ($scope, Page, Project) {
    Page.meta.title = 'Projects';
    $scope.projects = Project.query();

  }]);
