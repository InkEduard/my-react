import React from "react";
import NewPostsContainer from "../NewPosts/NewPostsContainer";
import Post from "./Post/Post";
import './MyPosts.css';

const MyPosts = (props) => {
  let state = props.store.getState();

  let postsElements = state.profilePage.postsData.map( (element, i) => {
    return <Post
      key={i}
      name={element.name}
      message={element.message}
      avatar={element.avatar}
      likesCount={element.likesCount} />
  });

  return (
    <div className="posts">
      <NewPostsContainer store={props.store} />
      <div className="posts__inner">
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
