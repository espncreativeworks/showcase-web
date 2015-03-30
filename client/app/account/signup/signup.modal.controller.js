'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('SignupModalCtrl', ['$scope', 'Auth', '$location', '$window', '$modalInstance', '$modal', 'Page', function ($scope, Auth, $location, $window, $modalInstance, $modal, Page) {
    $scope.account = {};
    $scope.errors = {};
    $scope.signUpWithEmail = false;

    var oldTitle = angular.copy(Page.meta.title)
      , oldClass = angular.copy(Page.body.class);

    Page.meta.title = 'Sign Up';
    Page.body.class = oldClass + ' auth-modal signup';

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
          $modalInstance.dismiss('cancel');
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

    $scope.toggleAuthModal = function (){
      Page.meta.title = oldTitle;
      Page.body.class = oldClass;
      $modalInstance.dismiss('cancel');
      var modalInstance = $modal.open({
        templateUrl: 'app/account/login/login.modal.html',
        controller: 'LoginModalCtrl',
        size: 'sm'
      });
    };

    $scope.cancel = function (){
      Page.meta.title = oldTitle;
      Page.body.class = oldClass;
      $modalInstance.dismiss('cancel');
    };
  }]);
