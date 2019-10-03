import React, { useState } from 'react';

import { HeaderWrap, NavBox } from './headerStyles';
import Logo from '../../assets/logo.svg';
import Home from '../../assets/home.svg';
import About from '../../assets/about.svg';
import Services from '../../assets/services.svg';
import Contact from '../../assets/contact.svg';

function Header() {
  const [status, setStatus] = useState(false);
  function toggleNav() { setStatus(!status) }

  return (
    <HeaderWrap>
      <img src={Logo} />
      <div className="nav">
        <div className="linkContainer">
          <img src={Home} className="icon" />
          <a href="#">Home</a>
        </div>
        {/* <div className="linkContainer">
          <img src={About} className="icon" />
          <a href="#">About</a>
        </div> */}
        <div className="linkContainer">
          <img src={Services} className="icon" />
          <a href="#">Services</a>
        </div>
        <div className="linkContainer">
          <img src={Contact} className="icon" />
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="navButton" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {status ? (
        <NavBox>
          <div className="linkContainer">
            <img src={Home} className="icon" />
            <a href="#">Home</a>
          </div>
          {/* <div className="linkContainer">
            <img src={About} className="icon" />
            <a href="#">About</a>
          </div> */}
          <div className="linkContainer">
            <img src={Services} className="icon" />
            <a href="#">Services</a>
          </div>
          <div className="linkContainer">
            <img src={Contact} className="icon" />
            <a href="#">Contact</a>
          </div>
        </NavBox> ) : null }
    </HeaderWrap>
  ) 
}

export default Header;