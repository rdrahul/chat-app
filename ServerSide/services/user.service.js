const User  = require( '../models/user.model' );

class UserService {

    constructor(){

    }

    /**
     * Gets the details of a user if already exist else returns false
     * @param {String} email The email of the user
     */
    static async GetIfUserExists( email ){
        try { 

        let user = await User.findOne(  {email : email } );
        return user || false;
        }
        catch(err){
            console.error( err);
            throw new Error("Something went wrong");
        }
    }
}

module.exports = UserService;