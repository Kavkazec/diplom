/* eslint-disable react/forbid-prop-types */

import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar';
import Header from '../Header';
import Notifications from '../Notifications';

const Layout = ({ children, title }) => (
  <Grid fluid>
    <Row>
      <Col sm={3} lg={2} md={3}>
        <nav className="navbar navbar-default navbar-fixed-side navbar-inverse">
          <NavBar />
        </nav>
      </Col>
      <Col sm={9} lg={10} md={9} id="page">
        <Row className="show-grid">
          <Notifications />
        </Row>
        <Row className="show-grid">
          <Header title={title} />
        </Row>
        <Row>
          <div>
            {children}
          </div>
        </Row>
      </Col>
    </Row>
  </Grid>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
