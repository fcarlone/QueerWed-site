// Connect model
const db = require("../models");

module.exports = function (app) {
    // Get All Vendors
    app.get("/api/team", (req, res) => {
        console.log("get all vendors api route");
        db.VendorUser
            .find({})
            .sort({ name: 1 })
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err));
    });
};
