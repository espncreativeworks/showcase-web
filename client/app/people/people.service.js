'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('People', function ($resource) {
    var populate = ['related', 'headshot', 'hero', 'thumbnail', 'logo', 'shows', 'sports', 'video', 'projects'];
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
      search: {
        method: 'GET',
        params: {
          id: 'search'
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
