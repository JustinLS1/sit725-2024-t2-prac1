let client = require('../dbConnection');

let collection = client.db().collection('Cards');

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
