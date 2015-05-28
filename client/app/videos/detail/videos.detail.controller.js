'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('VideosDetailCtrl', ['$scope', '$stateParams', '$location', 'Page', 'Video', 'fullDescriptionFilter', function ($scope, $stateParams, $location, Page, Video, fullDescriptionFilter) {
    Page.body.class = 'video-detail';

    $scope.video = Video.get({ id: $stateParams.id });

    $scope.video.$promise.then(function (video){
      Page.meta.title = video.meta.title || video.title + ' - Video Details';
      Page.meta.description = video.meta.description || video.caption.md || video.embed.description || fullDescriptionFilter(video.description, { plaintext: true }) ;
      Page.meta.keywords = video.meta.keywords || 'espn creativeworks video ' + video.title + ', espn ' + video.title;
      Page.meta.twitter['twitter:title'] = Page.meta.title;
      Page.meta.twitter['twitter:description'] = Page.meta.description;
      Page.meta.facebook['og:title'] = Page.meta.title;
      Page.meta.facebook['og:description'] = Page.meta.description;
      $scope.sharing = {
      	imageUrl: video.embed.thumbnailUrl,
      	url: $location.protocol() + '://' + $location.host() + video.meta.uris.web,
      	text: 'Checkout ' + video.title + ' from ESPN CreativeWorks'
      };
      Page.meta.twitter['twitter:image:src'] = $scope.sharing.imageUrl;
      Page.meta.facebook['og:image'] = $scope.sharing.imageUrl;
      if (video.people.length){
      	angular.forEach(video.people, function (person){
      		Page.meta.keywords += ', ' + person.name.first + ' ' + person.name.last;
      	});
      }
    });
  }]);
