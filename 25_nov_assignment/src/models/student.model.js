const  mongoose = require('mongoose');

//student schema started

const studentSchema = new mongoose.Schema(
    {
        roll_id: {type:Number, required:true},
        batch: {type:String, required:true},
        marks: {type:Number, required:true},
        evaluation: {type:mongoose.Schema.Types.ObjectId, ref: "evaluation", required:true}
    },{
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("student", studentSchema);

// student schema ended