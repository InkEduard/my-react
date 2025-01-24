import React from 'react';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
// import Dialogs from './Dialogs/Dialogs';
import './Main.css';

const Main = () => {
  return (
    <main className="app-main">
      <div className="app-container">
        <div className="app-inner">
          <Navbar />
          <div className="app-content">
            <Profile />
            {/* <Dialogs /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;