'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsFilterCtrl', ['$scope', 'underscore', 'ProjectFilters', function ($scope, _, ProjectFilters) {
    $scope.filters = ProjectFilters; 
    $scope.executions = [];
    $scope.platforms = [];
    $scope.sports = [];
    $scope.brands = [];
    $scope.industries = [];
    $scope.tags = [];

    function onprojectsupdated (evt, filteredProjects){
      var _sports = []
        , _brands = []
        , _industries = []
        , _executions = []
        , _platforms = []
        , _tags = [];

      angular.forEach(filteredProjects, function (project){
        
        _sports = _sports.concat(project.sports);
        _brands = _brands.concat(project.brands);
        _industries = _industries.concat(project.industries);
        _executions = _executions.concat(project.executions);

        angular.forEach(project.brands, function (brand){
          _industries = _industries.concat(brand.industries);
        });

        angular.forEach(project.executions, function (execution){
          _platforms.push(execution.platform);
          _tags = _tags.concat(execution.tags);
        });

      });

      $scope.sports = _.uniq(_sports, function (s){ return s._id; });
      $scope.brands = _.uniq(_brands, function (b){ return b._id; });
      $scope.industries = _.uniq(_industries, function (i){ return i._id; });
      $scope.executions = _.uniq(_executions, function (e){ return e._id; });
      $scope.platforms = _.uniq(_platforms, function (p){ return p._id; });
      $scope.tags = _.uniq(_tags, function (t){ return t._id; });
    }

    $scope.$on('projects:updated', onprojectsupdated);

    $scope.addFilter = function addFilter(category, data){
      var exists = false;
      $scope.filters.active[category] = $scope.filters.active[category] || [];
      
      angular.forEach($scope.filters.active[category], function(filter){
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
