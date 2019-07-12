const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  todo: {
    type: String,
    require: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("todo", TodoSchema);
