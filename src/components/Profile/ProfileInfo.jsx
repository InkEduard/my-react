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
            <span className="profile__subtitle">Birthday:</span>
            <span className="profile__birthday">2 March 1994</span>
          </div>
          <div className="profile__row profile__row--location">
            <span className="profile__subtitle">City:</span>
            <span className="profile__city">London</span>
          </div>
          <div className="profile__row profile__row--phone">
            <span className="profile__subtitle">Phone:</span>
            <a href="tel:+15555555555" className="profile__phone" title="+1 (555) 555-5555">+1 (555) 555-5555</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
