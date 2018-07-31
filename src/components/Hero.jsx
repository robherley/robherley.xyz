import React from 'react';
import Card from './common/Card';
import Link from './common/Link';

const Hero = () => (
  <div className="hero">
    <div className="words">
      <div className="t-h1">Howdy,</div>
      <div className="bio">
        My name is Rob Herley. I{"'"}m a Software Developer from Long Island,
        NY. Currently, I{"'"}m a Teaching Assistant at{' '}
        <Link to="https://www.stevens.edu/">
          Stevens Institute of Technology
        </Link>{' '}
        and a part-time Software Engineer at{' '}
        <Link to="https://www.ibm.com/">IBM</Link>. Primarily, I focus on
        full-stack, cloud and dev-ops.
      </div>
    </div>
    <Card>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ducimus
      quis. Dolorum voluptate, temporibus sequi laborum similique maxime fugiat
      aperiam ipsum adipisci minus molestiae natus. Sed ipsam id omnis sequi.
    </Card>
  </div>
);

export default Hero;
