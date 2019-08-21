import React from 'react';

import { HeaderWrap } from './headerStyles';
import Logo from '../../../assets/logo.svg';

function Header() {
  return (
    <HeaderWrap>
      <img src={Logo} />
    </HeaderWrap>
  ) 
}

export default Header;