const Staff = require('../models/staffs');

module.exports.staffs_get = (req, res) => {
	res.render('staffs', { tabTitle: 'Staffs' });
}

module.exports.staffs_post = (req, res) => {
	const un = req.body.username;
	const pw = req.body.password;

	const validate = async () => {
		Staff.find({username: un})

		.then(result => {
			if (un === result[0].username) {
				if (pw === result[0].password) {
					res.render('panel');
				} else {
					console.log('wrong password');
					res.redirect('/staffs')
				}
			} else {
				console.log('wrong username');
				res.redirect('/staffs')
			}
		})
		.catch(err => {
			console.log('catch error');
			res.redirect('/staffs')
		})
	}

	Staff.count({username: un})

	.then(result => {
		if (result > 0) {
			validate();
		} else {
			console.log('result not found')
			res.redirect('/staffs');
		}
	})

	.catch(err => {
		console.log('without result');
	})

	// Staff.create(req.body)

	// .then(result => {
	// 	console.log('added user')
	// 	res.redirect('/staffs');
	// })

}