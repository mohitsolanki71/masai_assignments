const mongoose = require("mongoose");

// user mongoose

const userSchema = new mongoose.Schema(
    {
        first_name: {type:String, required:true},
        last_name: {type:String, required:true},
        date_of_birth: {type:String, required:true},
        gender: {type:String, required:true},
    },{
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);

// user schema ended