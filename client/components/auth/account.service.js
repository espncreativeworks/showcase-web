'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Account', function ($resource) {
    return $resource('/api/accounts/:id/:controller', {
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
      }
	  });
  });
