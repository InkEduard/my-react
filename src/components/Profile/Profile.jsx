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
        updateNewPostText={props.updateNewPostText}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost} />
    </div>
  );
};

export default Profile;
