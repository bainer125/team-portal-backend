/*
	userModel.js
*/

var mongoose = require('mongoose');

// Setup user schema
var userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	isAdmin: {
		type: Boolean,
		requred: true
	},
	playerId: String,
	phone: String,
	email: String,
	date_created: {
		type: Date,
		default: Date.now
	},
	date_modified: {
		type: Date,
		default: Date.now
	},
});

// Export User model
var User = module.exports = mongoose.model('contact', userSchema);
module.exports.get = function(callback, limit){
	User.find(callback).limit(limit);
}
