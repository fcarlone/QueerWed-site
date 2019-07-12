const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  // guestBook: [
  //   {
  //   type : Schema.types.ObjectId,
  //   ref: "GuestBook"
  // }]
});

module.exports = mongoose.model("users", UserSchema);
