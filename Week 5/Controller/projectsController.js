var projectService = require('./projectService');

var getAllCards = (res) => {
  projectService.getAllCards((err, result) => {
    if (!err) {
      res.json({ statusCode: 200, data: result, message: 'success' });
    } else {
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  });
}

var postCard = (req, res) => {
  var card = req.body;
  projectService.postCard(card, (err, result) => {
    if (!err) {
      res.json({ statusCode: 201, data: result, message: 'Card created successfully' });
    } else {
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  });
}

var deleteCard = (req, res) => {
  var id = req.params.id;
  projectService.deleteCard(id, (err, result) => {
    if (!err) {
      res.json({ statusCode: 200, message: 'Card deleted successfully' });
    } else {
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  });
}

var getMyCards = (res) => {
  projectService.getMyCards((err, result) => {
    if (!err) {
      res.json({ statusCode: 200, data: result, message: 'success' });
    } else {
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  });
}

module.exports = {
  getAllCards,
  postCard,
  deleteCard,
  getMyCards
};