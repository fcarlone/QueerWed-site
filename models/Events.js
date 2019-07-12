const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  venue: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("event", EventSchema);
