'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsCardCtrl', ['$scope', '$stateParams', 'Page', 'Project', function ($scope, $stateParams, Page, Project) {
    Page.meta.title = 'Projects Card';
    console.log("project card ctrl: ", $stateParams.id);
    $scope.project = Project.get({ id: $stateParams.id });
  }]);