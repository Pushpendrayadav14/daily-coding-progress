const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  imgURL: {
    type: String,
    require: [true, "iamge url is require."],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: [true, "user id is required for post creation.."],
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
