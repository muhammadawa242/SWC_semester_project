const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		firstName: String,
        lastName: String,
		email: String,
		password: String,
		location: String,
		occupation: String,
		picture: String,
	},
	{ timestamps: true }
);

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel; // directly exporting the userModel threw an error on the nodemon terminal