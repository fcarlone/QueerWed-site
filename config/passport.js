const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../models/User");

// Use Local Strategy
passport.use(
  new LocalStrategy(
    // User sign in with email
    { usernameField: "email" },
    (email, password, done) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { messgae: "This email is not registered" });
        }
        // Decrypt password
        console.log("user password", password, user.password);
        bcrypt.compare(password, user.password).then(res => {
          console.log(res);
          // res === true
        });

        // console.log("passport user", user);
        // bcrypt.compare(password, user.password, (err, isMatch) => {
        //   if (err) throw err;
        //   console.log(
        //     "compare db password and user password",
        //     passport,
        //     user.password
        //   );
        //   if (isMatch) {
        //     // Email & password match - return user
        //     return done(null, user);
        //   } else {
        //     // Correct email - but incorrect password
        //     return done(null, false, {
        //       message: "This password is not correct"
        //     });
        //   }
        // });
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
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Exporting configured passport
module.exports = passport;
