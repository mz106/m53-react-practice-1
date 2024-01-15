import React from "react";

import { getAllPosts } from "../utils/fetch";

const ButtonComponent = ({ setPosts }) => {
  const handleClick = async (e) => {
    e.preventDefault();

    const allThePosts = await getAllPosts();

    setPosts(allThePosts);
  };

  return <button onClick={(e) => handleClick(e)}>Get Posts</button>;
};

export default ButtonComponent;
