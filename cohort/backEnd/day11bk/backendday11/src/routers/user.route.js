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

/*
 *@route GET /follow-request
 *@description requist follow requests
 *access private
 */
userRouter.get(
  "/follow-request",
  identifyUser,
  userController.getPendingRequestsController,
);

//PATCH /follow-request/:requestId/accept
userRouter.patch(
  "/follow-request/:requestId/accept",
  identifyUser,
  userController.acceptFollowRequestController,
);

//PATCH /follow-request/:requestId/reject
userRouter.patch(
  "/follow-request/:requestId/rejected",
  identifyUser,
  userController.rejectFollowRequestController,
);

//GET /followers
userRouter.get(
"/followers",
identifyUser,
userController.getFollowersController
);

//GET /following
userRouter.get(
"/following",
identifyUser,
userController.getFollowingController
);

module.exports = userRouter;
