'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('VideosListCtrl', ['$scope', 'underscore', 'Page', 'Video', function ($scope, _, Page, Video) {
  	Page.meta.title = 'Videos';
  	Page.meta.description = 'Videos from ESPN CreativeWorks';
  	Page.meta.keywords = 'espn creativeworks videos, espn creative works videos';
  	Page.body.class = 'video-list';

    $scope.videos = Video.query();
    $scope.videos.$promise.then(function (videos){
    	$scope.$videos = _.chain(videos)
                        .filter(function (video){
                          return video.usage === 'execution' && video.platform;
                        })
                        .sortBy(function (videos){
                          return videos.embed.thumbnailHeight * -1;
                        })
                        .groupBy(function (video){
                          return video.platform.name;
                        })
                        .value();
      console.log($scope.$videos);
    })
  }]);
