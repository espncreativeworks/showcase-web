'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('LoginModalCtrl', ['$scope', 'Auth', '$location', '$window', '$modalInstance', '$modal', 'Page', function ($scope, Auth, $location, $window, $modalInstance, $modal, Page) {
    $scope.account = {};
    $scope.errors = {};
    $scope.loginWithEmail = false;

    var oldTitle = angular.copy(Page.meta.title)
      , oldClass = angular.copy(Page.body.class);

    Page.meta.title = 'Login';
    Page.body.class = oldClass + ' auth-modal login';

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.account.email,
          password: $scope.account.password
        })
        .then( function() {
          // Logged in, redirect to home
          $modalInstance.dismiss('cancel');
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

    $scope.toggleAuthModal = function (){
      Page.meta.title = oldTitle;
      Page.body.class = oldClass;
      $modalInstance.dismiss('cancel');
      $modal.open({
        templateUrl: 'app/account/signup/signup.modal.html',
        controller: 'SignupModalCtrl',
        size: 'sm'
      });
    };

    $scope.cancel = function (){
      Page.meta.title = oldTitle;
      Page.body.class = oldClass;
      $modalInstance.dismiss('cancel');
    };

  }]);
