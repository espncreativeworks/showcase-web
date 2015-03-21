'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('HomeCtrl', ['$scope', 'Page', 'Project', 'Video', '$modal', function ($scope, Page, Project, Video, $modal) {
    Page.meta.title = 'Home'; 
    Page.body.class = 'home';
    $scope.projects = Project.featured();
    $scope.fullpage = { options: {} };
    $scope.reel = Video.get({ id: 'espn-creativeworks' });

    $scope.projects.$promise.then(function (projects){
      var anchors = ['intro'];
      angular.forEach(projects, function (project){
        anchors.push(project.slug);
      });
      anchors.push('locations');
      $scope.fullpage.options = {
        navigation: true,
        navigationPosition: 'right',
        anchors: anchors
      };
    });

    $scope.watchReel = function (){
      var modalInstance;
      modalInstance = $modal.open({
        templateUrl: 'app/videos/modal/videos.modal.html',
        controller: 'VideosModalCtrl',
        size: 'lg',
        resolve: {
          video: function (){ return $scope.reel; }
        }
      });
    };

  }]);
