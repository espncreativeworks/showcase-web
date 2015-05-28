'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('CollectionItem', function ($resource) {
    var populate = ['belongsTo'];
    return $resource('/api/collection-items/:id/:controller', {
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
          populate: ['belongsTo', 'image', 'video', 'document'].join(',')
        }
      }
    });
  });
