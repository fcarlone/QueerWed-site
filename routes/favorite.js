// Connect model
const db = require("../models");

module.exports = function (app) {
    // get Favorite
    app.get("/api/favorite", (req, res) => {
        console.log("get all favorite api route");
        console.log(req.user)
        db.Favorite
            .find({ user: req.user._id })
            .sort({ name: 1 })
            .then(result => res.json(result))
            .catch(err => res.status(500).json(err));
    });

    // add Favorite
    app.post("/api/favorite", async (req, res) => {
        console.log("add favorite vendor");
        var updatedBody = req.body;
        console.log(updatedBody)
        updatedBody.user = req.user._id;
        console.log(updatedBody)
        db.Favorite
            .create(updatedBody)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });

    // delete Favorite
    app.delete("/api/favorite/:vendorid", async (req, res) => {
        console.log("delete favorite vendor");
        db.Favorite
            .remove({ user: req.user._id, vendorUser : req.params.vendorid })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    });



};
