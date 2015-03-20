'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('people.list', {
        url: '/',
        templateUrl: 'app/people/list/people.list.html',
        controller: 'PeopleListCtrl'
      });
  });