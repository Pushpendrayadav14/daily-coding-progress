const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  const followerId = req.user.id;
  const followeeId = req.params.userid;

  if (followeeId === followerId) {
    return res.status(401).json({
      message: "you can not follow your shelf..",
    });
  }

  // const isFollowExist = await userModel.findOne({
  //   id: followeeId,
  // });

  //chat gpt changes
  const isFollowExist = await userModel.findById(followeeId);

  if (!isFollowExist) {
    return res.status(404).json({
      messaage: "user are trying to follow does not exist ",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerId,
    followee: followeeId,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `you are already follow this ${followeeId}`,
      follow: isAlreadyFollowing,
    });
  }

  //followStatus find karne ke liye ....
  let followStatus = "accepted";

  if (isFollowExist.isPrivate) {
    followStatus = "pending";
  }

  const followRecord = await followModel.create({
    follower: followerId,
    followee: followeeId,
    status: followStatus,
  });
  res.status(201).json({
    message:
      followStatus === "accepted"
        ? `You are now following ${followeeId}`
        : `Follow request sent successfully`,
    follow: followRecord,
  });
}

//unfollowUserController controllera code ...

async function unfollowUserController(req, res) {
  const followerId = req.user.id;
  const followeeId = req.params.userid;

  const isUserFollowing = await followModel.findOne({
    follower: followerId,
    followee: followeeId,
  });
  if (!isUserFollowing) {
    return res.status(200).json({
      messaage: `you are not following ${followeeId}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);
  res.status(200).json({
    message: `you have unfollowed ${followeeId}`,
  });
}

//getPendingRequestsController
async function getPendingRequestsController(req, res) {
  const userId = req.user.id;
  const requests = await followModel.find({
    followee: userId,
    status: "pending",
  });
  requests.populate("follower", "username profileImg");

  return res.status(200).json({
    message: "Pending requests fetched successfully",
    requests,
  });
}

//acceptFollowRequestController
async function acceptFollowRequestController(req, res) {
  const requestId = req.params.requestId;
  const userId = req.user.id;
  const request = await followModel.findById(requestId);

  if (!request) {
    return res.status(404).json({
      messaage: "Follow request not found.",
    });
  }

  if (request.followee.toString() !== userId) {
    return res.status(403).json({
      message: "Unautherized..",
    });
  }

  if (request.status === "accepted") {
    return res.status(400).json({
      message: "Request already accepted",
    });
  }
  request.status = "accepted";

  await request.save();

  return res.status(200).json({
    message: "follow request accepted",
    request,
  });
}

//rejectFollowRequestController
async function rejectFollowRequestController(req, res) {
  const requestId = req.params.requestId;
  const userId = req.user.id;
  const request = await followModel.findById(requestId);

  if (!requestId) {
    return res.status(404).json({
      message: "Follow request not found.",
    });
  }

  if (request.followee.toString() !== userId) {
    return res.status(403).json({
      message: "Unautherized..",
    });
  }

  if (request.status === "accepted") {
    return res.status(400).json({
      message: "Request already accepted",
    });
  }

  request.status = "rejected";
  await request.save();

  return res.status(200).json({
    message: "Request rejected..",
  });
}

//getFollowersController
async function getFollowersController(req, res) {
  const userId = req.user.id;
  const followers = await followModel
    .find({
      followee: userId,
      status: "accepted",
    })
    .populate("follower", "username profileImg bio");

  return res.status(200).json({
    totalFollowers: followers.length,
    followers,
  });
}

//getFollowingController
async function getFollowingController(req, res) {
  const userId = req.user.id;
  const following = await followModel
    .find({
      follower: userId,
      status: "accepted",
    })
    .populate("followee", "username profileImg bio");

  return res.status(200).json({
    totalFollowing: following.length,
    following,
  });
}

module.exports = {
  followUserController,
  unfollowUserController,
  getPendingRequestsController,
  acceptFollowRequestController,
  rejectFollowRequestController,
  getFollowersController,
  getFollowingController,
};
