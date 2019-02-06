"use strict";

const
    express = require('express'),
    router = express.Router() ,
    isAuthenticated = require('../middleware/isautthenticated'),
    MessageController = require('../controllers/Message.controller');


router.get('/:chatId' , MessageController.getAllMessages );
router.post('' , MessageController.postMessage);

module.exports = function(app ) {

    app.use('/api/messages', isAuthenticated ,  router);

}