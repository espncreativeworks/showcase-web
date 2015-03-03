'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsDetailCtrl', ['$scope', '$stateParams', 'Page', 'Project', 'fullDescriptionFilter', function ($scope, $stateParams, Page, Project, fullDescriptionFilter) {
    Page.meta.title = '';

    $scope.project = Project.get({ id: $stateParams.id });

    $scope.project.$promise.then(function (project){
      Page.meta.title = project.meta.title || (project.title + ' Project Details');
      Page.meta.description = project.meta.description || fullDescriptionFilter(project.description);
      $scope.project.$executions = Project.executions({ id: project._id });
      return $scope.project.$executions.$promise;
    }).then(function (executions){
      $scope.project.$tags = []; 

      angular.forEach(executions, function (execution){
        angular.forEach(execution.tags, function (tag){
          var platformId = tag.platform + '';
          tag.platform = {};
          tag.platform._id = platformId;
          tag.platform.slug = execution.platform.slug;
          $scope.project.$tags.push(tag);  
        });
      });
    });
    
  }]);
