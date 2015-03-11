'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Video', ['$resource', function ($resource) {
    var populate = ['platform', 'people', 'related'];
    return $resource('/api/videos/:id/:controller', {
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
