import React from "react";
import Avatar from './..//../avatar.png';

const ProfileInfo = () => {
  return (
    <div className="profile">
      <img className="profile__image" src={Avatar} alt="Avatar" />
      <div className="profile__content">
        <h1 className="profile__fullname">Eduard P.</h1>
        <div className="profile__info">
          <div className="profile__row profile__row--date">
            <span className="profile__subtitle">Date of Birth:</span>
            <span className="profile__birthday">2 March</span>
          </div>
          <div className="profile__row profile__row--location">
            <span className="profile__subtitle">City:</span>
            <span className="profile__city">London</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
