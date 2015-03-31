'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('CollectionsListCtrl', function ($scope, Collection) {
    $scope.collections = Collection.query();
  });
