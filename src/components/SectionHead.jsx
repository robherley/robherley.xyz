import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from './common/Flex';

export default ({ icon, title, body }) => (
  <div className="section-head">
    <Row justify="center">
      <Col align="center">
        <FontAwesomeIcon
          size="5x"
          icon={icon}
          transform="shrink-8"
          mask={['fas', 'circle']}
        />
        <span className="title">{title}</span>
        <div className="body">
          {body()}
          <div className="sep" />
        </div>
      </Col>
    </Row>
  </div>
);
