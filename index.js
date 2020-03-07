/*
	index.js
*/

// Import npm modules:
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose, set connection variable
mongoose.connect('mongodb://localhost/team-portal-backend', {useNewUrlParser: true});
var db = mongoose.connection;

// Check for database connection
if(!db)
	console.log("Error connecting database")
else
	console.log("Databased connected successfully")

// Setup server port
var port = process.env.port || 8080;

// Message for default URL
app.get('/', (req, res) => res.send('Team portal'))

// Use API routes in app
app.use('/api', apiRoutes);

// Launch app to listen on port
app.listen(port, function () {
	console.log("Running team portal on port " + port);
});

