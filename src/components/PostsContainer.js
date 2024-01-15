import React from "react";

import Card from "./Card";

const PostsContainer = ({ posts }) => {
  return (
    <div className="posts-section">
      {posts.map((post, key) => (
        <Card post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
