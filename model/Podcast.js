const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    file_path: {
        type: String,
        required: true
    },  
    user_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    
    },
})

module.exports = mongoose.model('Podcast', podcastSchema);
