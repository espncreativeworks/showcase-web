'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('SettingsCtrl', ['$scope', '$timeout', 'Account', 'Auth', 'Page', function ($scope, $timeout, Account, Auth, Page) {
    $scope.errors = {};

    Page.meta.title = 'Settings';
    Page.body.class = 'auth settings';

    $scope.changeEmail = function(form) {
      $scope.newEmailSubmitted = true;
      console.log('onChangeEmail');
      if(form.$valid) {
        Auth.changeEmail( $scope.account.newEmail )
        .then( function() {
          $scope.message = 'Email successfully changed.';
          $timeout(function (){
            $scope.newEmailSubmitted = false;  
          }, 5000);
        })
        .catch( function() {
          form.newEmail.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect email';
          $scope.message = '';
        });
      }
    };

    $scope.changePassword = function(form) {
      $scope.newPasswordSubmitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.account.oldPassword, $scope.account.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
          $timeout(function (){
            $scope.newPasswordSubmitted = false;  
          }, 5000);
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
  }]);
