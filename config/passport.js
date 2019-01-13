var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt-nodejs");

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(function(username, password, done) {
    db.User.findOne({ username: username }, function(err, response) {
      // console.log(response);
      // if (!response) {
      //   // invalid user
      //   console.log("invalid user");
      //   return done(null, false);
      // } else if (!response.validPassword(password)) {
      //   // invalid password
      //   console.log("invalid password");
      //   return done(null, false);
      // }
      done(null, response);
    });
  })
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
