import React, { PropTypes } from 'react';
import MainComponent from './MainComponent';
import Layout from '../../components/Layout';

const style = {
  minHeight: '800px',
};

class MainContainer extends React.Component {
  render() {
    return (<Layout title="Главная">
          <div style={style}>
            <MainComponent />
          </div>
    </Layout>
    );
  }
}

export default MainContainer;
