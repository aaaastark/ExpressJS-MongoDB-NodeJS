// Installation Package: npm install express-session --save-prod
// Installation Package: npm install cookie-parser --save-prod

var express = require("express");
var cookie_parser = require("cookie-parser");
var session = require("express-session");

var app = express();
var cookieparser = cookie_parser();

// Defined the session secret points.....
app.use(cookieparser);
app.use(session({ secret: "SHH, its a secret session.." }));

app.get("/", function (req, res) {
  res.send("Sessions....");
});

// Method 1: Session Create..
app.get("/session", function (req, res) {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send("You visited this page " + req.session.page_views + " times");
  } else {
    req.session.page_views = 1;
    res.send(
      "Welcome to this page for the first time! = " + req.session.page_views
    );
  }
});

// Method 2: Session Create..
var number = 0;
app.get("/test", function (req, res) {
  if (req.session && number != 0) {
    number++;
    res.send("You visited this page " + number + " times");
  } else {
    number = 1;
    res.send("Welcome to this page for the first time! = " + number);
  }
});

app.listen(3000, () => {
  console.log("Localhost is open");
});
