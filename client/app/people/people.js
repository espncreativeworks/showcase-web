'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('people', {
        url: '/people',
        templateUrl: 'app/people/people.html',
        abstract: true
      });
  });