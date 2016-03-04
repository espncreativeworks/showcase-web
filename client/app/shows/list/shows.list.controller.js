'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ShowsListCtrl', ['$scope', '$stateParams', 'underscore', 'Page', 'People', 'Show', function ($scope, $stateParams, _, Page, People, Show) {
  	Page.body.class = 'shows-list';
  	Page.meta.title = 'Shows';

    $scope.shows = Show.query();

    $scope.shows.$promise.then(function (show){
    	$scope.shows.$tags = [];
    	angular.forEach(show, function (s){
	      var showId = s._id + '';
	      s.show = {};
	      s.show._id = showId;
	      s.show.slug = s.slug;
	      s.href = '/people?tags=' + s._id;
	      $scope.shows.$tags.push(s);  
	    });
	  });

    console.log('shows list ctrl: ', $scope.shows);
	}]);