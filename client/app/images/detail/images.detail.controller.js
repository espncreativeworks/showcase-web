'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .controller('ImagesDetailCtrl', ['$scope', '$stateParams', '$location', 'Page', 'Image', 'fullDescriptionFilter', function ($scope, $stateParams, $location, Page, Image, fullDescriptionFilter) {
    Page.body.class = 'image-detail';

    $scope.image = Image.get({ id: $stateParams.id });

    $scope.image.$promise.then(function (image){
      Page.meta.title = image.meta.title || image.title + ' - Image Details';
      Page.meta.description = image.meta.description || fullDescriptionFilter(image.description, { plaintext: true }) ;
      Page.meta.keywords = image.meta.keywords || 'espn creativeworks image ' + image.title + ', espn ' + image.title;
      Page.meta.twitter['twitter:title'] = Page.meta.title;
      Page.meta.twitter['twitter:description'] = Page.meta.description;
      Page.meta.facebook['og:title'] = Page.meta.title;
      Page.meta.facebook['og:description'] = Page.meta.description;
      $scope.sharing = {
      	imageUrl: image.file.secure_url,
      	url: $location.protocol() + '://' + $location.host() + image.meta.uris.web,
      	text: 'Checkout ' + image.title + ' from ESPN CreativeWorks'
      };
      Page.meta.twitter['twitter:image:src'] = $scope.sharing.imageUrl;
      Page.meta.facebook['og:image'] = $scope.sharing.imageUrl;
      if (image.people.length){
      	angular.forEach(image.people, function (person){
      		Page.meta.keywords += ', ' + person.name.first + ' ' + person.name.last;
      	});
      }
    });
  }]);
