'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsListCtrl', ['$rootScope', '$scope', 'underscore', 'Page', 'Project', 'ProjectFilters', 'Execution', 'Brand', function ($rootScope, $scope, _, Page, Project, ProjectFilters, Execution, Brand) {
    Page.meta.title = 'Projects';
    Page.body.class = $rootScope.$state.includes('projects') ? 'project-list' : Page.body.class;
    $scope.projects = Project.query();
    $scope.filters = ProjectFilters;
    $scope.brands = { todo: 0, resolved: 0 };
    $scope.executions = { todo: 0, resolved: 0 };

    $scope.$watch('filteredProjects', function (newProjects, oldProjects){
      if ($scope.projects.$resolved && angular.isDefined(newProjects) && angular.isDefined(oldProjects) && !_.isEqual(newProjects, oldProjects) ){
        $scope.$broadcast('projects:filtered', newProjects);  
      }
    }, true);

    $scope.$watch('brands', function (newVal, oldVal){
      if (newVal.resolved > 0 && newVal.resolved == newVal.todo){
        $scope.$broadcast('brands:resolved', $scope.filteredProjects);  
      }
    }, true);

    $scope.$watch('executions', function (newVal, oldVal){
      if (newVal.resolved > 0 && newVal.resolved == newVal.todo){
        $scope.$broadcast('executions:resolved', $scope.filteredProjects);  
      }
    }, true);

    $scope.projects.$promise.then(function (projects){

      angular.forEach(projects, function (project){
        var _executions = []
          , _brands = [];

        angular.forEach(project.brands, function (brand){
          _brands.push(Brand.get({ id: brand._id }));
          $scope.brands.todo++;
        });

        angular.forEach(_brands, function (brandResource){
          brandResource.$promise.then(function (brand){
            // replace brand IDs with brand objects on project
            var brandIndex = project.brands.indexOf(brand._id);
            project.brands.splice(brandIndex, 1, brand);

            // add industries to list on project
            project.industries = project.industries || [];
            project.industries = project.industries.concat(brand.industries);
            project.industries = _.uniq(project.industries, function (i){ return i._id; });
            
            $scope.brands.resolved++;
          });
        });

        angular.forEach(project.executions, function (executionId){
          _executions.push(Execution.get({ id: executionId }));
          $scope.executions.todo++;
        });

        angular.forEach(_executions, function (executionResource){
          executionResource.$promise.then(function (execution){
            // replace execution IDs with execution objects on project
            var executionIndex = project.executions.indexOf(execution._id);
            project.executions.splice(executionIndex, 1, execution);

            // add platforms to list on project
            project.platforms = project.platforms || [];
            project.platforms.push(execution.platform)
            project.platforms = _.uniq(project.platforms, function (p){ return p._id; });

            // add tags to list on project
            project.tags = project.tags || [];
            project.tags = project.tags.concat(execution.tags)
            project.tags = _.uniq(project.tags, function (t){ return t._id; });
            
            $scope.executions.resolved++;
          });
        });

      });

    });

    var filterKeys = ['platforms', 'sports', 'industries', 'tags'];

    function initFilters(keys){
      angular.forEach(keys, initFilter);
    }

    function initFilter (key){
      $scope[key + 'Filter'] = function (project){
        var result = false;
        if ($scope.filters.active[key] && project[key]){
          var filterIds = _.map($scope.filters.active[key], function (item){ return item._id; })
            , projectKeyIds = _.map(project[key], function (item){ return item._id; });
          
          // check each project keyId against those in the filter
          // if found, set result to true
          angular.forEach(projectKeyIds, function (keyId){
            if (filterIds.indexOf(keyId) > -1){
              result = true;
            }
          });

          return result;
        } else if ($scope.filters.active[key] && !project[key]){
          // default to true if filter is set but project doesn't have the key property
          return false;
        } else {
          // default to true if no filter set or project doesn't have the key property
          return true;
        }
      }
    }

    initFilters(filterKeys);

  }]);
