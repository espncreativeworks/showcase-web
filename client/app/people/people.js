'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('people', {
        url: '/people',
        abstract: true,
        templateUrl: 'app/people/people.html'
      });
  });