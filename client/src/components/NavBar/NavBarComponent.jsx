import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import {
  routes,
  root,
  adwordsTools
} from '../../routes';

const NavBarComponent = ({
  changeChartState,
    changeToolsState,
    isChartOpen,
    isToolsOpen
}) => {
  const navRoutes = routes.map(route => (
    <li
      style={{ padding: '0px 0px 0px 10px' }}
      key={route.url}
    >
      <Link
        to={route.url}
        onlyActiveOnIndex
        className="nav-bar-links farfetch-link"
        activeClassName="active-farfetch-link"
      >
        <i className="fa fa-fw fa-bar-chart-o" />
        <strong className="farfetch-subnav-main-font">{route.text}</strong>
      </Link>
    </li>));

  const navAdwordsTools = adwordsTools.map(route => (
    <li
      style={{ padding: '0px 0px 0px 10px' }}
      key={route.url}
    >
      <Link
        to={route.url}
        onlyActiveOnIndex
        className="nav-bar-links farfetch-link"
        activeClassName="active-farfetch-link"
      >
        <i className={route.icon} />
        <strong className="farfetch-subnav-main-font">{route.text}</strong>
      </Link>
    </li>));

  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={root}>
            <img
              src="/assets/farfetch_logo_1.png"
              className="logo-style"
              role="presentation"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className="disable-overflow">
        <Nav className="disable-overflow side-nav">
          <li>
            <Link
              to={root}
              onlyActiveOnIndex
              className="nav-bar-links farfetch-link"
              activeClassName="active-farfetch-link"
            >
              <i className="fa fa-fw fa-dashboard" />
              <strong className="farfetch-main-font">Dashboard</strong>
            </Link>
          </li>
          <NavItem onClick={changeChartState}>
            <i className="fa fa-fw fa-bar-chart-o" style={{ color: '#e9c6a7' }} />
            <span className="farfetch-main-font">
              <strong>Charts</strong>
            </span>
          </NavItem>
          {isChartOpen ? navRoutes : null}

          <NavItem onClick={changeToolsState}>
            <i className="fa fa-fw fa-briefcase" style={{ color: '#e9c6a7' }} />
            <span className="farfetch-main-font">
              <strong>AdWords Tools</strong>
            </span>
          </NavItem>
            {isToolsOpen ? navAdwordsTools : null}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBarComponent.propTypes = {
  changeChartState: PropTypes.func.isRequired,
  changeToolsState: PropTypes.func.isRequired,
  isChartOpen: PropTypes.bool.isRequired,
  isToolsOpen: PropTypes.bool.isRequired
};

export default NavBarComponent;
