'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('executions.detail', {
        url: '/:id',
        templateUrl: 'app/executions/detail/executions.detail.html',
        controller: 'ExecutionsDetailCtrl'
      });
  });