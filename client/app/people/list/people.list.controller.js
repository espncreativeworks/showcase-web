'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PeopleListCtrl', ['$scope', 'Page', 'People', function ($scope, Page, People) {
    Page.meta.title = 'People';
    Page.body.class = 'people-list';

    $scope.people = People.query();
  }]);
