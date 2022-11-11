require("dotenv").config()
const {MongoClient} = require("mongodb");

async function connectToCluster(uri) {
    let mongoClient;

    try{
        console.log('Connecting to MongoDb Atlas Cluser');
        mongoClient = new MongoClient(uri);
        
        await mongoClient.connect();
        console.log('Connected to Mongodb Atlas Cluster');
        return mongoClient
        
    }catch (error) {
        console.error('Connection to MongoDB Atlas failed',error);

    }finally {
        mongoClient.close()
       }
}

connectToCluster(process.env.DATABASE_URI);

module.exports = connectToCluster;