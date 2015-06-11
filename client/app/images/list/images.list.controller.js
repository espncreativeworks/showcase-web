'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ImagesListCtrl', ['$scope', 'underscore', 'Page', 'Image', function ($scope, _, Page, Image) {
    Page.meta.twitter.reset();
    Page.meta.facebook.reset();
  	Page.meta.title = 'Images';
  	Page.meta.description = 'Images from ESPN CreativeWorks';
  	Page.meta.keywords = 'espn creativeworks images, espn creative works images';
  	Page.body.class = 'image-list';

    $scope.images = Image.query();
    $scope.images.$promise.then(function (images){
    	$scope.$images = _.chain(images)
                        .filter(function (image){
                    		  return image.usage === 'execution';
                      	})
                        .groupBy(function (image){
                          return image.platform.name;
                        })
                        .value();  
      console.log($scope.$images);
    });
    
  }]);
