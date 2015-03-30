'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('MenuCtrl', ['$rootScope', '$scope', '$location', 'Auth', '$modal', function ($rootScope, $scope, $location, Auth, $modal) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'home'
    }, {
      'title': 'Work',
      'state': 'projects.list'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentAccount = Auth.getCurrentAccount;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(state) {
      var s = state.indexOf('.') > -1 ? state.split('.')[0] : state;
      return $rootScope.$state.includes(s);
    };

    $scope.showLogin = function (){
      if (!$scope.isActive('login')){
        if ($scope.isActive('signup')){
          $location.path('/login');
        } else {
          var modalInstance;
          modalInstance = $modal.open({
            templateUrl: 'app/account/login/login.modal.html',
            controller: 'LoginModalCtrl',
            size: 'sm'
          });
        }
      }
    };

    $scope.showSignup = function (){
      if (!$scope.isActive('signup')){
        if ($scope.isActive('login')){
          $location.path('/signup');
        } else {
          var modalInstance;
          modalInstance = $modal.open({
            templateUrl: 'app/account/signup/signup.modal.html',
            controller: 'SignupModalCtrl',
            size: 'sm'
          });
        }
      }
    };

  }]);