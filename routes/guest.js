const isAuthenticated = require("../config/middleware/isAuthenticated");

// Connect model
const Guest = require("../models/Guest");

module.exports = function(app) {
  // Add guest
  app.post("/api/guests", isAuthenticated, async (req, res, next) => {
    // Add req validation
    console.log("add new guest post route", req.body);
    console.log("get user post route", req.user);

    // Destructuring
    const {
      name,
      address1,
      address2,
      city,
      state,
      zip,
      email,
      phone,
      type
    } = req.body;

    try {
      const newGuest = new Guest({
        name,
        address1,
        address2,
        city,
        state,
        zip,
        email,
        phone,
        type,
        user: req.user._id
      });

      // Save guest to database
      const guest = await newGuest.save();

      // Return guet to the client
      res.json(guest);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
};
