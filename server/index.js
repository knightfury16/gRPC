const User = require('./protos/user_pb');
const UserService = require('./protos/user_grpc_pb');
const grpc = require('grpc');

const {authenticate,addUser,logOut} = require('./utils');


// Implement rpc method

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


const server = new grpc.Server();
server.addService(UserService.UserServiceService, {signUp:signUp, signIn:signIn,logout:logout});
server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
server.start();

console.log("Server is up and running in port 127.0.0.1:50051");
