const mongoose = require("mongoose");

//schema create kera
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  age: Number,
});
//model create karenge
const noteModel = mongoose.model("notes", noteSchema);
module.exports = noteModel;
