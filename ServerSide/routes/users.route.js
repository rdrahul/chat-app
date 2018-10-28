"use strict";

const
    express = require('express'),
    router = express.Router() ,
    UserController = require('../controllers/User.controller');



router.get('/users' ,UserController.getUsers );

module.exports = function(app ) {

    app.use('/api/users',  router);

}