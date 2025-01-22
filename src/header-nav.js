import React from 'react';

const HeaderNav = () => {
  return (
    <ul style={{display: 'flex', gap: '50px', marginTop: '0', justifyContent: 'center', paddingTop: '30px'}}>
      <li><a href="#s" style={{color: 'White'}}>Home</a></li>
      <li><a href="#s" style={{color: 'White'}}>About Us</a></li>
      <li><a href="#s" style={{color: 'White'}}>Contact Us</a></li>
    </ul>
  );
}

export default HeaderNav;