import React from "react";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className="dialogs-items__dialog">
      <NavLink className="dialogs-items__link" to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;