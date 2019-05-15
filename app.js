const http = require("http");
// const User = require("./User");

http.createServer(handleRequest).listen(3333);

function handleRequest(request, response) {
  if (request.url == "/") {
    response.write("Landing Page");
  } else {
    response.write(request.url);
  }
  response.end();
}
// const math = require("./math");
// const EventEmitter = require("events");

// print(math.sum(2, 4));
// print(math.PI);
// var mathobj = new math.MathObject("my math obj");

// var eventEmitter = new EventEmitter();

// eventEmitter.on("app", arg => {
//   print("event emitted with " + arg.name);
// });

// // setTimeout(() => {
// eventEmitter.emit("app", mathobj);
// // }, 1500);

function print(msg) {
  console.log(msg);
}
