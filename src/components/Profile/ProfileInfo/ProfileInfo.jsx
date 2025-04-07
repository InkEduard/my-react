import React from "react";

const ProfileInfo = (props) => {
  const phoneNumber = props.user.phone;
  const editPhoneNumber = phoneNumber.replace(/[()\s.-]/g, '');

  return (
    <div className="profile">
      <img className="profile__image" src={props.user.avatar} alt="Avatar" />
      <div className="profile__content">
        <h1 className="profile__fullname">{props.user.name}</h1>
        <div className="profile__info">
          <div className="profile__row profile__row--date">
            <span className="profile__subtitle">Birthday:</span>
            <span className="profile__birthday">{props.user.birthday}</span>
          </div>
          <div className="profile__row profile__row--location">
            <span className="profile__subtitle">City:</span>
            <span className="profile__city">{props.user.city}</span>
          </div>
          <div className="profile__row profile__row--phone">
            <span className="profile__subtitle">Phone:</span>
            <a href={`tel:${editPhoneNumber}`} className="profile__phone" title="{props.user.phone}">{props.user.phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
