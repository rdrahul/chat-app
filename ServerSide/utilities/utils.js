const logger = require('../../logger');

let GeneralMessage = ( msg, res, status = 200  ) => {
	logger.info(msg);
	return res.status(status).json({"message" : msg } );
}; 

let ErrorMessage = ( err, res, status = 500  ) => {
	logger.error(err);
	return res.status(status).json({"message" : err } );
}; ;


module.exports = {
	GetLogger :  () => {
		return logger;
	},
	errorResponse : ErrorMessage,
	successResponse : GeneralMessage
}