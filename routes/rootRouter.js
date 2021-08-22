const express = require('express');
const Route = express.Router();

const rootController = require('../controllers/rootController');

Route.get('/', rootController.root_get);
Route.post('/', rootController.root_post);

module.exports = Route;