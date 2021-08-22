// requiring order model
const Order = require('../models/orders');

module.exports.trackorder_get = (req,res) => {
	res.render('trackorder', { tabTitle: 'Orders', oid: '' });
}

module.exports.trackorder_post = (req,res) => {
	const oid = req.body.oid;

	Order.find({oid: oid})

	.then(data => {
		res.render('orderdetails', { tabTitle: 'Order Details', oid, message: 'Order Details', results: data });
	})

	.catch(err => {
		res.render('orderdetails', { tabTitle: 'Order Not Found', oid, message: 'Order Not Found' });
	})
}