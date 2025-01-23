import React from "react";
import NewPosts from "./NewPosts";
import Post from "./Post";
import './MyPosts.css';

const MyPosts = () => {
  return (
    <div className="posts">
      <NewPosts />
      <div className="posts__inner">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
