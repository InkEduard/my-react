import React from 'react';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Navbar />
      <div className="content">
        <Profile />
      </div>
    </main>
  );
};

export default Main;