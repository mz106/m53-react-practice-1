import { useState } from "react";
import "./App.css";

import { getAllPosts } from "./utils/fetch";

function App() {
  const [posts, setPosts] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();

    const allThePosts = await getAllPosts();

    setPosts(allThePosts);
  };

  return (
    <div className="App">
      <div className="btn-section">
        <button onClick={(e) => handleClick(e)}>Get Posts</button>
      </div>
      <div className="posts-section">
        {posts.map((post, key) => (
          <p>{post.title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
