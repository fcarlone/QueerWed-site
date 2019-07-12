// const passport = require("passport")
// require("../config/passport")(passport);

const passport = require("../config/passport");
const bcrypt = require("bcryptjs");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Connect model
const db = require("../models");

module.exports = function(app) {
  // Get user
  app.get("/vendoruser", (req, res) => {
    res.send(req.user);
  });

  // User login
  app.post("/vendoruser-login", passport.authenticate('vendor-local'), (req, res) => {
    console.log("user login from client-side: ", req.user);
    // res.json(req.user);
    res.redirect(`/vendoruser`);
  });

  // User signup
  app.post("/vendoruser-signup", async (req, res) => {
    // Get user data
    console.log("user signup from client-side", req.body);
    const { email, password, category, name, address, phone, website, description } = req.body;

    // ***Check required fields***

    // Check if email already exists
    let vendorUser = await db.VendorUser.findOne({ email: email }).then(user => {
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      } else {
        try {
          // Build user object - save to database
          const newUser = new db.VendorUser({
            email,
            password,
            category,
            name,
            address,
            phone,
            website,
            description
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
  // Auth rule in secone parameter
  app.get("/api/vendoruser_data", isAuthenticated, (req, res) => {
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
