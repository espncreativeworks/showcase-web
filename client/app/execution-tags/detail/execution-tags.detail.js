'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('executionTags.detail', {
        url: '/:id',
        templateUrl: 'app/executionTags/detail/executionTags.detail.html',
        controller: 'ExecutionTagsDetailCtrl'
      });
  });