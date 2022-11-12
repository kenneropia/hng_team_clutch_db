const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserEditedAvatarSchema = new Schema({
        name: {
        type: String,
        required: true
    },
 
    gender: {
        type: String,
        required: true,
        enum: ['male','female']
    },
    selected_preset_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avatar'
    },
            podcast_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
 
     accessories:{
        hair_type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hairtype',
            required: true
        },
        skin_type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skincolor',
            required: true
        },
        cloth_type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Clothcolor',
            required: true
        }
    }

})

module.exports = mongoose.model('UserEditedAvatar', UserEditedAvatarSchema);
