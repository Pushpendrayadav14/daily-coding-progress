import React from "react";

const ProfileSection = ({ profileImage, username, location }) => {
  return (
    <div className="profile-section">
      <img
        className="profile-section__image"
        src={profileImage}
        alt={`${username} profile`}
      />

      <div className="profile-section__info">
        <h4>{username}</h4>
        <span>{location}</span>
      </div>
    </div>
  );
};

export default ProfileSection;
