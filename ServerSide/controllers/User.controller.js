const 
	User = require('../models/user.model'),
	jwtTokenService = require('../utilities/jwttoken.service');

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
let CreateUser = ( req , res ) =>{
	let name = req.body["name"];
	let email = req.body["email"];
	let password = req.body["password"];

	
	let user = new User( { name : name , email : email  , password : password  });
	
	user.save((err , newUser )=>{
		if (err)
		return res.status(500).json(err);
		return res.status(201).json(newUser);
	});

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
		if (err)
			return res.status(500).json(err);
		
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

				
				res.json({ user: user, token: token });

			} catch (error) {
				return res.status(500).json({error : error});
			}
		} else {
			return res.status(403).json({message  : "Username and password don't match"});	
		};
		
    
    });
};



module.exports = {
	getUsers : GetUsers,
	createUser : CreateUser,
	login : UserLogin
}