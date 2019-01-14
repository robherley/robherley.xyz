import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({ title, body, tech, color, link }) => (
  <article
    className="card project"
    style={{ borderBottom: `4px solid ${color}` }}
  >
    {link ? (
      <a target="_blank" href={link} rel="noopener noreferrer" className="src">
        <FontAwesomeIcon icon={['fa', 'code']} />
      </a>
    ) : (
      <div className="src-bad">
        <FontAwesomeIcon icon={['fa', 'lock']} />
      </div>
    )}

    <header>
      <h2 className="title">{title}</h2>
    </header>
    <section className="body">
      <p>{body()}</p>
    </section>
    <section className="tech">
      <h3>Notable Technologies Used:</h3>
      <p>{tech.join(', ')}</p>
    </section>
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.func.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired
};

export default Project;
