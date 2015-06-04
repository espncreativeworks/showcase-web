'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Me', function ($resource) {
    var populate = ['creator'];
    return $resource('/api/accounts/:accountId/:controller/:resourceId', {
      accountId: 'me'
    },
    {
      queryCollections: {
        method: 'GET',
        params: {
          controller:'collections',
          populate: populate.join(',')
        },
        isArray: true
      },
      getCollection: {
        method: 'GET',
        params: {
          controller:'collections',
          populate: populate.join(',')
        }
      }
    });
  });