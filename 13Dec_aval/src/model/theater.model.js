
const mongoose = require("mongoose");

const theaterSchema = new mongoose.Schema({

    name: {type: String, required: true},
    location: {type: String, required: true},

},{

    versionKey :false,
    timestamp: true,
});

module.exports = mongoose.model("theater", theaterSchema);