'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsDetailCtrl', ['$scope', '$stateParams', 'Page', 'Collection', 'CollectionItem', function ($scope, $stateParams, Page, Collection, CollectionItem) {
    Page.body.class = 'collection-detail';
    $scope.collection = Collection.get({ id: $stateParams.id });

    $scope.collection.$promise.then(function (collection){
      Page.meta.title = collection.meta.title || (collection.title + ' Collection Details');
      $scope.collection.$items = [];
      angular.forEach(collection.items, function (itemId){ 
        var $item = CollectionItem.get({ id: itemId });
        $scope.collection.$items.push($item);
        $item.$promise.then(function (item){
          var media = null;
          item.thumbnailUrl = null;
          item.title = null;
          item.description = null;

          if (item.images.length){
            media = item.images[0];
            item.thumbnailUrl = media.file.secure_url;
            item.title = media.title;
            item.description = media.description.brief;
          } else if (item.videos.length){
            media = item.videos[0];
            item.thumbnailUrl = media.embed.thumbnailUrl;
            item.title = media.title || media.embed.title;
            
            if (media.description.brief.html){
              item.description = media.description.brief;
            } else if (media.caption.html){
              item.description = media.caption;  
            } else if (media.embed.description){
              item.description = { html: media.embed.description, md: media.embed.description }
            }
          }
        });
      });
    });
    
  }]);
