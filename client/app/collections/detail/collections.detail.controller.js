'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsDetailCtrl', ['$rootScope', '$scope', '$stateParams', 'jQuery', 'Page', 'Me', 'Auth', 'Account', 'Collection', 'CollectionItem', function ($rootScope, $scope, $stateParams, $, Page, Me, Auth, Account, Collection, CollectionItem) {
    Page.meta.twitter.reset();
    Page.meta.facebook.reset();
    Page.body.class = 'collection-detail';

    $scope.canEdit = false;
    $scope.showNotes = false;

    if ($rootScope.$state.includes('me')){
      $scope.collection = Me.getCollection({ resourceId: $stateParams.collectionId });
    } else if ($rootScope.$state.includes('users')){
      $scope.collection = Account.getCollection({ 
        id: $stateParams.userId,
        resourceId: $stateParams.collectionId 
      });
    } else {
      $scope.collection = Collection.get({ id: $stateParams.id });
    } 

    $scope.collection.$promise.then(function (collection){
      // console.log("collection: ", collection);
      // console.log("collection creator: ", collection.creator);
      collection.creator.$displayName = collection.creator.name.indexOf(' ') >= 0 ? collection.creator.name.split(' ')[0] : collection.creator.name;
      collection.creator.$profileImageUrl = $.cloudinary.url('default_profile_image'); // jshint ignore:line
      Page.meta.title = collection.meta.title || (collection.title + ' Collection Details');

      if (Auth.isLoggedIn()) {
        // console.log("logged in!");
        $scope.getCurrentAccount = Auth.getCurrentAccount;
        // console.log("account name: " + $scope.getCurrentAccount().name + " creator name: " + collection.creator.name);

        if ($scope.getCurrentAccount().name == collection.creator.name) {
          // console.log("names are the same!");
          $scope.canEdit = true;
        }
      }

      $scope.collection.$items = [];
      angular.forEach(collection.items, function (itemId){ 
        var $item = CollectionItem.get({ id: itemId });
        $scope.collection.$items.push($item);
        $item.$promise.then(function (item){
          var media = null;
          item.url = null;
          item.thumbnailUrl = null;
          item.title = null;
          item.description = null;

          if (item.image){
            media = item.image;
            item.url = media.meta.uris.web;
            item.thumbnailUrl = media.file.secure_url; // jshint ignore:line
            item.title = media.title;
            item.description = media.description.brief;
          } else if (item.video){
            media = item.video;
            item.url = media.meta.uris.web;
            item.thumbnailUrl = media.embed.thumbnailUrl;
            item.title = media.title || media.embed.title;
            
            if (media.description.brief.html){
              item.description = media.description.brief;
            } else if (media.caption.html){
              item.description = media.caption;  
            } else if (media.embed.description){
              item.description = { html: media.embed.description, md: media.embed.description };
            }
          }
        });
      });
    });

    $scope.showNote = function(item) {
      // console.log("showNote trigger: ", item);
      // console.log("e.current target: ", e);
      // console.log($('.collection-item-form-container.'+item.slug));

      $('.collection-item-form-container.'+item.slug).css("display","block");
      // $scope.showNotes = true;
    };
    $scope.updateCollectionItem = function(formName, item) {
      // console.log(formName);
      // console.log("update collection item trigger: ", item);
      CollectionItem.update({_id: item._id, notes: item.notes});
    }

    $scope.deleteItem = function(item) {
      // console.log("delete item: ", item);
      // console.log("delete item.id: ", item._id);
      CollectionItem.destroy({id: item._id});
      window.location.reload();
    }
    
  }]);
