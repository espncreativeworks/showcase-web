'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('PeopleFilters', [function (){
    return {
      term: '',
      active: {}
    };
  }]);