var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Muhammad Allah Rakha");
});

app.get("/hello", function (req, res) {
  res.send("Done Johon");
});

app.post("/done", function (req, res) {
  res.send("Post done");
});

app.all("/all", function (req, res) {
  res.send("All done json.");
});

app.put("/put", function (req, res) {
  res.send("Put done sql.");
});

app.listen(3000);
