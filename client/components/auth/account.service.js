'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Account', function ($resource) {
    var populate = ['creator'];
    return $resource('/api/accounts/:id/:controller/:resourceId', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      changeEmail: {
        method: 'PUT',
        params: {
          controller:'email'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      queryCollections: {
        method: 'GET',
        params: {
          controller: 'collections',
          populate: populate.join(',')
        },
        isArray: true
      },
      getCollection: {
        method: 'GET',
        params: {
          controller: 'collections',
          populate: populate.join(',')
        }
      }
	  });
  });
