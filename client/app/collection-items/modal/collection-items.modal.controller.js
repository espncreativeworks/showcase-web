'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionItemsModalCtrl',  ['$scope', '$modalInstance', 'underscore', 'Auth', 'Page', 'Collection', 'CollectionItem', 'async', 'media', 'type', 'me', function ($scope, $modalInstance, _, Auth, Page, Collection, CollectionItem, async, media, type, me) {

    var oldTitle = angular.copy(Page.meta.title)
      , oldClass = angular.copy(Page.body.class);

    Page.meta.title = 'Manage Collection Item';
    Page.body.class = oldClass + ' manage-collection-item-modal';
    $scope.isNewCollectionItem = true;
    $scope.notes = null;
    $scope.me = me || Auth.getCurrentAccount();
    $scope.me.$collections = $scope.me.$collections || [];
    $scope.me.$collectionItems = $scope.me.$collectionItems || [];
    $scope.selectedCollections = [];

    $scope.visibilityOptions = [
      { label: 'Public', value: 'public' },
      { label: 'Private', value: 'private' }
    ];

    // console.log($scope.me);

    $scope.media = media;
    $scope.type = type;

    if (!$scope.me.$collections.length) {
      angular.forEach($scope.me.collections, function (collectionId){
        var $collection = Collection.get({ id: collectionId });
        // console.log($collection);
        $scope.me.$collections.push($collection);

        $collection.$promise.then(function (collection){
          if (!$scope.me.$collectionItems.length) {
            angular.forEach(collection.items, function (itemId){
              var $collectionItem = CollectionItem.get({ id: itemId });
              $collectionItem.$promise.then(function (collectionItem){
                if (collectionItem[$scope.type] && collectionItem[$scope.type]._id === $scope.media._id){
                  var selectedCollectionIds = _.map($scope.selectedCollections, function (_collection){ return _collection._id; });
                  if (selectedCollectionIds.indexOf($collection._id) === -1) {
                    $scope.selectedCollections.push($collection);  
                  }
                }
                $scope.me.$collectionItems.push(collectionItem);
              });
            });
          } else {
            angular.forEach($scope.me.$collectionItems, function ($collectionItem){
              $collectionItem.$promise.then(function (collectionItem){
                if (collectionItem[$scope.type] && collectionItem[$scope.type]._id === $scope.media._id){
                  var selectedCollectionIds = _.map($scope.selectedCollections, function (_collection){ return _collection._id; });
                  if (selectedCollectionIds.indexOf($collection._id) === -1) {
                    $scope.selectedCollections.push($collection);  
                  }
                }
                $scope.me.$collectionItems.push(collectionItem);
              });
            });
          }
        });
      });
    } else {
      angular.forEach($scope.me.$collections, function ($collection) {
        $collection.$promise.then(function (collection){
          if (!$scope.me.$collectionItems.length) {
            angular.forEach(collection.items, function (itemId){
              var $collectionItem = CollectionItem.get({ id: itemId });
              $collectionItem.$promise.then(function (collectionItem){
                if (collectionItem[$scope.type] && collectionItem[$scope.type]._id === $scope.media._id){
                  var selectedCollectionIds = _.map($scope.selectedCollections, function (_collection){ return _collection._id; });
                  if (selectedCollectionIds.indexOf($collection._id) === -1) {
                    $scope.selectedCollections.push($collection);  
                  }
                }
                $scope.me.$collectionItems.push(collectionItem);
              });
            });
          } else {
            angular.forEach($scope.me.$collectionItems, function ($collectionItem){
              $collectionItem.$promise.then(function (collectionItem){
                if (collectionItem[$scope.type] && collectionItem[$scope.type]._id === $scope.media._id){
                  var selectedCollectionIds = _.map($scope.selectedCollections, function (_collection){ return _collection._id; });
                  if (selectedCollectionIds.indexOf($collection._id) === -1) {
                    $scope.selectedCollections.push($collection);  
                  }
                }
                $scope.me.$collectionItems.push(collectionItem);
              });
            });
          }
        });
      });
    }

    $scope.hideWidget = true;
    $scope.toggleWidget = function (){
      $scope.hideWidget = !$scope.hideWidget;
    };

    $scope.hideCreateForm = true;
    $scope.toggleCreateForm = function (){
      $scope.hideCreateForm = !$scope.hideCreateForm;
    };

    $scope.createCollection = function (form){
      if (form.$valid) {
        var newCollection = new Collection($scope.newCollection);
        newCollection.creator = $scope.me._id;
        newCollection.status = 'published';
        newCollection.$save(function (_newCollection){
          $scope.me.$collections.push(_newCollection);
          $scope.selectedCollections.push(_newCollection);
          $scope.newCollection = null;
          $scope.toggleCreateForm();
        }, function (err){
            console.error(err);
        });
      }
    };

    $scope.cancel = function (){
      Page.meta.title = oldTitle;
      Page.body.class = oldClass;
      $modalInstance.dismiss('cancel');
    };

    $scope.save = function (){

      var tasks = [];

      angular.forEach($scope.selectedCollections, function (collection){
        var hasItem = false
          , $item = null;

        angular.forEach(collection.items, function (itemId){
          angular.forEach($scope.me.$collectionItems, function (collectionItem){
            if (itemId === collectionItem._id && collectionItem[$scope.type] && collectionItem[$scope.type]._id === $scope.media._id) {
              hasItem = true;              
            }
          });
        });

        // if this selected collection does not include an item with this media object
        // create a new item and save
        if (!hasItem) {
          $item = new CollectionItem();
          $item[$scope.type] = $scope.media._id;
          $item.title = $scope.media.name || $scope.media.title || $scope.media.embed.title;
          $item.belongsTo = collection._id; // added to collection on server-side
          if ($scope.notes && $scope.notes.trim() != '') {
            $item.notes = $scope.notes.trim();
          }
          tasks.push(function (callback){ 
            var onsuccess, onerror;

            onsuccess = function (item) {
              $scope.me.$collectionItems.push(item); 
              callback(null, item);
            };

            onerror = function (err) {
              console.error(err);
              callback(err, null);
            }; 

            $item.$save(onsuccess, onerror);
          });
        }

      });
      
      // run at most 3 tasks in parallel 
      async.parallelLimit(tasks, 3, function (err, results){
        if (!err) {
          Page.meta.title = oldTitle;
          Page.body.class = oldClass;
          $modalInstance.close(results); 
        }
      });

    };
    
  }]);