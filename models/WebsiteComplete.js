const mongoose = require("mongoose");
const Schema = mongoose.Schema


const WebsiteSchema = mongoose.Schema({
  user: {
      type : Schema.Types.ObjectId,
      ref: "users"
  },
  guestName: {
    type: String,
  },
  rsvp: {
    type: String
  }
})

module.exports = mongoose.model("website", WebsiteSchema);
