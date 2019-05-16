const express = require("express");
const app = express();
const PORT_NUM = 3001;

app.get("/", handleHomeRequest);
app.get("/login", handleLoginRequest);
app.get("/profile/:id", handleProfileRequest);
app.get("/reg", handleRegRequest);

app.listen(PORT_NUM);
print("server is listening on port " + PORT_NUM);

function handleHomeRequest(request, response) {
  response.send("Landing Page");
}

function handleLoginRequest(request, response) {
  response.send("Login Page");
}

function handleProfileRequest(request, response) {
  response.send(request.params);
}

function handleRegRequest(request, response) {
  response.send(request.query);
}

function print(msg) {
  console.log(msg);
}
