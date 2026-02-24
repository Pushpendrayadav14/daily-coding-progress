import React, { useState } from "react";

function ProfileCard(props) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      {/* Profile Image */}
      <img
        src={props.user.image}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
      />

      {/* Username */}
      <h2 className="text-xl font-bold mt-4">{props.user.username}</h2>

      {/* Bio */}
      <p className="text-gray-500 text-sm mt-2">
        {props.user.bio}
      </p>

      {/* Followers / Following */}
      <div className="flex justify-between mt-6 text-sm text-gray-600 px-4">
        <div>
          <p className="font-semibold">{props.user.followers}</p>
          <p>👥 Followers</p>
        </div>

        <div>
          <p className="font-semibold">{props.user.following}</p>
          <p>➡️ Following</p>
        </div>
      </div>

      {/* Follow Button */}
      <button
        onClick={() => setIsFollowing(!isFollowing)}
        className={`w-full mt-6 py-2 rounded-lg font-semibold transition duration-300
            ${
              isFollowing ? "bg-green-500 text-white" : "bg-blue-500 text-white"
            }`}
      >
        {isFollowing ? "Followed ✅" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
