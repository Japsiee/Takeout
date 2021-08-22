// requiring order model
const Order = require('../models/orders');

module.exports.customer_get = (req,res) => {
	res.render('customers', { tabTitle: 'Customers', message: ''});
}

module.exports.customer_post = (req,res) => {
	const oid = Date.now();
	let totalPrice = 0;
	let prices = req.body.price;
	let foods = req.body.food;
	let foodArray;
	let quantity = req.body.quantity;
	let quantityArray;
	let buyer = req.body.buyer;
	let address = req.body.address;
	let contact = req.body.contact;

	if (buyer.toString().length <= 0 || address.toString().length <= 0 || contact.toString().length <= 0) {
		res.render('customers', { tabTitle: 'Customers', message: 'Order Failed', color: 'danger' });
	} else {
		if (Array.isArray(prices)) {
			prices.forEach(price => {
				totalPrice += parseFloat(price);
			})
		} else {
			totalPrice = prices;
		}

		if (Array.isArray(foods)) {
			foodArray = foods.map(food => {
				return food;
			})
		} else {
			foodArray = foods;
		}

		if (Array.isArray(quantity)) {
			quantityArray = quantity.map(quan => {
				return quan;
			})
		} else {
			quantityArray = quantity;
		}

		Order.create({
			oid: oid,
			food: foodArray,
			quantity: quantityArray,
			price: totalPrice,
			status: 'PENDING',
			buyer: buyer,
			contact: contact,
			address: address
		})

		.then(result => {
			res.render('customers', { tabTitle: 'Customers', message: `Order Success! You have 15 seconds to copy your order ID number: ${result.oid}`, color: 'success' });
		})

		.catch(err => {
			res.render('customers', { tabTitle: 'Customers', message: 'Order Failed', color: 'danger' });
		})		
	}
}