import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <a href="#p" title="Profile">
            Profile
          </a>
        </li>
        <li>
          <a href="#m" title="Message">
            Message
          </a>
        </li>
        <li>
          <a href="#n" title="News">
            News
          </a>
        </li>
        <li>
          <a href="#i" title="Images">
            Images
          </a>
        </li>
      </ul>
      <a href="#s" className={classes.settings} title="Settings">
        Settings
      </a>
    </nav>
  );
};

export default Navbar;