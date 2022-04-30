var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("", function (req, res) {
  res.render("firt_new");
});

app.get("/done", function (req, res) {
  res.render("dynamic_new", {
    name: "Allah Aakha Don",
    id: 7834,
  });
});

app.listen(3000, () => {
  console.log("Localhost is open");
});
