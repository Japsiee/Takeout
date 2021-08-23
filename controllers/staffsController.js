const Staff = require('../models/staffs');


module.exports.staff_get_signup = (req, res) => {
	res.render('signup', { tabTitle: 'Signup' });
}

module.exports.staff_get_login = (req, res) => {
	res.render('login', { tabTitle: 'Login' });
}

module.exports.staff_post_signup = (req, res) => {
	try {
		Staff.create(req.body)

		.then(result => {
			res.redirect('/staffs/login');
		})
	} catch(e) {
		console.log(e);
	}
}

module.exports.staff_post_login = (req, res) => {
	
}