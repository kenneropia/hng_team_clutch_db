const mongoose = require("mongoose")
const Schema = mongoose.Schema;


//added required to be true for all id documents here including gender. The ids would be set  in the node script
// i removed the extra-layer to access the contents of accessories, so you're short of one traversal when accessing accessories after population 
// added speaker model
const UserEditedAvatarSchema = new Schema({
        name: {
        type: String,
        required: true
    },
 
    gender: {
        type: String,
        required: true,
        enum: ['male','female','neutral'],
        required:true
    },
    skincolor: {
        type: String,
        required: true
    },
    
    skin_file_path: {
        type: String,
        required: true
    },

    hairstyle: {
        type: String,
        required: true
    }, 
    haircolor: {
        type: String,
        required: true
    },
    hair_file_path: {
        type: String,
        required: true
    },

    clothcolor: {
        type: String,
        required: true
    }, 
    clothstyle: {
        type: String,
        required: true
    },
    
    cloth_file_path: {
        type: String,
        required: true
    },

    character_duration:[{
        start: String,
        end: String,
        required: true
    }],

    speaker_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Speaker',
        required:true
    },
            podcast_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast',
        required:true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
 
     

})

module.exports = mongoose.model('UserEditedAvatar', UserEditedAvatarSchema);
