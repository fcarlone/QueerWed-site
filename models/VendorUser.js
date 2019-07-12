const mongoose = require("mongoose");

const VendorUserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  website: {
    type: String,
    require: true
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const VendorUser = mongoose.model("vendorusers", VendorUserSchema);
module.exports = VendorUser
