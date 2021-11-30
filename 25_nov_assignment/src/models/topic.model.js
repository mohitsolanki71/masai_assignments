const mongoose = require('mongoose');

// topic schema

const topicSchema = new mongoose.Schema(
    {
        topic: {type:String, required:true, unique:true}
    },{
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("topic", topicSchema);

// topic schema ended