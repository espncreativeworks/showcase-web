'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('SportsDetailCtrl', function ($scope, $stateParams, Sport) {
    $scope.sport = {};
    $scope.sport = Sport.get({ id: $stateParams.id });

    $scope.sport.$promise.then(function (sport){
      $scope.sport.$executions = Sport.executions({ id: sport._id });
      return $scope.sport.$executions.$promise;
    }).then(function (executions){
      $scope.sport.$tags = []; 

      angular.forEach(executions, function (execution){
        angular.forEach(execution.tags, function (tag){
          var sportId = tag.sport + '';
          tag.sport = {};
          tag.sport._id = sportId;
          tag.sport.slug = $scope.sport.slug;
          $scope.sport.$tags.push(tag);  
        });
      });
    });
    
  });
