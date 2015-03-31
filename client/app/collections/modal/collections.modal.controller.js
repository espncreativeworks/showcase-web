'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsModalCtrl',  ['$scope', '$modalInstance', 'Auth', 'Page', 'Collection', 'media', 'type', function ($scope, $modalInstance, Auth, Page, Collection, media, type) {

    var oldTitle = angular.copy(Page.meta.title)
      , oldClass = angular.copy(Page.body.class);

    Page.meta.title = 'Manage Collections';
    Page.body.class = oldClass + ' manage-collections-modal';

    $scope.me = Auth.getCurrentAccount();
    $scope.me.$collections = [];

    console.log($scope.me);

    $scope.media = media;
    $scope.type = type;

    // angular.forEach($scope.me.collections, function (collectionId){
    //   var $collection = Collection.get({ id: collectionId });
    //   console.log($collection);
    //   $scope.me.$collections.push($collection);
    // });

    for (var i = 0; i < 10; i++){
      $scope.me.$collections.push({ title: 'Collection ' + i });
    }

    $scope.selectedCollections = [];

    $scope.hideWidget = true;
    $scope.toggleWidget = function (){
      $scope.hideWidget = !$scope.hideWidget;
    };

    $scope.hideCreateForm = true;
    $scope.toggleCreateForm = function (){
      $scope.hideCreateForm = !$scope.hideCreateForm;
    };

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
