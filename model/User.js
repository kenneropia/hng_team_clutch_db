const mongoose = require("mongoose")
const Schema = mongoose.Schema;


//first of all you have a prompt to create an account where your name and user_id gets saved on your local storage...
//...the user_id is then in-turn used to find your speaker collection,podcast collection etc..
const UserSchema = new Schema({
        name: {
        type: String,
        required: true
    },
  last_time_accessed: {
        type: Date,
        required: true
    },
 
   
})

module.exports = mongoose.model('User', UserSchema);
