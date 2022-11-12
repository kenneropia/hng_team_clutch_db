const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
    file_path: {
        type: String,
        required: true
    },  
    user_id: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Podcast', podcastSchema);
