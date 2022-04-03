const User = require('../protos/user_pb');
const {logOut} = require('../utils');


// logout method
function logout(call,callback){
    const ApiResponse = new User.ApiResponse();
    if(logOut(call.request.getUsername())){
        ApiResponse.setResponseMsg("Logged out!!");
        ApiResponse.setResponseCode(200);
    }
    else{
        ApiResponse.setResponseMsg("No active user found!");
        ApiResponse.setResponseCode(404);
    }

    callback(null,ApiResponse);
}

module.exports = logout;