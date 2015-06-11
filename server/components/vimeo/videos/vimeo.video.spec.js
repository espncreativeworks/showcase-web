'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/vimeo/videos/:id', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/vimeo/videos/130328042')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });
});