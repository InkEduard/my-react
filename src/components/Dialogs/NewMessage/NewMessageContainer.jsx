import React from "react";
import NewMessage from './NewMessage';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/dialogs-reducer'

const NewMessageContainer = (props) => {
  let state = props.store.getState();

  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (<NewMessage onMessageChange={onMessageChange} addMessage={onAddMessage} newMessageText={state.dialogsPage.newMessageText} />);
};

export default NewMessageContainer;
