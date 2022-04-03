const User = require('../protos/user_pb');
const {addUser} = require('../utils');


// SignUp method
function signUp(call,callback){
    const ApiResponse = new User.ApiResponse();
    addUser(call.request.getUser().getUsername(),call.request.getUser().getPassward())
        .then(result => {
            ApiResponse.setResponseMsg("Welcome " + call.request.getUser().getUsername() + "!" );
            ApiResponse.setResponseCode(201);
            callback(null,ApiResponse);
        })
        .catch(err => {
            if(err.errno === 1062){
                ApiResponse.setResponseMsg("Username already exists.");
                ApiResponse.setResponseCode(401);
            }
            else{
                console.log(err);
            }
            callback(null,ApiResponse);
        });
}

module.exports = signUp;