const mongoose = require("mongoose");
//schema banane ke liye
const noteSchema = new mongoose.Schema({
  name: String,
  title: String,
  age: Number,
});
//model banane ke liye
const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
