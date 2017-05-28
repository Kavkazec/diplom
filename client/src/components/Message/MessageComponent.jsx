import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

const MessageComponent = ({ title = 'Message', message, type, onDelete }) => (
  <Alert bsStyle={type} onDismiss={onDelete}>
    <h4>{title}</h4>
    <p>{message}</p>
  </Alert>
);

MessageComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
  ]).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MessageComponent;
