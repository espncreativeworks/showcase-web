var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (Account, config) {
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      Account.findOne({
        'facebook.id': profile.id
      },
      function(err, account) {
        if (err) {
          return done(err);
        }
        if (!account) {
          account = new Account({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'account',
            username: profile.username,
            provider: 'facebook',
            facebook: profile._json
          });
          account.save(function(err) {
            if (err) done(err);
            return done(err, account);
          });
        } else {
          return done(err, account);
        }
      })
    }
  ));
};