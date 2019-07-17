const passport = require("../config/passport");
const bcrypt = require("bcryptjs");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models")

// Connect model
const Website = require("../models/Website");

module.exports = function(app) {
  // Get user
  // app.get("/user", (req, res) => {
  //   res.send(req.user);
  // });

  // app.post("/create-website", (req, res) => {
  //   console.log(req.body)
  //   Website.create(req.body)
  //   .then(data => {
  //     console.log(data)
  //   })
  // });

  app.get("/api/websitedata", isAuthenticated, async (req, res, next) => {
    console.log("hit api/websitedata")
    db.Website
      .find({user: req.user._id})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err))
  });
  

  app.post("/create-website", isAuthenticated, async (req, res, next) => {
    console.log("create website", req.body);

    const {
      name1,
      name2,
      date,
      location,
      rsvpdate
    } = req.body;

   try {
     const newWebsite = new Website ({
      name1,
      name2,
      date,
      location,
      rsvpdate,
      user: req.user._id
     });

     const website = await newWebsite.save();

     res.json(website);
   } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
   }
  });
  
};