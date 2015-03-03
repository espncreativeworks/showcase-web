'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('LocationsListCtrl', ['$scope', '$interval', '$moment', 'Locations', function ($scope, $interval, $moment, Locations) {
    var intervals = [];
    $scope.locations = Locations.query();

    $scope.locations.$promise.then(function (locations){
      angular.forEach(locations, function (_location){
        _location.currentTime = $moment().tz(_location.timezone.code);
        intervals.push($interval(function (){
          _location.currentTime = $moment().tz(_location.timezone.code);
        }, 1000 * 15)); // update current time every 15 seconds
      });
    });

    $scope.$on('destroy', function (){
      angular.forEach(intervals, function (interval){
        $interval.cancel(interval);
      });
    });

  }]);
