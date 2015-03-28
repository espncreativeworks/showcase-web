'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PageCtrl', ['$scope', '$location', 'Page', function ($scope, $location, Page) {
    $scope.page = Page;
    $scope.sharing = {
      url: $location.protocol() + '://' + $location.host() + ($location.port() ? ':' + $location.port() : '') + '/',
      text: 'ESPN CreativeWorks: Informed / Authentic / Connected / Efficient / Multi-Screen'
    };
  }]);
