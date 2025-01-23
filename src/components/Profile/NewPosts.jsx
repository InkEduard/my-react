import React from 'react';
import './NewPosts.css';

const NewPosts = () => {
  return (
    <div className="new-posts">
      <h2>My posts</h2>
      <div className="new-posts__content">
        <textarea
          className="new-posts__field"
          placeholder="Add news"
          cols="30"
          rows="10"></textarea>
        <button className="new-posts__button">Send</button>
      </div>
    </div>
  );
};

export default NewPosts;