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

  const isFollowExist = await userModel.findOne({
    id: followeeId,
  });
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

  const followRecord = await followModel.create({
    follower: followerId,
    followee: followeeId,
  });
  res.status(201).json({
    message: `you are know following ${followeeId}`,
    follow: followRecord,
  });
}

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

module.exports = {
  followUserController,
  unfollowUserController,
};
