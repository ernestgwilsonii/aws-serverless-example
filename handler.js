'use strict';

module.exports.hello = async (event, context) => {

  // Do stuff!
  let msg = "Hello Version 1.0.0 - AWS Lambda Serverless function executed successfully!";

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: msg,
      input: event,
    }),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.goodbye = async (event, context) => {

  // Do stuff!
  let msg = "Goodbye Version 1.0.0 - AWS Lambda Serverless function executed successfully!";

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: msg,
      input: event,
    }),
  };
};
