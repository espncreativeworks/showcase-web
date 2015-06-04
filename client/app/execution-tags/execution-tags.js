'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('executionTags', {
        url: '/executionTags',
        abstract: true,
        templateUrl: 'app/executionTags/executionTags.html'
      });
  });