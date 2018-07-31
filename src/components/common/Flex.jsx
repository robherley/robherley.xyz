import React from 'react';
import PropTypes from 'prop-types';

const PROP_TYPES = {
  className: PropTypes.string,
  children: PropTypes.node,
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline'
  ])
};

const DEFAULT_PROPS = {
  className: '',
  children: null,
  align: 'flex-start',
  justify: 'flex-start'
};

export const Row = ({ justify, align, children, className }) => (
  <div className={`row justify-${justify} align-${align} ${className}`}>
    {children}
  </div>
);
Row.defaultProps = DEFAULT_PROPS;
Row.propTypes = PROP_TYPES;

export const Col = ({ justify, align, children, className }) => (
  <div className={`col justify-${justify} align-${align} ${className}`}>
    {children}
  </div>
);
Col.defaultProps = DEFAULT_PROPS;
Col.propTypes = PROP_TYPES;
