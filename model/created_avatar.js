const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const created_avatarSchema = new Schema({
    selected_preser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avatar'
    },
    skin_color_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skincolor',
        required: true
    },
    cloth_color_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clothcolor',
        required: true
    },
})

module.exports = mongoose.model('created_avatar', created_avatarSchema);