import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';

const Header = ({ title }) => {
  if (!title) return null;
  return (
    <Col xs={12}>
      <h1
        className="page-header farfetch-main-layout"
        style={{ fontSize: '30px', textAlign: 'left', textTransform: 'none' }}
      >
        {title}
      </h1>
    </Col>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
