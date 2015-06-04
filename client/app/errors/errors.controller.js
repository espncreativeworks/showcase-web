'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ErrorsCtrl', ['$scope', '$stateParams', 'Page', function ($scope, $stateParams, Page) {
  	$scope.statusCode = $stateParams.code;

  	var titles = {
  		'404': 'Page Not Found'
  	};

  	var messages = {
  		'404': decodeURIComponent($stateParams.path) + ' could not be found.'
  	};

    Page.meta.title = titles[$scope.statusCode];
    Page.body.class = 'error-detail error-code-' + $scope.statusCode;
    $scope.message = $stateParams.message ? decodeURIComponent($stateParams.message) : messages[$scope.statusCode];
  }]);
