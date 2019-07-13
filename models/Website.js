const mongoose = require("mongoose");
const Schema = mongoose.Schema


const WebsiteSchema = mongoose.Schema({
  user: {
      type : Schema.Types.ObjectId,
      ref: "users"
  },
  name1: {
    type: String,
  },
  name2: {
    type: String,
  },
  date: {
    type: String,
  },
  location: {
    type: String,
  }
})

module.exports = mongoose.model("website", WebsiteSchema);
