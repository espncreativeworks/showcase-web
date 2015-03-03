'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('LocationsDetailCtrl', ['$scope', '$stateParams', 'Page', 'Locations', 'fullDescriptionFilter', function ($scope, $stateParams, Page, Locations, fullDescriptionFilter) {
    Page.meta.title = 'Locations'; 
    Page.body.class = 'location-detail';
    $scope._location = Locations.get({ id: $stateParams.id });
    $scope._location.$promise.then(function (_location){
      Page.meta.title = _location.meta.title || (_location.name + ' Location Details');
      Page.meta.description = _location.meta.description || fullDescriptionFilter(_location.description, { plaintext: true }); 
      _location.description.full = fullDescriptionFilter(_location.description);
    });
  }]);
