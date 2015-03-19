'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ProjectsDetailCtrl', ['$scope', '$stateParams', '$sce', 'Page', 'Project', 'fullDescriptionFilter', 'jQuery', function ($scope, $stateParams, $sce, Page, Project, fullDescriptionFilter, $) {
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
        });   
      });
      
      $scope.project.$related = $scope.project.related;
      return $scope.project.$related.$promise;
        
    }).then(function(){
    	$scope.project.$related = [];
    	
    	for(var i = 0; i < $scope.project.related.length; i++){
    	   $scope.project.$rel = Project.get({ id: $scope.project.related[i] });
    	   $scope.project.$related.push($scope.project.$rel);
    	}
    	
    });
    
  }]);
