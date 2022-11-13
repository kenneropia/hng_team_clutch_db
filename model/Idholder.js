const mongoose = require("mongoose")
const Schema = mongoose.Schema;


//anytime a new podcast is created its id is pushed here and stored in the podcastholder array.
//once a user enters the site, the user_id and the podcast id are saved on the local storage and these id's...
//...would be used to traverse any other model.
// the podcast id array in particular contains all ids, which an id of a podcast could be the link to multiple avatars attached to that podcast.
const IdSchema = new Schema({
     
    podcastholder:[
        {
            type:String,
        }
    ],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
 
   
})

module.exports = mongoose.model('Idholder', IdSchema);
