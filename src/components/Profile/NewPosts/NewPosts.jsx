import React from 'react';
import './NewPosts.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'

const NewPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className="new-posts">
      <h2>My posts</h2>
      <div className="new-posts__content">
        <textarea
          className="new-posts__field"
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
          placeholder="Add news"
          cols="30"
          rows="10"></textarea>
        <button onClick={ addPost } className="app-button new-posts__button">Send</button>
      </div>
    </div>
  );
};

export default NewPosts;