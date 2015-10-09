'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('TagsCtrl', ['$scope', 'underscore', 'ProjectFilters', 'Execution', 'Brand', function ($scope, _, ProjectFilters, Execution, Brand) {
      $scope.filters = ProjectFilters; 
      $scope.executions = [];
      $scope.platforms = [];
      $scope.sports = [];
      $scope.brands = [];
      $scope.industries = [];
      $scope.tags = [];
  
      var _projects
        , _brandsResolved = false
        , _executionsResolved = false;
    }]);
