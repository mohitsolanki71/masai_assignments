const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    first_name: {type: 'string', required: true},
    last_name: {type: 'string', required: true},
    email: {type: 'string', required: true, unique: true},
},{
    versionKey:false,
    timestamp:true,
});

module.exports = mongoose.model("user", userSchema);

