// Installation Package: npm install express-session --save-prod
// Installation Package: npm install body-parser --save-prod
// Installation Package: npm install mongoose --save-prod

var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

const routers = require("./routers.js");

mongoose
  .connect("mongodb://localhost:27017/expressdb", {
    useNewUrlParser: true,
  })
  .then(() => {
    var app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: false }));

    app.get("/", function (req, res) {
      res.send("Mongoose DB....");
    });

    app.use("/api", routers);

    app.listen(3000, () => {
      console.log("Server has started!");
    });
  });
