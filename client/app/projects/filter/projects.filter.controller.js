'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsFilterCtrl', ['$scope', 'ProjectFilters', function ($scope, ProjectFilters) {
    $scope.filters = ProjectFilters;
    
  }]);
