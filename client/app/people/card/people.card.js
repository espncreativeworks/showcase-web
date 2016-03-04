'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('people.card', {
        url: '/card/:id',
        templateUrl: 'app/people/card/people.card.html',
        controller: 'PeopleCardCtrl'
      });
  });