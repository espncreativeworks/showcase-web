'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('LoginCtrl', ['$scope', 'Auth', '$location', '$window', 'Page', function ($scope, Auth, $location, $window, Page){
    $scope.account = {};
    $scope.errors = {};
    $scope.loginWithEmail = false;

    Page.meta.title = 'Login';
    Page.body.class = 'auth login';

    $scope.login = function(form) {
      $scope.submitted = true;

      if (form.$valid) {
        Auth.login({
          email: $scope.account.email,
          password: $scope.account.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $scope.showLoginForm = function (){
      $scope.loginWithEmail = true;
    };
  }]);
