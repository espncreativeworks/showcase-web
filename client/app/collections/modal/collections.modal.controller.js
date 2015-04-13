'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsModalCtrl',  ['$scope', '$modalInstance', 'Auth', 'Page', function ($scope, $modalInstance, Auth, Page) {

    var oldTitle = angular.copy(Page.meta.title)
      , oldClass = angular.copy(Page.body.class);

    Page.meta.title = 'Manage Collections';
    Page.body.class = oldClass + ' manage-collections-modal';

    $scope.me = Auth.getCurrentAccount();

    $scope.cancel = function (){
      Page.meta.title = oldTitle;
      Page.body.class = oldClass;
      $modalInstance.dismiss('cancel');
    };

    $scope.save = function (){
      // TODO: implement saving
      $modalInstance.close(true);
    };
    
  }]);
