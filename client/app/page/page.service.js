'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Page', function () {
    // Service logic
    // ...

    var _page = {
      meta: {
        title: '',
        titleSuffix: ' | ESPN CreativeWorks',
        description: ''
      },
      body: {
        'class': ''
      }
    };

    // Public API here
    return _page;
  });
