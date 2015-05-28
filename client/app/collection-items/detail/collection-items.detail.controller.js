'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionItemsDetailCtrl', function ($scope, $stateParams, CollectionItem, Page, fullDescriptionFilter) {
    $scope.collectionItem = {};
    $scope.collectionItem = CollectionItem.get({ id: $stateParams.id }); 

    $scope.collectionItem.$promise.then(function (collectionItem){
      Page.meta.title = collectionItem.meta.title || (collectionItem.title + ' Collection Item Details');
      Page.meta.description = collectionItem.meta.description || fullDescriptionFilter(collectionItem.description, { plaintext: true });
    });
  });
