const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userType: {
    type: String,
    default: "user"
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  partnerName: {
    type: String,
    require: true
  },
  dayOfWedding: {
    type: String,
    require: true
  },
  howManyGuest: {
    type: String,
    require: true
  },
  enjoyThing: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
  // guestBook: [
  //   {
  //   type : Schema.Types.ObjectId,
  //   ref: "guestBook"
  // }],
  // website: [
  //   {
  //   type : Schema.Types.ObjectId,
  //   ref: "website"
  // }]
});

module.exports = mongoose.model("users", UserSchema);
