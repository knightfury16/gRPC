const calculator = require('./protos/calculator_pb');
const service = require('./protos/calculator_grpc_pb');
const GreetService = require('./protos/greet_grpc_pb');
const Greet = require('./protos/greet_pb');
const grpc = require('grpc');


// Implements the greet rpc method

function greet(call, callback){
    const greetResponse = new Greet.GreetResponse();
    greetResponse.setResult(
        'Hello ' + call.request.getGreeting().getFirstName()
    )
    callback(null,greetResponse);
}


function sum(call, callback){
    var sumResponse = new calculator.SumResponse();

    sumResponse.setResult(
        call.request.getFirstNum() + call.request.getSecondNum()
    )
    callback(null,sumResponse);
}

function sub(call, callback){
    const subResponse = new calculator.SubResponse();

    subResponse.setResult(
        call.request.getFirstNum() - call.request.getSecondNum()
    )

    callback(null,subResponse);
}


const server = new grpc.Server();
server.addService(service.CalculatorServiceService, {sum:sum,sub:sub});
server.addService(GreetService.GreetServiceService, {greet:greet});
server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
server.start();

console.log("Server is up and running in port 127.0.0.1:50051");