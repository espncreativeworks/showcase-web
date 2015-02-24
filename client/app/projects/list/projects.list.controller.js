'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsListCtrl', function ($scope, Project) {
    $scope.projects = Project.featured();
  });
