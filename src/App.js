import React from 'react';
import './App.css';
import Logo from './logo.svg';
import Banner from './react-banner.jpg';
import Avatar from './avatar.png';
import PostAvatar from './post-avatar.png';
import PostAvatarSecond from './post-avatar-2.png';
// import Header from './header'
// import Main from './main'

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="header-inner">
        <img  className="logo" src={Logo} alt="logo" />
        </div>
      </header>
      <main className="main">
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#p" title="Profile">Profile</a>
            </li>
            <li>
              <a href="#m" title="Message">Message</a>
            </li>
            <li>
              <a href="#n" title="News">News</a>
            </li>
            <li>
              <a href="#i" title="Images">Images</a>
            </li>
          </ul>
          <a href="#s" className="nav-settings" title="Settings">Settings</a>
        </nav>
        <div className="content">
          <div className="banner__wrapper">
            <img  className="banner" src={Banner} alt="Banner" />
          </div>
          <div className="profile">
            <img className="profile__image" src={Avatar} alt="Avatar" />
            <div className="profile__content">
              <h1 className="profile__fullname">
                Eduard P.
              </h1>
              <div className="profile__info">
                <div className="profile__row profile__row--date">
                  <span className="profile__subtitle">Date of Birth:</span>
                  <span className="profile__birthday">2 March</span>
                </div>
                <div className="profile__row profile__row--location">
                  <span className="profile__subtitle">City:</span>
                  <span className="profile__city">London</span>
                </div>
              </div>
            </div>
          </div>
          <div className="posts">
            <div className="new-posts">
              <h2>My posts</h2>
              <div className="new-posts__content">
                <textarea className="new-posts__field" cols="30" rows="10"></textarea>
                <button className="new-posts__button">Send</button>
              </div>
            </div>
            <div className="posts__inner">
              <div className="posts__item">
                <img className="posts__avatar" src={PostAvatarSecond} alt="Avatar" />
                <div className="posts__post">
                  <h3 className="posts__fullname">
                    Artur O.
                  </h3>
                  <p>
                    + rep
                  </p>
                </div>
              </div>
              <div className="posts__item">
                <img className="posts__avatar" src={PostAvatar} alt="Avatar" />
                <div className="posts__post">
                  <h3 className="posts__fullname">
                    Lednov M.
                  </h3>
                  <p>
                    Hello!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <img  className="logo" src={Logo} alt="logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
