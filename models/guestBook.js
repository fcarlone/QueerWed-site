const mongoose = require("mongoose");
const Schema = mongoose.Schema


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
      type : Schema.Types.ObjectId,
      ref: "users"
  }]
});

module.exports = mongoose.model("guestBook", GuestBookSchema);
