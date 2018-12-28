import React from 'react';
import Link from './common/Link';
import Terminal from './Terminal';

const Summary = () => (
  <>
    <header className="intro">
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
    </header>
    <Terminal />
  </>
);

export default Summary;
