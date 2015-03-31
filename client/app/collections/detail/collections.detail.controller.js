'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsDetailCtrl', function ($scope, $stateParams, Page, Collection, CollectionItem) {
    Page.body.class = 'collection-detail';
    $scope.collection = Collection.get({ id: $stateParams.id });

    $scope.collection.$promise.then(function (collection){
      Page.meta.title = collection.meta.title || (collection.title + ' Collection Details');
      Page.meta.description = collection.meta.description || fullDescriptionFilter(collection.description, { plaintext: true });
      $scope.collection.$items = [];
      angular.forEach(collection.items, function (){ 
        $scope.collection.$items.push(CollectionItem.get({ id: collection._id }));
      });
    });
    
  });
