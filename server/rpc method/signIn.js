const User = require('../protos/user_pb');
const {authenticate} = require('../utils');



// SignIn method
function signIn(call,callback){
    const ApiResponse = new User.ApiResponse();
    if(authenticate(call.request.getUsername(),call.request.getPassward())){
        ApiResponse.setResponseMsg(
            "Sign in successful! Welcome " + call.request.getUsername()
        )
        ApiResponse.setResponseCode(200);
    }
    else{
        ApiResponse.setResponseMsg("Authentication failed.Try again.");
        ApiResponse.setResponseCode(401);
    }

    callback(null,ApiResponse);
}

module.exports = signIn;