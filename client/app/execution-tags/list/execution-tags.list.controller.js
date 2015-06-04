'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ExecutionTagsListCtrl', function ($scope, ExecutionTag) {
    $scope.executionTags = ExecutionTag.query();
  });
