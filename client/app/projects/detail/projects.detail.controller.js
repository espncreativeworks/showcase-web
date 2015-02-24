'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsDetailCtrl', function ($scope, $stateParams, Project) {
    $scope.project = Project.get({ id: $stateParams.id });

    $scope.project.$promise.then(function (project){
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
    
  });
