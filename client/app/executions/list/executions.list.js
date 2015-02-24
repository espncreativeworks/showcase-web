'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('executions.list', {
        url: '',
        templateUrl: 'app/executions/list/executions.list.html',
        controller: 'ExecutionsListCtrl'
      });
  });