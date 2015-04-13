'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .filter('fullname', function () {
    return function (name) {
      if (!name){ return ''; }
      if (name.first && name.last){
        return name.first + ' ' + name.last;  
      } else if (name.first){
        return name.first;  
      } else if (name.last){
        return name.last; 
      }
      return '';
    };
  });
