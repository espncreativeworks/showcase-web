'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('HomeCtrl', ['$scope', 'Page', 'Project', function ($scope, Page, Project) {
    Page.meta.title = 'Home'; 
    Page.body.class = 'home';
    $scope.projects = Project.featured();
    $scope.fullpage = { options: {} };

    $scope.projects.$promise.then(function (projects){
      var anchors = ['intro'];
      angular.forEach(projects, function (project){
        anchors.push(project.slug);
      });
      anchors.push('locations');
      $scope.fullpage.options = {
        navigation: true,
        navigationPosition: 'right',
        anchors: anchors
      };
    });

  }]);
