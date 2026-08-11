const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user name already exist.."],
    required: [true, "user name is require.."],
  },
  email: {
    type: String,
    unique: [true, "email already exist.."],
    required: [true, "email is require.."],
  },
  password: {
    type: String,
    required: [true, "password is require.."],
    select: false,
  },
  bio: String,
  profileImg: {
    type: String,
    default: "https://ik.imagekit.io/2i7b2hees/defualtimageprofile.webp",
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
