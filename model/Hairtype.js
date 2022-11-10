const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const hairtypeSchema = new Schema({

    style: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    file_path: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Hairtype', hairtypeSchema);