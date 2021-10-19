
const mongoose  = require('mongoose')

// creation du schemas user 
var userSchema = new mongoose.Schema({
    balance: String,
    picture: String,
    age: Number,
    name: String,
    gender: String,
    company: String,
    email: String
});

// creation du model 
module.exports= mongoose.model('users',userSchema)