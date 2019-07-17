const mongoose = require("mongoose");

const FavoriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    vendorUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendorusers"
    },
    date: {
        type: Date,
        require: true
    },
});

module.exports = mongoose.model("favorites", FavoriteSchema);
