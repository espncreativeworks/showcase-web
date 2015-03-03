'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('fullpage', ['jQuery', 'Modernizr', '$rootScope', function ($, Modernizr, $rootScope) {
    var done = false;
    return {
      templateUrl: 'components/fullpage/fullpage.html',
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: {
        slides: '=',
        options: '='
      },
      link: function (scope, element, attrs) {
        var todo, added = 0;

        if (scope.slides.$resolved){
          todo = scope.slides.length; 
        } else {
          todo = -1;
          scope.$watch('slides.$resolved', function (){
            todo = scope.slides.length; 
          }); 
        }

        scope.$on('fullpage-slide:added', function (evt, slide){
          added++;
          if (added === todo && !done && !Modernizr.touch){
            $(element).fullpage(scope.options || {});
            done = true;
          } else if (done){
            $.fn.fullpage.destroy('all');
            $(element).fullpage(scope.options || {});
          }
        });

        scope.$on('destroy', function (){
          console.log('destroying fullpage.scope');
          $.fn.fullpage.destroy('all');
        });

        $rootScope.$on('$stateChangeStart', function (){
          $.fn.fullpage.destroy('all');
        });

      }
    };
  }]);