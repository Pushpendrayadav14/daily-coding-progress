const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "email already exists..."],
  },
  password: String,
});

const user = mongoose.model("user", userSchema);
module.exports = user;
