'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('menu', [function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        element.on('click', '#menu-toggle, .menu-close', function (){
          element.find('#menu-toggle').toggleClass('active');
          element.parents('body').toggleClass('body-push body-push-to-left');
          element.toggleClass('menu-open');
        });

        element.on('click', '.menu-link', function (){
          if (element.hasClass('menu-open')){
            element.find('#menu-toggle').toggleClass('active');
            element.parents('body').toggleClass('body-push body-push-to-left');
            element.toggleClass('menu-open');
          }
        });
      }
    };
  }]);