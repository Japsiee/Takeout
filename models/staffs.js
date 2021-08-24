const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const staffSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Please enter a username'],
		minlength: [4, 'Minimum username length is 4 characters'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Please enter a password'],
		minlength: [6, 'Minimum password length is 6 characters']
	}
}, { timestamps: true });

staffSchema.pre('save', async function(next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
})

const Staff = mongoose.model('staff', staffSchema);

module.exports = Staff;