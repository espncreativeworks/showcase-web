'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsDetailCtrl', ['$scope', '$location', '$stateParams', '$sce', 'Page', 'Project', 'People', 'fullDescriptionFilter', 'jQuery', function ($scope, $location, $stateParams, $sce, Page, Project, People, fullDescriptionFilter, $) {
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
      Page.meta.keywords = project.meta.keywords || 'espn creativeworks ' + project.title + ', espn ' + project.title;
      Page.meta.twitter['twitter:title'] = Page.meta.title;
      Page.meta.twitter['twitter:description'] = Page.meta.description;
      Page.meta.facebook['og:title'] = Page.meta.title;
      Page.meta.facebook['og:description'] = Page.meta.description;
      $scope.project.hero.file.sharingUrl = $.cloudinary.url($scope.project.hero.file.public_id, { version: $scope.project.hero.file.version, transformation: 'social_sharing' }); // jshint ignore:line
      Page.meta.twitter['twitter:image:src'] = $scope.project.hero.file.sharingUrl;
      Page.meta.facebook['og:image'] = $scope.project.hero.file.sharingUrl;
      $scope.project.hero.file.transformedUrl = $.cloudinary.url($scope.project.hero.file.public_id, { version: $scope.project.hero.file.version, transformation: 'project_detail_hero' }); // jshint ignore:line
      $scope.project.meta.canonicalUrl = $location.protocol() + '://' + $location.host() + project.meta.uris.web;
      $scope.project.sharing = {
        url: $scope.project.meta.canonicalUrl,
        text: 'Checkout ' + project.tagline + ' from ESPN CreativeWorks'
      };
      $scope.project.$related = [];

      if (!project.related.length){
        $scope.project.$related = Project.featured();
        $scope.project.$related.$promise.then(function (featuredProjects){
          featuredProjects = angular.copy(featuredProjects);
          featuredProjects = _.shuffle(featuredProjects);
          featuredProjects = _.sample(featuredProjects, 2);
          $scope.project.$related = featuredProjects;
        });
      } else {
        angular.forEach(project.related, function (projectId, i){
          if (i < 2){
            $scope.project.$related.push(Project.get({ id: projectId }));
          }
        });
      }

      $scope.project.$executions = Project.executions({ id: project._id }); 
      return $scope.project.$executions.$promise;
      
    }).then(function (executions){
      executions.sort(function (a, b){
        return a.sortOrder - b.sortOrder;
      });

      $scope.project.$tags = [];

      angular.forEach(executions, function (execution){
        
        execution.videos.sort(function (a, b){
          return a.sortOrder - b.sortOrder;
        });

        execution.images.sort(function (a, b){
          return a.sortOrder - b.sortOrder;
        });

        execution.documents.sort(function (a, b){
          return a.sortOrder - b.sortOrder;
        });

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
