'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('VideosDetailCtrl', ['$scope', '$stateParams', '$location', 'Page', 'Video', 'Vimeo', 'fullDescriptionFilter', function ($scope, $stateParams, $location, Page, Video, Vimeo, fullDescriptionFilter) {
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
      $scope.vimeoVideo = Vimeo.get({ 
        resource: 'videos', 
        id: video.vimeo.id 
      });
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

      $scope.vimeoVideo.$promise.then(function (video){
        var file = null
          , pictureUrl = $scope.sharing.imageUrl + '';
        
        video.files.forEach(function (_file){
          if (_file.quality === 'hd'){ file = _file; }
        });

        video.pictures.sizes.forEach(function (_picture){
          if (_picture.width === file.width && _picture.height === file.height ){
            pictureUrl = _picture.link;
          }
        });

        Page.meta.twitter['twitter:card'] = 'player';
        Page.meta.twitter['twitter:player'] = video.link;
        Page.meta.twitter['twitter:player:width'] = video.width;
        Page.meta.twitter['twitter:player:height'] = video.height;
        Page.meta.twitter['twitter:player:stream'] = file.link_secure;
        Page.meta.twitter['twitter:player:stream:content_type'] = file.type;

        Page.meta.facebook['og:type'] = 'video';
        Page.meta.facebook['og:video'] = file.link_secure;
        Page.meta.facebook['og:video:url'] = file.link_secure;
        Page.meta.facebook['og:video:secure_url'] = file.link_secure;
        Page.meta.facebook['og:video:type'] = file.type;
        Page.meta.facebook['og:video:width'] = file.width;
        Page.meta.facebook['og:video:height'] = file.height;
        Page.meta.facebook['og:video:type'] = file.type;
        Page.meta.facebook['og:video:image'] = pictureUrl;
      });

    });
  }]);
