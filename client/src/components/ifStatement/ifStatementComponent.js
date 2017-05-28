/* eslint-disable */

import React, { PropTypes } from 'react';

const ifStatementComponent = ({ condition, children }) => {
  if (condition) {
    return children;
  }
  return false;
};

ifStatementComponent.propTypes = {
  condition: PropTypes.bool,
  children: PropTypes.object,
};

export default ifStatementComponent;
