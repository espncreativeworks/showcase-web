'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('executions', {
        url: '/executions',
        abstract: true,
        templateUrl: 'app/executions/executions.html'
      });
  });