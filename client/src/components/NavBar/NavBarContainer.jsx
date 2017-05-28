import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NavBarComponent from './NavBarComponent';
import { setFadeState, setToolsState } from './redux/NavBar.actions';
import { routes, adwordsTools } from '../../routes';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.changeChartState = this.changeChartState.bind(this);
    this.changeToolsState = this.changeToolsState.bind(this);

    const { dispatch } = props;
    dispatch(setFadeState({ isChartOpen: false }));
    dispatch(setToolsState({ isToolsOpen: false }));
  }

  changeToolsState() {
    const currentState = this.props.isToolsOpen;
    const { dispatch } = this.props;
    dispatch(setToolsState({
      isToolsOpen: !currentState,
      isChartOpen: false
    }));
  }

  changeChartState() {
    const currentState = this.props.isChartOpen;
    const { dispatch } = this.props;
    dispatch(setFadeState({
      isChartOpen: !currentState,
      isToolsOpen: false
    }));
  }

  render() {
    const { isChartOpen, isToolsOpen } = this.props;
    const { pathname } = this.props;
    const shouldOpenChart = routes.some(({ url }) => url === pathname);
    const shouldOpenTools = adwordsTools.some(({ url }) => url === pathname);

    return (
      <NavBarComponent
        changeChartState={this.changeChartState}
        changeToolsState={this.changeToolsState}
        changeAdcopiesState={this.changeAdcopiesState}
        changeAccState={this.changeAccState}
        isChartOpen={isChartOpen || shouldOpenChart}
        isToolsOpen={isToolsOpen || shouldOpenTools}
      />
    );
  }
}

NavBarContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isChartOpen: PropTypes.bool,
  isToolsOpen: PropTypes.bool,
  pathname: PropTypes.string,
};

const mapStateToProps = state => ({
  isChartOpen: state.navBar.isChartOpen,
  isToolsOpen: state.navBar.isToolsOpen,
  pathname: state.routing.locationBeforeTransitions.pathname,
});

export default connect(mapStateToProps)(NavBarContainer);
