'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PeopleCardCtrl', ['$scope', '$stateParams', 'Page', 'Person', function ($scope, $stateParams, Page, Person) {
    Page.meta.title = 'People Card';
    // console.log("people card ctrl: ", $stateParams.id);
    $scope.project = Person.get({ id: $stateParams.id });
  }]);