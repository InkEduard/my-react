import React from "react";
import NewPosts from "../NewPosts/NewPosts";
import Post from "./Post/Post";
import './MyPosts.css';

const MyPosts = (props) => {
  let postsElements = props.postsData.map( (element, i) => {
    return <Post
      key={i}
      name={element.name}
      message={element.message}
      avatar={element.avatar}
      likesCount={element.likesCount} />
  });

  return (
    <div className="posts">
      <NewPosts dispatch={props.dispatch} newPostText={props.newPostText} />
      <div className="posts__inner">
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
