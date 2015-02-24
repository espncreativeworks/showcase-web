'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, Account) {

    // Use the Account $resource to fetch all accounts
    $scope.currentAccount = Auth.getCurrentAccount();
    $scope.accounts = []; 

    Account.query().$promise.then(function (accounts){
      angular.forEach(accounts, function (account){
        if (account._id !== $scope.currentAccount._id){
          $scope.accounts.push(account);
        }
      });
    });

    $scope.delete = function(account) {
      Account.remove({ id: account._id });
      angular.forEach($scope.accounts, function(a, i) {
        if (a === account) {
          $scope.accounts.splice(i, 1);
        }
      });
    };
  });
