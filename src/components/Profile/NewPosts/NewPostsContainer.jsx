import React from 'react';
import NewPosts from "./NewPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'

const NewPostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (<NewPosts updateNewPostText={onPostChange} addPost={onAddPost} newPostText={state.profilePage.newPostText} />);
};

export default NewPostsContainer;