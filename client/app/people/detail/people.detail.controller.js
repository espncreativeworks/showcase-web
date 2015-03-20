'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PeopleDetailCtrl', ['$scope', '$stateParams', 'Page', 'People', 'fullnameFilter', function ($scope, $stateParams, Page, People, fullnameFilter) {
    Page.body.class = 'people-detail';
    $scope.person = People.get({ id: $stateParams.id });

    $scope.person.$promise.then(function (person){
      Page.meta.title = person.meta.title || (fullnameFilter(person.name) + ' Details');
      Page.meta.description = project.meta.description || fullDescriptionFilter(person.description, { plaintext: true });
    });
  }]);