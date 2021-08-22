const { Router } = require('express');
const Route = Router();

const staffsController = require('../controllers/staffsController');

Route.get('/staffs', staffsController.staffs_get);
Route.post('/staffs', staffsController.staffs_post);

module.exports = Route;