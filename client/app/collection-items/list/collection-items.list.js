'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collection-items.list', {
        url: '',
        templateUrl: 'app/collection-items/list/collection-items.list.html',
        controller: 'CollectionItemsListCtrl'
      });
  });