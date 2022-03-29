// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_user_pb = require('../protos/user_pb.js');

function serialize_user_ApiResponse(arg) {
  if (!(arg instanceof protos_user_pb.ApiResponse)) {
    throw new Error('Expected argument of type user.ApiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ApiResponse(buffer_arg) {
  return protos_user_pb.ApiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_LogOutRequest(arg) {
  if (!(arg instanceof protos_user_pb.LogOutRequest)) {
    throw new Error('Expected argument of type user.LogOutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LogOutRequest(buffer_arg) {
  return protos_user_pb.LogOutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_LoginRequest(arg) {
  if (!(arg instanceof protos_user_pb.LoginRequest)) {
    throw new Error('Expected argument of type user.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LoginRequest(buffer_arg) {
  return protos_user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_SignUpRequest(arg) {
  if (!(arg instanceof protos_user_pb.SignUpRequest)) {
    throw new Error('Expected argument of type user.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_SignUpRequest(buffer_arg) {
  return protos_user_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  signUp: {
    path: '/user.UserService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: protos_user_pb.SignUpRequest,
    responseType: protos_user_pb.ApiResponse,
    requestSerialize: serialize_user_SignUpRequest,
    requestDeserialize: deserialize_user_SignUpRequest,
    responseSerialize: serialize_user_ApiResponse,
    responseDeserialize: deserialize_user_ApiResponse,
  },
  signIn: {
    path: '/user.UserService/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: protos_user_pb.LoginRequest,
    responseType: protos_user_pb.ApiResponse,
    requestSerialize: serialize_user_LoginRequest,
    requestDeserialize: deserialize_user_LoginRequest,
    responseSerialize: serialize_user_ApiResponse,
    responseDeserialize: deserialize_user_ApiResponse,
  },
  logout: {
    path: '/user.UserService/Logout',
    requestStream: false,
    responseStream: false,
    requestType: protos_user_pb.LogOutRequest,
    responseType: protos_user_pb.ApiResponse,
    requestSerialize: serialize_user_LogOutRequest,
    requestDeserialize: deserialize_user_LogOutRequest,
    responseSerialize: serialize_user_ApiResponse,
    responseDeserialize: deserialize_user_ApiResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
