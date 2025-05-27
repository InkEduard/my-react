import React from "react";
import TopBanner from './TopBanner/TopBanner';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';

const Profile = (props) => {
  return (
    <div>
      <TopBanner />
      <ProfileInfoContainer store={props.store} />
      <MyPosts store={props.store} />
    </div>
  );
};

export default Profile;
