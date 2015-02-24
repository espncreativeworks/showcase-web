exports.setup = function (Account, config) {
  var passport = require('passport');
  var TwitterStrategy = require('passport-twitter').Strategy;

  passport.use(new TwitterStrategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: config.twitter.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    Account.findOne({
      'twitter.id_str': profile.id
    }, function(err, account) {
      if (err) {
        return done(err);
      }
      if (!account) {
        account = new Account({
          name: profile.displayName,
          username: profile.username,
          role: 'account',
          provider: 'twitter',
          twitter: profile._json
        });
        account.save(function(err) {
          if (err) return done(err);
          return done(err, account);
        });
      } else {
        return done(err, account);
      }
    });
    }
  ));
};