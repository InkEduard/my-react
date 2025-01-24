import React from 'react';
import './Footer.css';
import Logo from './../../logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container app-container">
        <div className="footer__inner">
          <img  className="logo" src={Logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;