'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ExecutionsListCtrl', function ($scope, Execution) {
    $scope.executions = Execution.query();
  });
