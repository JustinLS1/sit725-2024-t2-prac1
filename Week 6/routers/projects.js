var express = require("express");
var router = express.Router();
var projectsController = require('../Controller/projectsController');

router.get('/', (req, res) => {
    projectsController.getAllCards(res);
});

router.post('/', (req, res) => {
    projectsController.postCard(req, res);
});

router.delete('/', (req, res) => {
    projectsController.deleteCard(req.params.id, res);
});

router.get('/mycards', (req, res) => {
    projectsController.getMyCards(res);
});

module.exports = router;