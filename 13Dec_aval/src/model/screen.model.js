
const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({

    name: {type: String, required: true},
    theater: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "theater",
        required: true,
    },

},{

    versionKey :false,
    timestamp: true,
});

module.exports = mongoose.model("screen", screenSchema);