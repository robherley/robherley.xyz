import React from 'react';
import { hot } from 'react-hot-loader';

import Hero from './components/Hero';
import Nav from './components/Nav';
import './components/common/Icons';

const App = () => (
  <>
    <Nav />
    <Hero />
    <div style={{ height: '5000px' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, cumque
      quidem modi possimus animi quis dignissimos asperiores nesciunt. Nemo
      numquam quos inventore nulla blanditiis incidunt aspernatur delectus. A,
      consequatur quia!
    </div>
  </>
);

export default hot(module)(App);
