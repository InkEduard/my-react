import React from "react";
import './NewMessage.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../redux/state'

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <textarea
          className="new-message__field"
          ref={newMessageElement}
          onChange={onMessageChange}
          value={props.newMessageText}
          placeholder="Add news"
          cols="30"
          rows="10"></textarea>
        <button onClick={ addMessage } className="app-button new-message__button">Send</button>
    </div>
  );
};

export default NewMessage;
