'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsListCtrl', ['$rootScope', '$scope', '$stateParams', 'underscore', 'Account', 'Me', 'Page', 'Collection', 'CollectionItem', function ($rootScope, $scope, $stateParams, _, Account, Me, Page, Collection, CollectionItem) {

    Page.body.class = 'collections-list';
    var title = null;

    if ($rootScope.$state.includes('me')){
      title = 'My Collections';
      $scope.collectionDetailRoute = function (collection){ 
        return '/me/collections/' + collection.slug;
      };
      $scope.collections = Me.queryCollections();
    } else if ($rootScope.$state.includes('users')){
      $scope.collectionDetailRoute = function (collection){ 
        return '/users/' + $stateParams.userId + '/collections/' + collection.slug;
      };
      $scope.collections = Account.queryCollections({ id: $stateParams.userId });
    } else {
      title = 'Collections';
      $scope.collectionDetailRoute = function (collection){ 
        return '/collections/' + collection.slug;
      };
      $scope.collections = Collection.query();
    }

    // change title only if it has already been set
    if (title){
      Page.meta.title = title;
      $scope.pageTitle = title;
    }

    $scope.collections.$promise.then(function (collections){

      // only change title when it hasn't already been set
      if (!title) {
        var displayName = collections[0].creator.name.indexOf(' ') >= 0 ? collections[0].creator.name.split(' ')[0] : collections[0].creator.name;
        title = displayName + '\'s Collections';

        Page.meta.title = title;
        $scope.pageTitle = title;
      }

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
