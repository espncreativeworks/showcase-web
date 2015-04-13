'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('SignupCtrl', ['$scope', 'Auth', '$location', '$window', 'Page', function ($scope, Auth, $location, $window, Page) {
    $scope.account = {};
    $scope.errors = {};
    $scope.signUpWithEmail = false;

    Page.meta.title = 'Sign Up';
    Page.body.class = 'auth signup';

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createAccount({
          name: $scope.account.name,
          email: $scope.account.email,
          password: $scope.account.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $scope.showSignUpForm = function (){
      $scope.signUpWithEmail = true;
    };
  }]);
