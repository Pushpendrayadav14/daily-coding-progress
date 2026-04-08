const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  email: {
    type: String,
    unique: [true, "email already exists"],
  },
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
