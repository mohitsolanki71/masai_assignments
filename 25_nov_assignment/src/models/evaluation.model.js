const mongoose = require('mongoose');

// evalutaion schma ended

const evaluationSchema = new mongoose.Schema(
    {
        date: {type:Date, required:true},
        instructor: [{type: mongoose.Schema.Types.ObjectId, ref: "user", required:true}],
        topic:{ type: mongoose.Schema.Types.ObjectId, ref: "topic", required:true},
    },{
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("evaluation", evaluationSchema);
// evaluation schema ended successfully