const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let MessageSchema = new Schema({
    
    from : {
		type : Schema.Types.ObjectId ,
		ref :'User',
        required : true
	},
	for : {
		type : Schema.Types.ObjectId ,
		ref :'User',
        required : true
	},
	message : {
		type: string
	},
    links : [{
        ref: String
    }],
    images: [{
        ref: String
	}],
	postedon : { 
		type : Date , 
		default : Date.now
	},
	deleted : {
		type : Boolean,
		default : false
	},
	status : {
		type:string,
		enum : ['read' , 'sent' , 'delivered' ,'pending' , 'seen'],
		default : 'sent'
	}

});



module.exports = mongoose.model('Message', MessageSchema);