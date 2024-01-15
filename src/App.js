import { useState } from "react";
import "./App.css";

import { getAllPosts } from "./utils/fetch";
import PostsContainer from "./components/PostsContainer";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <div className="btn-section">
        <ButtonComponent setPosts={setPosts} />
      </div>
      <PostsContainer posts={posts} />
    </div>
  );
}

export default App;
