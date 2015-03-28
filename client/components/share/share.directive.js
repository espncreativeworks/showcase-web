'use strict';

/**
 * @ngdoc directive
 * @name espnCreativeworksShowcaseApp.directive:share
 * @description
 * # share
 */
angular.module('espnCreativeworksShowcaseApp')
  .directive('share', ['jQuery', function ($) {

    function onFacebookShare (e){
      e.preventDefault();
      var url = $(e.currentTarget).attr('data-share-url') || window.location.href;

      FB.ui({
        method: 'share',
        href: url
      }, function (response){
        if (response && !response.error_code){ // jshint ignore:line
          ga('send', {
            hitType: 'social',
            socialNetwork: 'Facebook',
            socialAction: 'Share',
            socialTarget: url,
            page: document.title
          });
        }
      });
    }

    function onTwitterShare (e){

      var $this = $(e.currentTarget)
        , params = {}
        , baseUrl = 'https://twitter.com/intent/tweet'
        , tweetWindowUrl = baseUrl + '?'
        , url = $this.attr('data-share-url') || window.location.href;

      params['original_referer'] = window.location.href; // jshint ignore:line
      params.url = url;
      params.text = $this.attr('data-share-text');
      params.hashtags = $this.attr('data-share-hashtags') || '';
      params.related = $this.attr('data-related-accounts') || '';
      tweetWindowUrl += $.param(params);

      $this.attr('href', tweetWindowUrl);
      twttr.widgets.load();
    }

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        $(element).on('click', function (e){
          if (attrs.shareAction === 'share-facebook'){
            onFacebookShare(e);
          }
          if (attrs.shareAction === 'share-twitter'){
            onTwitterShare(e);
          }
        });
      }
    };

  }]);
