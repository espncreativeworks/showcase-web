'use strict';

var should = require('should');
var app = require('../../app');
var Account = require('./account.model');

var account = new Account({
  provider: 'local',
  name: 'Fake Account',
  email: 'test@test.com',
  password: 'password'
});

describe('Account Model', function() {
  before(function(done) {
    // Clear accounts before testing
    Account.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Account.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no accounts', function(done) {
    Account.find({}, function(err, accounts) {
      accounts.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate account', function(done) {
    account.save(function() {
      var accountDup = new Account(account);
      accountDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an email', function(done) {
    account.email = '';
    account.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it("should authenticate account if password is valid", function() {
    return account.authenticate('password').should.be.true;
  });

  it("should not authenticate account if password is invalid", function() {
    return account.authenticate('blah').should.not.be.true;
  });
});
