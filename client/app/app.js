'use strict';

angular.module('espnCreativeworksShowcaseApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'cloudinary',
  'angular-momentjs',
  'ngUnderscore',
  'checklist-model'
])
  .constant('jQuery', window.jQuery)
  .constant('Modernizr', window.Modernizr)
  .constant('async', window.async)
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$sceDelegateProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $sceDelegateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');

    $sceDelegateProvider.resourceUrlWhitelist([
      'self', // Allow same origin resource loads
      'http://res.cloudinary.com/**', // Allow loading from CDN. Notice the difference between * and **
      'https://res.cloudinary.com/**',
      'http://cdn.embedly.com/**', 
      'https://cdn.embedly.com/**',
      'http://*.vimeo.com/**', 
      'https://*.vimeo.com/**',
      'http://*.youtube.com/**', 
      'https://*.youtube.com/**',
      'http://*.go.com/**', 
      'https://*.go.com/**',
      'http://i.ytimg.com/**',
      'https://i.ytimg.com/**'
    ]);
  }])

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, $state, $stateParams, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });