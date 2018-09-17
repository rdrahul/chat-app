const 
	Message = require('../models/message.model'),
	UtilityService = require('../utilities/utils');
	

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
	let chatUserId = ParseFromBody(req , )["chatuser"];

	//find the messages that were sent by the user or were received from the other user
	Message.find().or( 
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
 * Creates a new Message
 * @param {Object} req the request Object
 * @param {Object} res the response Object 
 */
let postMessage = function(req, res){

	let userId = req.user;

	let messageFrom = req.body["from"];
	let message = req.body["message"];
	let links = req.body["links"] || [];
	let images =req.body["images"] || [];

	//create object
	let newMessage = new Message({
		from : messageFrom,
		for :  userId , 
		message : message , 
		links : links,
		images : images,
	});

	//insert in db	
	Message.create( newMessage )
		.then( msg => {
			return 
				req.status(201).json( msg );
		})
		.catch( err => {
			return res.status(500).json(err);
		});


};

/**
 * updates the status of a message
 * @param {Object} req the request Object
 * @param {Object} res the response Object 
 */
let putMessage = function(req, res){
	let userId = req.user;

	let messageId = req.body['messageId'];

	Message.findByIdAndUpdate(messageId , req.body )
		.then( message => {
			return UtilityService.successResponse("Updated Successfully")
			
		})
		.catch( err =>  { return Response.errorMessage(err , res ); } );
};


module.exports = MessageController;