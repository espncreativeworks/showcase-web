'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('executionTags.list', {
        url: '',
        templateUrl: 'app/executionTags/list/executionTags.list.html',
        controller: 'ExecutionTagsListCtrl'
      });
  });