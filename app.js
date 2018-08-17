'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var port = 3700;
var app = express();

// start the server
app.listen(port, function() {
  console.log('app started');
});

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
	});
	app.use(session({
		secret: "MS1292881ksshSJSH"
	}));

//router
var lola = require('./rutas');

app.use('/api', lola);
//CORS


//exportar
module.exports = app;
