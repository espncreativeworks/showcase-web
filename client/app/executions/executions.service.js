'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Execution', function ($resource) {
    var populate = ['platform', 'images', 'videos', 'documents', 'tags', 'related'];
    return $resource('/api/executions/:id/:controller', {
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
