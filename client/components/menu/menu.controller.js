'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('MenuCtrl', function ($rootScope, $scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'home'
    }, {
      'title': 'Projects',
      'state': 'projects.list'
    }, {
      'title': 'Executions',
      'state': 'executions.list'
    },{
      'title': 'Platforms',
      'state': 'platforms.list'
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
  });