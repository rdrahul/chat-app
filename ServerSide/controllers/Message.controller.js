const 
	MessageModel = require('../models/message.model'),
	UtilityService = require('../utilities/utils');

 ;

const MessageController = {
	getMessage : getMessage,
	postMessage : postMessage,
	putMessage : putMessage,
	getAllMessages : getAllMessages
};


/**
 * Gets all the messages of a user sent by the reciever 
 * @param {Object} req the request Object
 * @param {Object} res the response Object 
 */
let getAllMessages = function(req, res){

	let userId = req.user;
	let chatUserId = ParseFromBody()["chatuser"];

	//find the messages that were sent by the user or were received from the other user
	MessageModel.find().or( 
		[
			{ from : userId , for : chatUserId } , 
			{ from: chatUserId , for : userId }
		])
		.then( ( response ) =>{
			return res.status(200).json(response);
		})
		.catch( (err) => {
			UtilityService.error(500 , res , err);
		});

};

/**
 * Gets a Message 
 * @param {Object} req the request Object
 * @param {Object} res the response Object 
 */
let getMessage = function(req, res){

};

/**
 * Creates a new Message
 * @param {Object} req the request Object
 * @param {Object} res the response Object 
 */
let postMessage = function(req, res){

	let userId = req.user;

	let messageFrom = req.body["from"];
	let messageBy = req.body["message"];
	let links = req.body["links"] || [];
	let images =req.body["images"] || [];


	//run validations
	UtilityService.validate( UtilityService.Types.String  , messageFrom );

	//create object

	//insert in db




};

/**
 * updates the status of a message
 * @param {Object} req the request Object
 * @param {Object} res the response Object 
 */
let putMessage = function(req, res){};




module.exports = MessageController;