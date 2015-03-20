'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('People', function ($resource) {
    var populate = ['related', 'headshot', 'hero', 'thumbnail', 'logo'];
    return $resource('/api/people/:id/:controller', {
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
          populate: ['platform', 'images', 'videos', 'documents', 'tags', 'related'].join(',')
        },
        isArray: true
      }
    });
  });
