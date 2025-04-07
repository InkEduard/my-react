import React from "react";
import './NewMessage.css';

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
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
