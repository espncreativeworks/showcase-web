'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Image', ['$resource', function ($resource) {
    var populate = ['platform', 'people', 'related'];
    return $resource('/api/images/:id/:controller', {
      id: '@_id'
    },
    {
      query: {
        method: 'GET',
        params: {
          populate: populate.join(',')
        },
        isArray: true
      },
      get: {
        method: 'GET',
        params: {
          populate: populate.join(',')
        }
      }
    });
  }]);
