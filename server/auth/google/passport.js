var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports.setup = function (Account, config) {
  passport.use(new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      Account.findOne({
        'google.id': profile.id
      }, function(err, account) {
        if (!account) {
          account = new Account({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'account',
            username: profile.username,
            provider: 'google',
            google: profile._json
          });
          account.save(function(err) {
            if (err) done(err);
            return done(err, account);
          });
        } else {
          return done(err, account);
        }
      });
    }
  ));
};
