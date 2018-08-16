import React from 'react';
import { hot } from 'react-hot-loader';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Intro from './components/Intro';
import './components/common/Icons';
import Card from './components/common/Card';

const App = () => (
  <>
    <Nav />
    <Hero />
    <div className="grid">
      <Intro />
      <div style={{ gridRow: 'span 1', gridColumn: '3/10' }} />
      <Card style={{ gridRow: 'span 1', gridColumn: '3/10' }}>foo?</Card>
      <Card style={{ gridRow: 'span 1', gridColumn: '3/10' }}>foo?</Card>
      <Card style={{ gridRow: 'span 1', gridColumn: '3/10' }}>foo?</Card>
    </div>
  </>
);

export default hot(module)(App);
