"use strict";

const
    express = require('express'),
    router = express.Router(),
    UserController = require('../../controllers/User.controller');


router.post( '/register' ,   UserController.createUser  );
router.post('/login', UserController.login  );

module.exports = function(app ) {

    app.use('/api/users',  router);

}