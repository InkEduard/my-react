import React from "react";
import NewMessageContainer from './NewMessage/NewMessageContainer'
import './Dialogs.css';

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs-items">
        {props.dialogsElements}
      </div>
      <div className="dialogs-messages">
        {props.messagesElements}
        <NewMessageContainer store={props.store} />
      </div>
    </div>
  );
};

export default Dialogs;
