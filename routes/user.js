// Connect model
// const db = require("../models/index");

module.exports = function(app) {
  app.get("/api/user", (req, res) => {
    res.send("User Page");
  });
};
