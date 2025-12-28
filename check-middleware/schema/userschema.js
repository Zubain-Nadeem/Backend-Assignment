const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String ,
        required : true,
        unique : true,
    }
});

const user = mongoose.model("userData" , userSchema);

module.exports = user ;