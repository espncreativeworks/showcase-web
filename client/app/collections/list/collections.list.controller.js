'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsListCtrl', ['$scope', 'underscore', 'Page', 'Collection', 'CollectionItem', function ($scope, _, Page, Collection, CollectionItem) {

    Page.meta.title = 'Collections';
    Page.body.class = 'collections-list';

    $scope.collections = Collection.query();

    $scope.collections.$promise.then(function (collections){
      
      angular.forEach(collections, function (collection){
        collection.heroUrl = collection.heroUrl || null;
        
        if (!collection.heroUrl){
          var randomItemId = _.sample(collection.items)
            , $collectionItem = CollectionItem.get({ id: randomItemId });
            
          $collectionItem.$promise.then(function (collectionItem){
            var imageUrl = null;
            if (collectionItem.image){
              imageUrl = collectionItem.image.file.secure_url; // jshint ignore:line
            } else if (collectionItem.video){
              imageUrl = collectionItem.video.embed.thumbnailUrl;
            } else if (collectionItem.document.length){
              // TODO: implement document thumbailUrl
              // imageUrl = collectionItem.image.file.secure_url;
            } 
            collection.heroUrl = imageUrl;
          });
        }
      });

    });
  }]);
