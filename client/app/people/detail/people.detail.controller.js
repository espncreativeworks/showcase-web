'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PeopleDetailCtrl', ['$scope', '$stateParams', 'Page', 'People', 'fullnameFilter', 'fullDescriptionFilter', function ($scope, $stateParams, Page, People, fullnameFilter, fullDescriptionFilter) {
    Page.body.class = 'people-detail';
    $scope.person = People.get({ id: $stateParams.id });

    $scope.person.$promise.then(function (person){
      Page.meta.title = person.meta.title || (fullnameFilter(person.name) + ' Details');
      Page.meta.description = person.meta.description || fullDescriptionFilter(person.description, { plaintext: true });
    });
  }]);