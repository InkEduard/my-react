import React from "react";
import NewPosts from "./NewPosts";
import Post from "./Post";
import './MyPosts.css';
import PostAvatar from './../../post-avatar.png';
import PostAvatarSecond from './../../post-avatar-2.png';

const MyPosts = () => {
  return (
    <div className="posts">
      <NewPosts />
      <div className="posts__inner">
        <Post
          name="Artur O."
          message="+ Rep"
          avatar={PostAvatarSecond}
          likesCount="5" />
        <Post
          name="Maxim L."
          message="React.js is an amazing library for building user interfaces, combining simplicity with power. Its component-based approach and declarative coding style make app development intuitive and convenient. Hooks and optimized rendering make state management effortless while boosting performance. It's a tool that brings freedom and joy to creating modern web applications!"
          avatar={PostAvatar}
          likesCount="7" />
      </div>
    </div>
  );
};

export default MyPosts;
