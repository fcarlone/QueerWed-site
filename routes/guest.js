const isAuthenticated = require("../config/middleware/isAuthenticated");

// Connect model
const Guest = require("../models/Guest");

module.exports = function(app) {
  // Get guests
  app.get("/api/guests", isAuthenticated, async (req, res, next) => {
    console.log("get guests api route");

    try {
      const guests = await Guest.find({ user: req.user._id }).sort({ name: 1 });
      // Return guests to the client
      res.json(guests);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

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

      // Return guest to the client
      res.json(guest);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
};
