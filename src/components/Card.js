import React from "react";

const Card = ({ post }) => {
  return (
    <div>
      {post.id}: {post.title}
    </div>
  );
};

export default Card;
