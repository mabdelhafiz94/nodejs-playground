const express = require("express");
// const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT_NUM = 3000;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", handleHomeRequest);
app.get("/login", handleLoginRequest);
app.get("/profile/:id", handleProfileRequest);
app.post("/reg", handleRegRequest);

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
  response.send(request.body);
}

function print(msg) {
  console.log(msg);
}
