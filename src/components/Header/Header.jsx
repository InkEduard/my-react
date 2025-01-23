import React from 'react';
import './Header.css';
import Logo from './../../logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <img  className="logo" src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;