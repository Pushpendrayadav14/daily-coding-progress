const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.model");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

//post creation controller
async function createPostController(req, res) {
  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "image",
    folder: "Cohort_instagram_clone_posts/",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgURL: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

//getting post from users on id
async function getPostController(req, res) {
  const userId = req.user.id;
  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "post fetched successfully...",
    posts,
  });
}
//geting the post from the autherized user
async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "post not found..",
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "forbiden content...",
    });
  }
  return res.status(200).json({
    message: "post fetched successfully..",
    post,
  });
}

//post likes on the users post
async function likePostController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "Post not Found..",
    });
  }
  const like = await likeModel.create({
    post: postId,
    user: userId,
  });

  res.status(201).json({
    message: "Post like successfully..",
    like,
  });
}

//get all the post that is present on the system
async function getFeedController(req, res) {
  const posts = await postModel.find().populate("user");

  return res.status(200).json({
    message: "all post fetch successfully...",
    posts,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
  getFeedController,
};
