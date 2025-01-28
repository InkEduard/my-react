import React from "react";
import TopBanner from './TopBanner';
import ProfileInfo from './ProfileInfo';
import MyPosts from './MyPosts';
import './Profile.css';

const Profile = () => {
  return (
    <div>
      <TopBanner />
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
