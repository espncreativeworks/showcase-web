'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('toggleCollection', ['$modal', function ($modal) {
    function updateActionText (scope){
      if (scope.selected){
        scope.actionText = 'Remove From Collection';  
      } else {
        scope.actionText = 'Add To Collection';  
      }
    }

    function toggleSelected (scope){
      scope.selected = !scope.selected;
      updateActionText(scope);
    }

    function initSelection (scope) {
      scope.$me.$collections = scope.$me.$collections || [];
      scope.$me.$collectionItems = scope.$me.$collectionItems || [];

      if (!scope.$me.$collections.length) {
        angular.forEach(scope.$me.collections, function (collectionId){
          var $collection = Collection.get({ id: collectionId });
          // console.log($collection);
          scope.$me.$collections.push($collection);

          $collection.$promise.then(function (collection){
            console.log('collection => ', collection);
            if (!scope.$me.$collectionItems.length) {
              angular.forEach(collection.items, function (itemId){
                var $collectionItem = CollectionItem.get({ id: itemId });
                $collectionItem.$promise.then(function (collectionItem){
                  console.log('collectionItem => ', collectionItem);
                  console.log('%s == %s ? %s', collectionItem[scope.type]._id, scope.media._id, collectionItem[scope.type]._id === scope.media._id);
                  if (collectionItem[scope.type] && collectionItem[scope.type]._id === scope.media._id){
                    scope.selected = true;
                  }
                  scope.$me.$collectionItems.push(collectionItem);
                });
              });
            } else {
              angular.forEach(scope.me.$collectionItems, function ($collectionItem){
                $collectionItem.$promise.then(function (collectionItem){
                  if (collectionItem[scope.type] && collectionItem[scope.type]._id === scope.media._id){
                    scope.selected = true;
                  }
                  scope.$me.$collectionItems.push(collectionItem);
                });
              });
            }
          });
        });
      } else {
        angular.forEach(scope.$me.$collections, function ($collection) {
          $collection.$promise.then(function (collection){
            if (!scope.$me.$collectionItems.length) {
              angular.forEach(collection.items, function (itemId){
                var $collectionItem = CollectionItem.get({ id: itemId });
                $collectionItem.$promise.then(function (collectionItem){
                  if (collectionItem[scope.type] && collectionItem[scope.type]._id === scope.media._id){
                    scope.selected = true;
                  }
                  scope.$me.$collectionItems.push(collectionItem);
                });
              });
            } else {
              angular.forEach(scope.$me.$collectionItems, function ($collectionItem){
                $collectionItem.$promise.then(function (collectionItem){
                  if (collectionItem[scope.type] && collectionItem[scope.type]._id === scope.media._id){
                    scope.selected = true;
                  }
                  scope.$me.$collectionItems.push(collectionItem);
                });
              });
            }
          });
        });
      }
    }

    return {
      templateUrl: 'components/toggle-collection/toggle-collection.html',
      scope: {
        media: '=',
        type: '=',
        mode: '='
      },
      replace: true,
      restrict: 'EA',
      link: function (scope) {
        // set defaults
        scope.$me = null;
        scope.isLoggedIn = Auth.isLoggedIn();
        scope.loading = false;
        scope.selected = false;
        scope.actionText = '';

        if (scope.isLoggedIn) {
          scope.$me = Auth.getCurrentAccount();
          initSelection(scope);
        }

        scope.$watch('selected', function (){
          updateActionText(scope);
        });
        
        updateActionText(scope);

        scope.updateSelection = function (){
          scope.loading = true;
          
          var modalInstance = $modal.open({
            templateUrl: 'app/collection-items/modal/collection-items.modal.html',
            controller: 'CollectionItemsModalCtrl',
            size: 'lg',
            resolve: {
              media: function (){ return scope.media; },
              type: function (){ return scope.type; },
              me: function (){ return scope.$me; }
            }
          });

          modalInstance.result.then(function (saved){
            scope.loading = false;
            if (saved){
              toggleSelected(scope, saved);
            }
          }, function (){
            scope.loading = false;
          });
        };
      }
    };
  }]);