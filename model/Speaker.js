const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// added userEditedAvatar here, 
// this is the final JSON sent to the front-end dev, it contains the video aggregating all user info...
//...and the userAvatar id.
// podcast_id is useful here for cases where we have multiple avatars for one podcast.The podcast_id helps group avatars.
const speakerSchema = new Schema({
    file_path: {
        type: String,
        required: true
    },
    userAvatar:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'UserEditedAvatar',
        required: true
    },
    podcast_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast',
        required: true
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
 
})

module.exports = mongoose.model('Speaker', speakerSchema);
