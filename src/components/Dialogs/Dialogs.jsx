import React from "react";
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import NewMessage from './NewMessage/NewMessage'
import './Dialogs.css';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map( (dialog, i) => {
    return <DialogItem key={i} id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
  });

  let messagesElements = props.state.messageData.map( (element, i) => {
    return <DialogMessage key={i} message={element.message} name={element.name} avatar={element.avatar} />
  });

  return (
    <div className="dialogs">
      <div className="dialogs-items">
        {dialogsElements}
      </div>
      <div className="dialogs-messages">
        {messagesElements}
        <NewMessage addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.state.newMessageText} />
      </div>
    </div>
  );
};

export default Dialogs;
