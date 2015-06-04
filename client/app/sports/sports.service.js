'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Sport', function ($resource) {
    var populate = ['icon', 'hero'];
    return $resource('/api/sports/:id/:controller', {
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
      },
      executions: {
        method: 'GET',
        params: {
          controller: 'executions',
          populate: ['images', 'videos', 'documents', 'tags', 'related'].join(',')
        },
        isArray: true
      }
    });
  });
