'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('ProjectFilters', [function (){
    return {
      term: '',
      active: {}
    };
  }]);