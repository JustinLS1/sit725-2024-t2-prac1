let dbConnection = require('../dbConnection');

let client;
let collection;

async function init(callback) {
  client = await dbConnection();
  collection = client.db().collection('Cards');
  callback();
}

init(() => {
  function getAllCards(callback) {
    collection.find({}).toArray(callback);
  }

  function postCard(card, callback) {
    collection.insertOne(card, callback);
  }

  function deleteCard(id, callback) {
    collection.deleteOne({ _id: new ObjectID(id) }, callback);
  }

  function getMyCards(callback) {
    collection.find({}).toArray(callback);
  }

  module.exports = {
    getAllCards,
    postCard,
    deleteCard,
    getMyCards
  };
}).catch((err) => {
  console.error(err);
});