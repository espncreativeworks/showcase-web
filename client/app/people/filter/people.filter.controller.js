'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PeopleFilterCtrl', ['$scope', '$location', 'underscore', 'PeopleFilters', 'People', 'Show', 'Sport', function ($scope, $location, _, PeopleFilters, People, Show, Sport) {
    $scope.filters = PeopleFilters; 
    $scope.shows = [];
    $scope.sports = [];

    $scope.addFilter = function addFilter(category, data){
      var exists = false
        , params = $location.search();

      $scope.filters.active[category] = $scope.filters.active[category] || [];
      
      angular.forEach($scope.filters.active[category], function(filter){
        if (filter._id === data._id){
          exists = true;
        }
      }); 

      if (!exists){
        $scope.filters.active[category].push(data); 

        // console.log("filters active: ", $scope.filters.active[category]);

        if (category in params){
          var old = [];
          if (params[category].indexOf(',') !== -1){
            old = params[category].split(',');
          } else {
            old.push(params[category]);
          }

          // console.log("check old arr: ", old);
          
          if (old.indexOf(data._id) === -1){
            old.push(data._id);
            $location.search(category, old.join(','));
          }

        } else {
          $location.search(category, data._id);  
        }
      }
    };

    $scope.removeFilter = function removeFilter(category, data){
      var params = $location.search();

      if ($scope.filters.active[category]){
        angular.forEach($scope.filters.active[category], function(filter, index){
          if (filter._id === data._id){
            $scope.filters.active[category].splice(index, 1);
          }
        });

        if ($scope.filters.active[category].length === 0){
          delete $scope.filters.active[category];
        }

        if (category in params){
          var old = [];

          if (params[category].indexOf(',') !== -1){
            old = params[category].split(',');
          } else {
            old.push(params[category]);
          }

          if (old.indexOf(data._id) !== -1){
            old.splice(old.indexOf(data._id), 1);
            $location.search(category, old.join(','));
          }

          if (!$location.search()[category]){
            $location.search(category, null);
          }
        }
      }
    };

    $scope.initFilter = function (){
      var params = $location.search();

      if (params.term !== ''){
        $scope.filters.term = params.term;
      } else {
        $location.search('term', null);
      }

      if (params.sports) {
        if ($scope.filters.active.sports) {
          $scope.filters.active.sports = [];
        }
        var sportIds = params.sports.split(',');
        sportIds.forEach(function (sportId){
          var $sportTag = Sport.get({ id: sportId });
          $sportTag.$promise.then(function (sportTag){

            $scope.addFilter('sports', sportTag);
            // $scope.addFilter('shows', showTag);
          });
        });
      } 

      if (params.shows) {
        if ($scope.filters.active.shows) {
          $scope.filters.active.shows = [];
        }
        var showIds = params.shows.split(',');
        showIds.forEach(function (showId){
          var $showId = Show.get({ id: showId });
          $showId.$promise.then(function (showId){
            $scope.addFilter('shows', showId);
          });
        });
      }

      if (params.term !== ''){
        $scope.filters.term = params.term;
      } else {
        $location.search('term', null);
      }

      var _shows = []
        , _sports = []
        , peeps = People.search();

      peeps.$promise.then(function (person){
        angular.forEach(person, function (p){
          if (p.shows != null) {
            _shows = _shows.concat(p.shows);
          }
          if (p.sports != null) {
            _sports = _sports.concat(p.sports);
          }
        });
        $scope.shows = _.uniq(_shows, function (sh){ return sh._id; });
        $scope.sports = _.uniq(_sports, function (sp){ return sp._id; });
      });
    };

    $scope.initFilter();
    
  }]);
