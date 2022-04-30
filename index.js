// Installation Package: npm install express-session --save-prod
// Installation Package: npm install body-parser --save-prod

var express = require("express");
var bodyparser = require("body-parser");

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("Mongoose DB....");
});

app.listen(3000, () => {
  console.log("Server has started!");
});
