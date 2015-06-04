'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('IndustriesDetailCtrl', function ($scope, $stateParams, Industry) {
    $scope.industry = {};
    $scope.industry = Industry.get({ id: $stateParams.id });

    $scope.industry.$promise.then(function (industry){
      $scope.industry.$executions = Industry.executions({ id: industry._id });
      return $scope.industry.$executions.$promise;
    }).then(function (executions){
      $scope.industry.$tags = []; 

      angular.forEach(executions, function (execution){
        angular.forEach(execution.tags, function (tag){
          var industryId = tag.industry + '';
          tag.industry = {};
          tag.industry._id = industryId;
          tag.industry.slug = $scope.industry.slug;
          $scope.industry.$tags.push(tag);  
        });
      });
    });
    
  });
