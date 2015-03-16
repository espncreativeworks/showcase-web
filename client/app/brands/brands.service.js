'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Brand', function ($resource) {
    var populate = ['industries', 'related', 'hero', 'thumbnail', 'logo'];
    return $resource('/api/brands/:id/:controller', {
      id: '@_id'
    },
    {
      query: {
        method: 'GET',
        params: {
          // populate: populate.join(',')
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
  });
