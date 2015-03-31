'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Collection', function ($resource) {
    var populate = [];
    return $resource('/api/collections/:id/:controller', {
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
