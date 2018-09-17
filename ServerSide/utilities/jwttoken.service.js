const
    authConfig = require('../config/auth'),
    jwt = require('jsonwebtoken');

/**
 * Create a jwt token 
 * @param {*} payload data to be converted into token
 * @param {*} options additional options
 */
let SignToken = (payload, options) => {
    if (!options) 
        options = {};
    let token = jwt.sign(payload, authConfig.secret, options);
    return token;
}

module.exports = {
    signToken: SignToken
};