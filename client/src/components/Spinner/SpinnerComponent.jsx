import React from 'react';

const SpinnerComponent = () => (
  <div>
    <div className="farfetch-spinner">
      <i className="fa fa-refresh fa-spin fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default SpinnerComponent;
