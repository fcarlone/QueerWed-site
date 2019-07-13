require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
// Passport packages
const session = require("express-session");
const passport = require("./config/passport");
// For Image File upload
const fs = require("fs");


const app = express();

const PORT = process.env.PORT || 5000;

// Connect database
connectDB();

const db = require("./models");

// Middleware
app.use(express.json({ extended: true }));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define routes
require("./routes/user")(app);
require("./routes/vendorUser")(app);
require("./routes/guest")(app);
<<<<<<< HEAD
require("./routes/website")(app);
require("./routes/team")(app);


=======
require("./routes/todo")(app);
require("./routes/events")(app);
require("./routes/website")(app);
require("./routes/team")(app);

>>>>>>> 3c0b8776e990b8f5844d84db48a9bd3e7a82cd12
// Route to load single HTML page
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Test Route (DELETE after front-end build)
app.get("/", (req, res) => {
  res.send("test server");
});

// for Image Upload
// app.use(multer({
//   dest: "./uploads/",
//   rename: function (fieldname, filename) {
//     return filename;
//   },
// }));

// app.post("/api/photo", function (req, res) {
//   var newUpload = new db.Upload();
//   newUpload.img.data = fs.readFileSync(req.files.userPhoto.path)
//   newUpload.img.contentType = "image / png";
//   newUpload.save();
// });

// Add listner
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
