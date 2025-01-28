import React from "react";
import NewPosts from "./NewPosts";
import Post from "./Post";
import './MyPosts.css';
import PostAvatar from './../../post-avatar.png';
import PostAvatarSecond from './../../post-avatar-2.png';

const MyPosts = () => {
  let postsData = [
    { id: '1', name:'Max L.', avatar: `${PostAvatar}`, message: 'React.js is an amazing library for building user interfaces, combining simplicity with power. Its component-based approach and declarative coding style make app development intuitive and convenient. Hooks and optimized rendering make state management effortless while boosting performance. It\'s a tool that brings freedom and joy to creating modern web applications!', likesCount: 7 },
    { id: '2', name:'Artur O.', avatar: `${PostAvatarSecond}`, message: '+ Rep', likesCount: 5 }
  ];

  let postsElements = postsData.map( (element, i) => {
    return <Post
      key={i}
      name={element.name}
      message={element.message}
      avatar={element.avatar}
      likesCount={element.likesCount} />
  });

  return (
    <div className="posts">
      <NewPosts />
      <div className="posts__inner">
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
