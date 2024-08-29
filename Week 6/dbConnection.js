const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://s224392997:QqEh1DOsvoFRZyJX@cluster0.hk1qy.mongodb.net/";

let client;

async function dbConnection() {
  try {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log("Connected successfully to server");
    return client;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = dbConnection;