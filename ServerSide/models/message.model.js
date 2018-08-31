const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let MessageSchema = new Schema({
    
    by : {
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
	}

});



module.exports = mongoose.model('Message', MessageSchema);