import React from "react";

import ProfileInfo from './ProfileInfo';

const ProfileInfoContainer = (props) => {
  let state = props.store.getState();

  return (<ProfileInfo user={state.user} />);
};

export default ProfileInfoContainer;
