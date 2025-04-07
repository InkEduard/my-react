import React from "react";

const DialogMessage = (props) => {
  return (
    <div className="dialogs-messages__item" data-name={props.name}>
      <img className="dialogs-messages__avatar" src={props.avatar} alt="Avatar" />
      <p className="dialogs-messages__message">{props.message}</p>
    </div>
    
  );
};

export default DialogMessage;
