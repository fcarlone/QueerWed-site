require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
// Passport packages
const session = require("express-session");
const passport = require("./config/passport");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

// Middleware
app.use(express.json({ extended: true }));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve static assets

// Define routes
require("./routes/user")(app);
require("./routes/guest")(app);

// Route to load single HTML page
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Test Route (DELETE after front-end build)
app.get("/", (req, res) => {
  res.send("test server");
});

// Add listner
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
