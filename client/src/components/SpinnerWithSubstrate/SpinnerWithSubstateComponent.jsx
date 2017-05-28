import React, { PropTypes } from 'react';
import Spinner from '../Spinner';

const SpinnerWithSubstateComponent = ({ enable }) => {
  if (enable) {
    return (
      <div className="spinner-substate">
        <Spinner />
      </div>
    );
  }
  return null;
};

SpinnerWithSubstateComponent.propTypes = {
  enable: PropTypes.bool,
};

export default SpinnerWithSubstateComponent;
