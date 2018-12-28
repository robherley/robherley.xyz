import React from 'react';
import PropTypes from 'prop-types';
import Card from '../common/Card';

import Node from './icons/Node';

const Project = ({ title, body, tech }) => (
  <section className="project-wrapper">
    <Card className="project-card">
      <div className="title">{title}</div>
      <div className="body">{body()}</div>
    </Card>
    <div className="project-tech">
      {tech.map(t => (
        <span className="bubble" key={t}>
          <div className="img-container">
            <Node />
          </div>
        </span>
      ))}
    </div>
  </section>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.func.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Project;
