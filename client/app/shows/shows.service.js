'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Show', function ($resource) {
    var populate = ['related'];
    return $resource('/api/shows/:id/:controller', {
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
      people: {
        method: 'GET',
        params: {
          controller: 'people',
          populate: ['platform', 'images', 'videos', 'documents', 'tags', 'related'].join(',')
        },
        isArray: true
      }
    });
  });
