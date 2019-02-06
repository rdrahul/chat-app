const
    mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	mongoosePaginate = require('mongoose-paginate');

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
		type: String,
		required : true
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
		type:String,
		enum : ['read' , 'sent' , 'delivered' ,'pending' , 'seen'],
		default : 'sent'
	}

});

// MessageSchema.plugin( mongoosePaginate );

module.exports = mongoose.model('Message', MessageSchema);