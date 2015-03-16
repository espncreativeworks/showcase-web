'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .filter('as', ['$parse', function ($parse) {
    return function (value, context, path) {
      return $parse(path).assign(context, value);
    };
  }]);
