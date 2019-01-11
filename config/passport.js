var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "username"
    },
    function(username, password, done) {
      console.log(username, password);
      db.User.find({ username: username }).then(function(dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect Username"
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, { message: "Incorrect Password" });
        }
        delete dbUser["password"];
        return done(null, dbUser);
      });
    }
  )
);
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
