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
          'twitter:image:src': angular.copy(initialImageUrl),
          reset: function (){
            _page.meta.twitter['twitter:card'] = 'summary_large_image';
            _page.meta.twitter['twitter:site'] = '@ESPNPromotions';
            _page.meta.twitter['twitter:creator'] = '@ESPNPromotions';
            _page.meta.twitter['twitter:title'] = 'ESPN CreativeWorks';
            _page.meta.twitter['twitter:description'] = angular.copy(initalDesc);
            _page.meta.twitter['twitter:image:src'] = angular.copy(initialImageUrl);
            delete _page.meta.twitter['twitter:player'];
            delete _page.meta.twitter['twitter:player:width'];
            delete _page.meta.twitter['twitter:player:height'];
            delete _page.meta.twitter['twitter:player:stream'];
            delete _page.meta.twitter['twitter:player:stream:content_type'];
          }
        },
        facebook : {
          'og:type': 'website',
          'og:url': angular.copy(initialUrl),
          'og:site_name': 'ESPN CreativeWorks',
          'og:title': 'ESPN CreativeWorks',
          'og:description': angular.copy(initalDesc),
          'og:image': angular.copy(initialImageUrl),
          reset: function (){
            _page.meta.facebook['og:type'] = 'website';
            _page.meta.facebook['og:url'] = angular.copy(initialUrl);
            _page.meta.facebook['og:site_name'] = 'ESPN CreativeWorks';
            _page.meta.facebook['og:title'] = 'ESPN CreativeWorks';
            _page.meta.facebook['og:description'] = angular.copy(initalDesc);
            _page.meta.facebook['og:image'] = angular.copy(initialImageUrl);
            delete _page.meta.facebook['og:video'];
            delete _page.meta.facebook['og:video:url'];
            delete _page.meta.facebook['og:video:secure_url'];
            delete _page.meta.facebook['og:video:type'];
            delete _page.meta.facebook['og:video:width'];
            delete _page.meta.facebook['og:video:height'];
            delete _page.meta.facebook['og:video:type'];
            delete _page.meta.facebook['og:video:image']; 
          }
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
