const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        umique: true,
        trim: true,
        minlength: 3

    },
},{
    timestamps: true,
});
 
const User = mongoose.model('User',userScchema);
module.exports= User;