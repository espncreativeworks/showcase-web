'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ExecutionTagsDetailCtrl', function ($scope, $stateParams, ExecutionTag) {
    $scope.executionTag = {};
    $scope.executionTag = ExecutionTag.get({ id: $stateParams.id });

    $scope.executionTag.$promise.then(function (executionTag){
      $scope.executionTag.$executions = ExecutionTag.executions({ id: executionTag._id });
      return $scope.executionTag.$executions.$promise;
    }).then(function (executions){
      $scope.executionTag.$tags = []; 

      angular.forEach(executions, function (execution){
        angular.forEach(execution.tags, function (tag){
          var executionTagId = tag.executionTag + '';
          tag.executionTag = {};
          tag.executionTag._id = executionTagId;
          tag.executionTag.slug = $scope.executionTag.slug;
          $scope.executionTag.$tags.push(tag);  
        });
      });
    });
    
  });
