const UserService = require('./protos/user_grpc_pb');
const grpc = require('grpc');
const signIn = require('./rpc methods/signIn');
const signUp = require('./rpc methods/signUp');
const logout = require('./rpc methods/logout');



const server = new grpc.Server();
server.addService(UserService.UserServiceService, {signUp:signUp, signIn:signIn,logout:logout});
server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
server.start();

console.log("Server is up and running in port 127.0.0.1:50051");
