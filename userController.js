/*
	userController.js
*/

// Import user model
User = require('./userModel');

// Handle index actions
exports.index = function(req, res){
	User.get(function(err, users){
		if(err){
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "User retrieved successfully",
			data: users
		});
	});
};

// Handle create user actions
exports.new = async function (req, res) {
    const user = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        username : req.body.username,
        password : req.body.password,
        isAdmin : req.body.isAdmin,
        playerId : req.body.playerId,
        phone : req.body.phone,
        email : req.body.email,
    });
	//save the user and check for errors
    try{
        const newUser = await user.save(function (err) {
            // if (err)
            //     res.json(err);
            res.status(201).json(user);
        })
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};

// Handle view user actions
exports.view = function(req, res){
	User.findById(req.params.user_id, function(err, user){
		if(err)
			res.send(err);
		res.json({
			message: 'User details loading...',
			data: user
		});
	});
};

// Handle update user action
exports.update = function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if(err)
			res.send(err);
		user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.username = req.body.username;
        user.password = req.body.password;
        user.isAdmin = req.body.isAdmin;
        user.playerId = req.body.playerId;
        user.phone = req.body.phone;
        user.email = req.body.email;

        // Save the user, check for errors
        user.save(function(err){
        	if(err)
        		res.json(err);
        	res.json({
        		message: 'User Info updated',
        		data: user
        	});
        });
	});
};

// Handle delete user action
exports.delete = function(req, res){
	User.remove({
		_id: req.params.user_id
	}, function (err, user){
		if(err)
			res.send(err);
		res.json({
			status: "success",
			message: 'User deleted'
		});
	});
};


