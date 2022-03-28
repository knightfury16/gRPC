const calculator = require('../server/protos/calculator_pb');
const service = require('../server/protos/calculator_grpc_pb');
const grpc = require('grpc');

const client = new service.CalculatorServiceClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
)

// main stuff here

const sumRequest = new calculator.SumRequest();
const subRequest = new calculator.SubRequest();


sumRequest.setFirstNum(7);
sumRequest.setSecondNum(3);

subRequest.setFirstNum(7);
subRequest.setSecondNum(8);

client.sum(sumRequest, (err, response) => {
    if(!err){
        console.log("Calculator Sum Response: " + response.getResult());
    }
    else {
        console.log(err)
    }
});

client.sub(subRequest, (err, response) => {
    if(!err)console.log("Calculator Sub Response: " + response.getResult());
    else console.log(err);
})