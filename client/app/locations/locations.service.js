'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Locations', function ($resource) {
    var populate = ['timezone', 'hero'];
    return $resource('/api/locations/:id/:controller', {
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
  });
