'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('PeopleListCtrl', ['$scope', '$location', 'Page', 'People', 'PeopleFilters', function ($scope, $location, Page, People, PeopleFilters) {
    Page.meta.title = 'People';
    Page.body.class = 'people-list';

    $scope.pageTitle = 'ESPN Talent';
    $scope.people = People.search();
    $scope.filters = PeopleFilters;

    $scope.personDetailRoute = function (person){ 
	    return '/people/' + person.slug;
	  };

    var filterKeys = ['shows', 'sports'];

    function initFilters(keys){
      angular.forEach(keys, initFilter);
    }

    function initFilter (key){
      $scope[key + 'Filter'] = function (person){
        var result = false;
        if ($scope.filters.active[key] && person[key]){
          var filterIds = _.map($scope.filters.active[key], function (item){ return item._id; })
            , personKeyIds = _.map(person[key], function (item){ return item._id; });

          // check each project keyId against those in the filter
          // if found, set result to true
          angular.forEach(personKeyIds, function (keyId){
            if (filterIds.indexOf(keyId) > -1){
              result = true;
            }
          });

          return result;
        } else if ($scope.filters.active[key] && !person[key]){
          // default to false if filter is set but project doesn't have the key property
          return false;
        } else {
          // default to true if no filter set or project doesn't have the key property
          return true;
        }
      };
    }

    initFilters(filterKeys);

    // console.log('people list ctrl: ', $scope);
  }]);
