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
  app.post("/user-login", passport.authenticate("local"), (req, res) => {
    // Redirct to the users account page
    res.json("/api/user");
  });

  // User signup
  app.post("/user-signup", async (req, res) => {
    // Get user data
    console.log("user signup", req.body);
    const { email, password } = req.body;

    let user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    try {
      // Build user object - save to database
      const newUser = new User({
        email: email,
        password: password
      });
      console.log("user to be added", newUser);

      // Encrypt password
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;
          // Store hash in your password and send to MongoDB.
          newUser.save().then(response => {
            res.json(response);
          });
        });
      });

      // Catch error
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Next route
};
