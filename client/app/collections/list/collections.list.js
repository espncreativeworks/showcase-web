'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('collections.list', {
        url: '',
        templateUrl: 'app/collections/list/collections.list.html',
        controller: 'CollectionsListCtrl'
      });
  });