const isAuthenticated = require("../config/middleware/isAuthenticated");

// Connect Model
const Event = require("../models/Events");

module.exports = function(app) {
  // Get events
  app.get("/api/events", isAuthenticated, async (req, res) => {
    try {
      const events = await Event.find({ user: req.user._id }).sort({ date: 1 });

      // Return event to client
      res.json(events);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Add event
  app.post("/api/events", isAuthenticated, async (req, res) => {
    console.log("event post route", req.body);

    const { venue, description, startDate } = req.body;

    try {
      const newEvent = new Event({
        venue: venue,
        description: description,
        date: startDate,
        user: req.user._id
      });

      // Save event to database
      const event = await newEvent.save();

      // Return event to client
      res.json(event);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Delete event
  app.delete("/api/events/:id", isAuthenticated, async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);

      // If event does not exists
      if (!event) {
        return res.status(404).json({ msg: "Event not found" });
      }

      // Verify user owns event
      if (!event.user.equals(req.user._id)) {
        return res.status(401).json({ msg: "User not authorized" });
      }

      // Delete event from database
      await Event.findByIdAndDelete(req.params.id);

      // Return event to client
      res.json(event);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Update event
  app.put("/api/events/:id", isAuthenticated, async (req, res) => {
    console.log("update event", req.body);
    try {
      const event = await Event.findById(req.params.id);

      // Catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  });
};
