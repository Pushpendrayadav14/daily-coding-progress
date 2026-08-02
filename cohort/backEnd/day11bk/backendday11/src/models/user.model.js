const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user name already exist.."],
    require: [true, "user name is require.."],
  },
  email: {
    type: String,
    unique: [true, "email already exist.."],
    require: [true, "email is require.."],
  },
  password: {
    type: String,
    require: [true, "password is require.."],
  },
  bio: String,
  profileImg: {
    type: String,
    default: "https://ik.imagekit.io/2i7b2hees/defualtimageprofile.webp",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
