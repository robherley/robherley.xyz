import React from 'react';
import { hot } from 'react-hot-loader';

import Hero from './common/Hero';
import Nav from './common/Nav';
import './common/Icons';

const App = () => (
  <>
    <Nav />
    <Hero />
    <div style={{ height: '5000px' }} />
  </>
);

export default hot(module)(App);
