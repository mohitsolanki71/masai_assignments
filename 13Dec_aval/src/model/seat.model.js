
const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({

    available_seat: {type: Number, required: true},
    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "show",
        required: true,
    }

},{

    versionKey :false,
    timestamp: true,
});

module.exports = mongoose.model("seat", seatSchema);