import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from './common/Link';

const Nav = () => (
  <div className="nav">
    <div className="name">
      <span className="first">rob</span>
      <span className="last">herley</span>
    </div>
    <div className="icons">
      <Link to="https://github.com/robherley">
        <FontAwesomeIcon icon={['fab', 'github-alt']} />
      </Link>
      <Link to="https://www.linkedin.com/in/robherley/">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </Link>
      <Link to="mailto:robherley13@gmail.com">
        <FontAwesomeIcon icon={['far', 'envelope']} />
      </Link>
    </div>
  </div>
);

export default Nav;
