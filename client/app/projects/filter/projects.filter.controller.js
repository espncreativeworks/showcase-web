'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsFilterCtrl', ['$scope', 'underscore', 'ProjectFilters', 'Execution', 'Brand', function ($scope, _, ProjectFilters, Execution, Brand) {
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

    $scope.$on('projects:filtered', function (evt, filteredProjects){
      _projects = filteredProjects;

      var _sports = [];
      
      angular.forEach(filteredProjects, function (project){
        _sports = _sports.concat(project.sports);
      });

      $scope.sports = _.uniq(_sports, function (s){ return s._id; });

      if (_brandsResolved){
        onbrandsresolved(evt, filteredProjects);
      }

      if (_executionsResolved){
        onexecutionsresolved(evt, filteredProjects);
      }

    });

    $scope.$on('brands:resolved', onbrandsresolved);
    $scope.$on('executions:resolved', onexecutionsresolved);

    function onbrandsresolved (evt, filteredProjects){
      _brandsResolved = true;

      var _brands = []
        , _industries = [];

      angular.forEach(filteredProjects, function (project){
        
        // add brand to list on scope
        _brands = _brands.concat(project.brands);

        angular.forEach(project.brands, function (brand){
          // add industries to list on scope
          _industries = _industries.concat(brand.industries);
        });
      });

      $scope.brands = _.uniq(_brands, function (b){ return b._id; });
      $scope.industries = _.uniq(_industries, function (i){ return i._id; });
    }

    function onexecutionsresolved (evt, filteredProjects){
      _executionsResolved = true;

      var _executions = []
        , _platforms = []
        , _tags = [];

      angular.forEach(filteredProjects, function (project){
        _executions = _executions.concat(project.executions);

        angular.forEach(project.executions, function (execution){
          // add platform to list on scope
          _platforms.push(execution.platform);
          _tags = _tags.concat(execution.tags);
        });

      });

      // add executions to list on scope
      $scope.executions = _.uniq(_executions, function (e){ return e._id; });

      // add platform to list on scope
      $scope.platforms = _.uniq(_platforms, function (p){ return p._id; });

      // add tags to list on scope
      $scope.tags = _.uniq(_tags, function (t){ return t._id; });

    }

    $scope.addFilter = function addFilter(category, data){
      var exists = false;
      $scope.filters.active[category] = $scope.filters.active[category] || [];
      
      angular.forEach($scope.filters.active[category], function(filter, index){
        if (filter._id === data._id){
          exists = true;
        }
      }); 

      if (!exists){
        $scope.filters.active[category].push(data);  
      }
    };

    $scope.removeFilter = function removeFilter(category, data){
      if ($scope.filters.active[category]){
        angular.forEach($scope.filters.active[category], function(filter, index){
          if (filter._id === data._id){
            $scope.filters.active[category].splice(index, 1);
          }
        });

        if ($scope.filters.active[category].length === 0){
          delete $scope.filters.active[category];
        }
      }
    };
    
  }]);
