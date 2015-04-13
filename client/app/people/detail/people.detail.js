'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('people.detail', {
        url: '/:id',
        templateUrl: 'app/people/detail/people.detail.html',
        controller: 'PeopleDetailCtrl'
      });
  });