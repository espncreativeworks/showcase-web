'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collection-items.modal', {
        templateUrl: 'app/collection-items/modal/collection-items.modal.html',
        controller: 'CollectionItemsModalCtrl'
      });
  });