var express = require("express");
var app = express();

app.get("/:name", function (req, res) {
  res.send("The name is : " + req.params.name);
});

// 127.0.0.1:3000/allahrakha

app.get("/:id", function (req, res) {
  res.send("The id is : " + req.params.id);
});

// 127.0.0.1:3000/455

app.get("/all/:name/:id", function (req, res) {
  res.send("The name is " + req.params.name + " and id is " + req.params.id);
});

// 127.0.0.1:3000/all/allahrakha/1234

app.get("/number/:num([0-9]{5})", function (req, res) {
  res.send("The number is : " + req.params.num);
});

// 127.0.0.1:3000/number/13545

app.get("*", function (req, res) {
  res.send("Sorry, page dosn't exsist here.....");
});

// 127.0.0.1:3000

app.listen(3000);
