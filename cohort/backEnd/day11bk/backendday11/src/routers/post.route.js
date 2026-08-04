const express = require("express");
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");

const postRouter = express.Router();

////post //api/post [[protected]]
//req.body{caption ,imageurl}
postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

//get /api/post/
postRouter.get("/", identifyUser, postController.getPostController);

//get /api/post/details/:postId
postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsController,
);

module.exports = postRouter;
