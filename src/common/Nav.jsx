import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => (
  <div className="nav">
    <div className="name">
      <span className="first">rob</span>
      <span className="last">herley</span>
    </div>
    <div className="icons">
      <FontAwesomeIcon icon={['fab', 'github-alt']} />
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
      <FontAwesomeIcon icon={['far', 'envelope']} />
    </div>
  </div>
);

export default Nav;
