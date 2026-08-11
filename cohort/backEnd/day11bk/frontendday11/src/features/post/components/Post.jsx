import React from "react";

const Post = ({ image, alt }) => {
  return (
    <div className="post">
      <img
        className="post__image"
        src={image}
        alt={alt}
      />
    </div>
  );
};

export default Post;