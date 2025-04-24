import React from "react";
import "./App.css";
// import './components/Main.css';
import Header from "./components/Header/Header";
// import Main from './components/Main';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Images from "./components/Images/Images";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";

// import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-main">
        <div className="app-container">
          <div className="app-inner">
            <Navbar />
            <div className="app-content">
              <Routes>
                <Route
                  path="profile"
                  element={
                    <Profile
                      profilePage={props.state.profilePage}
                      dispatch={props.dispatch}
                      user={props.state.user} />
                  }
                />
                <Route
                  path="dialogs"
                  element={
                    <Dialogs
                      dispatch={props.dispatch}
                      state={props.state.dialogsPage}
                      user={props.state.user} />
                  }
                />
                <Route path="news" element={<News />} />
                <Route path="images" element={<Images />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
