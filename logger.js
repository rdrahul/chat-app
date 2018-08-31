const winston = require('winston');
const moment  = require('moment');

const 
	genericLogger = null,
    dbLogger = null,
	loginLogger   = null,
	networkLogger = null;
	
//initailize all the loggerFiles
function initLogger() {
	
	console.log('logger.js > initLogger');
    
    genericLogger = new (winston.Logger)({
        transports: [
          new (winston.transports.Console)(),
          new (winston.transports.File)({ filename: __dirname+'/log/error.log' })
        ]
    });

    dbLogger = new (winston.Logger)({
        transports: [
          //new (winston.transports.Console)(),
          new (winston.transports.File)({ filename: __dirname+'/log/db.log' })
        ]
    });



    networkLogger = new (winston.Logger)({
        transports: [
          new (winston.transports.Console)(),
          new (winston.transports.File)({ filename: __dirname+'/log/network.log' })
        ]
    });

    loginLogger = new (winston.Logger)({
        transports: [
          new (winston.transports.Console)(),
          new (winston.transports.File)({ filename: __dirname+'/log/login.log' })
        ]
    });


}

initLogger();
var Logger = {}; 

Logger.error = function(n) {

  genericLogger.log('error : ', moment().format('DD-MM-YYYY') ,' : '  , n);
};

Logger.info = function(n) {
  genericLogger.log('info:',  moment().format('DD-MM-YYYY') ,' : '  , n);
};

Logger.db = function(type, message) {
    switch(type) {
		case 'error' : dbLogger.log( moment().format('DD-MM-YYYY') ,' : '  ,   message); break;
		case 'info' : dbLogger.info( moment().format('DD-MM-YYYY') ,' : '  , message  );break
        default :  dbLogger.info( moment().format('DD-MM-YYYY') ,' : '  , message  );
    } 
};

Logger.network = function(type, message) {
	
	switch(type) {
		case 'error' : networkLogger.log( moment().format('DD-MM-YYYY') ,' : '  ,   message); break;
		case 'info' : networkLogger.info( moment().format('DD-MM-YYYY') ,' : '  , message  );break
        default :  networkLogger.info( moment().format('DD-MM-YYYY') ,' : '  , message  );
    } 

};

Logger.login = function(type, message) {
 
	switch(type) {
		case 'error' : loginLogger.log( moment().format('DD-MM-YYYY') ,' : '  ,   message); break;
		case 'info' : loginLogger.info( moment().format('DD-MM-YYYY') ,' : '  , message  );break
        default :  loginLogger.info( moment().format('DD-MM-YYYY') ,' : '  , message  );
    } 
};

module.exports = Logger;