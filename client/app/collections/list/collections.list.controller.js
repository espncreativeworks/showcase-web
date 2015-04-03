'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsListCtrl', ['$scope', 'Page', 'Collection', 'CollectionItem', function ($scope, Page, Collection, CollectionItem) {

    Page.meta.title = 'Collections';
    Page.body.class = 'collections-list';

    $scope.collections = Collection.query();

    $scope.collections.$promise.then(function (collections){
      
      angular.forEach(collections, function (collection){
        collection.$items = [];
        collection.heroUrl = null;
        angular.forEach(collection.items, function (itemId){
          if (!collection.heroUrl){
            var $collectionItem = CollectionItem.get({ id: itemId });
            collection.$items.push($collectionItem);
            $collectionItem.$promise.then(function (collectionItem){
              var imageUrl = null;
              if (collectionItem.images.length){
                imageUrl = collectionItem.images[0].file.secure_url;
              } else if (collectionItem.videos.length){
                imageUrl = collectionItem.videos[0].embed.thumbnailUrl;
              } else if (collectionItem.documents.length){
                // TODO: implement document thumbailUrl
                // imageUrl = collectionItem.image.file.secure_url;
              } 
              collection.heroUrl = imageUrl;
            });
          }
        });

      });

    });
  }]);
