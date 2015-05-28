'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('videoEmbed', ['$sce', '$modal', 'jQuery', 'Modernizr', function ($sce, $modal, $, Modernizr) {
    function generateSrc(scope){
      var video = angular.copy(scope.video)
        , params = {
          vimeo: {
            color: 'ffffff',
            title: 0,
            byline: 0,
            portrait: 0,
            badge: 0,
            autoplay: scope.autoplay ? 1 : 0,
          },
          youtube: {
            autoplay: scope.autoplay ? 1 : 0,
            modestbranding: 1,
            showinfo: 0,
            rel: 0
          }
        }
        , sources = {
          vimeo: 'https://player.vimeo.com/video/',
          youtube: 'https://www.youtube.com/embed/'
        }
        , providerKey = video.embed.providerName.toLowerCase();

      return sources[providerKey] + video[providerKey].id + '?' + $.param(params[providerKey]);
    }

    return {
      templateUrl: 'components/video-embed/video-embed.html',
      restrict: 'E',
      replace: true,
      scope: {
        video: '=',
        isModal: '=',
        isLink: '=',
        isInline: '=',
        autoplay: '='
      },
      link: function (scope) {
        scope.touch = Modernizr.touch;

        scope.open = function (){
          var modalInstance;
          modalInstance = $modal.open({
            templateUrl: 'app/videos/modal/videos.modal.html',
            controller: 'VideosModalCtrl',
            size: 'lg',
            resolve: {
              video: function (){ return scope.video; }
            }
          });
        };

        if (scope.video.embed) {
          scope.src = generateSrc(scope);
        } else {
          scope.$watch('video.$resolved', function (newVal) {
            if (newVal) {
              scope.src = generateSrc(scope);
            }
          });
        }
      }
    };
  }]);