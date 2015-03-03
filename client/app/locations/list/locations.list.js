'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('locations.list', {
        url: '',
        templateUrl: 'app/locations/list/locations.list.html',
        controller: 'LocationsListCtrl'
      });
  });