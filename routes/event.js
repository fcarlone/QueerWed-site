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

    // Return event to clien
    res.json(event);

    // Catch error
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});