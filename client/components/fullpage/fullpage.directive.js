'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('fullpage', ['jQuery', 'Modernizr', '$window', function ($, Modernizr, $window) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var $container = $('<div>', { 'class': 'fullscreen-item-wrapper' })
          , $children
          , $childHeight
          , _height;

        scope.sections = scope.sections ? scope.sections + 1 : 1;

        if (attrs.resolve){
          scope.$watch(attrs.resolve + '.$resolved', function (resolved){
            if (resolved){
              $children = $(element).children();
              $childHeight = $children.outerHeight(true);
              $children = $children.detach();
              _height = $window.outerHeight > $childHeight ? $window.outerHeight : $childHeight;

              $container.css({ 
                position: 'relative',
                width: '100%',
                height: _height,
                minHeight: _height 
              });

              $container.append($children);
              $(element).append($container);
            }
          });
        } else {
          $children = $(element).children();
          $childHeight = $children.outerHeight(true);
          $children = $children.detach();
          _height = $window.outerHeight > $childHeight ? $window.outerHeight : $childHeight;

          $container.css({ 
            position: 'relative',
            width: '100%',
            height: _height
          });

          $container.append($children);
          $(element).append($container);
        }
        

        $(window).on('resize', onresize);

        function onresize (evt){
          _height = $window.outerHeight > $childHeight ? $window.outerHeight : $childHeight;
          $container.css({ 
            height: _height
          });
        }

        scope.$on('destroy', function (){ 
          $(window).off('resize', onresize) 
        });
      }
    };
  }]);