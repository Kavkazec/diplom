import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const style = {
    margin: 12,
};

const Header = ({ title }) => {
  if (!title) return null;
  return (
    <Col xs={12} className="page-header">
        <div className="pull-left">
            <h1
                className="farfetch-main-layout"
                style={{
                    fontSize: '30px',
                    textAlign: 'left',
                    textTransform: 'none',
                    height: '40px',
                    margin: 12
                }}
            >
                {title}
            </h1>
        </div>
      <div className="farfetch-main-layout pull-right diplom-raise-button">
          <MuiThemeProvider>
          <RaisedButton
              label="Войти"
              labelPosition="before"
              icon={<ActionAndroid />}
              style={style}
          />
          </MuiThemeProvider>
      </div>
    </Col>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
