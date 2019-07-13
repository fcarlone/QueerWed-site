const mongoose = require("mongoose");

var UploadSchema = new mongoose.Schema(
    {
        img:
            { data: Buffer, contentType: String }
    }
);
var Upload = mongoose.model('Upload', UploadSchema);
module.exports = Upload