import React from "react";
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let dialogsElements = state.dialogsPage.dialogsData.map( (dialog, i) => {
    return <DialogItem key={i} id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
  });

  let messagesElements = state.dialogsPage.messageData.map( (element, i) => {
    return <DialogMessage key={i} message={element.message} name={element.name} avatar={element.avatar} />
  });

  return (<Dialogs store={props.store} messagesElements={messagesElements} dialogsElements={dialogsElements} />);
};

export default DialogsContainer;
