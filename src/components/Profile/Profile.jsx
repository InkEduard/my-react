import React from "react";
import TopBanner from './TopBanner/TopBanner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';

const Profile = (props) => {
  return (
    <div>
      <TopBanner />
      <ProfileInfo user={props.user} />
      <MyPosts
        postsData={props.profilePage.postsData}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText} />
    </div>
  );
};

export default Profile;
