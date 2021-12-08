const mongoose = require("mongoose");

const galarySchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true,
        unique: true,
    },
    pictures: [{type: String, required: true}],
},{
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("galary", galarySchema);