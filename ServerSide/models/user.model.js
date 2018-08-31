const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    _ = require('lodash');

let UserSchema = new Schema({
    
    firstname : {
        type :String ,
        required : true
	},
	lastname : {
		type: string
	},
    email: {
        type: String,
        trim: true,
        required: true,
        unique : true
    },
    password : {
        type: String,
        required : true

    },
    salt : {
        type :String
    },
    profilePic : {
        type : String
    }

});

/**
 * Hook a pre save method to hash the password
 */
UserSchema.pre('save', function(next) {
 
    if(!this.salt) {
        if (this.password && this.password.length >= 4) {
            this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
            this.password = this.hashPassword(this.password);
        }
    }

    next();
});


/**
 * Create instance method for hashing a password
 */
UserSchema.methods.hashPassword = function(password) {
    if (this.salt && password) {
        return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
    } else {
        return password;
    }
};

/**
 * Create instance method for authenticating user
 */
UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

module.exports = mongoose.model('User', UserSchema);