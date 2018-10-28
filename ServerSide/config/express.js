"use strict";

console

const
    express = require('express'),
    config = require('./config'),
    glob = require('glob'),
    cors = require('cors'),
    path = require('path'),
    mongoose = require('mongoose');

module.exports = (app, io) => {
    app.use(cors());

    let mongooseOptions = {
        useNewUrlParse : true
    }
    mongoose.connect('mongodb://localhost:27017/chat' , mongooseOptions)
        .then(  
            () => console.log("Connected to database.") ,
            (err) => console.error("Can't connect to database.")
        );

	// Globbing through the routes
	let rootPath  = path.normalize( __dirname + '/..' );

    let routes = glob.sync(rootPath + '/routes/**/*.js');
    routes.forEach(route => { 
		console.log(route);
        require(route)(app, io);
    });

    // for unmatched routes
    app.use((req, res) => {
        res.status(404).send('route not found');
    });
}