const passport = require("../config/passport");
const bcrypt = require("bcryptjs");

// Connect model
const User = require("../models/User");

module.exports = function(app) {
  // Get user
  app.get("/api/user", (req, res) => {
    res.send("User Page");
  });

  // User login
  app.post("/user-login", (req, res, next) => {
    passport.authenticate("local", {
      successRedirect: "/api/user",
      failureRedirect: "/"
    })(req, res, next);
  });

  // User signup
  app.post("/user-signup", async (req, res) => {
    // Get user data
    console.log("user signup", req.body);
    const { email, password } = req.body;

    // ***Check required fields***

    // Check if email already exists
    let user = await User.findOne({ email: email }).then(user => {
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      } else {
        try {
          // Build user object - save to database
          const newUser = new User({
            email: email,
            password: password
          });
          console.log("Added user info:", newUser);

          // Encrypt password
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(newUser.password, salt);
          newUser.password = hash;

          newUser.save().then(response => {
            res.json(response);
          });

          // Catch error
        } catch (error) {
          console.error(error.message);
          res.status(500).send("Server Error");
        }
      }
    });
  });

  // Next route
};
