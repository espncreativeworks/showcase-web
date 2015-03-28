'use strict';

angular.module('espnCreativeworksShowcaseApp')
  .factory('Page', ['$rootScope', '$location', function ($rootScope, $location) {
    // Service logic
    // ...
    var initialImageUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/assets/images/logo_espncw_md@2x.png'
      , initalDesc = 'Partnering with ESPN CreativeWorks allows you access to a full service idea center that delivers compelling creative solutions, inspiring our fans to connect with your brand'
      , initialUrl = $location.absUrl()
      , _page = {
      meta: {
        title: '',
        titleSuffix: ' | ESPN CreativeWorks',
        description: '',
        keywords: 'espn creativeworks, creativeworks, espn creative agency',
        twitter: {
          'twitter:card': 'summary_large_image',
          'twitter:site': '@ESPNPromotions',
          'twitter:creator': '@ESPNPromotions',
          'twitter:title': 'ESPN CreativeWorks',
          'twitter:description': angular.copy(initalDesc),
          'twitter:image:src': angular.copy(initialImageUrl)
        },
        facebook : {
          'og:type': 'website',
          'og:url': angular.copy(initialUrl),
          'og:site_name': 'ESPN CreativeWorks',
          'og:title': 'ESPN CreativeWorks',
          'og:description': angular.copy(initalDesc),
          'og:image': angular.copy(initialImageUrl)
        }
      },
      body: {
        'class': ''
      }
    };

    $rootScope.$on('$stateChangeSuccess', function (){
      _page.meta.facebook['og:url'] = $location.absUrl();
    });

    // Public API here
    return _page;
  }]);
