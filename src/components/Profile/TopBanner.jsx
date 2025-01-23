import React from 'react';
import classes from './TopBanner.module.css';
import Banner from './../../react-banner.jpg';

const TopBanner = () => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.banner} src={Banner} alt="Banner" />
    </div>
  );
};

export default TopBanner;