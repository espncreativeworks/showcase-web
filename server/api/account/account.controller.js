'use strict';

var Account = require('./account.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of accounts
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  Account.find({}, '-salt -hashedPassword', function (err, accounts) {
    if(err) return res.send(500, err);
    res.json(200, accounts);
  });
};

/**
 * Creates a new account
 */
exports.create = function (req, res, next) {
  var newAccount = new Account(req.body);
  newAccount.provider = 'local';
  newAccount.role = 'account';
  newAccount.save(function(err, account) {
    if (err) return validationError(res, err);
    var token = jwt.sign({ _id: account._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};

/**
 * Get a single account
 */
exports.show = function (req, res, next) {
  var accountId = req.params.id;

  Account.findById(accountId, function (err, account) {
    if (err) return next(err);
    if (!account) return res.send(401);
    res.json(account.profile);
  });
};

/**
 * Deletes a account
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  Account.findByIdAndRemove(req.params.id, function(err, account) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Change a accounts email
 */
exports.changeEmail = function(req, res, next) {
  var accountId = req.account._id;
  var newEmail = String(req.body.newEmail);

  Account.findById(accountId, function (err, account) {
    if(account) {
      account.email = newEmail;
      account.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Change a accounts password
 */
exports.changePassword = function(req, res, next) {
  var accountId = req.account._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  Account.findById(accountId, function (err, account) {
    if(account.authenticate(oldPass)) {
      account.password = newPass;
      account.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var accountId = req.account._id;
  Account.findOne({
    _id: accountId
  }, '-salt -hashedPassword', function(err, account) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!account) return res.json(401);
    res.json(account);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
