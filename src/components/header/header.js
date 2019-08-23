import React, { useState } from 'react';

import { HeaderWrap, NavBox } from './headerStyles';
import Logo from '../../assets/logo.svg';

function Header(props) {
  const [status, setStatus] = useState(false);

  function toggleNav() {
    setStatus(!status);
  }

  return (
    <HeaderWrap>
      <img src={Logo} />
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="navButton" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {status ? (
        <NavBox>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </NavBox> ) : null }
    </HeaderWrap>
  ) 
}

export default Header;