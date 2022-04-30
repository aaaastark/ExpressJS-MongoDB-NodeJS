var express = require("express");
var app = express();

app.all("", function (req, res) {
  res.send("Static File.........");
});

app.use("/image", express.static("public"));

// 127.0.0.1:3000/image/AAAA STARK ICON.png

app.listen(3000, () => {
  console.log("Localhost is open");
});
