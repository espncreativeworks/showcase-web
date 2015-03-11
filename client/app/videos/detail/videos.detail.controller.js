'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('VideosDetailCtrl', ['$scope', '$stateParams', 'Page', 'Video', 'fullDescriptionFilter', function ($scope, $stateParams, Page, Video, fullDescriptionFilter) {
    Page.body.class = 'video-detail';

    $scope.video = Video.get({ id: $stateParams.id });

    $scope.video.$promise.then(function (video){
      Page.meta.title = video.meta.title || video.title + ' - Video Details';
      Page.meta.description = video.meta.description || fullDescriptionFilter(video.description, { plaintext: true }) || video.embed.description;
    });
  }]);
