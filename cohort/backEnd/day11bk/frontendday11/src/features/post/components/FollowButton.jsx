import React, { useState } from "react";

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button
      className={`follow-button ${
        isFollowing ? "follow-button--following" : ""
      }`}
      onClick={handleFollow}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
