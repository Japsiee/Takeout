const express = require('express');
const Route = express.Router();

const trackorderController = require('../controllers/trackorderController');

Route.get('/orders', trackorderController.trackorder_get);
Route.post('/orders', trackorderController.trackorder_post);

module.exports = Route;