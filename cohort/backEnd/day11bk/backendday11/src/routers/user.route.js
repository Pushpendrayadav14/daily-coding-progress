const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const identifyUser = require("../middlewares/auth.middleware");

/*
@route post /api/users/follow/:userid
@description follow an user
@access private
*/
userRouter.post(
  "/follow/:userid",
  identifyUser,
  userController.followUserController,
);

/*
@route post /api/users/unfollow/:userid
@description unfollow an user
@access private
*/
userRouter.post(
  "/unfollow/:userid",
  identifyUser,
  userController.unfollowUserController,
);

module.exports = userRouter;
