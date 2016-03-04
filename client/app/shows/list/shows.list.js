'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shows.list', {
        url: '',
        templateUrl: 'app/shows/list/shows.list.html',
        controller: 'ShowsListCtrl'
      });
  });