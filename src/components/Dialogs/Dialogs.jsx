import React from "react";
import DialogItem from './DialogItem';
import DialogMessage from './DialogMessage';
import './Dialogs.css';

const Dialogs = () => {
  let dialogsData = [
    { id: '1', name: 'Artur O.'},
    { id: '2', name: 'Max L.'},
    { id: '3', name: 'Vlad P.'},
    { id: '4', name: 'Stanislav C.'},
    { id: '5', name: 'Stasyan V.'},
    { id: '6', name: 'Olegsii B.'}
  ];

  let messageData = [
    { id: '1', message: 'I\'m going to open a beer now!'},
    { id: '2', message: 'What are you doing?'},
    { id: '3', message: 'Yeeeep!'},
    { id: '4', message: 'Goodbye'},
    { id: '5', message: 'Really?'},
    { id: '6', message: 'Hey'}
  ];

  let dialogsElements = dialogsData.map( (dialog, i) => {
    return <DialogItem key={i} id={dialog.id} name={dialog.name} />
  });

  let messagesElements = messageData.map( (element, i) => {
    return <DialogMessage key={i} message={element.message} />
  });

  return (
    <div className="dialogs">
      <div className="dialogs-items">

        {dialogsElements}
      </div>
      <div className="dialogs-messages">

        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
