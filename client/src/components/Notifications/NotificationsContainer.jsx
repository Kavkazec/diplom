/* eslint-disable react/no-unused-prop-types*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NotificationsComponent from './NotificationsComponent';
import { removeNotification } from './redux/Notifications.actions';

class NotificationsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    const { dispatch } = this.props;
    dispatch(removeNotification({ id }));
  }

  render() {
    const { notifications } = this.props;

    return (
      <NotificationsComponent onDelete={this.onDelete} data={notifications} />
    );
  }
}

NotificationsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
  })),
};

export default connect(
  state => ({ notifications: state.notifications })
)(NotificationsContainer);
