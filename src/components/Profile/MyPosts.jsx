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
        <Post name="Artur O." message="+ rep" avatar={PostAvatarSecond} likesCount="5" />
        <Post name="Maxim L." message="Hello!" avatar={PostAvatar} likesCount="7" />
      </div>
    </div>
  );
};

export default MyPosts;
