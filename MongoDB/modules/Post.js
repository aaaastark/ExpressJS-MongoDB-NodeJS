var mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  age: Number,
  content: String,
});

const model_mongo = mongoose.model("Post", schema);

module.exports = model_mongo;
