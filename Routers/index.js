var express = require("express");
var app = express();

var routernow = require("./Routers/routesnow.js");

app.use("", routernow);

app.use("/use", routernow);

app.listen(3000);
