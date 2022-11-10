let Avatar = require("../model/Avatar")

async function createAvatarDocument(collection){
    let new_avatar = new Avatar({
        name: "Bob",
        skin: "White",
        gender: "male",
    })

    await collection.insertOne(new_avatar);
}

module.exports = createAvatarDocument;