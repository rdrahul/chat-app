const logger = require('../../logger');

let ErrorMessage = function(status , res , err){
	logger.error(err);
	return res.status(status).json({"message" : err } );
}


module.exports = {
	GetLogger :  () => {
		return logger;
	},
	error : ErrorMessage
}