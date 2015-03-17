'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsCardCtrl', ['$scope', 'Page', 'Project', function ($scope, Page, Project) {
    Page.meta.title = 'Projects';
    $scope.projects = Project.query();
		
		//console.log($scope.projects);
  }]);