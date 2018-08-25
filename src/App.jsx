import React from 'react';
import { hot } from 'react-hot-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Card from './components/common/Card';
import './components/common/Icons';
import { Row, Col } from './components/common/Flex';

const App = () => (
  <>
    <Nav />
    <Hero />
    <div className="grid">
      <Intro />
      <div className="section-head">
        <Row justify="center">
          <Col align="center">
            <FontAwesomeIcon
              size="5x"
              icon="code"
              transform="shrink-8"
              mask={['fas', 'circle']}
            />
            <span className="title">Programming Projects</span>
            <div className="body">
              Here are some of the academic, work and personal projects I&#39;ve
              worked on in my short career as a student/developer. If you are
              interested in any of the source code, you can find most of it on
              my <a href="https://github.com/robherley">GitHub</a>.
              <div className="sep" />
            </div>
          </Col>
        </Row>
      </div>
      <Card className="project-card">
        <div className="title">Overcast</div>
        <div className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          incidunt iure voluptates laborum ipsam provident aut animi nulla
          inventore, atque adipisci qui error illo vel, neque et sed numquam
          molestias?
        </div>
      </Card>
      <Card className="project-card">
        <div className="title">Kommodore</div>
        <div className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          incidunt iure voluptates laborum ipsam provident aut animi nulla
          inventore, atque adipisci qui error illo vel, neque et sed numquam
          molestias?
        </div>
      </Card>
      <Card className="project-card">
        <div className="title">Y.A.M.S.</div>
        <div className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          incidunt iure voluptates laborum ipsam provident aut animi nulla
          inventore, atque adipisci qui error illo vel, neque et sed numquam
          molestias?
        </div>
      </Card>
      <Card className="project-card">
        <div className="title">
          Stratus <span className="badge">Academic</span>
        </div>
        <div className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          incidunt iure voluptates laborum ipsam provident aut animi nulla
          inventore, atque adipisci qui error illo vel, neque et sed numquam
          molestias?
        </div>
      </Card>
      <Card className="project-card">
        <div className="title">Scramble</div>
        <div className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          incidunt iure voluptates laborum ipsam provident aut animi nulla
          inventore, atque adipisci qui error illo vel, neque et sed numquam
          molestias?
        </div>
      </Card>
    </div>
  </>
);

export default hot(module)(App);
