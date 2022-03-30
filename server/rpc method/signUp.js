const User = require('../protos/user_pb');
const {addUser} = require('../utils');


// SignUp method
function signUp(call,callback){
    const ApiResponse = new User.ApiResponse();
    if(addUser(call.request.getUser().getUsername(),call.request.getUser().getPassward())){
        ApiResponse.setResponseMsg("Welcome " + call.request.getUser().getUsername() + "!" );
        ApiResponse.setResponseCode(201);
    }
    else{
        ApiResponse.setResponseMsg("Username already exists.");
        ApiResponse.setResponseCode(401);
    }
    callback(null,ApiResponse);
}

module.exports = signUp;