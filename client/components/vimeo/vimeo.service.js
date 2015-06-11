'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Vimeo', ['$resource', function ($resource) {
    return $resource('/api/vimeo/:resource/:id');
  }]);