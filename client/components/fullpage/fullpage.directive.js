'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('fullpage', ['jQuery', 'Modernizr', '$window', function ($, Modernizr, $window) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var $container = $('<div>', { 'class': 'fullscreen-item-wrapper' })
          , $children
          , $childHeight
          , _height
          , padding = 80;

        scope.sections = scope.sections ? scope.sections + 1 : 1;

        if (attrs.resolve){
          scope.$watch(attrs.resolve + '.$resolved', function (resolved){
            if (resolved){
              $children = $(element).children();
              $childHeight = $children.outerHeight(true);
              $children = $children.detach();
              _height = $window.innerHeight > $childHeight ? $window.innerHeight : $childHeight;

              // adding padding on mobile for now
              if (Modernizr.touch){
                _height = _height + (padding * 2);
              }

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
          _height = $window.innerHeight > $childHeight ? $window.innerHeight : $childHeight;
          
          // adding padding on mobile for now
          if (Modernizr.touch){
            _height = _height + (padding * 2);
          }

          $container.css({ 
            position: 'relative',
            width: '100%',
            height: _height
          });

          $container.append($children);
          $(element).append($container);
        }
        
        function onwindowresize (){
          _height = $window.innerHeight > $childHeight ? $window.innerHeight : $childHeight;

          // adding padding on mobile for now
          if (Modernizr.touch){
            _height = _height + (padding * 2);
          }

          $container.css({ 
            height: _height
          });
        }

        // event fires on iOS when scrolling due to showing / hiding
        // of footer, resizing of address bar
        // skipping on mobile for now...
        if (!Modernizr.touch){
          $(window).on('resize', onwindowresize);

          scope.$on('destroy', function (){ 
            $(window).off('resize', onwindowresize);
          });
        }
      }
    };
  }]);