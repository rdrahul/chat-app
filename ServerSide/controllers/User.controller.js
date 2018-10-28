const 
	User = require('../models/user.model'),
	jwtTokenService = require('../utilities/jwttoken.service'),
	UserService = require( '../services/user.service' );

/**
 * Gets All the users 
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
let GetUsers = (req, res) => {

	User.find( {} , ( err , users ) => {
		if ( err )
			return res.status( 500 ).json( err );
		return res.status( 200 ).json( { users : users }); 
	});
	
}

/**
 *  Creates a new user
 * @param {Object} req The request object
 * @param {Object} res The response object 
 */
let CreateUser = async function( req , res ) {
	try{
		let firstname = req.body["firstname"];
		let lastname = req.body["lastname"] ;
		let email = req.body["email"]  ;
		let password = req.body["password"];

		//run validations

		//check if userExists
		let existingUser  = await UserService.GetIfUserExists( email );
		console.log( existingUser);
		if (existingUser)
			return res.status(400).json({error :"user exists"});

	
		let user = new User( { firstname : firstname , email : email  , password : password  , lastname : lastname });
		
		let savedUser  = await user.save();
		return res.status(201).json({"message" : "Successfully registered the user"  });


	}catch(err){
		console.log(err);
		return res.status(500).json({error : err.toString()});
	}
	

}  

/**
 * Login a user
 * @param {Object} req The request object
 * @param {OBject} res The reponse object
 */
let UserLogin = (req, res) => {
	
	//get details from the body
	let userDetails = req.body;

	//find the user with such email
    User.findOne({ email: userDetails.email }, (err, user) => {

		//in case db crashes or some other server error.
		if (err){
			return res.status(500).json(err.toString());
		}
		//if there is no such user
        if (!user) return res.status(404).json({message : "User not found"});
		
		//if user is found get it's password and authenticate the user.
		userDetails.password = user.hashPassword(userDetails.password);

		if (userDetails.password === user.password) {

			//create a new token
			try {
				let token = jwtTokenService.signToken({
					user_id: user._id
				}, {
					expiresIn: '12h'                         
				});

				
				res.json({ user: user._id, token: token });

			} catch (error) {
				console.log(error);
				return res.status(500).json({error : error});
			}
		} else {
			return res.status(403).json({message  : "Username and password don't match"});	
		};
		
    
    });
};

let CheckIfUserExists



module.exports = {
	getUsers : GetUsers,
	createUser : CreateUser,
	login : UserLogin
}