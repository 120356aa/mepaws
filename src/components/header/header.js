import React, { useState } from 'react';

import { HeaderWrap, NavBox } from './headerStyles';
import Logo from '../../assets/logo.svg';

const useForceUpdate = () => useState()[1];

function Header(props) {
  const [status, setStatus] = useState(false);
  const forceUpdate = useForceUpdate();

  function toggleNav() {
    setStatus(!status);
    forceUpdate();
  }

  return (
    <HeaderWrap>
      <img src={Logo} />
      <div className="navButton" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <NavBox props={props}>

      </NavBox>
    </HeaderWrap>
  ) 
}

export default Header;