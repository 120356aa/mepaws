import React from 'react';

import Banner from '../../components/banner/banner';
import Content from '../../components/content/content';

import { IndexWrap } from './homeStyles';

function Index() {
  return (
    <IndexWrap>
      <Banner/>
      <Content/>
    </IndexWrap>
  )
}

export default Index;