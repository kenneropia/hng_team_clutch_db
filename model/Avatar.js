const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//added skin model and removed skin-type as skin-colour is already there, removed skin-style aswell.
//changed name model to avatar-name
//removed hair-type 'coz we already have hair-style, which already caters for every type of hair(afro,blond,red-haired)
//removed cloth-type 'coz we already have cloth-style, which already caters for every type of cloth(short-sleeved,long,round-neck,armless...)
//removed hairtype,clothtype and skintype model id's since we already have the collections here.
//removed preset-id, 'coz prompting would to create an avatar would only show when a creator decides to create an avatar.
// to get id of the podcast needed to be attached to the avatar, user needs to click on the podcasts...
//...collection already stored and displayed on the front-end
// you can change the podcast attached to former avatar you have created here too
// added character_duration key-value pair as an array 'coz a character might have varying times to talk in a particular podcast
const UserEditedAvatarSchema = new Schema({
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

   Avatarname: {
        type: String,
        required: true
    },

    character_duration:[{
        start: String,
        end: String,
        required: true
    }]
    ,
   
    gender: {
        type: String,
        required: true,
        enum: ['male','female'],
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
