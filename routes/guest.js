const isAuthenticated = require("../config/middleware/isAuthenticated");

// Connect model
const Guest = require("../models/Guest");

module.exports = function(app) {
  // Get guests
  app.get("/planning/api/guests", isAuthenticated, async (req, res, next) => {
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
  app.post("/planning/api/guests", isAuthenticated, async (req, res, next) => {
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

  // Delete Guest
  app.delete("/planning/api/guests/:id", async (req, res) => {
    try {
      let guest = await Guest.findById(req.params.id);

      // If guest does not exists
      if (!guest) {
        return res.status(404).json({ msg: "Guest not found" });
      }

      //Verify user owns guest
      if (!guest.user.equals(req.user._id)) {
        return res.status(401).json({ msg: "User not authorized" });
      }

      // Delete guest from database
      await Guest.findByIdAndDelete(req.params.id);

      // Return guest to the client
      res.json(guest);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Update Guest
  app.put("/planning/api/guests/:id", async (req, res) => {
    console.log(`Update id ${req.params.id} for guest: ${req.body}`);

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

    // Build guest object
    const guestFields = {};
    if (name) guestFields.name = name;
    if (address1) guestFields.address1 = address1;
    if (address2) guestFields.address2 = address2;
    if (city) guestFields.city = city;
    if (state) guestFields.state = state;
    if (zip) guestFields.zip = zip;
    if (email) guestFields.email = email;
    if (phone) guestFields.phone = phone;
    if (type) guestFields.type = type;

    try {
      let guest = await Guest.findById(req.params.id);

      // If guest does not exists
      if (!guest) {
        return res.status(404).json({ msg: "Guest not found" });
      }

      // Update guest in database
      guest = await Guest.findByIdAndUpdate(
        req.params.id,
        { $set: guestFields },
        { new: true }
      );

      // Return guest to the client
      res.json(guest);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
};
