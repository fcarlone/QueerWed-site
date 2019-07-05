const passport = require("../config/passport");
const bcrypt = require("bcryptjs");

// Connect model
const User = require("../models/User");

module.exports = function(app) {
  // Get user
  app.get("/user", (req, res) => {
    res.send(req.user);
  });

  // User login
  app.post("/user-login", passport.authenticate("local"), (req, res) => {
    console.log("user login from client-side: ", req.user);
    // res.json(req.user);
    res.redirect(`/user`);
  });

  // User signup
  app.post("/user-signup", async (req, res) => {
    // Get user data
    console.log("user signup from client-side", req.body);
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

  // Route for getting user data to be used on the client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      //  If user is not logged in, send back an empty object
      res.json({});
    } else {
      //  If user is logged in, send back data (Do not send password)
      res.json({
        id: req.user._id,
        email: req.user.email
      });
    }
  });
};
