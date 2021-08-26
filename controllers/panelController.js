const Staff = require('../models/staffs');
const Review = require('../models/reviews');
const Order = require('../models/orders');

module.exports.panel_reviews_get = (req, res) => {
	Review.find()

	.then(reviews => {
		res.render('panelreviews', { tabTitle: 'Reviews' , reviews});
	})

	.catch(err => {
		console.log(err);
	})

}

module.exports.panel_reviews_post = (req, res) => {
	const reviewId = req.params.id;
	Review.findByIdAndDelete({ _id: reviewId })

	.then(data => {
		res.redirect('/panel/reviews');
	})

	.catch(err => {
		console.log(err);
	})
}
