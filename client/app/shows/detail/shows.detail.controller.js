'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ShowssDetailCtrl', function ($scope, $stateParams, Show) {
    $scope.show = {};
    $scope.show = Show.get({ id: $stateParams.id });

    $scope.show.$promise.then(function (show){
      $scope.show.$people = Show.people({ id: show._id });
      return $scope.show.$people.$promise;
    }).then(function (people){
      $scope.show.$tags = []; 

      angular.forEach(people, function (person){
        angular.forEach(person.tags, function (tag){
          var showId = tag.show + '';
          tag.show = {};
          tag.show._id = showId;
          tag.show.slug = $scope.show.slug;
          $scope.show.$tags.push(tag);  
        });
      });
    });
    
  });
