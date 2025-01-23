import React from "react";

const Post = (props) => {
  return (
  <div className="post">
    <img className="post__avatar" src={props.avatar} alt="Avatar" />
    <div className="post__info">
      <h3 className="post__fullname">{props.name}</h3>
      <p>{props.message}</p>
    </div>
  </div>
  );
};

export default Post;
