'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('industries.list', {
        url: '',
        templateUrl: 'app/industries/list/industries.list.html',
        controller: 'IndustriesListCtrl'
      });
  });