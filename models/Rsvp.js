const mongoose = require("mongoose");
const Schema = mongoose.Schema


const RsvpSchema = mongoose.Schema({
  user: {
      type : Schema.Types.ObjectId,
      ref: "users"
  },
  guestName: {
    type: String,
  },
  isGoing: {
    type: String
  }
})

module.exports = mongoose.model("Rsvp", RsvpSchema);
