'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Auth', function Auth($location, $rootScope, $http, Account, $cookieStore, $q) {
    var currentAccount = {};
    if($cookieStore.get('token')) {
      currentAccount = Account.get();
    }

    return {

      /**
       * Authenticate account and save token
       *
       * @param  {Object}   account     - login info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      login: function(account, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.post('/auth/local', {
          email: account.email,
          password: account.password
        }).
        success(function(data) {
          $cookieStore.put('token', data.token);
          currentAccount = Account.get();
          deferred.resolve(data);
          return cb();
        }).
        error(function(err) {
          this.logout();
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      /**
       * Delete access token and account info
       *
       * @param  {Function}
       */
      logout: function() {
        $cookieStore.remove('token');
        currentAccount = {};
      },

      /**
       * Create a new account
       *
       * @param  {Object}   account     - account info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      createAccount: function(account, callback) {
        var cb = callback || angular.noop;

        return Account.save(account,
          function(data) {
            $cookieStore.put('token', data.token);
            currentAccount = Account.get();
            return cb(account);
          },
          function(err) {
            this.logout();
            return cb(err);
          }.bind(this)).$promise;
      },

      /**
       * Change password
       *
       * @param  {String}   oldPassword
       * @param  {String}   newPassword
       * @param  {Function} callback    - optional
       * @return {Promise}
       */
      changePassword: function(oldPassword, newPassword, callback) {
        var cb = callback || angular.noop;

        return Account.changePassword({ id: currentAccount._id }, {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function(account) {
          return cb(account);
        }, function(err) {
          return cb(err);
        }).$promise;
      },

      /**
       * Change email
       *
       * @param  {String}   newEmail
       * @param  {Function} callback    - optional
       * @return {Promise}
       */
      changeEmail: function(newEmail, callback) {
        var cb = callback || angular.noop;
        console.log('Auth.changeEmail()');
        return Account.changeEmail({ id: currentAccount._id }, {
          newEmail: newEmail
        }, function(account) {
          return cb(account);
        }, function(err) {
          return cb(err);
        }).$promise;
      },

      /**
       * Gets all available info on authenticated account
       *
       * @return {Object} account
       */
      getCurrentAccount: function() {
        return currentAccount;
      },

      /**
       * Check if a account is logged in
       *
       * @return {Boolean}
       */
      isLoggedIn: function() {
        return currentAccount.hasOwnProperty('role');
      },

      /**
       * Waits for currentAccount to resolve before checking if account is logged in
       */
      isLoggedInAsync: function(cb) {
        if(currentAccount.hasOwnProperty('$promise')) {
          currentAccount.$promise.then(function() {
            cb(true);
          }).catch(function() {
            cb(false);
          });
        } else if(currentAccount.hasOwnProperty('role')) {
          cb(true);
        } else {
          cb(false);
        }
      },

      /**
       * Check if a account is an admin
       *
       * @return {Boolean}
       */
      isAdmin: function() {
        return currentAccount.role === 'admin';
      },

      /**
       * Get auth token
       */
      getToken: function() {
        return $cookieStore.get('token');
      }
    };
  });
