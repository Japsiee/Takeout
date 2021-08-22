const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
}, { timestamps: true });

const Staff = mongoose.model('staff', staffSchema);

module.exports = Staff;