'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ExecutionsDetailCtrl', function ($scope, $stateParams, Execution) {
    $scope.execution = Execution.get({ id: $stateParams.id });
  });
