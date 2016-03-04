'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsFilterCtrl', ['$scope', '$location', 'underscore', 'ProjectFilters', 'Platform', 'Sport', 'Industry', 'ExecutionTag', function ($scope, $location, _, ProjectFilters, Platform, Sport, Industry, ExecutionTag) {
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

        // console.log('filteredprojects: ', project);
        
        _sports = _sports.concat(project.sports);
        _brands = _brands.concat(project.brands);
        _industries = _industries.concat(project.industries);
        _executions = _executions.concat(project.executions);

        // angular.forEach(project.brands, function (brand){
        //   _industries = _industries.concat(brand.industries);
        // });

        angular.forEach(project.executions, function (execution){
          _platforms.push(execution.platform);
          _tags = _tags.concat(execution.tags);
        });

      });

      $scope.sports = _.uniq(_sports, function (s){ return s._id; });
      $scope.brands = _.uniq(_brands, function (b){ return b._id; });
      $scope.industries = _.uniq(_industries, function (i){ return i._id; });
      $scope.executions = _.uniq(_executions, function (e){ return e._id; });
      $scope.platforms = _.uniq(_platforms, function (p){ return p._id;  });
      $scope.tags = _.uniq(_tags, function (t){ return t._id; });
    }

    $scope.$on('projects:updated', onprojectsupdated);

    $scope.addFilter = function addFilter(category, data){
      var exists = false
        , params = $location.search();

        // console.log('projects add filter data: ', data);

      $scope.filters.active[category] = $scope.filters.active[category] || [];

      // console.log('project add filter:', $scope.filters.active[category]);
      
      angular.forEach($scope.filters.active[category], function(filter){
        if (filter._id === data._id){
          exists = true;
        }
      }); 

      if (!exists){
        $scope.filters.active[category].push(data); 
        if (category in params){
          var old = [];
          if (params[category].indexOf(',') !== -1){
            old = params[category].split(',');
          } else {
            old.push(params[category]);
          }
          
          if (old.indexOf(data._id) === -1){
            old.push(data._id);
            $location.search(category, old.join(','));
          }

        } else {
          $location.search(category, data._id);  
        }
      }
    };

    $scope.removeFilter = function removeFilter(category, data){
      var params = $location.search();

      if ($scope.filters.active[category]){
        angular.forEach($scope.filters.active[category], function(filter, index){
          if (filter._id === data._id){
            $scope.filters.active[category].splice(index, 1);
          }
        });

        if ($scope.filters.active[category].length === 0){
          delete $scope.filters.active[category];
        }

        if (category in params){
          var old = [];

          if (params[category].indexOf(',') !== -1){
            old = params[category].split(',');
          } else {
            old.push(params[category]);
          }

          if (old.indexOf(data._id) !== -1){
            old.splice(old.indexOf(data._id), 1);
            $location.search(category, old.join(','));
          }

          if (!$location.search()[category]){
            $location.search(category, null);
          }
        }
      }
    };

    $scope.initFilter = function (){
      var params = $location.search();

      if (params.term !== ''){
        $scope.filters.term = params.term;
      } else {
        $location.search('term', null);
      }

      if (params.platforms) {
        if ($scope.filters.active.platforms) {
          $scope.filters.active.platforms = [];
        }
        var platformIds = params.platforms.split(',');
        platformIds.forEach(function (platformId){
          var $platform = Platform.get({ id: platformId });
          $platform.$promise.then(function (platform){
            $scope.addFilter('platforms', platform);
          });
        });
      }

      if (params.sports) {
        if ($scope.filters.active.sports) {
          $scope.filters.active.sports = [];
        }
        var sportIds = params.sports.split(',');
        sportIds.forEach(function (sportId){
          var $sport = Sport.get({ id: sportId });
          $sport.$promise.then(function (sport){
            $scope.addFilter('sports', sport);
          });
        });
      }

      if (params.industries) {
        if ($scope.filters.active.industries) {
          $scope.filters.active.industries = [];
        }
        var industryIds = params.industries.split(',');
        industryIds.forEach(function (industryId){
          var $industry = Industry.get({ id: industryId });
          $industry.$promise.then(function (industry){
            $scope.addFilter('industries', industry);
          });
        });
      }

      if (params.tags) {
        if ($scope.filters.active.tags) {
          $scope.filters.active.tags = [];
        }
        var executionTagIds = params.tags.split(',');
        executionTagIds.forEach(function (executionTagId){
          var $executionTag = ExecutionTag.get({ id: executionTagId });
          $executionTag.$promise.then(function (executionTag){
            $scope.addFilter('tags', executionTag);
          });
        });
      }

      if (params.term !== ''){
        $scope.filters.term = params.term;
      } else {
        $location.search('term', null);
      }
    };

    $scope.initFilter();
    
  }]);
