const express = require('express');
const Route = express.Router();

// requiring orders model
const customersController = require('../controllers/customersController');

Route.get('/customers', customersController.customer_get);
Route.post('/customers', customersController.customer_post);

module.exports = Route;