import React, { useState } from "react";

const PostActions = ({ likes, comments, caption }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-actions">
      {/* Action Buttons */}
      <div className="post-actions__buttons">
        <div className="post-actions__left">
          {/* Like */}
          <button
            className={`action-button ${isLiked ? "action-button--liked" : ""}`}
            onClick={handleLike}
            aria-label="Like"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          </button>

          {/* Comment */}
          <button className="action-button" aria-label="Comment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path>
            </svg>
          </button>

          {/* Share */}
          <button className="action-button" aria-label="Share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"></path>
            </svg>
          </button>
        </div>

        {/* Bookmark */}
        <button className="action-button" aria-label="Save">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
          </svg>
        </button>
      </div>

      {/* Likes */}
      <div className="post-actions__likes">
        {isLiked ? likes + 1 : likes} likes
      </div>

      {/* Caption */}
      <div className="post-actions__caption">
        <strong>pal_yadav</strong> {caption}
      </div>

      {/* Comments */}
      <button className="post-actions__comments">
        View all {comments} comments
      </button>

      {/* Add Comment */}
      <div className="post-actions__add-comment">Add a comment...</div>
    </div>
  );
};

export default PostActions;
