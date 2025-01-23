import React from "react";
// import PostAvatar from './../../post-avatar.png';
import PostAvatarSecond from './../../post-avatar-2.png';

const Post = () => {
  return (
    // <div className="posts__inner">
    //   <div className="posts__item">
    //     <img className="posts__avatar" src={PostAvatarSecond} alt="Avatar" />
    //     <div className="posts__post">
    //       <h3 className="posts__fullname">Artur O.</h3>
    //       <p>+ rep</p>
    //     </div>
    //   </div>
    //   <div className="posts__item">
    //     <img className="posts__avatar" src={PostAvatar} alt="Avatar" />
    //     <div className="posts__post">
    //       <h3 className="posts__fullname">Lednov M.</h3>
    //       <p>Hello!</p>
    //     </div>
    //   </div>
    // </div>

  <div className="post">
    <img className="post__avatar" src={PostAvatarSecond} alt="Avatar" />
    <div className="post__info">
      <h3 className="post__fullname">Artur O.</h3>
      <p>+ rep</p>
    </div>
  </div>
  );
};

export default Post;
