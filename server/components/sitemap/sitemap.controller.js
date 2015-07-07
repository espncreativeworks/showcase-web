'use strict';

var request = require('request')
	, async = require('async')
	, sm = require('sitemap')
  , cmsRoot = require('../../config/environment').cms.uri
  , projectsResource = cmsRoot + '/projects'
  , videosResource = cmsRoot + '/videos'
  , imagesResource = cmsRoot + '/images'
  , staticUrls
  , sitemap
  , tasks
  , done;

staticUrls = [
	{ url: '/', changefreq: 'daily', priority: 1 },
	{ url: '/projects', changefreq: 'daily', priority: 1 },
	{ url: '/videos', changefreq: 'daily', priority: 1 },
	{ url: '/images', changefreq: 'daily', priority: 1 }
];

tasks = {
	projects: function (callback) {
		request({ 
			method: 'GET', 
			uri: projectsResource,
			json: true
		}, function (err, resp, body){
			var urls = [];
			body.forEach(function (project){
				urls.push({ url: project.meta.uris.web, priority: 0.9 });
				urls.push({ url: '/projects/' + project.slug, priority: 0.9 });
			});
			callback(err, urls);
		});
	},
	videos: function (callback) {
		request({ 
			method: 'GET', 
			uri: videosResource,
			json: true
		}, function (err, resp, body){
			var urls = [];
			body.forEach(function (video){
				urls.push({ url: video.meta.uris.web, priority: 0.8 });
				urls.push({ url: '/videos/' + video.slug, priority: 0.8 });
			});
			callback(err, urls);
		});
	},
	images: function (callback) {
		request({ 
			method: 'GET', 
			uri: imagesResource,
			json: true
		}, function (err, resp, body){
			var urls = [];
			body.forEach(function (image){
				urls.push({ url: image.meta.uris.web, priority: 0.7 });
				urls.push({ url: '/images/' + image.slug, priority: 0.7 });
			});
			callback(err, urls);
		});
	}
};

done = function (err, results) {
	sitemap = sm.createSitemap({ 
		hostname: 'http://showcase.espncreativeworks.com', 
		cacheTime: 1000 * 60 * 15,
		urls: staticUrls.concat(results.projects).concat(results.videos).concat(results.images)
	});
};

async.parallel(tasks, done);

exports.show = function (req, res) {
	sitemap.toXML(function (xml){
		res.header('Content-Type', 'application/xml');
    res.send(xml);
	});
};