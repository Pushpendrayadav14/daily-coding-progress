import React from "react";
import ProfileSection from "../components/ProfileSection";
import FollowButton from "../components/FollowButton";
import Post from "../components/Post";
import PostActions from "../components/PostActions";
import "../style/Feed.scss";

const Feed = () => {
  return (
    <div className="post-card">
      {/* Top Section */}
      <div className="post-card__header">
        <ProfileSection
          profileImage="https://i.pravatar.cc/150?img=12"
          username="pal_yadav"
          location="Indore, India"
        />

        <FollowButton />
      </div>

      {/* Post Image */}
      <Post
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="User post"
      />

      {/* Like / Comment / Share */}
      <PostActions
        likes={128}
        comments={24}
        caption="Beautiful day ✨ Exploring something new!"
      />
    </div>
  );
};

export default Feed;
