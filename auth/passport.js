var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');
var configAuth = require('../config');

module.exports = function(passport) {
  // serialize
  passport.serializeUser(function(user, done) {
   done(null, user.id);
  });
  
  // deserialize
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }

        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }

        user.comparePassword(password, function(err, isMatch) {
          if(err) {return done(err); }

          if(!isMatch) {
            return done(null, false, { message: 'Incorrect password.' });
          }

          return done(null, user);
        });
      });
    }
  ));

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientId,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields : ['id', 'displayName', 'emails', 'photos']
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        User.findOne({ 'facebook.id': profile.id }, function(err, user) {
          if(err) {return done(err); }

          if(user) {
            return done(null, user);
          } else {
            var newUser = new User();
            newUser.facebook.id = profile.id;
            newUser.facebook.token = accessToken;
            newUser.facebook.name = profile.displayName;
            newUser.email = profile.emails[0].value;
            newUser.photo = profile.photos[0].value;
            newUser.password = 'random';
            newUser.name = profile.displayName;

            newUser.save(function(err) {
              if(err) 
                throw err;

              return done(null, newUser);
            });
          }
        });
      });
    }
  ));

   passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientId,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
    },
    function(token, refreshToken, profile, done) {
      process.nextTick(function() {
        console.log(profile);
        User.findOne({ 'google.id': profile.id }, function(err, user) {
          if(err) {return done(err); }

          if(user) {
            return done(null, user);
          } else {
            var newUser = new User();
            newUser.google.id = profile.id;
            newUser.google.token = token;
            newUser.google.name = profile.displayName;
            newUser.email = profile.emails[0].value;
            newUser.photo = profile.photos[0].value;
            newUser.password = 'random';
            newUser.name = profile.displayName;

            newUser.save(function(err) {
              if(err) 
                throw err;

              return done(null, newUser);
            });
          }
        });
      });
    }
  ));
}
