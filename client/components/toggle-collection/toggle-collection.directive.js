'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('toggleCollection', ['$modal', 'Auth', 'Collection', 'CollectionItem', function ($modal, Auth, Collection, CollectionItem) {
    function updateActionText (scope){
      if (scope.selected){
        scope.actionText = 'Remove From Collection';  
      } else {
        scope.actionText = 'Add To Collection';  
      }
    }

    function toggleSelected (scope, element){
      scope.selected = !scope.selected;
      updateActionText(scope);
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
      link: function (scope, element, attrs) {
        // set defaults
        scope.loading = false;
        scope.selected = false;
        scope.actionText = '';
        updateActionText(scope);
        scope.updateSelection = function (){
          scope.loading = true;
          
          var modalInstance = $modal.open({
            templateUrl: 'app/collections/modal/collections.modal.html',
            controller: 'CollectionsModalCtrl',
            size: 'lg',
            resolve: {
              media: function (){ return scope.media; },
              type: function (){ return scope.type; }
            }
          });

          modalInstance.result.then(function (saved){
            scope.loading = false;
            if (saved){
              toggleSelected(scope, element);
            }
          }, function (){
            scope.loading = false;
          });
        };
      }
    };
  }]);