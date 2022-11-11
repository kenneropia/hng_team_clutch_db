const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const avatarSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    skin: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male','female']
    },
    accessories:{
        hair_type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hairtype',
            required: true
        },
        skin_color: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skincolor',
            required: true
        },
        cloth_color: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Clothcolor',
            required: true
        }
    }

})

module.exports = mongoose.model('Avatar', avatarSchema);