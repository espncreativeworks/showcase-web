'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .directive('bubble', ['jQuery', function ($) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        console.log(attrs.bubble);
        var currentVal = JSON.parse(attrs.bubble);
        console.log(typeof currentVal);

        $.each(currentVal, function (key, val){
          $(element).on(key, function (evt){
            var e = $.Event(val);
            e = angular.extend(evt, e);
            $(element).trigger(e);
          });
        });

        attrs.$observe('bubble', function (newVal, oldVal){
          newVal = JSON.parse(newVal);
          if (newVal && newVal != currentVal) {

            $.each(currentVal, function (key, val){
              $(element).off(key);
            });

            $.each(newVal, function (key, val){
              $(element).on(key, function (evt){
                var e = $.Event(val);
                e = angular.extend(evt, e);
                $(element).trigger(e);
              });
            });

            currentVal = newVal;
          }
        });

        scope.$on('$destroy', function (){
          $.each(currentVal, function (key, val){
            $(element).off(key);
          });
        });
      }
    };
  }]);