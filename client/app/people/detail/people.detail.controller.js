'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PeopleDetailCtrl', ['$scope', '$stateParams', 'Page', 'People', 'Video', 'Project', 'fullnameFilter', 'fullDescriptionFilter', function ($scope, $stateParams, Page, People, Video, Project, fullnameFilter, fullDescriptionFilter) {
    Page.body.class = 'people-detail';
    $scope.person = People.get({ id: $stateParams.id });

    $scope.person.$promise.then(function (person){
      Page.meta.title = person.meta.title || (fullnameFilter(person.name) + ' Details');
      Page.meta.description = person.meta.description || fullDescriptionFilter(person.description, { plaintext: true });
      
      $scope.$projects = [];
      $scope.video = person.video;
      $scope.related = person.projects;
      $scope.shows = person.shows;
      $scope.shows.$tags = [];
      $scope.sports = person.sports;
      $scope.sports.$tags = [];

      angular.forEach($scope.related, function(p) {
        $scope.$project = Project.get({ id: p._id });

        $scope.$project.$promise.then(function(proj){
          $scope.$projects.push(proj);
        });
      });

      angular.forEach($scope.shows, function (s){
        var showId = s._id + '';
        s.show = {};
        s.show._id = showId;
        s.show.slug = s.slug;
        s.href = '/people?shows=' + s._id;
        $scope.shows.$tags.push(s);  
      });

      angular.forEach($scope.sports, function (sp){
        var sportId = sp._id + '';
        sp.sport = {};
        sp.sport._id = sportId;
        sp.sport.slug = sp.slug;
        sp.href = '/people?sports=' + sp._id;
        $scope.sports.$tags.push(sp);  
      });

      console.log('people detail ctrl: ', $scope);

    });
  }]);