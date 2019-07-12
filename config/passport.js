const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load User model
const db = require("../models")

// Use Local Strategy
passport.use('user-local',
  new LocalStrategy(
    // User sign in with email
    { usernameField: "email" },
    (email, password, done) => {
      // Match user
      db.User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { messgae: "This email is not registered" });
        }
        // Decrypt password
        bcrypt.compare(password, user.password).then(res => {
          console.log(res);
          if (!res) {
            return done(null, false, {
              message: "This password is not correct"
            });
          } else {
            return done(null, user);
          }
        });
      });
    }
  )
);

passport.use('vendor-local',
  new LocalStrategy(
    // User sign in with email
    { usernameField: "email" },
    (email, password, done) => {
      // Match user
      db.VendorUser.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { messgae: "This email is not registered" });
        }
        // Decrypt password
        bcrypt.compare(password, user.password).then(res => {
          console.log(res);
          if (!res) {
            return done(null, false, {
              message: "This password is not correct"
            });
          } else {
            return done(null, user);
          }
        });
      });
    }
  )
);


// If authentication succeeds, a session will be established and
// maintained via a cookie set in the user's browser.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findById(id, function (err, user) {
    if (err) {
      db.VendorUser.findById(id, function (err, user) {
        done(err, user)
      })
    } else {
      done(err, user);
    }
  });

});

// Exporting configured passport
module.exports = passport;