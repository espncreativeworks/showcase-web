'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionItemsModalCtrl',  ['$scope', '$modalInstance', 'Page', function ($scope, $modalInstance, Page) {
    var oldTitle = angular.copy(Page.meta.title)
      , oldClass = angular.copy(Page.body.class);

    Page.meta.title = 'Manage Collection Item';
    Page.body.class = oldClass + ' manage-collection-item-modal';

    $scope.cancel = function (){
      Page.meta.title = oldTitle;
      Page.body.class = oldClass;
      $modalInstance.dismiss('cancel');
    };
    
  }]);
