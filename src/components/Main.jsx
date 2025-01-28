import React from 'react';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import './Main.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Main = () => {
  return (
    <BrowserRouter>
      <main className="app-main">
        <div className="app-container">
          <div className="app-inner">
            <Navbar />
            <div className="app-content">
              <Route component={Profile} />
              <Route component={Dialogs} />
            </div>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default Main;