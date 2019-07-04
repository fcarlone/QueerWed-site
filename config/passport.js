const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// Load User model
const db = require("../models");

// Use Local Strategy
passport.use(
  new LocalStrategy(
    // User sign in with email
    { usernameField: "email" },
    (email, password, done) => {
      // Match user
      db.User.findOne({
        where: {
          email: email
        }
      }).then(user => {
        if (!user) {
          return done(null, false, { messgae: "This email is not registered" });
        }
        // If correct email - but incorrect password
        else if (!user.validPassword(password)) {
          return done(null, false, { message: "This password is not correct" });
        }
      });
      // Email & password match - return user
      return done(null, user);
    }
  )
);

// If authentication succeeds, a session will be established and
// maintained via a cookie set in the user's browser.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Exporting configured passport
module.exports = passport;
