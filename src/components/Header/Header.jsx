import React from 'react';
import './Header.css';
import Logo from './../../logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container app-container">
        <div className="header__inner">
          <img className="header__logo" src={Logo} alt="logo" />
          <div className="header__heading">React</div>
        </div>
      </div>
    </header>
  );
};

export default Header;