import React from 'react';
import './Footer.css';
import Logo from './../../logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <img  className="logo" src={Logo} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;