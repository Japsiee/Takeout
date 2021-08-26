const { Router } = require('express');
const Route = Router();
const { requireAuth } = require('../middleware/authMiddleware');

// requiring controller
const controller = require('../controllers/panelController');

Route.get('/panel', requireAuth , (req, res) => {
	res.render('panel', { tabTitle: 'Panel' });
})



Route.get('/panel/profile', requireAuth, (req, res) => {
	res.render('panelprofile', { tabTitle: 'Profile' });
})



Route.get('/panel/reviews', requireAuth, controller.panel_reviews_get);

Route.post('/panel/reviews/:id', requireAuth, controller.panel_reviews_post);



Route.get('/panel/orders', requireAuth, (req, res) => {
	res.render('panelorders', { tabTitle: 'Orders' });
})


module.exports = Route;