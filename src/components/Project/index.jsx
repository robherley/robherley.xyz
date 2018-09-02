import React from 'react';
import Card from '../common/Card';

export default ({ title, body }) => (
  <Card className="project-card">
    <div className="title">{title}</div>
    <div className="body">{body()}</div>
  </Card>
);
