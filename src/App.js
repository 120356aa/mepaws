import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header';
import Home from './containers/home/home';
import Services from './containers/services/services';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
