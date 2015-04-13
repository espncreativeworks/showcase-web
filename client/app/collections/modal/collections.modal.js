'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collections.modal', {
        templateUrl: 'app/collections/modal/collections.modal.html',
        controller: 'CollectionsModalCtrl'
      });
  });