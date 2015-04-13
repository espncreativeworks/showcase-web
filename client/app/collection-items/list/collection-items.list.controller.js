'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionItemsListCtrl', function ($scope, CollectionItem) {
    $scope.collectionItems = CollectionItem.query();
  });
