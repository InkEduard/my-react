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

  return (
    <div className="dialogs">
      <div className="dialogs-items">
        <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogItem id="3" name="Vlad P."/>
        <DialogItem id="4" name="Stanislav C."/>
        <DialogItem id="5" name="Stasyan V."/>
        <DialogItem id="6" name="Olegsii B."/>
      </div>
      <div className="dialogs-messages">
        {/* <Routes>
          <Route path="dialogs/1" element={<DialogMessage message="I'm going to open a beer now!" />} />
          <Route path="dialogs/2" element={<DialogMessage message="What are you doing?" />} />
          <Route path="dialogs/3" element={<DialogMessage message="Yeeeep!" />} />
          <Route path="dialogs/4" element={<DialogMessage message="Goodbye<" />} />
          <Route path="dialogs/5" element={<DialogMessage message="Really?" />} />
          <Route path="dialogs/6" element={<DialogMessage message="Hey" />} />
        </Routes> */}
        {/* <div className="dialogs-messages__item active">I'm going to open a beer now!</div>
        <div className="dialogs-messages__item">What are you doing?</div>
        <div className="dialogs-messages__item">Yeeeep!</div>
        <div className="dialogs-messages__item">Goodbye</div>
        <div className="dialogs-messages__item">Really?</div>
        <div className="dialogs-messages__item">Hey</div> */}
        <DialogMessage message={messageData[0].message} />
        <DialogMessage message={messageData[1].message} />
        <DialogMessage message="Yeeeep!" />
        <DialogMessage message="Goodbye<" />
        <DialogMessage message="Really?" />
        <DialogMessage message="Hey" />
      </div>
    </div>
  );
};

export default Dialogs;
