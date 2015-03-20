'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsDetailCtrl', ['$scope', '$stateParams', '$sce', 'Page', 'Project', 'People', 'fullDescriptionFilter', 'jQuery', function ($scope, $stateParams, $sce, Page, Project, People, fullDescriptionFilter, $) {
    Page.body.class = 'project-detail';

    $scope.fullpage = { 
      options:{
        autoScrolling: false,
        fitToSection: false,
        scrollOverflow: true
      }
    };

    $scope.project = Project.get({ id: $stateParams.id });
    
    $scope.project.$promise.then(function (project){
      Page.meta.title = project.meta.title || (project.title + ' Project Details');
      Page.meta.description = project.meta.description || fullDescriptionFilter(project.description, { plaintext: true });
      $scope.project.hero.file.transformedUrl = $.cloudinary.url($scope.project.hero.file.public_id, { secure: true, transformation: 'project_detail_hero' }); // jshint ignore:line
      $scope.project.$related = [];

      angular.forEach(project.related, function (projectId, i){
        if (i < 2){
          $scope.project.$related.push(Project.get({ id: projectId }));
        }
      });

      $scope.project.$executions = Project.executions({ id: project._id }); 
      return $scope.project.$executions.$promise;
      
    }).then(function (executions){
      $scope.project.$tags = [];

      angular.forEach(executions, function (execution){
        angular.forEach(execution.tags, function (tag){
          var platformId = tag.platform + '';
          tag.platform = {};
          tag.platform._id = platformId;
          tag.platform.slug = execution.platform.slug;
          $scope.project.$tags.push(tag);  
        });

        angular.forEach(execution.videos, function (video){
          video.embed.trustedHtml = $sce.trustAsHtml(video.embed.html);
          video.$people = [];
          angular.forEach(video.people, function (personId){
            var person = People.get({ id: personId });
            video.$people.push(person);
          });
        });   
      });
    });
    
  }]);
