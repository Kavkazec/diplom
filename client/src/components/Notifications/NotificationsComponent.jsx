/* eslint-disable react/no-unused-prop-types*/

import React, { PropTypes } from 'react';
import Message from '../Message';

const style = {
  position: 'fixed',
  top: '10px',
  right: '10px',
  zIndex: '9999',
};

const NotificationsComponent = ({ data, onDelete }) => {
  const messages = data.map(message => (
    <Message
      key={message.id}
      type={message.type}
      title={message.title}
      message={message.message}
      onDelete={() => onDelete(message.id)}
    />
  ));

  return (
    <span style={style} className="col-md-3">
      {messages}
    </span>
  );
};

NotificationsComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
  })),
  onDelete: PropTypes.func.isRequired,
};

export default NotificationsComponent;
