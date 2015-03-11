'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Project', function ($resource) {
    var populate = ['sports', 'hero', 'brands'];
    return $resource('/api/projects/:id/:controller', {
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
      featured: {
        method: 'GET',
        params: {
          id: 'featured',
          populate: populate.join(',')
        },
        isArray: true
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
