'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sports.list', {
        url: '',
        templateUrl: 'app/sports/list/sports.list.html',
        controller: 'SportsListCtrl'
      });
  });