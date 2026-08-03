const express = require("express");
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.Router();

////post //api/post [[rptected]]
//req.body{caption ,imageurl}
postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

module.exports = postRouter;
