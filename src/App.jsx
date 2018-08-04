import React from 'react';
import { hot } from 'react-hot-loader';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Intro from './components/Intro';
import './components/common/Icons';

const App = () => (
  <>
    <Nav />
    <Hero />
    <div className="grid">
      <Intro />
      <div style={{ gridColumn: 'span 8', gridRow: 'span 8' }} />
    </div>
  </>
);

export default hot(module)(App);
