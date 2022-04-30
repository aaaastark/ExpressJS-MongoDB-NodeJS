var express = require("express");
var router_var = express.Router();

router_var.get("/get", function (req, res) {
  res.send("Get response.");
});

// GET: 127.0.0.1:3000/get
// GET: 127.0.0.1:3000/use/get

router_var.post("/post", function (req, res) {
  res.send("Post response.");
});

// POST: 127.0.0.1:3000/post
// POST: 127.0.0.1:3000/use/post

module.exports = router_var;
