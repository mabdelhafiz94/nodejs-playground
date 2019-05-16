const express = require("express");
const app = express();
const PORT_NUM = 3001;

app.get("/", handleRequest);
app.get("/login", handleRequest);
app.get("/users/:name/", handleRequest);

app.listen(PORT_NUM);
print("server is listening on port " + PORT_NUM);

function handleRequest(request, response) {
  if (request.url == "/") {
    response.send("Landing Page");
  } else if (request.url == "/login") {
    response.send("Login Page");
  } else {
    print(request.params);
  }
}

function print(msg) {
  console.log(msg);
}
