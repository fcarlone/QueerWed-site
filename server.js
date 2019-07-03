require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

// Passport packages

const app = express();

const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

// Middleware
app.use(express.json({ extended: true }));

// Passport Middleware

// Serve static assets

// Define routes

// Route to load single HTML page

// Test Route (DELETE after front-end build)
app.get("/", (req, res) => {
  res.send("test server");
});

// Add listner
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
