const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const speakerSchema = new Schema({
    file_path: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Speaker', speakerSchema);