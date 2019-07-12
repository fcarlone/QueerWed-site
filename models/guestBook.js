const mongoose = require("mongoose");

const GuestBookSchema = mongoose.Schema({
  guestName: {
    type: String,
    required: true
  },
  guestMessage: {
    type: String,
    require: true
  },
  user: [
    {
      type : Schema.types.ObjectId,
      ref: "users"
  }]
});

module.exports = mongoose.model("GuestBook", GuestBookSchema);
