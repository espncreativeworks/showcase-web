'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PageCtrl', ['$scope', 'Page', function ($scope, Page) {
    $scope.page = Page;
  }]);
