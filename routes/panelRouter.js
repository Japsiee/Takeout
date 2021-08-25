const { Router } = require('express');
const Route = Router();
const { requireAuth } = require('../middleware/authMiddleware');

Route.get('/panel', requireAuth , (req, res) => {
	res.render('panel', { tabTitle: 'Panel' });
})

Route.get('/panel/profile', (req, res) => {
	res.render('panelprofile', { tabTitle: 'Profile' });
})

Route.get('/panel/reviews', (req, res) => {
	res.render('panelreviews', { tabTitle: 'Reviews' });
})

Route.get('/panel/orders', (req, res) => {
	res.render('panelorders', { tabTitle: 'Orders' });
})

module.exports = Route;