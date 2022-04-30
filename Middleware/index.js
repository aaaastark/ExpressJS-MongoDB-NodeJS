var express = require("express");
var app = express();

//   Route handler
app.get("", function (req, res, next) {
  res.send("Done now..");
  next();
});

//   First middleware before response is sent
app.use("/done", function (req, res, next) {
  console.log("Date is now " + Date.now());
  next();
});

//Middleware function to log request protocol
app.use("/ok", function (req, res, next) {
  console.log("Date is now " + Date.now());
  next();
});

// Route handler that sends the response
app.get("/ok", function (req, res) {
  res.send("Done now.. Date : " + Date.now());
});

app.listen(3000, () => {
  console.log("Localhost is open");
});
