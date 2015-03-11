'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('VideosModalCtrl',  ['$scope', '$stateParams', '$modalInstance', 'Page', 'video', function ($scope, $stateParams, $modalInstance, Page, video) {
    $scope.video = video;

    var oldTitle = angular.copy(Page.meta.title)
      , oldClass = angular.copy(Page.body.class);

    Page.meta.title = 'Watching ' + ($scope.video.title || $scope.video.embed.title);
    Page.body.class = oldClass + ' video-modal';

    $scope.cancel = function (){
      Page.meta.title = oldTitle;
      Page.body.class = oldClass;
      $modalInstance.dismiss('cancel');
    };
    
  }]);
