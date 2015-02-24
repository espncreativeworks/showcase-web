'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PlatformsDetailCtrl', function ($scope, $stateParams, Platform, Execution) {
    $scope.platform = {};
    $scope.platform = Platform.get({ id: $stateParams.id });

    $scope.platform.$promise.then(function (platform){
      $scope.platform.$executions = Platform.executions({ id: platform._id });
      return $scope.platform.$executions.$promise;
    }).then(function (executions){
      $scope.platform.$tags = []; 

      angular.forEach(executions, function (execution){
        angular.forEach(execution.tags, function (tag){
          var platformId = tag.platform + '';
          tag.platform = {};
          tag.platform._id = platformId;
          tag.platform.slug = $scope.platform.slug;
          $scope.platform.$tags.push(tag);  
        });
      });
    });
    
  });
