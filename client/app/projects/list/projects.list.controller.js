'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsListCtrl', ['$rootScope', '$scope', 'underscore', 'Page', 'Project', 'ProjectFilters', 'Execution', 'Brand', function ($rootScope, $scope, _, Page, Project, ProjectFilters, Execution, Brand) {
    Page.meta.title = 'Projects';
    Page.meta.description = 'ESPN CreativeWorks projects.';
    Page.meta.keywords = 'espn creativeworks projects, espn ads';
    Page.meta.twitter['twitter:title'] = Page.meta.title;
    Page.meta.twitter['twitter:description'] = Page.meta.description;
    Page.meta.facebook['og:description'] = Page.meta.description;
    Page.body.class = $rootScope.$state.includes('projects') ? 'project-list' : Page.body.class;
    $scope.projects = Project.search();
    $scope.filters = ProjectFilters;

    $scope.$watch('filteredProjects', function (newProjects, oldProjects){
      if ($scope.projects.$resolved && angular.isDefined(newProjects) && angular.isDefined(oldProjects) && !_.isEqual(newProjects, oldProjects) ){
        $scope.$broadcast('projects:updated', newProjects);
      }
    }, true);

    $scope.projects.$promise.then(function (projects){
      $scope.$broadcast('projects:updated', projects); 
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
          // default to false if filter is set but project doesn't have the key property
          return false;
        } else {
          // default to true if no filter set or project doesn't have the key property
          return true;
        }
      };
    }

    initFilters(filterKeys);

  }]);
