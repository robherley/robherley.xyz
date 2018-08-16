import React from 'react';

const Card = ({ children, style, className }) => (
  <div style={style} className={`card ${className}`}>
    {children}
  </div>
);

export default Card;
