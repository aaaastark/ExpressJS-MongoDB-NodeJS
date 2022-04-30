// Installation Package: npm install cookie-parser --save-prod

var express = require("express");
var cookie_parser = require("cookie-parser");

var app = express();

app.use(cookie_parser());

app.get("/", function (req, res) {
  res.cookie("name", "express").send("message: cookie set");
  console.log("Cookies : ", req.cookies);
});

// 127.0.0.1:3000/
// Cookies :  { name: 'express' }

app.get("/done", function (req, res) {
  res.send("Cookies.........");
});

app.get("/clear", function (req, res) {
  res.clearCookie("name").send("message: cookie is clear");
});

// 1:       127.0.0.1:3000/
//          message: cookie set
// Ouput:   Cookies :  { name: 'express' }

// 2:        127.0.0.1:3000/clear
// Output:   message: cookie is clear

// 3:       127.0.0.1:3000/
//          message: cookie set
// Ouput:   Cookies :  [Object: null prototype] {}

app.listen(3000, () => {
  console.log("Localhost is open");
});
